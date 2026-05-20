const fallbackBrawlers = [
    { name: "Kaze", rarity: "Ultra Legendary" },
    { name: "Sirius", rarity: "Ultra Legendary" },
    { name: "Spike", rarity: "Legendary" },
    { name: "Crow", rarity: "Legendary" },
    { name: "Leon", rarity: "Legendary" },
    { name: "Sandy", rarity: "Legendary" },
    { name: "Surge", rarity: "Legendary" },
    { name: "Amber", rarity: "Legendary" },
    { name: "Meg", rarity: "Legendary" },
    { name: "Chester", rarity: "Legendary" },
    { name: "Cordelius", rarity: "Legendary" },
    { name: "Kit", rarity: "Legendary" },
    { name: "Draco", rarity: "Legendary" },
    { name: "Kenji", rarity: "Legendary" },
    { name: "Pierce", rarity: "Legendary" },
    { name: "Mortis", rarity: "Mythic" },
    { name: "Tara", rarity: "Mythic" },
    { name: "Gene", rarity: "Mythic" },
    { name: "Mr. P", rarity: "Mythic" },
    { name: "Max", rarity: "Mythic" },
    { name: "Sprout", rarity: "Mythic" },
    { name: "Lou", rarity: "Mythic" },
    { name: "Byron", rarity: "Mythic" },
    { name: "Ruffs", rarity: "Mythic" },
    { name: "Squeak", rarity: "Mythic" },
    { name: "Buzz", rarity: "Mythic" },
    { name: "Fang", rarity: "Mythic" },
    { name: "Eve", rarity: "Mythic" },
    { name: "Janet", rarity: "Mythic" },
    { name: "Otis", rarity: "Mythic" },
    { name: "Buster", rarity: "Mythic" },
    { name: "Gray", rarity: "Mythic" },
    { name: "R-T", rarity: "Mythic" },
    { name: "Willow", rarity: "Mythic" },
    { name: "Doug", rarity: "Mythic" },
    { name: "Chuck", rarity: "Mythic" },
    { name: "Charlie", rarity: "Mythic" },
    { name: "Mico", rarity: "Mythic" },
    { name: "Melodie", rarity: "Mythic" },
    { name: "Lily", rarity: "Mythic" },
    { name: "Clancy", rarity: "Mythic" },
    { name: "Moe", rarity: "Mythic" },
    { name: "Juju", rarity: "Mythic" },
    { name: "Ollie", rarity: "Mythic" },
    { name: "Lumi", rarity: "Mythic" },
    { name: "Finx", rarity: "Mythic" },
    { name: "Jae-Yong", rarity: "Mythic" },
    { name: "Alli", rarity: "Mythic" },
    { name: "Mina", rarity: "Mythic" },
    { name: "Ziggy", rarity: "Mythic" },
    { name: "Gigi", rarity: "Mythic" },
    { name: "Glowy", rarity: "Mythic" },
    { name: "Najia", rarity: "Mythic" },
    { name: "Damian", rarity: "Mythic" },
    { name: "Bo", rarity: "Epic" },
    { name: "Piper", rarity: "Epic" },
    { name: "Pam", rarity: "Epic" },
    { name: "Frank", rarity: "Epic" },
    { name: "Bibi", rarity: "Epic" },
    { name: "Bea", rarity: "Epic" },
    { name: "Emz", rarity: "Epic" },
    { name: "Gale", rarity: "Epic" },
    { name: "Nani", rarity: "Epic" },
    { name: "Colette", rarity: "Epic" },
    { name: "Edgar", rarity: "Epic" },
    { name: "Stu", rarity: "Epic" },
    { name: "Belle", rarity: "Epic" },
    { name: "Grom", rarity: "Epic" },
    { name: "Griff", rarity: "Epic" },
    { name: "Ash", rarity: "Epic" },
    { name: "Lola", rarity: "Epic" },
    { name: "Bonnie", rarity: "Epic" },
    { name: "Sam", rarity: "Epic" },
    { name: "Mandy", rarity: "Epic" },
    { name: "Maisie", rarity: "Epic" },
    { name: "Hank", rarity: "Epic" },
    { name: "Pearl", rarity: "Epic" },
    { name: "Larry & Lawrie", rarity: "Epic" },
    { name: "Angelo", rarity: "Epic" },
    { name: "Berry", rarity: "Epic" },
    { name: "Shade", rarity: "Epic" },
    { name: "Meeple", rarity: "Epic" },
    { name: "Trunk", rarity: "Epic" },
    { name: "Rico", rarity: "Super Rare" },
    { name: "Jessie", rarity: "Super Rare" },
    { name: "Dynamike", rarity: "Super Rare" },
    { name: "Darryl", rarity: "Super Rare" },
    { name: "Penny", rarity: "Super Rare" },
    { name: "Tick", rarity: "Super Rare" },
    { name: "Carl", rarity: "Super Rare" },
    { name: "8-Bit", rarity: "Super Rare" },
    { name: "Jacky", rarity: "Super Rare" },
    { name: "Gus", rarity: "Super Rare" },
    { name: "Colt", rarity: "Rare" },
    { name: "Bull", rarity: "Rare" },
    { name: "Brock", rarity: "Rare" },
    { name: "Barley", rarity: "Rare" },
    { name: "Nita", rarity: "Rare" },
    { name: "El Primo", rarity: "Rare" },
    { name: "Poco", rarity: "Rare" },
    { name: "Rosa", rarity: "Rare" },
    { name: "Shelly", rarity: "Common" }
];

