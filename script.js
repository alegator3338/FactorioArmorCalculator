const CELL_SIZE = 48;

class Tile {
    constructor({
        id, name, w, h, texture,
        powerOutput = 0,
        energyConsumption = 0,
        energyCapacity = 0,
        internalCapacity = 0,
        shieldHitpoints = 0,
        shieldRechargeRate = 0,
        energyPerHitpoint = 0,
        internalCapacityRechargeRate = 0,
        robotRechargeRate = 0,
        robotChargingSlots = 0
    }) {
        Object.assign(this, {
            id, name, w, h, texture,
            powerOutput, energyConsumption, energyCapacity,
            internalCapacity, shieldHitpoints, shieldRechargeRate,
            energyPerHitpoint, internalCapacityRechargeRate,
            robotRechargeRate, robotChargingSlots
        });
    }
}

const tabTiles = [
    [
        new Tile({ id: "t0_m0", name: "energyShield", w: 2, h: 2, texture: "./assets/img/common/energy-shield-equipment.webp", energyConsumption: 240, internalCapacity: 120, shieldHitpoints: 50, shieldRechargeRate: 12, energyPerHitpoint: 20 }),
        new Tile({ id: "t0_m1", name: "energyShieldMK2", w: 2, h: 2, texture: "./assets/img/common/energy-shield-mk2-equipment.webp", energyConsumption: 360, internalCapacity: 180, shieldHitpoints: 150, shieldRechargeRate: 12, energyPerHitpoint: 30 }),
        new Tile({ id: "t0_m2", name: "laserDefense", w: 2, h: 2, texture: "./assets/img/common/personal-laser-defense-equipment.webp", energyConsumption: 75, internalCapacity: 220 }),
        new Tile({ id: "t0_m3", name: "dischargeDefense", w: 2, h: 2, texture: "./assets/img/common/discharge-defense-equipment.webp", energyConsumption: 800, internalCapacity: 4040 }),
        new Tile({ id: "t0_m4", name: "fissionReactor", w: 4, h: 4, texture: "./assets/img/common/fission-reactor-equipment.webp", powerOutput: 750 }),
        new Tile({ id: "t0_m5", name: "fusionReactor", w: 4, h: 4, texture: "./assets/img/common/fusion-reactor-equipment.webp", powerOutput: 2500 }),
        new Tile({ id: "t0_m6", name: "battery", w: 1, h: 2, texture: "./assets/img/common/battery-equipment.webp", energyCapacity: 20 }),
        new Tile({ id: "t0_m7", name: "batteryMK2", w: 1, h: 2, texture: "./assets/img/common/battery-mk2-equipment.webp", energyCapacity: 100 }),
        new Tile({ id: "t0_m8", name: "batteryMK3", w: 1, h: 2, texture: "./assets/img/common/battery-mk3-equipment.webp", energyCapacity: 250 }),
        new Tile({ id: "t0_m9", name: "roboport", w: 2, h: 2, texture: "./assets/img/common/personal-roboport-equipment.webp", energyConsumption: 2000, internalCapacity: 35000, internalCapacityRechargeRate: 2.0, robotRechargeRate: 1.0, robotChargingSlots: 2 }),
        new Tile({ id: "t0_m10", name: "roboportMK2", w: 2, h: 2, texture: "./assets/img/common/personal-roboport-mk2-equipment.webp", energyConsumption: 4000, internalCapacity: 35000, internalCapacityRechargeRate: 4.0, robotRechargeRate: 1.0, robotChargingSlots: 4 }),
        new Tile({ id: "t0_m11", name: "solarPanel", w: 1, h: 1, texture: "./assets/img/common/solar-panel-equipment.webp", powerOutput: 30 }),
        new Tile({ id: "t0_m12", name: "exoskeleton", w: 2, h: 4, texture: "./assets/img/common/exoskeleton-equipment.webp", energyConsumption: 200 }),
        new Tile({ id: "t0_m13", name: "nightVision", w: 2, h: 2, texture: "./assets/img/common/night-vision-equipment.webp", energyConsumption: 10, internalCapacity: 120 }),
        new Tile({ id: "t0_m14", name: "toolbelt", w: 3, h: 1, texture: "./assets/img/common/toolbelt-equipment.webp" }),
        new Tile({ id: "t0_m15", name: "beltImmunity", w: 1, h: 1, texture: "./assets/img/common/belt-immunity-equipment.webp", energyConsumption: 100, internalCapacity: 100 }),
    ],
    [
        new Tile({ id: "t1_m0", name: "energyShield", w: 2, h: 2, texture: "./assets/img/uncommon/energy-shield-equipment.webp", energyConsumption: 312, internalCapacity: 120, shieldHitpoints: 65, shieldRechargeRate: 15.6, energyPerHitpoint: 20 }),
        new Tile({ id: "t1_m1", name: "energyShieldMK2", w: 2, h: 2, texture: "./assets/img/uncommon/energy-shield-mk2-equipment.webp", energyConsumption: 468, internalCapacity: 180, shieldHitpoints: 195, shieldRechargeRate: 15.6, energyPerHitpoint: 30 }),
        new Tile({ id: "t1_m2", name: "laserDefense", w: 2, h: 2, texture: "./assets/img/uncommon/personal-laser-defense-equipment.webp", energyConsumption: 75, internalCapacity: 220 }),
        new Tile({ id: "t1_m3", name: "dischargeDefense", w: 2, h: 2, texture: "./assets/img/uncommon/discharge-defense-equipment.webp", energyConsumption: 800, internalCapacity: 4040 }),
        new Tile({ id: "t1_m4", name: "fissionReactor", w: 4, h: 4, texture: "./assets/img/uncommon/fission-reactor-equipment.webp", powerOutput: 975 }),
        new Tile({ id: "t1_m5", name: "fusionReactor", w: 4, h: 4, texture: "./assets/img/uncommon/fusion-reactor-equipment.webp", powerOutput: 3250 }),
        new Tile({ id: "t1_m6", name: "battery", w: 1, h: 2, texture: "./assets/img/uncommon/battery-equipment.webp", energyCapacity: 26 }),
        new Tile({ id: "t1_m7", name: "batteryMK2", w: 1, h: 2, texture: "./assets/img/uncommon/battery-mk2-equipment.webp", energyCapacity: 130 }),
        new Tile({ id: "t1_m8", name: "batteryMK3", w: 1, h: 2, texture: "./assets/img/uncommon/battery-mk3-equipment.webp", energyCapacity: 325 }),
        new Tile({ id: "t1_m9", name: "roboport", w: 2, h: 2, texture: "./assets/img/uncommon/personal-roboport-equipment.webp", energyConsumption: 3900, internalCapacity: 35000, internalCapacityRechargeRate: 3.9, robotRechargeRate: 1.3, robotChargingSlots: 3 }),
        new Tile({ id: "t1_m10", name: "roboportMK2", w: 2, h: 2, texture: "./assets/img/uncommon/personal-roboport-mk2-equipment.webp", energyConsumption: 6500, internalCapacity: 35000, internalCapacityRechargeRate: 6.5, robotRechargeRate: 1.3, robotChargingSlots: 5 }),
        new Tile({ id: "t1_m11", name: "solarPanel", w: 1, h: 1, texture: "./assets/img/uncommon/solar-panel-equipment.webp", powerOutput: 39 }),
        new Tile({ id: "t1_m12", name: "exoskeleton", w: 2, h: 4, texture: "./assets/img/uncommon/exoskeleton-equipment.webp", energyConsumption: 200 }),
        new Tile({ id: "t1_m13", name: "nightVision", w: 2, h: 2, texture: "./assets/img/uncommon/night-vision-equipment.webp", energyConsumption: 10, internalCapacity: 120 }),
        new Tile({ id: "t1_m14", name: "toolbelt", w: 3, h: 1, texture: "./assets/img/uncommon/toolbelt-equipment.webp" }),
        new Tile({ id: "t1_m15", name: "beltImmunity", w: 1, h: 1, texture: "./assets/img/uncommon/belt-immunity-equipment.webp", energyConsumption: 76.92, internalCapacity: 100 }),
    ],
    [
        new Tile({ id: "t2_m0", name: "energyShield", w: 2, h: 2, texture: "./assets/img/rare/energy-shield-equipment.webp", energyConsumption: 384, internalCapacity: 120, shieldHitpoints: 80, shieldRechargeRate: 19.2, energyPerHitpoint: 20 }),
        new Tile({ id: "t2_m1", name: "energyShieldMK2", w: 2, h: 2, texture: "./assets/img/rare/energy-shield-mk2-equipment.webp", energyConsumption: 576, internalCapacity: 180, shieldHitpoints: 240, shieldRechargeRate: 19.2, energyPerHitpoint: 30 }),
        new Tile({ id: "t2_m2", name: "laserDefense", w: 2, h: 2, texture: "./assets/img/rare/personal-laser-defense-equipment.webp", energyConsumption: 75, internalCapacity: 220 }),
        new Tile({ id: "t2_m3", name: "dischargeDefense", w: 2, h: 2, texture: "./assets/img/rare/discharge-defense-equipment.webp", energyConsumption: 800, internalCapacity: 4040 }),
        new Tile({ id: "t2_m4", name: "fissionReactor", w: 4, h: 4, texture: "./assets/img/rare/fission-reactor-equipment.webp", powerOutput: 1200 }),
        new Tile({ id: "t2_m5", name: "fusionReactor", w: 4, h: 4, texture: "./assets/img/rare/fusion-reactor-equipment.webp", powerOutput: 4000 }),
        new Tile({ id: "t2_m6", name: "battery", w: 1, h: 2, texture: "./assets/img/rare/battery-equipment.webp", energyCapacity: 32 }),
        new Tile({ id: "t2_m7", name: "batteryMK2", w: 1, h: 2, texture: "./assets/img/rare/battery-mk2-equipment.webp", energyCapacity: 160 }),
        new Tile({ id: "t2_m8", name: "batteryMK3", w: 1, h: 2, texture: "./assets/img/rare/battery-mk3-equipment.webp", energyCapacity: 400 }),
        new Tile({ id: "t2_m9", name: "roboport", w: 2, h: 2, texture: "./assets/img/rare/personal-roboport-equipment.webp", energyConsumption: 5600, internalCapacity: 35000, internalCapacityRechargeRate: 5.6, robotRechargeRate: 1.6, robotChargingSlots: 4 }),
        new Tile({ id: "t2_m10", name: "roboportMK2", w: 2, h: 2, texture: "./assets/img/rare/personal-roboport-mk2-equipment.webp", energyConsumption: 9600, internalCapacity: 35000, internalCapacityRechargeRate: 9.6, robotRechargeRate: 1.6, robotChargingSlots: 6 }),
        new Tile({ id: "t2_m11", name: "solarPanel", w: 1, h: 1, texture: "./assets/img/rare/solar-panel-equipment.webp", powerOutput: 48 }),
        new Tile({ id: "t2_m12", name: "exoskeleton", w: 2, h: 4, texture: "./assets/img/rare/exoskeleton-equipment.webp", energyConsumption: 200 }),
        new Tile({ id: "t2_m13", name: "nightVision", w: 2, h: 2, texture: "./assets/img/rare/night-vision-equipment.webp", energyConsumption: 10, internalCapacity: 120 }),
        new Tile({ id: "t2_m14", name: "toolbelt", w: 3, h: 1, texture: "./assets/img/rare/toolbelt-equipment.webp" }),
        new Tile({ id: "t2_m15", name: "beltImmunity", w: 1, h: 1, texture: "./assets/img/rare/belt-immunity-equipment.webp", energyConsumption: 62.50, internalCapacity: 100 }),
    ],
    [
        new Tile({ id: "t3_m0", name: "energyShield", w: 2, h: 2, texture: "./assets/img/epic/energy-shield-equipment.webp", energyConsumption: 456, internalCapacity: 120, shieldHitpoints: 95, shieldRechargeRate: 22.8, energyPerHitpoint: 20 }),
        new Tile({ id: "t3_m1", name: "energyShieldMK2", w: 2, h: 2, texture: "./assets/img/epic/energy-shield-mk2-equipment.webp", energyConsumption: 648, internalCapacity: 180, shieldHitpoints: 285, shieldRechargeRate: 22.8, energyPerHitpoint: 30 }),
        new Tile({ id: "t3_m2", name: "laserDefense", w: 2, h: 2, texture: "./assets/img/epic/personal-laser-defense-equipment.webp", energyConsumption: 75, internalCapacity: 220 }),
        new Tile({ id: "t3_m3", name: "dischargeDefense", w: 2, h: 2, texture: "./assets/img/epic/discharge-defense-equipment.webp", energyConsumption: 800, internalCapacity: 4040 }),
        new Tile({ id: "t3_m4", name: "fissionReactor", w: 4, h: 4, texture: "./assets/img/epic/fission-reactor-equipment.webp", powerOutput: 1425 }),
        new Tile({ id: "t3_m5", name: "fusionReactor", w: 4, h: 4, texture: "./assets/img/epic/fusion-reactor-equipment.webp", powerOutput: 4750 }),
        new Tile({ id: "t3_m6", name: "battery", w: 1, h: 2, texture: "./assets/img/epic/battery-equipment.webp", energyCapacity: 38 }),
        new Tile({ id: "t3_m7", name: "batteryMK2", w: 1, h: 2, texture: "./assets/img/epic/battery-mk2-equipment.webp", energyCapacity: 190 }),
        new Tile({ id: "t3_m8", name: "batteryMK3", w: 1, h: 2, texture: "./assets/img/epic/battery-mk3-equipment.webp", energyCapacity: 475 }),
        new Tile({ id: "t3_m9", name: "roboport", w: 2, h: 2, texture: "./assets/img/epic/personal-roboport-equipment.webp", energyConsumption: 6650, internalCapacity: 35000, internalCapacityRechargeRate: 6.65, robotRechargeRate: 1.9, robotChargingSlots: 5 }),
        new Tile({ id: "t3_m10", name: "roboportMK2", w: 2, h: 2, texture: "./assets/img/epic/personal-roboport-mk2-equipment.webp", energyConsumption: 13300, internalCapacity: 35000, internalCapacityRechargeRate: 13.3, robotRechargeRate: 1.9, robotChargingSlots: 7 }),
        new Tile({ id: "t3_m11", name: "solarPanel", w: 1, h: 1, texture: "./assets/img/epic/solar-panel-equipment.webp", powerOutput: 57 }),
        new Tile({ id: "t3_m12", name: "exoskeleton", w: 2, h: 4, texture: "./assets/img/epic/exoskeleton-equipment.webp", energyConsumption: 200 }),
        new Tile({ id: "t3_m13", name: "nightVision", w: 2, h: 2, texture: "./assets/img/epic/night-vision-equipment.webp", energyConsumption: 10, internalCapacity: 120 }),
        new Tile({ id: "t3_m14", name: "toolbelt", w: 3, h: 1, texture: "./assets/img/epic/toolbelt-equipment.webp" }),
        new Tile({ id: "t3_m15", name: "beltImmunity", w: 1, h: 1, texture: "./assets/img/epic/belt-immunity-equipment.webp", energyConsumption: 52.63, internalCapacity: 100 }),
    ],
    [
        new Tile({ id: "t4_m0", name: "energyShield", w: 2, h: 2, texture: "./assets/img/legendary/energy-shield-equipment.webp", energyConsumption: 600, internalCapacity: 120, shieldHitpoints: 125, shieldRechargeRate: 30, energyPerHitpoint: 20 }),
        new Tile({ id: "t4_m1", name: "energyShieldMK2", w: 2, h: 2, texture: "./assets/img/legendary/energy-shield-mk2-equipment.webp", energyConsumption: 900, internalCapacity: 180, shieldHitpoints: 375, shieldRechargeRate: 30, energyPerHitpoint: 30 }),
        new Tile({ id: "t4_m2", name: "laserDefense", w: 2, h: 2, texture: "./assets/img/legendary/personal-laser-defense-equipment.webp", energyConsumption: 75, internalCapacity: 220 }),
        new Tile({ id: "t4_m3", name: "dischargeDefense", w: 2, h: 2, texture: "./assets/img/legendary/discharge-defense-equipment.webp", energyConsumption: 800, internalCapacity: 4040 }),
        new Tile({ id: "t4_m4", name: "fissionReactor", w: 4, h: 4, texture: "./assets/img/legendary/fission-reactor-equipment.webp", powerOutput: 1875 }),
        new Tile({ id: "t4_m5", name: "fusionReactor", w: 4, h: 4, texture: "./assets/img/legendary/fusion-reactor-equipment.webp", powerOutput: 6250 }),
        new Tile({ id: "t4_m6", name: "battery", w: 1, h: 2, texture: "./assets/img/legendary/battery-equipment.webp", energyCapacity: 50 }),
        new Tile({ id: "t4_m7", name: "batteryMK2", w: 1, h: 2, texture: "./assets/img/legendary/battery-mk2-equipment.webp", energyCapacity: 250 }),
        new Tile({ id: "t4_m8", name: "batteryMK3", w: 1, h: 2, texture: "./assets/img/legendary/battery-mk3-equipment.webp", energyCapacity: 625 }),
        new Tile({ id: "t4_m9", name: "roboport", w: 2, h: 2, texture: "./assets/img/legendary/personal-roboport-equipment.webp", energyConsumption: 8750, internalCapacity: 35000, internalCapacityRechargeRate: 8.75, robotRechargeRate: 2.5, robotChargingSlots: 7 }),
        new Tile({ id: "t4_m10", name: "roboportMK2", w: 2, h: 2, texture: "./assets/img/legendary/personal-roboport-mk2-equipment.webp", energyConsumption: 22500, internalCapacity: 35000, internalCapacityRechargeRate: 22.5, robotRechargeRate: 2.5, robotChargingSlots: 9 }),
        new Tile({ id: "t4_m11", name: "solarPanel", w: 1, h: 1, texture: "./assets/img/legendary/solar-panel-equipment.webp", powerOutput: 75 }),
        new Tile({ id: "t4_m12", name: "exoskeleton", w: 2, h: 4, texture: "./assets/img/legendary/exoskeleton-equipment.webp", energyConsumption: 200 }),
        new Tile({ id: "t4_m13", name: "nightVision", w: 2, h: 2, texture: "./assets/img/legendary/night-vision-equipment.webp", energyConsumption: 10, internalCapacity: 120 }),
        new Tile({ id: "t4_m14", name: "toolbelt", w: 3, h: 1, texture: "./assets/img/legendary/toolbelt-equipment.webp" }),
        new Tile({ id: "t4_m15", name: "beltImmunity", w: 1, h: 1, texture: "./assets/img/legendary/belt-immunity-equipment.webp", energyConsumption: 40, internalCapacity: 100 }),
    ],
];

