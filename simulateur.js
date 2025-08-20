// Configuration des catégories
const CATEGORIES = {
    'mode-de-vie': {
        icon: '🏃',
        title: 'Hygiène de vie',
        color: 'var(--category-2)'
    },
    'alimentation': {
        icon: '🥝',
        title: 'Alimentation',
        color: 'var(--category-1)'
    },
    'psychologique': {
        icon: '🧠',
        title: 'Facteurs personnels',
        color: 'var(--category-5)'
    },
    'social': {
        icon: '👪',
        title: 'Environnement social',
        color: 'var(--category-3)'
    },
    'academique': {
        icon: '🎓',
        title: 'Engagement académique',
        color: 'var(--category-4)'
    }
};

// Configuration des sliders
const SLIDERS_CONFIG = {
    'sleep': {
        category: 'mode-de-vie',
        label: 'Heures de sommeil',
        min: 4,
        max: 12,
        default: 7,
        step: 1,
        unit: 'h',
        important: true,
        coefficient: 0.2,
        tooltip: {
            title: "Impact du sommeil sur la réussite scolaire",
            impact: "Impact fort : +15-20% sur les performances académiques",
            description: "Un sommeil suffisant améliore la mémoire, la concentration et les capacités d'apprentissage. 7-9 heures de sommeil par nuit sont recommandées pour les étudiants.",
            source: "Meta-analyse publiée dans Sleep Medicine Reviews (2021)"
        }
    },
    'sport': {
        category: 'mode-de-vie',
        label: 'Activité sportive',
        min: 0,
        max: 7,
        default: 3,
        step: 1,
        unit: '/sem',
        important: true,
        coefficient: 0.15,
        tooltip: {
            title: "L'impact de l'activité physique sur la réussite scolaire",
            impact: "Impact significatif : +10-15% sur les performances cognitives",
            description: "L'activité physique régulière améliore la concentration, la mémoire et réduit le stress. 30-60 minutes d'activité modérée par jour sont recommandées.",
            source: "Étude longitudinale publiée dans Journal of Sport Sciences (2022)"
        }
    },
    'cannabis': {
        category: 'mode-de-vie',
        label: 'Consommation de cannabis',
        min: 0,
        max: 7,
        default: 0,
        step: 1,
        unit: '/sem',
        important: true,
        coefficient: -0.3,
        tooltip: {
            title: "Impact du cannabis sur la réussite scolaire",
            impact: "Impact négatif fort : -20-25% sur les performances académiques",
            description: "La consommation régulière de cannabis affecte la mémoire, la motivation et les capacités d'apprentissage.",
            source: "Méta-analyse publiée dans Addiction Research & Theory (2022)"
        }
    },
    'screen_time': {
        category: 'mode-de-vie',
        label: "Temps d'écran loisir",
        min: 0,
        max: 12,
        default: 4,
        step: 0.5,
        unit: 'h/jour',
        important: true,
        coefficient: -0.15,
        tooltip: {
            title: "Impact du temps d'écran sur la réussite scolaire",
            impact: "Impact négatif significatif : -10-15% sur les performances académiques",
            description: "Un temps d'écran excessif (>4h/jour) affecte la qualité du sommeil, la concentration et réduit le temps disponible pour les études. La recommandation est de limiter à 2h/jour pour les loisirs.",
            source: "Méta-analyse publiée dans Educational Psychology Review (2023)"
        }
    },
    'breakfast': {
        category: 'alimentation',
        label: 'Petit-déjeuner équilibré',
        min: 0,
        max: 7,
        default: 4,
        step: 1,
        unit: '/sem',
        important: false,
        coefficient: 0.1,
        tooltip: {
            title: "Impact du petit-déjeuner sur la réussite scolaire",
            impact: "Impact modéré : +5-10% sur les performances cognitives matinales",
            description: "Un petit-déjeuner équilibré améliore la concentration et les performances cognitives le matin. Exemples de petit-déjeuner équilibré :\n• 1 bol de céréales complètes + lait + 1 fruit + 1 yaourt\n• 2 tranches de pain complet + beurre + confiture + 1 œuf + 1 verre de jus d'orange\n• 1 bol de flocons d'avoine + fruits rouges + amandes + yaourt grec",
            source: "Étude publiée dans Journal of Nutrition Education (2023)"
        }
    },
    'fruits': {
        category: 'alimentation',
        label: 'Fruits & légumes',
        min: 0,
        max: 7,
        default: 4,
        step: 1,
        unit: '/jour',
        important: false,
        coefficient: 0.1,
        tooltip: {
            title: "Impact des fruits et légumes sur la réussite scolaire",
            impact: "Impact positif : +8-12% sur les performances cognitives",
            description: "Une consommation régulière de fruits et légumes améliore les fonctions cognitives et la concentration.",
            source: "Étude publiée dans Nutrients Journal (2023)"
        }
    },
    'dairy': {
        category: 'alimentation',
        label: 'Produits laitiers',
        min: 0,
        max: 7,
        default: 3,
        step: 1,
        unit: '/jour',
        important: false,
        coefficient: 0.1,
        tooltip: {
            title: "Impact des produits laitiers sur la réussite scolaire",
            impact: "Impact modéré : +5-8% sur les performances cognitives",
            description: "Les produits laitiers fournissent des nutriments essentiels pour le développement cognitif.",
            source: "Revue systématique publiée dans Nutrition Research (2022)"
        }
    },
    'cereals': {
        category: 'alimentation',
        label: 'Féculents complets',
        min: 0,
        max: 7,
        default: 2,
        step: 1,
        unit: '/jour',
        important: false,
        coefficient: 0.1,
        tooltip: {
            title: "Impact des féculents complets sur la réussite scolaire",
            impact: "Impact positif : +7-10% sur l'attention et la concentration",
            description: "Les féculents complets (riz complet, pain complet, pâtes complètes, quinoa, boulgour) fournissent une énergie stable et durable pour le cerveau. Ils sont riches en fibres et vitamines B.",
            source: "Méta-analyse publiée dans American Journal of Clinical Nutrition (2023)"
        }
    },
    'sugar': {
        category: 'alimentation',
        label: 'Sucres rapides',
        min: 0,
        max: 7,
        default: 5,
        step: 1,
        unit: '/jour',
        important: false,
        coefficient: -0.1,
        tooltip: {
            title: "Impact des sucres rapides sur la réussite scolaire",
            impact: "Impact négatif : -8-12% sur la concentration et l'attention",
            description: "Les sucres rapides (sodas, bonbons, gâteaux, viennoiseries, céréales sucrées, barres chocolatées) provoquent des pics glycémiques qui perturbent la concentration. Privilégiez les fruits frais pour les collations.",
            source: "Étude publiée dans Frontiers in Nutrition (2023)"
        }
    },
    'fats': {
        category: 'alimentation',
        label: 'Graisses saturées',
        min: 0,
        max: 7,
        default: 4,
        step: 1,
        unit: '/jour',
        important: false,
        coefficient: -0.1,
        tooltip: {
            title: "Impact des graisses saturées sur la réussite scolaire",
            impact: "Impact négatif : -6-10% sur les fonctions cognitives",
            description: "Les graisses saturées (charcuterie, fromages gras, beurre, crème fraîche, viandes grasses, chips, frites) peuvent affecter les fonctions cognitives. Privilégiez les bonnes graisses comme l'huile d'olive, l'avocat, les noix et le poisson.",
            source: "Méta-analyse publiée dans Journal of Nutrition (2022)"
        }
    },
    'academic_self_efficacy': {
        category: 'psychologique',
        label: 'Auto-efficacité scolaire',
        min: 0,
        max: 10,
        default: 6,
        step: 1,
        unit: '/10',
        important: true,
        coefficient: 0.25,
        tooltip: {
            title: "Impact de l'auto-efficacité scolaire sur la réussite",
            impact: "Impact très fort : +20-25% sur les performances",
            description: "L'auto-efficacité est votre croyance en votre capacité à réussir vos études. Plus elle est élevée, plus vous êtes persévérant et efficace.",
            source: "Basé sur Bandura (1997) et méta-analyse Nunes et al. (2022)"
        }
    },
    'academic_motivation': {
        category: 'psychologique',
        label: 'Motivation pour les études',
        min: 0,
        max: 10,
        default: 6,
        step: 1,
        unit: '/10',
        important: true,
        coefficient: 0.20,
        tooltip: {
            title: "Impact de la motivation sur la réussite",
            impact: "Impact fort : +15-20% sur l'engagement et les résultats",
            description: "Une forte motivation, surtout intrinsèque (plaisir d'apprendre), favorise l'engagement profond et la persévérance.",
            source: "Basé sur Ryan & Deci (Self-Determination Theory) et Nunes et al. (2022)"
        }
    },
    'learning_strategies': {
        category: 'psychologique',
        label: "Stratégies d'apprentissage",
        min: 0,
        max: 10,
        default: 5,
        step: 1,
        unit: '/10',
        important: true,
        coefficient: 0.20,
        tooltip: {
            title: "Impact des stratégies d'apprentissage sur la réussite",
            impact: "Impact fort : +15-20% sur l'efficacité des études",
            description: "Utiliser des méthodes de travail efficaces (planification, organisation, auto-évaluation) optimise votre apprentissage.",
            source: "Basé sur les travaux de Hattie (Visible Learning) et Dunlosky et al. (2013)"
        }
    },
    'stress_management': {
        category: 'psychologique',
        label: 'Gestion du Stress & Bien-être',
        min: 0,
        max: 10,
        default: 6,
        step: 1,
        unit: '/10',
        important: true,
        coefficient: 0.15,
        tooltip: {
            title: "Impact de la gestion du stress et du bien-être sur la réussite",
            impact: "Impact significatif : +10-15% sur la concentration et la performance",
            description: "Bien gérer son stress et maintenir un bon équilibre émotionnel sont cruciaux pour la concentration et la performance cognitive.",
            source: "Diverses études sur le stress académique et le bien-être étudiant."
        }
    },
    'class-climate': {
        category: 'social',
        label: 'Climat de la classe',
        min: 1,
        max: 10,
        default: 6,
        step: 1,
        unit: '/10',
        important: true,
        coefficient: 0.2,
        tooltip: {
            title: "Impact du climat de classe sur la réussite scolaire",
            impact: "Impact significatif : +10-15% sur les performances académiques",
            description: "Un climat de classe positif favorise l'apprentissage et la participation.",
            source: "Méta-analyse publiée dans Learning and Instruction (2023)"
        }
    },
    'family-support': {
        category: 'social',
        label: 'Soutien familial',
        min: 1,
        max: 10,
        default: 6,
        step: 1,
        unit: '/10',
        important: true,
        coefficient: 0.2,
        tooltip: {
            title: "Impact du soutien familial sur la réussite scolaire",
            impact: "Impact majeur : +15-20% sur les performances scolaires",
            description: "Le soutien familial est crucial pour la motivation et la réussite scolaire.",
            source: "Étude longitudinale publiée dans Journal of Family Psychology (2022)"
        }
    },
    'participation': {
        category: 'academique',
        label: 'Participation en classe',
        min: 1,
        max: 10,
        default: 5,
        step: 1,
        unit: '/10',
        important: true,
        coefficient: 0.15,
        tooltip: {
            title: "Impact de la participation en classe sur la réussite scolaire",
            impact: "Impact positif : +10-15% sur l'apprentissage",
            description: "La participation active en classe améliore la compréhension et la mémorisation.",
            source: "Étude publiée dans Teaching and Teacher Education (2023)"
        }
    },
    'study_environment': {
        category: 'academique',
        label: "Confort de l'espace de travail",
        min: 1,
        max: 10,
        default: 5,
        step: 1,
        unit: '/10',
        important: false,
        coefficient: 0.1,
        tooltip: {
            title: "Impact de l'environnement d'étude sur la réussite scolaire",
            impact: "Impact modéré : +5-10% sur la concentration",
            description: "Un espace de travail confortable et calme favorise la concentration et l'efficacité.",
            source: "Étude publiée dans Learning Environments Research (2022)"
        }
    },
    'resources_access': {
        category: 'academique',
        label: "Accès aux outils pour étudier",
        min: 1,
        max: 10,
        default: 5,
        step: 1,
        unit: '/10',
        important: false,
        coefficient: 0.1,
        tooltip: {
            title: "Impact de l'accès aux ressources sur la réussite scolaire",
            impact: "Impact significatif : +8-12% sur les performances",
            description: "L'accès aux outils d'étude (livres, ordinateur, internet) est essentiel.",
            source: "Étude publiée dans Computers & Education (2023)"
        }
    },
    'education': {
        category: 'academique',
        label: "Niveau d'études",
        min: 0,
        max: 3,
        default: 0,
        step: 1,
        unit: '',
        important: false,
        tooltip: {
            title: "Impact du niveau d'études sur les perspectives professionnelles",
            impact: "Impact direct sur le salaire : +15-30% par niveau",
            description: "Le niveau d'études influence significativement les opportunités professionnelles.",
            source: "Données INSEE et études sur l'insertion professionnelle (2023)"
        }
    }
};

