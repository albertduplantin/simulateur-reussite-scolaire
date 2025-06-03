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
            description: "Un petit-déjeuner équilibré améliore la concentration et les performances cognitives le matin.",
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

// Classe principale du simulateur
class Simulateur {
    constructor() {
        this.manualGrade = 12.2; // Note de départ par défaut
        this.baseGrade = this.manualGrade; // Note de base pour les calculs
        this.slidersModified = false; // Pour suivre si les sliders ont été modifiés
        this.initializeCategories();
        this.initializeSliders();
        this.attachEventListeners();
        this.switchMode('basic');
    }

    // Initialisation des catégories
    initializeCategories() {
        const categoriesContainer = document.querySelector('.categories');
        
        // Vider le conteneur
        categoriesContainer.innerHTML = '';
        
        // Créer chaque catégorie
        Object.entries(CATEGORIES).forEach(([categoryId, config]) => {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'category';
            categoryDiv.setAttribute('data-category', categoryId);
            
            // Créer le titre de la catégorie
            const titleDiv = document.createElement('h2');
            titleDiv.className = 'category-title';
            titleDiv.innerHTML = `
                <span class="category-icon">${config.icon}</span>
                ${config.title}
            `;
            
            // Créer la grille pour les sliders
            const gridDiv = document.createElement('div');
            gridDiv.className = 'sliders-grid';
            
            // Assembler la catégorie
            categoryDiv.appendChild(titleDiv);
            categoryDiv.appendChild(gridDiv);
            categoriesContainer.appendChild(categoryDiv);
        });
    }

    // Initialisation des sliders
    initializeSliders() {
        for (const [id, config] of Object.entries(SLIDERS_CONFIG)) {
            const category = document.querySelector(`.category[data-category="${config.category}"] .sliders-grid`);
            if (category) {
                category.appendChild(this.createSlider(id, config));
            }
        }
    }

    // Création d'un nouveau slider
    createSlider(id, config) {
        const sliderGroup = document.createElement('div');
        sliderGroup.className = `slider-group${config.important ? ' important' : ''}`;
        sliderGroup.id = `slider-group-${id}`; // Ajout d'un ID au groupe pour référence si besoin
        
        // Création du label et du tooltip
        const labelDiv = document.createElement('div');
        labelDiv.className = 'slider-label';
        labelDiv.innerHTML = `
            ${config.label}
            <button class="info-button" onclick="toggleTooltip(this)">i</button>
            <div class="tooltip">
                <div class="tooltip-title">${config.tooltip.title}</div>
                <div class="tooltip-impact">${config.tooltip.impact}</div>
                <div class="tooltip-description">${config.tooltip.description}</div>
                <div class="tooltip-source">${config.tooltip.source}</div>
            </div>
        `;

        // Création du conteneur du slider
        const sliderContainer = document.createElement('div');
        sliderContainer.className = 'slider-container';
        
        // Création de l'input range
        const input = document.createElement('input');
        input.type = 'range';
        input.className = 'slider';
        input.min = config.min;
        input.max = config.max;
        input.value = config.default;
        input.step = config.step;
        input.id = id;
        input.oninput = () => {
            this.updateSliderDisplay(input);
            this.updateResults();
        };

        // Création du wrapper pour la valeur et l'unité
        const valueDetailsDiv = document.createElement('div');
        valueDetailsDiv.className = 'slider-value-details';

        // Création de l'affichage de la valeur
        const valueDiv = document.createElement('div');
        valueDiv.className = 'slider-value-container';
        valueDiv.innerHTML = `
            <span class="slider-value">${config.default}</span>
        `;

        // Création de l'unité
        const unitDiv = document.createElement('div');
        unitDiv.className = 'slider-unit';
        unitDiv.textContent = config.unit;

        // Assemblage des éléments
        sliderContainer.appendChild(input);
        
        valueDetailsDiv.appendChild(valueDiv);
        valueDetailsDiv.appendChild(unitDiv);

        sliderGroup.appendChild(labelDiv);
        sliderGroup.appendChild(sliderContainer);
        sliderGroup.appendChild(valueDetailsDiv); // Ajout du wrapper au lieu de valueDiv et unitDiv séparément

        return sliderGroup;
    }

    // Mise à jour de l'affichage d'un slider
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