const equipmentGridSizes = {
    modular_armor: { common: { w: 5, h: 5 }, uncommon: { w: 6, h: 6 }, rare: { w: 7, h: 7 }, epic: { w: 8, h: 8 }, legendary: { w: 10, h: 10 } },
    power_armor: { common: { w: 6, h: 8 }, uncommon: { w: 7, h: 9 }, rare: { w: 8, h: 10 }, epic: { w: 9, h: 11 }, legendary: { w: 11, h: 13 } },
    power_armor_mk2: { common: { w: 10, h: 10 }, uncommon: { w: 11, h: 11 }, rare: { w: 12, h: 12 }, epic: { w: 13, h: 13 }, legendary: { w: 15, h: 15 } },
    mech_armor: { common: { w: 10, h: 12 }, uncommon: { w: 11, h: 13 }, rare: { w: 12, h: 14 }, epic: { w: 13, h: 15 }, legendary: { w: 15, h: 17 } },
    tank: { common: { w: 6, h: 8 }, uncommon: { w: 7, h: 9 }, rare: { w: 8, h: 10 }, epic: { w: 9, h: 11 }, legendary: { w: 11, h: 13 } },
    spidertron: { common: { w: 10, h: 6 }, uncommon: { w: 11, h: 7 }, rare: { w: 12, h: 8 }, epic: { w: 13, h: 9 }, legendary: { w: 15, h: 11 } },
};