// Valeurs par défaut des sliders
const DEFAULT_VALUES = {
    sleep: 7,
    sport: 3,
    cannabis: 0,
    screen_time: 4,
    breakfast: 4,
    fruits: 4,
    dairy: 3,
    cereals: 2,
    sugar: 5,
    fats: 4,
    academic_self_efficacy: 6,
    academic_motivation: 6,
    learning_strategies: 5,
    stress_management: 6,
    'class-climate': 6,
    'family-support': 6,
    participation: 5,
    study_environment: 5,
    resources_access: 5,
    education: 0
};

// Fonction utilitaire pour générer le HTML d'un tooltip
function creerTooltip(tooltip) {
    return `
        <div class="tooltip">
            <div class="tooltip-title">${tooltip.title}</div>
            <div class="tooltip-impact">${tooltip.impact}</div>
            <div class="tooltip-description">${tooltip.description}</div>
            <div class="tooltip-source">${tooltip.source}</div>
        </div>
    `;
}

// Fonction utilitaire pour générer un slider (DOM)
function creerSlider(id, config, onInput) {
    const sliderGroup = document.createElement('div');
    sliderGroup.className = `slider-group${config.important ? ' important' : ''}`;
    sliderGroup.id = `slider-group-${id}`;

    // Label + tooltip
    const labelDiv = document.createElement('div');
    labelDiv.className = 'slider-label';
    labelDiv.innerHTML = `
        <span>${config.label}</span>
        <button class="info-button" onclick="toggleTooltip(this)"></button>
        ${creerTooltip(config.tooltip)}
    `;

    // Slider input
    const sliderContainer = document.createElement('div');
    sliderContainer.className = 'slider-container';
    const input = document.createElement('input');
    input.type = 'range';
    input.className = 'slider';
    input.min = config.min;
    input.max = config.max;
    input.value = config.default;
    input.step = config.step;
    input.id = id;
    input.oninput = onInput;
    sliderContainer.appendChild(input);

    // Valeur + unité
    const valueDetailsDiv = document.createElement('div');
    valueDetailsDiv.className = 'slider-value-details';
    const valueDiv = document.createElement('div');
    valueDiv.className = 'slider-value-container';
    valueDiv.innerHTML = `<span class="slider-value">${config.default}</span>`;
    const unitDiv = document.createElement('div');
    unitDiv.className = 'slider-unit';
    unitDiv.textContent = config.unit;
    valueDetailsDiv.appendChild(valueDiv);
    valueDetailsDiv.appendChild(unitDiv);

    // Assemblage
    sliderGroup.appendChild(labelDiv);
    sliderGroup.appendChild(sliderContainer);
    sliderGroup.appendChild(valueDetailsDiv);
    return sliderGroup;
}