const brawlerGrid = document.querySelector(".brawler-grid");
const searchInput = document.querySelector("#search-input");
const sortSelect = document.querySelector("#sort-select");
const directionSelect = document.querySelector("#direction-select");
const pickSlots = document.querySelectorAll(".pick-slot");
const slots = document.querySelectorAll(".pick-slot, .ban-slot");
const recommendationEmpty = document.querySelector(".recommendation-empty");
const recommendationList = document.querySelector(".recommendation-list");
const tipBrawlerName = document.querySelector(".tip-brawler-name");
const tipText = document.querySelector(".tip-text");
const tipNote = document.querySelector(".tip-note");
const tipTimerValue = document.querySelector(".tip-timer-value");
const tipProgressFill = document.querySelector(".tip-progress-fill");

let draggedBrawler = null;
let selectedBrawler = null;
let activeBrawlers = fallbackBrawlers;
let tipRotationInterval = null;
let tipRemainingMs = 0;
let currentTipIndex = 0;
const tipIntervalMs = 8000;
let tipAnimationFrame = null;
let tipEndTime = 0;

const rarityOrder = [
    "Common",
    "Rare",
    "Super Rare",
    "Epic",
    "Mythic",
    "Legendary",
    "Ultra Legendary"
];

const brawlerTipData = {
    Amber: [
        "Mantén la distancia con tu disparo cargado y evita el combate cuerpo a cuerpo.",
        "Usa tu súper para crear control de zona y forzar errores del enemigo."
    ],
    Shelly: [
        "Aprovecha las paredes y dispara cuando el enemigo se acerque para maximizar daño.",
        "Guarda tu súper para romper coberturas y presionar el centro del mapa."
    ],
    Leon: [
        "Activa tu súper solo cuando estés listo para eliminar al objetivo más débil.",
        "Mantente oculto en hierba y espera el momento preciso para entrar."
    ],
    Piper: [
        "Ataca desde lejos y mantén la distancia para sacar ventaja de su rango.",
        "No te quedes quieta después del primer disparo; prepárate para esquivar."
    ],
    Spike: [
        "A pesar de tener baja cantidad de vida, puedes usar tu súper para controlar el área.",
        "Usa tu ataque principal para mantener distancia y acosar a los enemigos."
    ]
};

const fallbackTipTemplates = [
    (name) => `Usa a ${name} con precisión: conoce su rango y posiciónate según su ventaja.`,
    (name) => `Contra ${name}, evita pelear si no estás en la distancia ideal para su tipo de ataque.`,
    (name) => `Controla el mapa con ${name} y guarda tu súper para cambiar el momento de la pelea.`
];

