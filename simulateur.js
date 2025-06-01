document.addEventListener('DOMContentLoaded', function() {
    // Valeurs initiales pour obtenir une note de 12.2
    const defaultValues = {
        'sleep': 7,
        'sport': 3,
        'breakfast': 4,
        'cannabis': 0,
        'fruits': 4,
        'dairy': 3,
        'cereals': 2,
        'sugar': 5,
        'fats': 4,
        'self-esteem': 5,
        'mindset': 5,
        'grit': 5,
        'mental-health': 6,
        'class-climate': 6,
        'family-support': 6,
        'participation': 5,
        'study_environment': 5,
        'resources_access': 5,
        'education': 0
    };

    // Initialiser les sliders avec les valeurs par défaut
    Object.entries(defaultValues).forEach(([id, value]) => {
        const slider = document.getElementById(id);
        if (slider) {
            slider.value = value;
            slider.dispatchEvent(new Event('input'));
        }
    });

    // Fonction pour changer de mode
    window.switchMode = function(mode) {
        const basicBtn = document.getElementById('basic-btn');
        const advancedBtn = document.getElementById('advanced-btn');
        const description = document.getElementById('mode-description');
        const sliderGroups = document.querySelectorAll('.slider-group');

        if (mode === 'basic') {
            basicBtn.classList.add('active');
            advancedBtn.classList.remove('active');
            description.textContent = 'Mode basique : Focus sur les 6 facteurs les plus impactants pour la réussite scolaire.';
            
            // Cacher les sliders non essentiels
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
            
            // Montrer tous les sliders
            sliderGroups.forEach(group => {
                group.classList.remove('hidden');
            });
        }
        updateResults();
    };

    // Fonction pour réinitialiser les sliders
    window.resetSliders = function() {
        Object.entries(defaultValues).forEach(([id, value]) => {
            const slider = document.getElementById(id);
            if (slider) {
                slider.value = value;
                slider.dispatchEvent(new Event('input'));
            }
        });
        updateResults();
    };

    // Fonction pour mettre à jour les résultats
    function updateResults() {
        // Récupérer les valeurs des sliders
        const sleep = parseFloat(document.getElementById('sleep').value);
        const sport = parseFloat(document.getElementById('sport').value);
        const breakfast = parseFloat(document.getElementById('breakfast').value);
        const cannabis = parseFloat(document.getElementById('cannabis').value);
        const fruits = parseFloat(document.getElementById('fruits').value);
        const dairy = parseFloat(document.getElementById('dairy').value);
        const cereals = parseFloat(document.getElementById('cereals').value);
        const sugar = parseFloat(document.getElementById('sugar').value);
        const fats = parseFloat(document.getElementById('fats').value);
        const selfEsteem = parseFloat(document.getElementById('self-esteem').value);
        const mindset = parseFloat(document.getElementById('mindset').value);
        const grit = parseFloat(document.getElementById('grit').value);
        const mentalHealth = parseFloat(document.getElementById('mental-health').value);
        const classClimate = parseFloat(document.getElementById('class-climate').value);
        const familySupport = parseFloat(document.getElementById('family-support').value);
        const participation = parseFloat(document.getElementById('participation').value);
        const studyEnvironment = parseFloat(document.getElementById('study_environment').value);
        const resourcesAccess = parseFloat(document.getElementById('resources_access').value);
        const education = parseInt(document.getElementById('education').value);

        // Calculer la note moyenne
        let grade = 10; // Note de base

        // Facteurs positifs
        grade += (sleep - 7) * 0.3; // Impact du sommeil
        grade += sport * 0.2; // Impact du sport
        grade += breakfast * 0.3; // Impact du petit-déjeuner
        grade -= cannabis * 0.6; // Impact négatif du cannabis
        grade += (fruits - 5) * 0.2; // Impact des fruits et légumes
        grade += (dairy - 2) * 0.1; // Impact des produits laitiers
        grade += cereals * 0.1; // Impact des féculents complets
        grade -= (sugar - 5) * 0.1; // Impact négatif des sucres
        grade -= (fats - 5) * 0.1; // Impact négatif des graisses

        // Facteurs psychologiques et sociaux
        grade += (selfEsteem - 5) * 0.3;
        grade += (mindset - 5) * 0.2;
        grade += (grit - 5) * 0.3;
        grade += (mentalHealth - 5) * 0.3;
        grade += (classClimate - 5) * 0.2;
        grade += (familySupport - 5) * 0.3;
        grade += (participation - 5) * 0.2;
        grade += (studyEnvironment - 5) * 0.1;
        grade += (resourcesAccess - 5) * 0.1;

        // Limiter la note entre 0 et 20
        grade = Math.max(0, Math.min(20, grade));

        // Mettre à jour l'affichage de la note
        document.querySelector('#grade-result span').textContent = grade.toFixed(1) + '/20';

        // Calculer le positionnement national (percentile)
        let percentile = 50 + (grade - 10) * 5;
        percentile = Math.max(0, Math.min(100, percentile));

        // Mettre à jour le texte du benchmark
        document.querySelector('.benchmark-text').textContent = `Tu fais mieux que ${Math.round(percentile)}% des élèves`;
        document.querySelector('.benchmark-progress').style.width = `${percentile}%`;

        // Calculer le salaire estimé en fonction du niveau d'études
        let salary = 1500; // Salaire de base
        salary += (grade - 10) * 50; // Ajustement selon la note
        salary += education * 300; // +300€ par niveau d'études

        // Mettre à jour l'affichage du salaire
        document.querySelector('#salary-result span').textContent = `${Math.round(salary)} €/mois`;
    }

    // Attacher la fonction updateResults à tous les sliders
    document.querySelectorAll('input[type="range"]').forEach(slider => {
        slider.addEventListener('input', function() {
            // Mettre à jour la valeur affichée
            const valueDisplay = this.parentElement.nextElementSibling;
            if (valueDisplay) {
                if (this.id === 'education') {
                    const educationLabels = ['BAC', 'BAC+2', 'BAC+5', 'BAC+8'];
                    valueDisplay.textContent = educationLabels[this.value];
                } else {
                    valueDisplay.textContent = this.value;
                }
            }
            
            // Mettre à jour le gradient du slider
            const percent = (this.value - this.min) / (this.max - this.min) * 100;
            this.style.background = `linear-gradient(to right, var(--category-color) ${percent}%, #E2E8F0 ${percent}%)`;
            
            updateResults();
        });
        
        // Déclencher l'événement input pour initialiser les valeurs
        slider.dispatchEvent(new Event('input'));
    });

    // Initialiser en mode basique
    switchMode('basic');
}); 