// Fonction utilitaire pour générer une catégorie (DOM)
function creerCategorie(categoryId, config) {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'category';
    categoryDiv.setAttribute('data-category', categoryId);
    const titleDiv = document.createElement('h2');
    titleDiv.className = 'category-title';
    titleDiv.innerHTML = `<span class="category-icon">${config.icon}</span>${config.title}`;
    const gridDiv = document.createElement('div');
    gridDiv.className = 'sliders-grid';
    categoryDiv.appendChild(titleDiv);
    categoryDiv.appendChild(gridDiv);
    return { categoryDiv, gridDiv };
}

// Petite fonction utilitaire pour réduire la fréquence d'appel d'une fonction
function debounce(fn, delay = 150) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

/**
 * 📊 Gestion des données salariales par secteur (chargées depuis JSON)
 */
class SectorManager {
    constructor(data){
        this.sectors = new Map();
        data.sectors.forEach(sec=>this.sectors.set(sec.id, sec));
        this.currentId = 'general';
        this.populateSelector();
    }
    populateSelector(){
        const select = document.getElementById('sector-select');
        if(!select) return;
        // Inject options dynamiques si non déjà faits
        if(select.options.length<=1){
            this.sectors.forEach(sec=>{
                if(sec.id!== 'general'){ // general déjà présent
                    const opt=document.createElement('option');
                    opt.value = sec.id; opt.textContent = sec.label;
                    select.appendChild(opt);
                }
            });
        }
        select.addEventListener('change', e=>{
            this.currentId = e.target.value;
            if(window.simulateur){
                window.simulateur.updateResults();
            }
        });
    }
    current(){
        return this.sectors.get(this.currentId) || this.sectors.get('general');
    }
}