let gridData = [];
let instances = {};
let instanceCounter = 0;
let currentTab = 0;
let selectedEquipment = "modular_armor";
let selectedQuality = "common";

const drag = {
    active: false,
    tile: null,
    instanceId: null,
    dropped: false,
    validDrop: false,
    grabCellX: 0,
    grabCellY: 0,

    startNew(tile) {
        this.active = true; this.tile = tile;
        this.instanceId = null; this.dropped = false; this.validDrop = false;
        this.grabCellX = 0; this.grabCellY = 0;  // ← новое
    },
    startMove(tile, id) {
        this.active = true; this.tile = tile;
        this.instanceId = id; this.dropped = false; this.validDrop = false;
        this.grabCellX = 0; this.grabCellY = 0;  // ← новое
    },
    reset() {
        this.active = false; this.tile = null;
        this.instanceId = null; this.dropped = false; this.validDrop = false;
        this.grabCellX = 0; this.grabCellY = 0;  // ← новое
    }
};

const tabPanes = Array.from({ length: 5 }, (_, i) =>
    document.getElementById(`palette-tab-${i}`)
);
const grid = document.getElementById("grid");

let gridAC = null;

let previewEl = null;
let tooltipEl = null;

function formatPower(kw) {
    return kw >= 1000 ? `${(kw / 1000).toFixed(2)} MW` : `${kw} kW`;
}
function formatCapacity(mj) {
    return mj >= 1000 ? `${(mj / 1000).toFixed(2)} GJ` : `${mj} MJ`;
}
function formatValue(value, unit) {
    if (!value) return null;
    if (unit === "kW" && value >= 1000) return `${(value / 1000).toFixed(2)} MW`;
    if (unit === "kJ" && value >= 1000) return `${(value / 1000).toFixed(2)} MJ`;
    if (unit === "MJ" && value >= 1000) return `${(value / 1000).toFixed(2)} GJ`;
    return `${value} ${unit}`;
}