function getTipsForBrawler(name) {
    return brawlerTipData[name] || fallbackTipTemplates.map((template) => template(name));
}

function getTipBrawlerNames() {
    return activeBrawlers.map((brawler) => brawler.name);
}

function updateTipTimer(remainingMs) {
    if (tipTimerValue) {
        // Mostrar segundos sin milisegundos
        const seconds = Math.max(0, Math.ceil(remainingMs / 1000));
        tipTimerValue.textContent = `${seconds}s`;
    }
}

function resetTipTimer() {
    // Cancelar animaciones previas
    if (tipAnimationFrame) {
        cancelAnimationFrame(tipAnimationFrame);
        tipAnimationFrame = null;
    }

    // Configurar tiempo de finalización
    tipEndTime = performance.now() + tipIntervalMs;

    // Reiniciar barra: poner 100% y animarla a 0% con transición lineal
    if (tipProgressFill) {
        tipProgressFill.style.transition = 'none';
        tipProgressFill.style.width = '100%';
        // Forzar reflow para que la siguiente transición tenga efecto
        // eslint-disable-next-line no-unused-expressions
        tipProgressFill.offsetWidth;
        tipProgressFill.style.transition = `width ${tipIntervalMs}ms linear`;
        tipProgressFill.style.width = '0%';
    }

    // Iniciar loop de actualización del texto del cronómetro de forma lineal
    function tick() {
        const remaining = Math.max(0, tipEndTime - performance.now());
        updateTipTimer(remaining);
        if (remaining > 0) {
            tipAnimationFrame = requestAnimationFrame(tick);
        } else {
            tipAnimationFrame = null;
        }
    }

    tick();
}

function updateTipSection() {
    const tipNames = getTipBrawlerNames();

    if (tipNames.length === 0) {
        if (tipBrawlerName) tipBrawlerName.textContent = "Cargando...";
        if (tipText) tipText.textContent = "Los consejos rotan automáticamente cada 8 segundos.";
        resetTipTimer();
        return;
    }

    if (currentTipIndex >= tipNames.length) {
        currentTipIndex = 0;
    }

    const currentBrawlerName = tipNames[currentTipIndex];
    const tips = getTipsForBrawler(currentBrawlerName);
    const tip = tips[Math.floor(Math.random() * tips.length)];

    if (tipBrawlerName) tipBrawlerName.textContent = currentBrawlerName;
    if (tipText) tipText.textContent = tip;
    resetTipTimer();
}

function advanceTip() {
    const tipNames = getTipBrawlerNames();
    if (tipNames.length === 0) {
        return;
    }

    currentTipIndex = Math.floor(Math.random() * tipNames.length);
    updateTipSection();
}

function startTipRotation() {
    updateTipSection();
    if (tipRotationInterval) {
        clearInterval(tipRotationInterval);
    }
    tipRotationInterval = setInterval(() => {
        advanceTip();
    }, tipIntervalMs);
}

function getImagePath(brawler) {
    return brawler.imageUrl || `images/${brawler.name}.png`;
}

function createBrawlerCard(brawler) {
    const card = document.createElement("div");
    card.className = "brawler";
    card.dataset.name = brawler.name;
    card.dataset.rarity = brawler.rarity;
    card.draggable = true;

    const image = document.createElement("img");
    image.className = "brawler-image";
    image.src = getImagePath(brawler);
    image.alt = brawler.name;

    const label = document.createElement("span");
    label.className = "brawler-name";
    label.textContent = brawler.name;

    image.addEventListener("load", () => {
        card.classList.add("has-image");
    });

    image.addEventListener("error", () => {
        image.remove();
    });

    card.append(image, label);
    return card;
}

function clearSelectedBrawler() {
    if (selectedBrawler) {
        selectedBrawler.classList.remove("selected");
        selectedBrawler = null;
    }
}