// Classe principale du simulateur
class Simulateur {
    constructor() {
        this.manualGrade = 12.2;
        this.baseGrade = this.manualGrade;
        this.slidersModified = false;
        // Horizon par défaut (0 an)
        this.horizonYears = 0;
        this.initializeCategories();
        this.initializeSliders();
        // Création d'une version « debounced » de updateResults pour les sliders
        this.updateResultsDebounced = debounce(this.updateResults.bind(this), 120);
        this.attachEventListeners();
        // Afficher directement tous les sliders (mode avancé)
        this.switchMode('advanced');
    }

    initializeCategories() {
        const categoriesContainer = document.querySelector('.categories');
        categoriesContainer.innerHTML = '';
        this.categoryGrids = {};
        Object.entries(CATEGORIES).forEach(([categoryId, config]) => {
            const { categoryDiv, gridDiv } = creerCategorie(categoryId, config);
            categoriesContainer.appendChild(categoryDiv);
            this.categoryGrids[categoryId] = gridDiv;
        });
    }

    initializeSliders() {
        console.log('Initializing sliders...');
        Object.entries(SLIDERS_CONFIG).forEach(([id, config]) => {
            const grid = this.categoryGrids[config.category];
            console.log(`Slider ${id} - Category: ${config.category}, Grid found: ${!!grid}`);
            if (grid) {
                const sliderElem = creerSlider(id, config, () => {
                    this.updateSliderDisplay(document.getElementById(id));
                    this.updateResults();
                });
                grid.appendChild(sliderElem);
                console.log(`Slider ${id} created and added to DOM`);
            } else {
                console.warn(`No grid found for category: ${config.category}`);
            }
        });
    }