        // Mise à jour du gradient
        const percent = (slider.value - slider.min) / (slider.max - slider.min) * 100;
        slider.style.background = `linear-gradient(to right, var(--category-color) ${percent}%, #E2E8F0 ${percent}%)`;
    }

    // Attachement des écouteurs d'événements
    attachEventListeners() {
        document.querySelectorAll('input[type="range"]').forEach(slider => {
            slider.addEventListener('input', () => {
                this.slidersModified = true;
                this.updateSliderDisplay(slider);
                this.updateResults();
            });
        });
    }

    // Calcul des résultats
    calculateResults() {
        const values = this.getSliderValues();
        return this.calculateResultsWithValues(values);
    }

    // Calcul des résultats avec des valeurs spécifiques
    calculateResultsWithValues(values) {
        let grade = 10; // Note de base

        // Calcul par slider en utilisant SLIDERS_CONFIG
        Object.entries(SLIDERS_CONFIG).forEach(([sliderId, config]) => {
            if (config.coefficient) { // Vérifie si le slider a un coefficient
                const value = values[sliderId];
                if (typeof value !== 'undefined') {
                    // La valeur par défaut du slider (config.default) est la référence pour le calcul du delta.
                    // Ainsi, si value === config.default, l'impact sur la note est de 0.
                    grade += (value - config.default) * config.coefficient;
                }
            }
        });

        return {
            grade: Math.max(0, Math.min(20, grade))
        };
    }

    // Calcul de la note finale en tenant compte de la note de base
    calculateFinalGrade(sliderResults) {
        if (!this.slidersModified) {
            return this.manualGrade;
        }
        
        // Calculer la différence par rapport aux valeurs par défaut
        const defaultResults = this.calculateResultsWithDefaultValues();
        const gradeDifference = sliderResults.grade - defaultResults.grade;
        
        // Appliquer cette différence à la note de base
        return Math.max(0, Math.min(20, this.baseGrade + gradeDifference));
    }

    // Calcul des résultats avec les valeurs par défaut
    calculateResultsWithDefaultValues() {
        const defaultValues = {};
        // Utilise les valeurs par défaut de SLIDERS_CONFIG directement
        Object.entries(SLIDERS_CONFIG).forEach(([id, config]) => {
            defaultValues[id] = config.default;
        });
        return this.calculateResultsWithValues(defaultValues);
    }

    // Récupération des valeurs des sliders
    getSliderValues() {
        const values = {};
        // Itère sur SLIDERS_CONFIG pour obtenir les IDs des sliders
        Object.keys(SLIDERS_CONFIG).forEach(id => {
            const slider = document.getElementById(id);
            if (slider) {
                values[id] = parseFloat(slider.value);
            }
        });
        return values;
    }

    // Mise à jour des résultats affichés
    updateResults() {
        const sliderResults = this.calculateResults();
        const displayGrade = this.calculateFinalGrade(sliderResults);
        
        // Mise à jour du titre et de la note
        const gradeContainer = document.querySelector('#grade-result');
        const gradeTitle = document.querySelector('.result-card h3');
        
        if (this.slidersModified) {
            gradeTitle.textContent = 'Note moyenne estimée';
        } else {
            gradeTitle.textContent = 'Note moyenne actuelle';
        }

        if (!gradeContainer.querySelector('.grade-controls')) {
            gradeContainer.innerHTML = `
                <button class="grade-btn minus">-</button>
                <span>${displayGrade.toFixed(1)}/20</span>
                <button class="grade-btn plus">+</button>
            `;

            // Ajout des écouteurs d'événements pour les boutons
            gradeContainer.querySelector('.minus').addEventListener('click', () => this.adjustGrade(-0.1));
            gradeContainer.querySelector('.plus').addEventListener('click', () => this.adjustGrade(0.1));
        } else {
            gradeContainer.querySelector('span').textContent = `${displayGrade.toFixed(1)}/20`;
        }
        
        // Mise à jour du benchmark
        const percentile = this.calculatePercentile(displayGrade);
        document.querySelector('.benchmark-text').textContent = 
            `Tu fais mieux que ${Math.round(percentile)}% des élèves`;
        document.querySelector('.benchmark-progress').style.width = `${percentile}%`;
        
        // Mise à jour du salaire
        document.querySelector('#salary-result span').textContent = 
            `${this.calculateSalary(displayGrade, this.getSliderValues().education)} €/mois`;
    }

    // Calcul du percentile (position nationale) selon une loi normale
    // Source écart-type : discussions enseignants/statisticiens (voir https://les-mathematiques.net/vanilla/discussion/2333969/harmonisation-des-notes-du-baccalaureat)
    calculatePercentile(grade) {
        const mean = 12.2;
        const std = 3.0;
        // Fonction de répartition de la loi normale (approximation de erf)
        function norm_cdf(x, mean, std) {
            return 0.5 * (1 + erf((x - mean) / (std * Math.sqrt(2))));
        }
        // Approximation de la fonction d'erreur (erf)
        function erf(x) {
            // Abramowitz & Stegun formula 7.1.26
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

    // Calcul du salaire
    calculateSalary(grade, education) {
        const baseSalary = 1500;
        const gradeBonus = (grade - 10) * 155; // Ajusté pour obtenir 1810€ avec une note de 12.2
        const educationBonus = education * 300;
        return Math.round(baseSalary + gradeBonus + educationBonus);
    }

    // Ajustement de la note manuelle
    adjustGrade(delta) {
        this.manualGrade = Math.max(0, Math.min(20, this.manualGrade + delta));
        this.baseGrade = this.manualGrade;
        this.slidersModified = false;
        this.updateResults();
    }

    // Gestion des modes (basique/avancé)
    switchMode(mode) {
        const basicBtn = document.getElementById('basic-btn');
        const advancedBtn = document.getElementById('advanced-btn');
        const description = document.getElementById('mode-description');
        const sliderGroups = document.querySelectorAll('.slider-group');

        if (mode === 'basic') {
            basicBtn.classList.add('active');
            advancedBtn.classList.remove('active');
            description.textContent = 'Mode basique : Focus sur les 6 facteurs les plus impactants pour la réussite scolaire.';
            
            sliderGroups.forEach(group => {
                if (!group.classList.contains('important')) {
                    group.classList.add('hidden');
                } else {
                    group.classList.remove('hidden');
                }
            });
        } else {
            advancedBtn.classList.add('active');
            basicBtn.classList.remove('active');
            description.textContent = 'Mode avancé : Accès à tous les facteurs influençant la réussite scolaire.';
            
            sliderGroups.forEach(group => {
                group.classList.remove('hidden');
            });
        }
        this.updateResults();
    }

    // Réinitialisation des sliders
    resetSliders() {
        this.slidersModified = false;
        // Utilise SLIDERS_CONFIG pour réinitialiser
        Object.entries(SLIDERS_CONFIG).forEach(([id, config]) => {
            const slider = document.getElementById(id);
            if (slider) {
                slider.value = config.default; // Utilise la valeur par défaut de SLIDERS_CONFIG
                this.updateSliderDisplay(slider);
            }
        });
        this.updateResults();
    }
}

// Gestion des tooltips
class TooltipManager {
    static toggleTooltip(button) {
        // Fermer tous les tooltips ouverts
        document.querySelectorAll('.tooltip.show').forEach(tooltip => {
            if (tooltip !== button.nextElementSibling) {
                tooltip.classList.remove('show');
            }
        });

        // Basculer l'état du tooltip cliqué
        const tooltip = button.nextElementSibling;
        tooltip.classList.toggle('show');

        // Gestionnaire de clic en dehors pour fermer le tooltip
        const closeTooltip = (event) => {
            if (!tooltip.contains(event.target) && event.target !== button) {
                tooltip.classList.remove('show');
                document.removeEventListener('click', closeTooltip);
            }
        };

        // Ajouter le gestionnaire si le tooltip est affiché
        if (tooltip.classList.contains('show')) {
            setTimeout(() => {
                document.addEventListener('click', closeTooltip);
            }, 0);
        }
    }
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    window.simulateur = new Simulateur();
    window.toggleTooltip = TooltipManager.toggleTooltip;
    window.switchMode = (mode) => window.simulateur.switchMode(mode);
    window.resetSliders = () => window.simulateur.resetSliders();
    window.updateResults = () => window.simulateur.updateResults();
    
    // Réinitialisation au démarrage
    window.simulateur.resetSliders();
});

// Fermeture des tooltips lors d'un clic à l'extérieur
document.addEventListener('click', (e) => {
    if (!e.target.matches('.info-button')) {
        document.querySelectorAll('.tooltip').forEach(tooltip => {
            tooltip.classList.remove('show');
        });
    }
});

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