function selectBrawler(card) {
    clearSelectedBrawler();
    selectedBrawler = card;
    selectedBrawler.classList.add("selected");
}

function placeSelectedBrawlerOnSlot(slot) {
    if (!selectedBrawler) {
        return false;
    }

    const brawlerName = selectedBrawler.dataset.name;
    const occupiedSlot = [...slots].find((currentSlot) => {
        const currentBrawler = currentSlot.querySelector(".brawler");
        return currentBrawler?.dataset.name === brawlerName;
    });

    if (occupiedSlot && occupiedSlot !== slot) {
        resetSlot(occupiedSlot);
    }

    slot.innerHTML = "";
    const clone = selectedBrawler.cloneNode(true);
    clone.classList.remove("dragging");
    clone.removeAttribute("draggable");
    slot.appendChild(clone);
    slot.classList.add("filled");
    updateRecommendations();
    clearSelectedBrawler();
    return true;
}

function bindBrawlerDragEvents() {
    const brawlerElements = document.querySelectorAll(".brawler");

    brawlerElements.forEach((brawler) => {
        brawler.addEventListener("dragstart", () => {
            draggedBrawler = brawler;
            brawler.classList.add("dragging");
            clearSelectedBrawler();
        });

        brawler.addEventListener("dragend", () => {
            draggedBrawler = null;
            brawler.classList.remove("dragging");
        });

        brawler.addEventListener("click", () => {
            selectBrawler(brawler);
        });
    });
}

function getVisibleBrawlers() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const filteredBrawlers = activeBrawlers.filter((brawler) =>
        brawler.name.toLowerCase().includes(searchTerm)
    );

    return filteredBrawlers.sort((first, second) => {
        const direction = directionSelect.value === "asc" ? 1 : -1;

        if (sortSelect.value === "rarity") {
            const rarityComparison =
                rarityOrder.indexOf(first.rarity) - rarityOrder.indexOf(second.rarity);

            if (rarityComparison !== 0) {
                return rarityComparison * direction;
            }
        }

        return first.name.localeCompare(second.name) * direction;
    });
}

function updateBrawlerList() {
    clearSelectedBrawler();
    renderBrawlers(getVisibleBrawlers());
}

async function loadLatestBrawlers() {
    try {
        const response = await fetch("https://api.brawlify.com/v1/brawlers");
        const data = await response.json();

        activeBrawlers = data.list
            .filter((brawler) => brawler.released)
            .map((brawler) => ({
                name: brawler.name,
                rarity: brawler.rarity.name,
                imageUrl: brawler.imageUrl2
            }));
    } catch {
        activeBrawlers = fallbackBrawlers;
    }

    updateBrawlerList();
    updateTipSection();
}

function renderBrawlers(brawlersToRender) {
    brawlerGrid.innerHTML = "";

    brawlersToRender.forEach((brawler) => {
        brawlerGrid.appendChild(createBrawlerCard(brawler));
    });

    bindBrawlerDragEvents();
}

function resetSlot(slot) {
    slot.textContent = slot.dataset.placeholder;
    slot.classList.remove("filled");
}

function getSelectedEnemyNames() {
    return [...pickSlots]
        .map((slot) => slot.querySelector(".brawler")?.dataset.name)
        .filter(Boolean);
}

function getSelectedBanNames() {
    return [...document.querySelectorAll(".ban-slot")]
        .map((slot) => slot.querySelector(".brawler")?.dataset.name)
        .filter(Boolean);
}

function getBrawlerByName(name) {
    const searchName = name.toLowerCase();
    return (
        activeBrawlers.find((brawler) => brawler.name.toLowerCase() === searchName) ||
        fallbackBrawlers.find((brawler) => brawler.name.toLowerCase() === searchName) ||
        { name, imageUrl: `images/${name}.png` }
    );
}