    updateSliderDisplay(slider) {
        const valueDisplay = slider.parentElement.parentElement.querySelector('.slider-value');
        if (valueDisplay) {
            if (slider.id === 'education') {
                const educationLabels = ['BAC', 'BAC+2', 'BAC+5', 'BAC+8'];
                valueDisplay.textContent = educationLabels[slider.value];
            } else {
                valueDisplay.textContent = slider.value;
            }
        }
        const percent = (slider.value - slider.min) / (slider.max - slider.min) * 100;
        slider.style.background = `linear-gradient(to right, var(--category-color) ${percent}%, #E2E8F0 ${percent}%)`;
    }

    attachEventListeners() {
        document.querySelectorAll('input[type="range"]').forEach(slider => {
            // Initialiser l'affichage du slider
            this.updateSliderDisplay(slider);
            
            slider.addEventListener('input', () => {
                this.slidersModified = true;
                this.updateSliderDisplay(slider);
                // Utilise la version débouncée pour éviter les recalculs excessifs
                this.updateResultsDebounced();
            });
        });

        // Listener horizon
        const horizonSel = document.getElementById('horizon-select');
        if(horizonSel){
            horizonSel.addEventListener('change', () => {
                this.horizonYears = parseInt(horizonSel.value, 10);
                this.updateResults();
            });
        }
    }

    calculateResults() {
        const values = this.getSliderValues();
        return this.calculateResultsWithValues(values);
    }
    calculateResultsWithValues(values) {
        let grade = 10;
        Object.entries(SLIDERS_CONFIG).forEach(([sliderId, config]) => {
            if (config.coefficient) {
                const value = values[sliderId];
                if (typeof value !== 'undefined') {
                    grade += (value - config.default) * config.coefficient;
                }
            }
        });
        return { grade: Math.max(0, Math.min(20, grade)) };
    }
    calculateFinalGrade(sliderResults) {
        if (!this.slidersModified) return this.manualGrade;
        const defaultResults = this.calculateResultsWithDefaultValues();
        const gradeDifference = sliderResults.grade - defaultResults.grade;
        return Math.max(0, Math.min(20, this.baseGrade + gradeDifference));
    }
    calculateResultsWithDefaultValues() {
        const defaultValues = {};
        Object.entries(SLIDERS_CONFIG).forEach(([id, config]) => {
            defaultValues[id] = config.default;
        });
        return this.calculateResultsWithValues(defaultValues);
    }
    getSliderValues() {
        const values = {};
        Object.keys(SLIDERS_CONFIG).forEach(id => {
            const slider = document.getElementById(id);
            if (slider) {
                values[id] = parseFloat(slider.value);
            } else {
                console.warn(`Slider ${id} not found in DOM`);
            }
        });
        console.log('Slider values:', values);
        return values;
    }
    updateResults() {
        console.log('=== updateResults() called ===');
        const sliderResults = this.calculateResults();
        const displayGrade = this.calculateFinalGrade(sliderResults);
        console.log('Display grade:', displayGrade);
        const gradeContainer = document.querySelector('#grade-result');
        const gradeTitle = document.querySelector('.result-card h3');
        gradeTitle.textContent = this.slidersModified ? 'Note moyenne estimée' : 'Note moyenne actuelle';
        if (!gradeContainer.querySelector('.grade-controls')) {
            gradeContainer.innerHTML = `
                <button class="grade-btn minus">-</button>
                <span>${displayGrade.toFixed(1)}/20</span>
                <button class="grade-btn plus">+</button>
            `;
            gradeContainer.querySelector('.minus').addEventListener('click', () => this.adjustGrade(-0.1));
            gradeContainer.querySelector('.plus').addEventListener('click', () => this.adjustGrade(0.1));
        } else {
            gradeContainer.querySelector('span').textContent = `${displayGrade.toFixed(1)}/20`;
        }
        const percentile = this.calculatePercentile(displayGrade);
        document.querySelector('.benchmark-text').textContent = `Tu fais mieux que ${Math.round(percentile)}% des élèves`;
        document.querySelector('.benchmark-progress').style.width = `${percentile}%`;

        // Mise à jour du salaire
        const salaryBox = document.querySelector('#salary-result');
        if (salaryBox) {
            const salarySpan = document.getElementById('salary-display');
            if (salarySpan) {
                const calculatedSalary = this.calculateSalary(displayGrade, this.getSliderValues().education, this.horizonYears);
                salarySpan.textContent = `${calculatedSalary} €/mois`;
                this.updateSalaryChart(displayGrade, this.getSliderValues().education);
            }
        }
        // Mettre à jour barre mobile si présente
        const mobGrade = document.getElementById('mobile-grade');
        const mobSalary = document.getElementById('mobile-salary');
        if(mobGrade && mobSalary){
            mobGrade.textContent = displayGrade.toFixed(1);
            const mobileSalary = this.calculateSalary(displayGrade, this.getSliderValues().education, this.horizonYears);
            mobSalary.textContent = `${mobileSalary} €`;
        }
    }
    calculatePercentile(grade) {
        const mean = 12.2;
        const std = 3.0;
        function norm_cdf(x, mean, std) {
            return 0.5 * (1 + erf((x - mean) / (std * Math.sqrt(2))));
        }
        function erf(x) {
            const sign = (x >= 0) ? 1 : -1;
            x = Math.abs(x);
            const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741;
            const a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911;
            const t = 1 / (1 + p * x);
            const y = 1 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
            return sign * y;
        }
        let percentile = 100 * norm_cdf(grade, mean, std);
        return Math.max(0, Math.min(100, percentile));
    }
    calculateSalary(grade, education, years = 0) {
        // 💰 CALCUL RÉALISTE avec prise en compte du secteur
        const sector = window.sectorManager?.current();
        if(!sector){
            console.warn('[Salaire] Pas de données secteur, utilisation fallback');
        }

        const bases = sector?.base || [1480,1650,1850];
        const eduLevel = (education ?? 0);
        const baseSalary = bases[Math.min(eduLevel, bases.length-1)] || bases[0];

        // Projection dans le temps selon les croissances du secteur
        const risk = sector?.automationRisk ?? 0;
        const impactAI = 1 - risk * 0.5; // max -50%
        const g1 = (sector?.growthEarly ?? 0.03) * impactAI;
        const g2 = (sector?.growthLate ?? 0.015) * impactAI;

        let projectedSalary;
        if(years <= 5){
            projectedSalary = baseSalary * Math.pow(1 + g1, years);
        } else {
            const salary5 = baseSalary * Math.pow(1 + g1, 5);
            projectedSalary = salary5 * Math.pow(1 + g2, years - 5);
        }

        // Impact continu de la note (±3 % par point autour de 12, borné ±30 %)
        const impactPerPoint = 0.03;
        const gradeDiff = grade - 12;
        let performanceMultiplier = 1 + (gradeDiff * impactPerPoint);
        performanceMultiplier = Math.max(0.7, Math.min(1.3, performanceMultiplier));

        return Math.round(projectedSalary * performanceMultiplier);
    }
    initSalaryChart(){
        const ctx = document.getElementById('salary-chart');
        if(!ctx || window.Chart === undefined) return;
        this.salaryChart = new Chart(ctx, {
            type:'line',
            data:{
                labels:[...Array(11).keys()],
                datasets:[{label:'Salaire projeté',data:[],backgroundColor:'#2563EB33',borderColor:'#2563EB',fill:true,tension:0.25}]
            },
            options:{responsive:true,plugins:{legend:{display:false}},scales:{x:{title:{display:true,text:'Années'}},y:{title:{display:true,text:'€ net/mois'},beginAtZero:false}}}
        });
    }