function updateStats() {
    let totalOutput = 0, totalConsumption = 0, totalCapacity = 0;
    for (const id in instances) {
        const { tile } = instances[id];
        totalOutput += tile.powerOutput || 0;
        totalConsumption += tile.energyConsumption || 0;
        totalCapacity += tile.energyCapacity || 0;
    }
    const po = document.getElementById("power-output");
    const ec = document.getElementById("energy-consumption");
    const cap = document.getElementById("energy-capacity");
    if (po) po.innerHTML = `<b>${formatPower(totalOutput)}</b>`;
    if (ec) ec.innerHTML = `<b>${formatPower(totalConsumption)}</b>`;
    if (cap) cap.innerHTML = `<b>${formatCapacity(totalCapacity)}</b>`;
}

function showPreview(tile, gx, gy, canPlace) {
    if (!previewEl) {
        previewEl = document.createElement("div");
        previewEl.className = "tile preview";
        previewEl.style.cssText = "position:absolute;z-index:1000;pointer-events:none;";
        grid.appendChild(previewEl);
    }
    previewEl.style.width = tile.w * CELL_SIZE + "px";
    previewEl.style.height = tile.h * CELL_SIZE + "px";
    previewEl.style.backgroundImage = `url(${tile.texture})`;
    previewEl.style.backgroundSize = "cover";
    previewEl.style.backgroundPosition = "center";
    previewEl.style.backgroundRepeat = "no-repeat";
    previewEl.style.left = gx * CELL_SIZE + "px";
    previewEl.style.top = gy * CELL_SIZE + "px";
    previewEl.style.opacity = canPlace ? "0.6" : "0.4";
    previewEl.style.border = canPlace ? "2px solid #4caf50" : "2px solid #f44336";
    previewEl.style.display = "block";
}
function hidePreview() {
    if (previewEl) previewEl.style.display = "none";
}

