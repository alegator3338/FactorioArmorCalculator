function initTouchDrag() {
    const touchState = {
        dragging: false,
        startX: 0,
        startY: 0,
        grabCellX: 0,
        grabCellY: 0,
        threshold: 8
    };

    function getGridCell(clientX, clientY) {
        const rect = grid.getBoundingClientRect();
        return {
            gx: Math.floor((clientX - rect.left) / CELL_SIZE) - touchState.grabCellX,
            gy: Math.floor((clientY - rect.top) / CELL_SIZE) - touchState.grabCellY
        };
    }

    function isOverGrid(clientX, clientY) {
        const rect = grid.getBoundingClientRect();
        return clientX >= rect.left && clientX <= rect.right &&
            clientY >= rect.top && clientY <= rect.bottom;
    }

    function handleTouchMove(e, tile, ignoreId = null) {
        e.preventDefault();
        const t = e.touches[0];

        const dx = Math.abs(t.clientX - touchState.startX);
        const dy = Math.abs(t.clientY - touchState.startY);
        if (!touchState.dragging && (dx > touchState.threshold || dy > touchState.threshold)) {
            touchState.dragging = true;
        }
        if (!touchState.dragging) return;

        hideTooltip();

        if (isOverGrid(t.clientX, t.clientY)) {
            const { gx, gy } = getGridCell(t.clientX, t.clientY);
            const w = gridData[0]?.length ?? 0;
            const h = gridData.length;
            if (gx >= 0 && gy >= 0 && gx + tile.w <= w && gy + tile.h <= h) {
                showPreview(tile, gx, gy, canPlace(tile, gx, gy, ignoreId));
            } else {
                hidePreview();
            }
        } else {
            hidePreview();
        }
    }

    function addTouchToPaletteTile(el, tile) {
        el.addEventListener('touchstart', e => {
            const t = e.touches[0];
            touchState.startX = t.clientX;
            touchState.startY = t.clientY;
            touchState.dragging = false;
            const rect = el.getBoundingClientRect();
            touchState.grabCellX = Math.floor((t.clientX - rect.left) / CELL_SIZE);
            touchState.grabCellY = Math.floor((t.clientY - rect.top) / CELL_SIZE);
        }, { passive: true });

        el.addEventListener('touchmove', e => {
            handleTouchMove(e, tile);
        }, { passive: false });

        el.addEventListener('touchend', e => {
            hidePreview();
            if (!touchState.dragging) { touchState.dragging = false; return; }

            const t = e.changedTouches[0];
            if (isOverGrid(t.clientX, t.clientY)) {
                const { gx, gy } = getGridCell(t.clientX, t.clientY);
                if (canPlace(tile, gx, gy)) {
                    createInstance(tile, gx, gy);
                }
            }
            touchState.dragging = false;
        });

        el.addEventListener('touchcancel', () => {
            hidePreview();
            touchState.dragging = false;
        });
    }

    function addTouchToPlacedTile(el, tile, id) {
        el.addEventListener('touchstart', e => {
            const t = e.touches[0];
            touchState.startX = t.clientX;
            touchState.startY = t.clientY;
            touchState.dragging = false;
            const rect = el.getBoundingClientRect();
            touchState.grabCellX = Math.floor((t.clientX - rect.left) / CELL_SIZE);
            touchState.grabCellY = Math.floor((t.clientY - rect.top) / CELL_SIZE);
        }, { passive: true });

        el.addEventListener('touchmove', e => {
            handleTouchMove(e, tile, id);
        }, { passive: false });

        el.addEventListener('touchend', e => {
            hidePreview();
            if (!touchState.dragging) { touchState.dragging = false; return; }

            const t = e.changedTouches[0];
            if (isOverGrid(t.clientX, t.clientY)) {
                const { gx, gy } = getGridCell(t.clientX, t.clientY);
                moveInstance(id, gx, gy);
            } else {
                removeInstance(id);
            }
            touchState.dragging = false;
        });

        el.addEventListener('touchcancel', () => {
            hidePreview();
            touchState.dragging = false;
        });
    }

    return { addTouchToPaletteTile, addTouchToPlacedTile };
}

const touchDrag = initTouchDrag();