    updateSalaryChart(grade, education){
        if(!this.salaryChart) return;
        const arr=[];
        for(let n=0;n<=10;n++){
            arr.push(this.calculateSalary(grade, education, n));
        }
        this.salaryChart.data.datasets[0].data = arr;
        this.salaryChart.update();
    }
    adjustGrade(delta) {
        this.manualGrade = Math.max(0, Math.min(20, this.manualGrade + delta));
        this.baseGrade = this.manualGrade;
        this.slidersModified = false;
        this.updateResults();
    }
    switchMode(mode) {
        // Mode switching désactivé - toujours en mode avancé
        console.log(`[Simulateur] Mode switching disabled - always in advanced mode (${mode} requested)`);
        
        // S'assurer que tous les sliders sont visibles
        const sliderGroups = document.querySelectorAll('.slider-group');
        sliderGroups.forEach(group => {
            group.classList.remove('hidden');
        });
        
        this.updateResults();
    }
    resetSliders() {
        this.slidersModified = false;
        Object.entries(SLIDERS_CONFIG).forEach(([id, config]) => {
            const slider = document.getElementById(id);
            if (slider) {
                slider.value = config.default;
                this.updateSliderDisplay(slider);
            }
        });
        this.updateResults();
    }
}

// Ancienne classe TooltipManager supprimée - remplacée par la version moderne

/**
 * 🚀 ARCHITECTURE MODERNISÉE - Gestionnaire d'erreurs centralisé
 */
class ErrorHandler {
    static log(error, context = 'Unknown') {
        console.error(`[${context}] Error:`, error);
        // Ici on pourrait ajouter un système de reporting
    }
    