function showTooltip(tile, event) {
    if (!tooltipEl) {
        tooltipEl = document.createElement("div");
        tooltipEl.className = "tooltip";
        document.body.appendChild(tooltipEl);
    }
    const localizedName = getModuleName(tile.name);
    let html = `<b>${localizedName}</b><hr>`;
    html += `${t("ui.size")} <b>${tile.w}x${tile.h}</b><br>`;

    if (tile.powerOutput) html += `${t("ui.powerOutputLabel")} <b>${formatValue(tile.powerOutput, "kW")}</b><br>`;
    if (tile.energyConsumption) html += `${t("ui.energyConsumptionLabel")} <b>${formatValue(tile.energyConsumption, "kW")}</b><br>`;
    if (tile.energyCapacity) html += `${t("ui.energyCapacityLabel")} <b>${formatValue(tile.energyCapacity, "MJ")}</b><br>`;
    if (tile.internalCapacity) html += `${t("ui.internalCapacity")} <b>${formatValue(tile.internalCapacity, "kJ")}</b><br>`;
    if (tile.shieldHitpoints) {
        html += `${t("ui.shieldCharge")} <b>${tile.shieldHitpoints} ${t("ui.units.units")}</b><br>`;
        if (tile.shieldRechargeRate) html += `${t("ui.shieldRechargeRate")} <b>${tile.shieldRechargeRate} ${t("ui.units.unitsPerSec")}</b><br>`;
        if (tile.energyPerHitpoint) html += `${t("ui.energyPerHitpoint")} <b>${tile.energyPerHitpoint} kJ</b><br>`;
    }
    if (tile.internalCapacityRechargeRate) html += `${t("ui.internalCapacityRechargeRate")} <b>${tile.internalCapacityRechargeRate} MW</b><br>`;
    if (tile.robotRechargeRate) html += `${t("ui.robotRechargeRate")} <b>${tile.robotChargingSlots} × ${tile.robotRechargeRate} MW</b><br>`;
    if (tile.robotChargingSlots) html += `${t("ui.robotChargingSlots")} <b>${tile.robotChargingSlots} ${t("ui.units.slots")}</b><br>`;

    tooltipEl.innerHTML = html;
    tooltipEl.style.left = (event.clientX + 15) + "px";
    tooltipEl.style.top = (event.clientY + 15) + "px";
    tooltipEl.style.display = "block";
}
function hideTooltip() {
    if (tooltipEl) tooltipEl.style.display = "none";
}
function moveTooltip(event) {
    if (tooltipEl && tooltipEl.style.display === "block") {
        tooltipEl.style.left = (event.clientX + 15) + "px";
        tooltipEl.style.top = (event.clientY + 15) + "px";
    }
}