function getRecommendations(selectedEnemies) {
    const selectedLower = selectedEnemies.map((e) => e.toLowerCase());
    return Object.entries(counterData)
        .map(([name, data]) => {
            const coveredEnemies = data.strongAgainst.filter((enemy) =>
                selectedLower.includes(enemy.toLowerCase())
            );

            return {
                name,
                score: coveredEnemies.length,
                coveredEnemies
            };
        })
        .filter((recommendation) => recommendation.score > 0)
        .sort((first, second) => {
            if (second.score !== first.score) {
                return second.score - first.score;
            }

            return first.name.localeCompare(second.name);
        });
}

function updateRecommendations() {
    const selectedEnemies = getSelectedEnemyNames();
    const recommendations = getRecommendations(selectedEnemies);

    recommendationList.innerHTML = "";

    if (recommendations.length === 0) {
        recommendationEmpty.hidden = false;
        recommendationEmpty.textContent =
            selectedEnemies.length === 0
                ? "Arrastra un brawler enemigo para ver counters."
                : "Todavia no hay counters cargados para esa combinacion.";
        return;
    }

    recommendationEmpty.hidden = true;
    const bannedNames = new Set(getSelectedBanNames().map((name) => name.toLowerCase()));

    recommendations.forEach((recommendation) => {
        const item = document.createElement("article");
        item.className = "recommendation-item";

        if (bannedNames.has(recommendation.name.toLowerCase())) {
            item.classList.add("banned");
        }

        const ratio = selectedEnemies.length > 0 ? recommendation.score / selectedEnemies.length : 0;
        if (ratio >= 1) {
            item.classList.add("recommendation-score-full");
        } else if (ratio >= 0.66) {
            item.classList.add("recommendation-score-high");
        } else if (ratio >= 0.33) {
            item.classList.add("recommendation-score-medium");
        }

        const content = document.createElement("div");
        content.className = "recommendation-content";

        const name = document.createElement("span");
        name.className = "recommendation-name";
        name.textContent = recommendation.name;

        const meta = document.createElement("span");
        meta.className = "recommendation-meta";
        meta.textContent = `Cubre ${recommendation.score}/${selectedEnemies.length}: ${recommendation.coveredEnemies.join(", ")}`;

        content.append(name, meta);

        const recommendedBrawler = getBrawlerByName(recommendation.name);
        const icon = document.createElement("img");
        icon.className = "recommendation-icon";
        icon.src = getImagePath(recommendedBrawler);
        icon.alt = recommendation.name;
        icon.addEventListener("error", () => {
            icon.remove();
        });

        item.append(content, icon);
        recommendationList.appendChild(item);
    });
}

slots.forEach((slot) => {
    slot.addEventListener("dragover", (event) => {
        event.preventDefault();
        slot.classList.add("over");
    });

    slot.addEventListener("dragleave", () => {
        slot.classList.remove("over");
    });

    slot.addEventListener("drop", (event) => {
        event.preventDefault();
        slot.classList.remove("over");

        if (!draggedBrawler) {
            return;
        }

        const brawlerName = draggedBrawler.dataset.name;
        const occupiedSlot = [...slots].find((currentSlot) => {
            const currentBrawler = currentSlot.querySelector(".brawler");
            return currentBrawler?.dataset.name === brawlerName;
        });

        if (occupiedSlot && occupiedSlot !== slot) {
            resetSlot(occupiedSlot);
        }

        slot.innerHTML = "";
        const clone = draggedBrawler.cloneNode(true);
        clone.classList.remove("dragging");
        clone.removeAttribute("draggable");
        slot.appendChild(clone);
        slot.classList.add("filled");
        updateRecommendations();
    });

    slot.addEventListener("click", () => {
        if (selectedBrawler) {
            placeSelectedBrawlerOnSlot(slot);
            return;
        }

        const currentBrawler = slot.querySelector(".brawler");
        if (currentBrawler) {
            resetSlot(slot);
            updateRecommendations();
        }
    });
});

searchInput.addEventListener("input", updateBrawlerList);
sortSelect.addEventListener("change", updateBrawlerList);
directionSelect.addEventListener("change", updateBrawlerList);

loadLatestBrawlers();
startTipRotation();
updateRecommendations();