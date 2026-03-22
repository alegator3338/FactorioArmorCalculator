const CELL_SIZE = 48;

class Tile {
    constructor(id, w, h, texture, powerOutput, energyConsumption, energyCapacity) {
        this.id = id;
        this.w = w;
        this.h = h;
        this.texture = texture;
        this.powerOutput = powerOutput;
        this.energyConsumption = energyConsumption;
        this.energyCapacity = energyCapacity;
    }
}

const tabTiles = [
    [
        new Tile("t0_m0", 2, 2, "./assets/img/common/energy-shield-equipment.png", 0, 240, 0),
        new Tile("t0_m1", 2, 2, "./assets/img/common/energy-shield-mk2-equipment.png", 0, 360, 0),
        new Tile("t0_m2", 2, 2, "./assets/img/common/personal-laser-defense-equipment.png", 0, 75, 0),
        new Tile("t0_m3", 2, 2, "./assets/img/common/discharge-defense-equipment.png", 0, 800, 0),
        new Tile("t0_m4", 4, 4, "./assets/img/common/fission-reactor-equipment.png", 750, 0, 0),
        new Tile("t0_m5", 4, 4, "./assets/img/common/fusion-reactor-equipment.png", 2500, 0, 0),
        new Tile("t0_m6", 1, 2, "./assets/img/common/battery-equipment.png", 0, 0, 20),
        new Tile("t0_m7", 1, 2, "./assets/img/common/battery-mk2-equipment.png", 0, 0, 100),
        new Tile("t0_m8", 1, 2, "./assets/img/common/battery-mk3-equipment.png", 0, 0, 250),
        new Tile("t0_m9", 2, 2, "./assets/img/common/personal-roboport-equipment.png", 0, 2000, 0),
        new Tile("t0_m10", 2, 2, "./assets/img/common/personal-roboport-mk2-equipment.png", 0, 4000, 0),
        new Tile("t0_m11", 1, 1, "./assets/img/common/solar-panel-equipment.png", 30, 0, 0),
        new Tile("t0_m12", 2, 4, "./assets/img/common/exoskeleton-equipment.png", 0, 200, 0),
        new Tile("t0_m13", 2, 2, "./assets/img/common/night-vision-equipment.png", 0, 10, 0),
        new Tile("t0_m14", 3, 1, "./assets/img/common/toolbelt-equipment.png", 0, 0, 0),
        new Tile("t0_m15", 1, 1, "./assets/img/common/belt-immunity-equipment.png", 0, 100, 0)
    ],
    [
        new Tile("t1_m0", 2, 2, "./assets/img/uncommon/energy-shield-equipment.png", 0, 312, 0),
        new Tile("t1_m1", 2, 2, "./assets/img/uncommon/energy-shield-mk2-equipment.png", 0, 468, 0),
        new Tile("t1_m2", 2, 2, "./assets/img/uncommon/personal-laser-defense-equipment.png", 0, 75, 0),
        new Tile("t1_m3", 2, 2, "./assets/img/uncommon/discharge-defense-equipment.png", 0, 800, 0),
        new Tile("t1_m4", 4, 4, "./assets/img/uncommon/fission-reactor-equipment.png", 975, 0, 0),
        new Tile("t1_m5", 4, 4, "./assets/img/uncommon/fusion-reactor-equipment.png", 3250, 0, 0),
        new Tile("t1_m6", 1, 2, "./assets/img/uncommon/battery-equipment.png", 0, 0, 26),
        new Tile("t1_m7", 1, 2, "./assets/img/uncommon/battery-mk2-equipment.png", 0, 0, 130),
        new Tile("t1_m8", 1, 2, "./assets/img/uncommon/battery-mk3-equipment.png", 0, 0, 325),
        new Tile("t1_m9", 2, 2, "./assets/img/uncommon/personal-roboport-equipment.png", 0, 3900, 0),
        new Tile("t1_m10", 2, 2, "./assets/img/uncommon/personal-roboport-mk2-equipment.png", 0, 6500, 0),
        new Tile("t1_m11", 1, 1, "./assets/img/uncommon/solar-panel-equipment.png", 39, 0, 0),
        new Tile("t1_m12", 2, 4, "./assets/img/uncommon/exoskeleton-equipment.png", 0, 200, 0),
        new Tile("t1_m13", 2, 2, "./assets/img/uncommon/night-vision-equipment.png", 0, 10, 0),
        new Tile("t1_m14", 3, 1, "./assets/img/uncommon/toolbelt-equipment.png", 0, 0, 0),
        new Tile("t1_m15", 1, 1, "./assets/img/uncommon/belt-immunity-equipment.png", 0, 76.92, 0)
    ],
    [
        new Tile("t2_m0", 2, 2, "./assets/img/rare/energy-shield-equipment.png", 0, 384, 0),
        new Tile("t2_m1", 2, 2, "./assets/img/rare/energy-shield-mk2-equipment.png", 0, 576, 0),
        new Tile("t2_m2", 2, 2, "./assets/img/rare/personal-laser-defense-equipment.png", 0, 75, 0),
        new Tile("t2_m3", 2, 2, "./assets/img/rare/discharge-defense-equipment.png", 0, 800, 0),
        new Tile("t2_m4", 4, 4, "./assets/img/rare/fission-reactor-equipment.png", 1200, 0, 0),
        new Tile("t2_m5", 4, 4, "./assets/img/rare/fusion-reactor-equipment.png", 4000, 0, 0),
        new Tile("t2_m6", 1, 2, "./assets/img/rare/battery-equipment.png", 0, 0, 32),
        new Tile("t2_m7", 1, 2, "./assets/img/rare/battery-mk2-equipment.png", 0, 0, 160),
        new Tile("t2_m8", 1, 2, "./assets/img/rare/battery-mk3-equipment.png", 0, 0, 400),
        new Tile("t2_m9", 2, 2, "./assets/img/rare/personal-roboport-equipment.png", 0, 5600, 0),
        new Tile("t2_m10", 2, 2, "./assets/img/rare/personal-roboport-mk2-equipment.png", 0, 9600, 0),
        new Tile("t2_m11", 1, 1, "./assets/img/rare/solar-panel-equipment.png", 48, 0, 0),
        new Tile("t2_m12", 2, 4, "./assets/img/rare/exoskeleton-equipment.png", 0, 200, 0),
        new Tile("t2_m13", 2, 2, "./assets/img/rare/night-vision-equipment.png", 0, 10, 0),
        new Tile("t2_m14", 3, 1, "./assets/img/rare/toolbelt-equipment.png", 0, 0, 0),
        new Tile("t2_m15", 1, 1, "./assets/img/rare/belt-immunity-equipment.png", 0, 62.50, 0)
    ],
    [
        new Tile("t3_m0", 2, 2, "./assets/img/epic/energy-shield-equipment.png", 0, 456, 0),
        new Tile("t3_m1", 2, 2, "./assets/img/epic/energy-shield-mk2-equipment.png", 0, 648, 0),
        new Tile("t3_m2", 2, 2, "./assets/img/epic/personal-laser-defense-equipment.png", 0, 75, 0),
        new Tile("t3_m3", 2, 2, "./assets/img/epic/discharge-defense-equipment.png", 0, 800, 0),
        new Tile("t3_m4", 4, 4, "./assets/img/epic/fission-reactor-equipment.png", 1425, 0, 0),
        new Tile("t3_m5", 4, 4, "./assets/img/epic/fusion-reactor-equipment.png", 4750, 0, 0),
        new Tile("t3_m6", 1, 2, "./assets/img/epic/battery-equipment.png", 0, 0, 38),
        new Tile("t3_m7", 1, 2, "./assets/img/epic/battery-mk2-equipment.png", 0, 0, 190),
        new Tile("t3_m8", 1, 2, "./assets/img/epic/battery-mk3-equipment.png", 0, 0, 475),
        new Tile("t3_m9", 2, 2, "./assets/img/epic/personal-roboport-equipment.png", 0, 6650, 0),
        new Tile("t3_m10", 2, 2, "./assets/img/epic/personal-roboport-mk2-equipment.png", 0, 13300, 0),
        new Tile("t3_m11", 1, 1, "./assets/img/epic/solar-panel-equipment.png", 57, 0, 0),
        new Tile("t3_m12", 2, 4, "./assets/img/epic/exoskeleton-equipment.png", 0, 200, 0),
        new Tile("t3_m13", 2, 2, "./assets/img/epic/night-vision-equipment.png", 0, 10, 0),
        new Tile("t3_m14", 3, 1, "./assets/img/epic/toolbelt-equipment.png", 0, 0, 0),
        new Tile("t3_m15", 1, 1, "./assets/img/epic/belt-immunity-equipment.png", 0, 52.63, 0)
    ],
    [
        new Tile("t4_m0", 2, 2, "./assets/img/legendary/energy-shield-equipment.png", 0, 600, 0),
        new Tile("t4_m1", 2, 2, "./assets/img/legendary/energy-shield-mk2-equipment.png", 0, 900, 0),
        new Tile("t4_m2", 2, 2, "./assets/img/legendary/personal-laser-defense-equipment.png", 0, 75, 0),
        new Tile("t4_m3", 2, 2, "./assets/img/legendary/discharge-defense-equipment.png", 0, 800, 0),
        new Tile("t4_m4", 4, 4, "./assets/img/legendary/fission-reactor-equipment.png", 1875, 0, 0),
        new Tile("t4_m5", 4, 4, "./assets/img/legendary/fusion-reactor-equipment.png", 6250, 0, 0),
        new Tile("t4_m6", 1, 2, "./assets/img/legendary/battery-equipment.png", 0, 0, 50),
        new Tile("t4_m7", 1, 2, "./assets/img/legendary/battery-mk2-equipment.png", 0, 0, 250),
        new Tile("t4_m8", 1, 2, "./assets/img/legendary/battery-mk3-equipment.png", 0, 0, 625),
        new Tile("t4_m9", 2, 2, "./assets/img/legendary/personal-roboport-equipment.png", 0, 8750, 0),
        new Tile("t4_m10", 2, 2, "./assets/img/legendary/personal-roboport-mk2-equipment.png", 0, 22500, 0),
        new Tile("t4_m11", 1, 1, "./assets/img/legendary/solar-panel-equipment.png", 75, 0, 0),
        new Tile("t4_m12", 2, 4, "./assets/img/legendary/exoskeleton-equipment.png", 0, 200, 0),
        new Tile("t4_m13", 2, 2, "./assets/img/legendary/night-vision-equipment.png", 0, 10, 0),
        new Tile("t4_m14", 3, 1, "./assets/img/legendary/toolbelt-equipment.png", 0, 0, 0),
        new Tile("t4_m15", 1, 1, "./assets/img/legendary/belt-immunity-equipment.png", 0, 40, 0)
    ]
];