function canPlace(tile, x, y, ignoreId = null) {
    const h = gridData.length;
    const w = gridData[0]?.length ?? 0;
    if (x < 0 || y < 0 || x + tile.w > w || y + tile.h > h) return false;
    for (let dy = 0; dy < tile.h; dy++)
        for (let dx = 0; dx < tile.w; dx++) {
            const cell = gridData[y + dy][x + dx];
            if (cell && cell !== ignoreId) return false;
        }
    return true;
}
function occupy(tile, x, y, id) {
    for (let dy = 0; dy < tile.h; dy++)
        for (let dx = 0; dx < tile.w; dx++)
            gridData[y + dy][x + dx] = id;
}
function clearOccupy(tile, x, y) {
    for (let dy = 0; dy < tile.h; dy++)
        for (let dx = 0; dx < tile.w; dx++)
            gridData[y + dy][x + dx] = null;
}
function updatePosition(inst) {
    inst.el.style.left = inst.x * CELL_SIZE + "px";
    inst.el.style.top = inst.y * CELL_SIZE + "px";
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

    el.addEventListener("mouseenter", e => showTooltip(tile, e));
    el.addEventListener("mousemove", e => moveTooltip(e));
    el.addEventListener("mouseleave", () => hideTooltip());

    el.addEventListener("dragstart", e => {
        drag.startMove(tile, id);
        drag.grabCellX = Math.floor(e.offsetX / CELL_SIZE);
        drag.grabCellY = Math.floor(e.offsetY / CELL_SIZE);
        e.dataTransfer.setData("type", "move");
        e.dataTransfer.setData("instanceId", id);
        setInvisibleDragImage(e);
        hideTooltip();
    });
    el.addEventListener("dragend", () => {
        if (!drag.dropped) removeInstance(drag.instanceId);
        hidePreview();
        drag.reset();
    });

    const inst = { id, tile, x, y, el };
    instances[id] = inst;
    grid.appendChild(el);
    updatePosition(inst);
    occupy(tile, x, y, id);
    updateStats();

    touchDrag.addTouchToPlacedTile(el, tile, id);
}

