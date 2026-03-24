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
    
    const widthLabel = document.getElementById("width-label");
    if (widthLabel) {
        widthLabel.innerHTML = `${t("ui.width")} <input type="number" id="gridWidth" value="${currentWidth}" min="6" max="15">`;
    }
    
    const heightLabel = document.getElementById("height-label");
    if (heightLabel) {
        heightLabel.innerHTML = `${t("ui.height")} <input type="number" id="gridHeight" value="${currentHeight}" min="8" max="17">`;
    }
    
    const applyButton = document.getElementById("apply-button");
    if (applyButton) applyButton.textContent = t("ui.apply");
    
    const statsTitle = document.getElementById("stats-title");
    if (statsTitle) statsTitle.textContent = t("ui.stats");
    
    const powerLabel = document.getElementById("power-output-label");
    if (powerLabel) {
        powerLabel.innerHTML = `${t("ui.powerOutput")} <p id="power-output"><b>N/A</b></p>`;
    }
    
    const consumptionLabel = document.getElementById("energy-consumption-label");
    if (consumptionLabel) {
        consumptionLabel.innerHTML = `${t("ui.energyConsumption")} <p id="energy-consumption"><b>N/A</b></p>`;
    }
    
    const capacityLabel = document.getElementById("energy-capacity-label");
    if (capacityLabel) {
        capacityLabel.innerHTML = `${t("ui.energyCapacity")} <p id="energy-capacity"><b>N/A</b></p>`;
    }
    
    if (typeof updateStats !== 'undefined') {
        updateStats();
    }
}

loadLanguage("en");