let gridData = [];
let instances = {};
let instanceCounter = 0;
let currentDrag = { dropped: false, id: null, validDrop: false };
let currentTab = 0;

// Переменные для предпросмотра
let previewElement = null;
let currentPreviewTile = null;
let isDragging = false;
let currentMoveInstanceId = null;
let currentMoveOffsetX = 0;
let currentMoveOffsetY = 0;

const tabPanes = [
    document.getElementById("palette-tab-0"),
    document.getElementById("palette-tab-1"),
    document.getElementById("palette-tab-2"),
    document.getElementById("palette-tab-3"),
    document.getElementById("palette-tab-4")
];
const grid = document.getElementById("grid");

function switchTab(index) {
    document.querySelectorAll('.tab').forEach((tab, i) => {
        if (i === index) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    tabPanes.forEach((pane, i) => {
        if (i === index) {
            pane.classList.add('active');
        } else {
            pane.classList.remove('active');
        }
    });

    currentTab = index;
    buildPaletteForTab(index);
}

function buildPaletteForTab(tabIndex) {
    const pane = tabPanes[tabIndex];
    pane.innerHTML = "";

    const modulesContainer = document.createElement("div");
    modulesContainer.className = "modules-grid";

    tabTiles[tabIndex].forEach(tile => {
        const el = document.createElement("div");
        el.className = "tile";
        el.style.width = tile.w * CELL_SIZE + "px";
        el.style.height = tile.h * CELL_SIZE + "px";
        el.style.backgroundImage = `url(${tile.texture})`;
        el.style.backgroundSize = "cover";
        el.style.backgroundPosition = "center";
        el.style.backgroundRepeat = "no-repeat";
        el.draggable = true;

        el.addEventListener("dragstart", (e) => {
            isDragging = true;
            e.dataTransfer.setData("type", "new");
            e.dataTransfer.setData("tile", JSON.stringify(tile));
            e.dataTransfer.setData("tab", tabIndex);
            
            const dragIcon = document.createElement("div");
            dragIcon.style.width = "0";
            dragIcon.style.height = "0";
            document.body.appendChild(dragIcon);
            e.dataTransfer.setDragImage(dragIcon, 0, 0);
            setTimeout(() => document.body.removeChild(dragIcon), 0);
            
            currentPreviewTile = tile;
            currentMoveInstanceId = null;
            currentMoveOffsetX = 0;
            currentMoveOffsetY = 0;
        });

        el.addEventListener("dragend", () => {
            isDragging = false;
            hidePreview();
            currentPreviewTile = null;
            currentMoveInstanceId = null;
        });

        modulesContainer.appendChild(el);
    });

    pane.appendChild(modulesContainer);
}

function showPreview(tile, x, y, canPlaceHere) {
    if (!previewElement) {
        previewElement = document.createElement("div");
        previewElement.className = "tile preview";
        previewElement.style.position = "absolute";
        previewElement.style.zIndex = "1000";
        previewElement.style.pointerEvents = "none";
        previewElement.style.opacity = "0.6";
        grid.appendChild(previewElement);
    }
    
    previewElement.style.width = tile.w * CELL_SIZE + "px";
    previewElement.style.height = tile.h * CELL_SIZE + "px";
    previewElement.style.backgroundImage = `url(${tile.texture})`;
    previewElement.style.backgroundSize = "cover";
    previewElement.style.backgroundPosition = "center";
    previewElement.style.backgroundRepeat = "no-repeat";
    previewElement.style.left = x * CELL_SIZE + "px";
    previewElement.style.top = y * CELL_SIZE + "px";
    previewElement.style.display = "block";
    
    if (canPlaceHere) {
        previewElement.style.border = "2px solid #4caf50";
        previewElement.style.opacity = "0.6";
    } else {
        previewElement.style.border = "2px solid #f44336";
        previewElement.style.opacity = "0.4";
    }
}

function hidePreview() {
    if (previewElement) {
        previewElement.style.display = "none";
    }
}

function formatPower(value) {
    if (value >= 1000) {
        return `${(value / 1000).toFixed(2)} MW`;
    }
    return `${value} kW`;
}

function formatCapacity(value) {
    if (value >= 1000) {
        return `${(value / 1000).toFixed(2)} GJ`;
    }
    return `${value} MJ`;
}

function updateStats() {
    let totalPowerOutput = 0;
    let totalEnergyConsumption = 0;
    let totalEnergyCapacity = 0;
    
    for (const id in instances) {
        const instance = instances[id];
        totalPowerOutput += instance.tile.powerOutput || 0;
        totalEnergyConsumption += instance.tile.energyConsumption || 0;
        totalEnergyCapacity += instance.tile.energyCapacity || 0;
    }
    
    const powerOutputElement = document.getElementById("power-output");
    const energyConsumptionElement = document.getElementById("energy-consumption");
    const energyCapacityElement = document.getElementById("energy-capacity");
    
    if (powerOutputElement) {
        powerOutputElement.innerHTML = `<b>${formatPower(totalPowerOutput)}</b>`;
    }
    if (energyConsumptionElement) {
        energyConsumptionElement.innerHTML = `<b>${formatPower(totalEnergyConsumption)}</b>`;
    }
    if (energyCapacityElement) {
        energyCapacityElement.innerHTML = `<b>${formatCapacity(totalEnergyCapacity)}</b>`;
    }
}

function buildGrid() {
    let w = +document.getElementById("gridWidth").value;
    let h = +document.getElementById("gridHeight").value;
    
    w = Math.min(Math.max(w, 6), 15);
    h = Math.min(Math.max(h, 8), 17);
    
    document.getElementById("gridWidth").value = w;
    document.getElementById("gridHeight").value = h;

    if (previewElement) {
        previewElement.remove();
        previewElement = null;
    }

    grid.style.gridTemplateColumns = `repeat(${w}, ${CELL_SIZE}px)`;
    grid.style.gridTemplateRows = `repeat(${h}, ${CELL_SIZE}px)`;
    grid.style.position = "relative";

    grid.addEventListener("dragover", e => e.preventDefault());
    grid.addEventListener("drop", () => {
        currentDrag.dropped = true;
    });
    
    grid.addEventListener("dragover", (e) => {
        e.preventDefault();
        if (isDragging && currentPreviewTile) {
            const rect = grid.getBoundingClientRect();
            
            const gridX = Math.floor((e.clientX - rect.left) / CELL_SIZE);
            const gridY = Math.floor((e.clientY - rect.top) / CELL_SIZE);
            
            const tile = currentPreviewTile;
            const wGrid = gridData[0] ? gridData[0].length : w;
            const hGrid = gridData.length ? gridData.length : h;
            
            if (gridX >= 0 && gridY >= 0 && gridX + tile.w <= wGrid && gridY + tile.h <= hGrid) {
                let canPlaceHere;
                if (currentMoveInstanceId !== null) {
                    canPlaceHere = canPlace(tile, gridX, gridY, currentMoveInstanceId);
                } else {
                    canPlaceHere = canPlace(tile, gridX, gridY);
                }
                showPreview(tile, gridX, gridY, canPlaceHere);
            } else {
                hidePreview();
            }
        }
    });

    grid.innerHTML = "";
    gridData = Array.from({ length: h }, () => Array(w).fill(null));
    instances = {};
    instanceCounter = 0;
    
    updateStats();

    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            const cell = document.createElement("div");
            cell.className = "cell";
            cell.style.width = CELL_SIZE + "px";
            cell.style.height = CELL_SIZE + "px";

            cell.addEventListener("dragover", e => e.preventDefault());

            cell.addEventListener("drop", e => {
                e.preventDefault();
                currentDrag.dropped = true;

                const type = e.dataTransfer.getData("type");

                if (type === "new") {
                    const tile = JSON.parse(e.dataTransfer.getData("tile"));
                    if (canPlace(tile, x, y)) {
                        currentDrag.validDrop = true;
                        createInstance(tile, x, y);
                    }
                } else if (type === "move") {
                    const id = e.dataTransfer.getData("instanceId");
                    if (moveInstance(id, x, y)) {
                        currentDrag.validDrop = true;
                    }
                }
                
                hidePreview();
            });

            grid.appendChild(cell);
        }
    }
}