function moveInstance(id, newX, newY) {
    const inst = instances[id];
    if (!inst) return false;
    if (inst.x === newX && inst.y === newY) return true;
    if (!canPlace(inst.tile, newX, newY, id)) return false;
    clearOccupy(inst.tile, inst.x, inst.y);
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

function setInvisibleDragImage(e) {
    const ghost = document.createElement("div");
    ghost.style.width = ghost.style.height = "0";
    document.body.appendChild(ghost);
    e.dataTransfer.setDragImage(ghost, 0, 0);
    setTimeout(() => document.body.removeChild(ghost), 0);
}

function buildGrid() {
    const size = equipmentGridSizes[selectedEquipment]?.[selectedQuality];
    const w = Math.floor(size?.w ?? 0);
    const h = Math.floor(size?.h ?? 0);

    if (w === 0 || h === 0) {
        alert(typeof t === "function"
            ? t("ui.unsupportedEquipment") || "This equipment is not yet supported."
            : "This equipment is not yet supported."
        );
        return;
    }

    if (gridAC) gridAC.abort();
    gridAC = new AbortController();
    const { signal } = gridAC;

    if (previewEl) { previewEl.remove(); previewEl = null; }

    grid.style.gridTemplateColumns = `repeat(${w}, ${CELL_SIZE}px)`;
    grid.style.gridTemplateRows = `repeat(${h}, ${CELL_SIZE}px)`;
    grid.style.position = "relative";
    grid.innerHTML = "";

    gridData = Array.from({ length: h }, () => Array(w).fill(null));
    instances = {};
    instanceCounter = 0;
    updateStats();

    grid.addEventListener("dragover", e => {
        e.preventDefault();
        if (!drag.active || !drag.tile) return;
        const rect = grid.getBoundingClientRect();
        const gx = Math.floor((e.clientX - rect.left) / CELL_SIZE) - drag.grabCellX;
        const gy = Math.floor((e.clientY - rect.top) / CELL_SIZE) - drag.grabCellY;
        const tile = drag.tile;
        if (gx >= 0 && gy >= 0 && gx + tile.w <= w && gy + tile.h <= h) {
            showPreview(tile, gx, gy, canPlace(tile, gx, gy, drag.instanceId));
        } else {
            hidePreview();
        }
    }, { signal });

    grid.addEventListener("dragleave", e => {
        if (!grid.contains(e.relatedTarget)) hidePreview();
    }, { signal });

    grid.addEventListener("drop", e => {
        e.preventDefault();
        drag.dropped = true;
        hidePreview();
    }, { signal });

    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            const cell = document.createElement("div");
            cell.className = "cell";
            cell.style.width = CELL_SIZE + "px";
            cell.style.height = CELL_SIZE + "px";

            cell.addEventListener("dragover", e => e.preventDefault());
            cell.addEventListener("drop", e => {
                e.preventDefault();
                drag.dropped = true;

                const type = e.dataTransfer.getData("type");
                if (type === "new") {
                    const tile = JSON.parse(e.dataTransfer.getData("tile"));
                    const tx = x - drag.grabCellX;
                    const ty = y - drag.grabCellY;
                    if (canPlace(tile, tx, ty)) {
                        drag.validDrop = true;
                        createInstance(tile, tx, ty);
                    }
                } else if (type === "move") {
                    const id = e.dataTransfer.getData("instanceId");
                    const tx = x - drag.grabCellX;
                    const ty = y - drag.grabCellY;
                    drag.validDrop = moveInstance(id, tx, ty);
                }
                hidePreview();
            });

            grid.appendChild(cell);
        }
    }
}