    static handle(fn, context) {
        return (...args) => {
            try {
                return fn(...args);
            } catch (error) {
                ErrorHandler.log(error, context);
                return null;
            }
        };
    }
}

/**
 * 🎯 Système de tooltips unifié et moderne
 */
class TooltipManager {
    constructor() {
        this.activeTooltips = new Set();
        this.init();
    }
    
    init() {
        this.bindGlobalEvents();
    }
    
    bindGlobalEvents() {
        document.addEventListener('click', this.handleGlobalClick.bind(this));
        document.addEventListener('touchend', this.handleGlobalClick.bind(this));
    }
    
    handleGlobalClick(e) {
        if (!e.target.closest('.info-button') && !e.target.closest('.tooltip, .mobile-tooltip')) {
            this.closeAll();
        }
    }
    
    toggle(button) {
        const tooltip = this.findTooltip(button);
        if (!tooltip) return false;
        
        const isActive = tooltip.classList.contains('show') || tooltip.classList.contains('active');
        
        // Fermer tous les autres tooltips
        this.closeAll();
        
        // Toggle le tooltip actuel
        if (!isActive) {
            this.show(tooltip);
        }
        
        return true;
    }
    
    findTooltip(button) {
        // Ignorer les tooltips de la barre mobile (gérés par MobileUIManager)
        if (button.closest('.mobile-bar')) {
            return null;
        }
        
        // Chercher par data-tooltip-id d'abord
        const tooltipId = button.getAttribute('data-tooltip-id');
        if (tooltipId) {
            const tooltip = document.getElementById(tooltipId);
            // Ignorer si c'est un tooltip mobile
            if (tooltip && tooltip.classList.contains('mobile-tooltip')) {
                return null;
            }
            return tooltip;
        }
        
        // Sinon chercher le tooltip suivant
        return button.nextElementSibling?.classList.contains('tooltip') ? 
               button.nextElementSibling : null;
    }
    
    show(tooltip) {
        if (tooltip.classList.contains('mobile-tooltip')) {
            tooltip.classList.add('active');
        } else {
            tooltip.classList.add('show');
        }
        this.activeTooltips.add(tooltip);
    }
    
    hide(tooltip) {
        tooltip.classList.remove('show', 'active');
        this.activeTooltips.delete(tooltip);
    }
    
    closeAll() {
        this.activeTooltips.forEach(tooltip => this.hide(tooltip));
        this.activeTooltips.clear();
    }
}

// Instance globale du gestionnaire de tooltips
const tooltipManager = new TooltipManager();

// Fonction globale pour compatibilité (sera supprimée plus tard)
function toggleTooltip(button) {
    return tooltipManager.toggle(button);
}

/**
 * 📱 Gestionnaire moderne de l'interface mobile
 */
class MobileUIManager {
    constructor() {
        this.burgerBtn = null;
        this.mobileNav = null;
        this.mobileBar = null;
        this.isMenuOpen = false;
        this.init();
    }
    
    init() {
        this.findElements();
        this.bindEvents();
        this.setupLayout();
        this.setupMobileTooltips();
    }
    
    findElements() {
        this.burgerBtn = document.getElementById('burger-btn');
        this.mobileNav = document.getElementById('mobile-nav');
        this.mobileBar = document.getElementById('mobile-bar');
    }
    
