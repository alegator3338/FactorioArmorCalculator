let currentLang = "en";
let translations = {};

async function loadLanguage(lang) {
    try {
        const response = await fetch(`./assets/locales/${lang}.json`);
        translations = await response.json();
        currentLang = lang;

        // Обновляем UI текст
        updateUITexts();

        // Пересоздаём только палитру модулей, не трогая сетку
        if (typeof buildPaletteForTab !== 'undefined' && typeof currentTab !== 'undefined') {
            buildPaletteForTab(currentTab);
        }
    } catch (error) {
        console.error("Failed to load language:", error);
    }
}

function t(key) {
    const keys = key.split('.');
    let value = translations;
    for (const k of keys) {
        if (value && value[k] !== undefined) {
            value = value[k];
        } else {
            return key;
        }
    }
    return value;
}

function getModuleName(key) {
    return translations.module_names?.[key] || key;
}

function setLanguage(lang) {
    loadLanguage(lang);
}

function updateUITexts() {
    const currentWidth = document.getElementById("gridWidth")?.value || "6";
    const currentHeight = document.getElementById("gridHeight")?.value || "8";

    const controlsTitle = document.getElementById("controls-title");
    if (controlsTitle) controlsTitle.textContent = t("ui.controls");

    const modulesTitle = document.getElementById("modules-title");
    if (modulesTitle) modulesTitle.textContent = t("ui.modules");

    const gridTitle = document.getElementById("grid-title");
    if (gridTitle) gridTitle.textContent = t("ui.grid");

    const languageTitle = document.getElementById("language-title");
    if (languageTitle) languageTitle.textContent = t("ui.language");

    const applyButton = document.getElementById("apply-button");
    if (applyButton) applyButton.textContent = t("ui.apply");

    const statsTitle = document.getElementById("stats-title");
    if (statsTitle) statsTitle.textContent = t("ui.stats");

    const powerLabel = document.getElementById("power-output-label");
    if (powerLabel) powerLabel.textContent = t("ui.powerOutput");

    const consumptionLabel = document.getElementById("energy-consumption-label");
    if (consumptionLabel) consumptionLabel.textContent = t("ui.energyConsumption");

    const capacityLabel = document.getElementById("energy-capacity-label");
    if (capacityLabel) capacityLabel.textContent = t("ui.energyCapacity");

    const equipmentTitle = document.getElementById("equipment-title");
    if (equipmentTitle) equipmentTitle.textContent = t("ui.equipment");

    const qualityTitle = document.getElementById("quality-title");
    if (qualityTitle) qualityTitle.textContent = t("ui.quality");

    if (typeof updateStats !== 'undefined') {
        updateStats();
    }
}

loadLanguage("en");