function buildPaletteForTab(tabIndex) {
    const pane = tabPanes[tabIndex];
    pane.innerHTML = "";
    const container = document.createElement("div");
    container.className = "modules-grid";

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

        el.addEventListener("mouseenter", e => showTooltip(tile, e));
        el.addEventListener("mousemove", e => moveTooltip(e));
        el.addEventListener("mouseleave", () => hideTooltip());

        el.addEventListener("dragstart", e => {
            drag.startNew(tile);
            drag.grabCellX = Math.floor(e.offsetX / CELL_SIZE);
            drag.grabCellY = Math.floor(e.offsetY / CELL_SIZE);
            e.dataTransfer.setData("type", "new");
            e.dataTransfer.setData("tile", JSON.stringify(tile));
            setInvisibleDragImage(e);
            hideTooltip();
        });
        el.addEventListener("dragend", () => {
            hidePreview();
            drag.reset();
        });

        touchDrag.addTouchToPaletteTile(el, tile);
        container.appendChild(el);
    });

    pane.appendChild(container);
}

function switchTab(index) {
    document.querySelectorAll(".tab").forEach((tab, i) =>
        tab.classList.toggle("active", i === index)
    );
    tabPanes.forEach((pane, i) =>
        pane.classList.toggle("active", i === index)
    );
    currentTab = index;
    buildPaletteForTab(index);
}

let currentEquipmentBtn = null;

function selectEquipment(equipment, btn) {
    selectedEquipment = equipment;
    currentEquipmentBtn?.classList.remove("active");
    currentEquipmentBtn = btn;
    btn.classList.add("active");
}

function initEquipmentSelector() {
    currentEquipmentBtn = document.querySelector(".equipment-btn.active") || null;
}

function initQualitySelector() {
    document.querySelectorAll('input[name="quality"]').forEach(radio => {
        radio.addEventListener("change", function () {
            if (this.checked) selectedQuality = this.value;
        });
    });
}

initEquipmentSelector();
initQualitySelector();
buildPaletteForTab(0);
buildGrid();