    bindEvents() {
        if (this.burgerBtn && this.mobileNav) {
            this.burgerBtn.addEventListener('click', 
                ErrorHandler.handle(this.toggleMenu.bind(this), 'MobileUIManager.toggleMenu'));
            
            document.addEventListener('click', 
                ErrorHandler.handle(this.handleOutsideClick.bind(this), 'MobileUIManager.outsideClick'));
        }
        
        window.addEventListener('resize', 
            ErrorHandler.handle(this.handleResize.bind(this), 'MobileUIManager.resize'));
    }
    
    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        this.burgerBtn.classList.toggle('active', this.isMenuOpen);
        this.mobileNav.classList.toggle('active', this.isMenuOpen);
        document.body.classList.toggle('nav-open', this.isMenuOpen);
    }
    
    closeMenu() {
        if (this.isMenuOpen) {
            this.isMenuOpen = false;
            this.burgerBtn.classList.remove('active');
            this.mobileNav.classList.remove('active');
            document.body.classList.remove('nav-open');
        }
    }
    
    handleOutsideClick(e) {
        if (this.isMenuOpen && 
            !this.burgerBtn.contains(e.target) && 
            !this.mobileNav.contains(e.target)) {
            this.closeMenu();
        }
    }
    
    handleResize() {
        this.adjustLayout();
    }
    
    setupLayout() {
        this.adjustLayout();
        // Ajustement après un délai pour s'assurer que tout est chargé
        setTimeout(() => this.adjustLayout(), 100);
    }
    
    adjustLayout() {
        if (!this.mobileBar || window.innerWidth > 768) {
            this.resetLayout();
            return;
        }
        
        const instructionsCard = document.querySelector('.disclaimer-card');
        if (!instructionsCard) return;
        
        const barHeight = this.mobileBar.offsetHeight;
        const marginTop = barHeight + 20;
        
        instructionsCard.style.marginTop = `${marginTop}px`;
        instructionsCard.style.marginBottom = '20px';
        
        console.log(`[MobileUIManager] Layout adjusted: ${marginTop}px margin-top`);
    }
    
    resetLayout() {
        const instructionsCard = document.querySelector('.disclaimer-card');
        if (instructionsCard) {
            instructionsCard.style.marginTop = '20px';
            instructionsCard.style.marginBottom = '';
        }
    }
    
    setupMobileTooltips() {
        console.log('[MobileUIManager] Setting up mobile tooltips...');
        
        const gradeButton = document.querySelector('[data-tooltip-id="mobile-grade-tooltip"]');
        const salaryButton = document.querySelector('[data-tooltip-id="mobile-salary-tooltip"]');
        const gradeTooltip = document.getElementById('mobile-grade-tooltip');
        const salaryTooltip = document.getElementById('mobile-salary-tooltip');
        
        console.log('Mobile tooltips found:', {
            gradeButton: !!gradeButton,
            salaryButton: !!salaryButton,
            gradeTooltip: !!gradeTooltip,
            salaryTooltip: !!salaryTooltip
        });
        
        if (gradeButton && gradeTooltip) {
            this.bindMobileTooltip(gradeButton, gradeTooltip, salaryTooltip, 'Grade');
        }
        
        if (salaryButton && salaryTooltip) {
            this.bindMobileTooltip(salaryButton, salaryTooltip, gradeTooltip, 'Salary');
        }
        
        // Fermer les tooltips en cliquant ailleurs
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.mobile-bar .info-button') && 
                !e.target.closest('.mobile-bar .mobile-tooltip')) {
                if (gradeTooltip) gradeTooltip.classList.remove('active');
                if (salaryTooltip) salaryTooltip.classList.remove('active');
            }
        });
        
        // Support tactile
        document.addEventListener('touchend', (e) => {
            if (!e.target.closest('.mobile-bar .info-button') && 
                !e.target.closest('.mobile-bar .mobile-tooltip')) {
                if (gradeTooltip) gradeTooltip.classList.remove('active');
                if (salaryTooltip) salaryTooltip.classList.remove('active');
            }
        });
    }
    
    bindMobileTooltip(button, tooltip, otherTooltip, name) {
        const handleTooltipToggle = (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            console.log(`[MobileUIManager] ${name} tooltip clicked`);
            
            // Fermer l'autre tooltip
            if (otherTooltip) {
                otherTooltip.classList.remove('active');
            }
            
            // Toggle ce tooltip
            const wasActive = tooltip.classList.contains('active');
            tooltip.classList.toggle('active');
            
            console.log(`[MobileUIManager] ${name} tooltip now active:`, !wasActive);
        };
        
        // Événements click et touch
        button.addEventListener('click', handleTooltipToggle);
        button.addEventListener('touchend', handleTooltipToggle);
        
        // Prévenir le comportement par défaut sur touchstart
        button.addEventListener('touchstart', (e) => {
            e.preventDefault();
        });
    }
}

// Ancienne gestion des tooltips supprimée - maintenant gérée par TooltipManager

// Gestion des modales
function showCalculDetails() {
    document.getElementById('calcul-modal').style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Fermer la modale si on clique en dehors
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

function showInstructions() {
    document.getElementById('instructions-modal').style.display = 'block';
} 

// -------- Initialisation asynchrone --------

document.addEventListener('DOMContentLoaded', () => {
    fetch('data/salary_sectors.json')
        .then(res => res.ok ? res.json() : Promise.reject('HTTP '+res.status))
        .then(json => {
            window.sectorManager = new SectorManager(json);
        })
        .catch(err => {
            console.warn('[SectorManager] Chargement JSON échoué :', err);
            window.sectorManager = new SectorManager({
                sectors: [{ id: 'general', label: 'Général', base: [1480, 1650, 1850], growthEarly: 0.03, growthLate: 0.015 }]
            });
        })
        .finally(() => {
            // Instanciation du simulateur après disponibilité du SectorManager
            window.simulateur = new Simulateur();
            window.simulateur.initSalaryChart();
            window.toggleTooltip = toggleTooltip;
            window.switchMode = mode => window.simulateur.switchMode(mode);
            window.resetSliders = () => window.simulateur.resetSliders();
            window.updateResults = () => window.simulateur.updateResults();
            // Initialisation mobile
            new MobileUIManager();
        });
}); 