function canPlace(tile, x, y, ignoreId = null) {
    const h = gridData.length;
    const w = gridData[0].length;

    if (x + tile.w > w || y + tile.h > h) return false;
    if (x < 0 || y < 0) return false;

    for (let dy = 0; dy < tile.h; dy++) {
        for (let dx = 0; dx < tile.w; dx++) {
            const cell = gridData[y + dy][x + dx];
            if (cell && cell !== ignoreId) return false;
        }
    }
    return true;
}

function occupy(tile, x, y, id) {
    for (let dy = 0; dy < tile.h; dy++) {
        for (let dx = 0; dx < tile.w; dx++) {
            gridData[y + dy][x + dx] = id;
        }
    }
}

function clearOccupy(tile, x, y) {
    for (let dy = 0; dy < tile.h; dy++) {
        for (let dx = 0; dx < tile.w; dx++) {
            gridData[y + dy][x + dx] = null;
        }
    }
}

function createInstance(tile, x, y) {
    const id = "i" + (++instanceCounter);

    const el = document.createElement("div");
    el.className = "tile placed";
    el.style.width = tile.w * CELL_SIZE + "px";
    el.style.height = tile.h * CELL_SIZE + "px";
    el.style.backgroundImage = `url(${tile.texture})`;
    el.style.backgroundSize = "cover";
    el.style.backgroundPosition = "center";
    el.style.backgroundRepeat = "no-repeat";
    el.draggable = true;

    const instance = { id, tile, x, y, el };
    instances[id] = instance;

    el.addEventListener("dragstart", e => {
        isDragging = true;
        currentDrag = { dropped: false, id, validDrop: false };
        currentPreviewTile = tile;
        currentMoveInstanceId = id;
        currentMoveOffsetX = 0;
        currentMoveOffsetY = 0;
        
        e.dataTransfer.setData("type", "move");
        e.dataTransfer.setData("instanceId", id);
        
        const dragIcon = document.createElement("div");
        dragIcon.style.width = "0";
        dragIcon.style.height = "0";
        document.body.appendChild(dragIcon);
        e.dataTransfer.setDragImage(dragIcon, 0, 0);
        setTimeout(() => document.body.removeChild(dragIcon), 0);
    });

    el.addEventListener("dragend", () => {
        isDragging = false;
        if (!currentDrag.dropped) {
            removeInstance(currentDrag.id);
        }
        hidePreview();
        currentPreviewTile = null;
        currentMoveInstanceId = null;
    });

    grid.appendChild(el);
    updatePosition(instance);
    occupy(tile, x, y, id);
    updateStats();
}

function moveInstance(id, newX, newY) {
    const inst = instances[id];
    if (!inst) return false;

    const oldX = inst.x;
    const oldY = inst.y;

    if (oldX === newX && oldY === newY) return true;

    if (!canPlace(inst.tile, newX, newY, id)) {
        return false;
    }

    clearOccupy(inst.tile, oldX, oldY);
    
    inst.x = newX;
    inst.y = newY;
    
    occupy(inst.tile, newX, newY, id);
    updatePosition(inst);
    updateStats();
    
    return true;
}

function removeInstance(id) {
    const inst = instances[id];
    if (!inst) return;

    clearOccupy(inst.tile, inst.x, inst.y);
    inst.el.remove();
    delete instances[id];
    updateStats();
}

function updatePosition(inst) {
    inst.el.style.left = inst.x * CELL_SIZE + "px";
    inst.el.style.top = inst.y * CELL_SIZE + "px";
}

// Инициализация
buildPaletteForTab(0);
buildGrid();