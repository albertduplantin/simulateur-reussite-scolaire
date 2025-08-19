/**
 * 🚀 FONCTIONNALITÉS MODERNES - Architecture évolutive
 * 
 * Ce fichier contient les améliorations modernes pour le simulateur :
 * - Système de notifications
 * - Animations avancées
 * - Sauvegarde locale
 * - Analytics simples
 * - Accessibilité améliorée
 */

'use strict';

/**
 * 🔔 Système de notifications moderne
 */
class NotificationSystem {
    constructor() {
        this.container = null;
        this.notifications = new Map();
        this.init();
    }
    
    init() {
        this.createContainer();
    }
    
    createContainer() {
        this.container = document.createElement('div');
        this.container.id = 'notification-container';
        this.container.className = 'fixed top-4 right-4 z-50 space-y-2';
        this.container.style.cssText = `
            position: fixed;
            top: 1rem;
            right: 1rem;
            z-index: 1070;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            pointer-events: none;
        `;
        document.body.appendChild(this.container);
    }
    
    show(message, type = 'info', duration = 3000) {
        const id = Date.now().toString();
        const notification = this.createNotification(id, message, type);
        
        this.container.appendChild(notification);
        this.notifications.set(id, notification);
        
        // Animation d'entrée
        requestAnimationFrame(() => {
            notification.style.transform = 'translateX(0)';
            notification.style.opacity = '1';
        });
        
        // Auto-suppression
        if (duration > 0) {
            setTimeout(() => this.hide(id), duration);
        }
        
        return id;
    }
    
    createNotification(id, message, type) {
        const notification = document.createElement('div');
        notification.id = `notification-${id}`;
        notification.className = `notification-modern notification-${type}`;
        
        const colors = {
            info: { bg: '#3B82F6', border: '#2563EB' },
            success: { bg: '#10B981', border: '#059669' },
            warning: { bg: '#F59E0B', border: '#D97706' },
            error: { bg: '#EF4444', border: '#DC2626' }
        };
        
        const color = colors[type] || colors.info;
        
        notification.style.cssText = `
            background: white;
            border-left: 4px solid ${color.border};
            border-radius: 8px;
            padding: 1rem;
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
            max-width: 400px;
            transform: translateX(100%);
            opacity: 0;
            transition: all 0.3s ease;
            pointer-events: auto;
            position: relative;
        `;
        
        notification.innerHTML = `
            <div class="flex items-start gap-3">
                <div class="notification-icon" style="color: ${color.bg}; font-size: 1.25rem;">
                    ${this.getIcon(type)}
                </div>
                <div class="flex-1">
                    <p class="text-sm font-medium text-gray-900">${message}</p>
                </div>
                <button class="notification-close" style="color: #6B7280; cursor: pointer; font-size: 1.25rem;">×</button>
            </div>
        `;
        
        // Bouton de fermeture
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => this.hide(id));
        
        return notification;
    }
    
    getIcon(type) {
        const icons = {
            info: 'ℹ️',
            success: '✅',
            warning: '⚠️',
            error: '❌'
        };
        return icons[type] || icons.info;
    }
    
    hide(id) {
        const notification = this.notifications.get(id);
        if (!notification) return;
        
        notification.style.transform = 'translateX(100%)';
        notification.style.opacity = '0';
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
            this.notifications.delete(id);
        }, 300);
    }
    
    clear() {
        this.notifications.forEach((_, id) => this.hide(id));
    }
}

/**
 * 💾 Système de sauvegarde locale
 */
class LocalStorageManager {
    constructor(prefix = 'simulateur_') {
        this.prefix = prefix;
    }
    
    save(key, data) {
        try {
            const serialized = JSON.stringify({
                data,
                timestamp: Date.now(),
                version: '1.0'
            });
            localStorage.setItem(this.prefix + key, serialized);
            return true;
        } catch (error) {
            console.error('[LocalStorageManager] Save error:', error);
            return false;
        }
    }
    
    load(key) {
        try {
            const item = localStorage.getItem(this.prefix + key);
            if (!item) return null;
            
            const parsed = JSON.parse(item);
            return parsed.data;
        } catch (error) {
            console.error('[LocalStorageManager] Load error:', error);
            return null;
        }
    }
    
    remove(key) {
        try {
            localStorage.removeItem(this.prefix + key);
            return true;
        } catch (error) {
            console.error('[LocalStorageManager] Remove error:', error);
            return false;
        }
    }
    
    clear() {
        try {
            Object.keys(localStorage)
                .filter(key => key.startsWith(this.prefix))
                .forEach(key => localStorage.removeItem(key));
            return true;
        } catch (error) {
            console.error('[LocalStorageManager] Clear error:', error);
            return false;
        }
    }
    
    // Sauvegarde automatique des paramètres du simulateur
    saveSimulatorState(sliderValues, results) {
        return this.save('state', {
            sliders: sliderValues,
            results: results,
            savedAt: new Date().toISOString()
        });
    }
    
    loadSimulatorState() {
        return this.load('state');
    }
}

/**
 * 📊 Analytics simples (respectueux de la vie privée)
 */
class SimpleAnalytics {
    constructor() {
        this.events = [];
        this.sessionStart = Date.now();
        this.init();
    }
    
    init() {
        this.trackPageView();
        this.setupEventListeners();
    }
    
    track(event, data = {}) {
        const eventData = {
            event,
            data,
            timestamp: Date.now(),
            sessionTime: Date.now() - this.sessionStart
        };
        
        this.events.push(eventData);
        console.log('[Analytics]', eventData);
        
        // Limite du buffer
        if (this.events.length > 100) {
            this.events = this.events.slice(-50);
        }
    }
    
    trackPageView() {
        this.track('page_view', {
            url: window.location.pathname,
            referrer: document.referrer,
            userAgent: navigator.userAgent.substring(0, 100)
        });
    }
    
    trackSliderChange(sliderId, value) {
        this.track('slider_change', {
            slider: sliderId,
            value: value
        });
    }
    
    trackTooltipOpen(tooltipId) {
        this.track('tooltip_open', {
            tooltip: tooltipId
        });
    }
    
    trackError(error, context) {
        this.track('error', {
            message: error.message,
            context,
            stack: error.stack?.substring(0, 200)
        });
    }
    
    setupEventListeners() {
        // Erreurs JavaScript
        window.addEventListener('error', (e) => {
            this.trackError(e.error || new Error(e.message), 'window_error');
        });
        
        // Erreurs de promesses
        window.addEventListener('unhandledrejection', (e) => {
            this.trackError(new Error(e.reason), 'unhandled_promise');
        });
    }
    
    getStats() {
        const now = Date.now();
        const sessionDuration = now - this.sessionStart;
        
        return {
            sessionDuration: Math.round(sessionDuration / 1000),
            eventsCount: this.events.length,
            lastEvents: this.events.slice(-5),
            errors: this.events.filter(e => e.event === 'error').length
        };
    }
}

/**
 * ♿ Améliorations d'accessibilité
 */
class AccessibilityManager {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupKeyboardNavigation();
        this.setupScreenReaderSupport();
        this.setupFocusManagement();
    }
    
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // Échap pour fermer les tooltips/modales
            if (e.key === 'Escape') {
                this.closeAllOverlays();
            }
            
            // Tab pour navigation
            if (e.key === 'Tab') {
                this.handleTabNavigation(e);
            }
        });
    }
    
    setupScreenReaderSupport() {
        // Annoncer les changements de résultats
        const resultsContainer = document.querySelector('.results');
        if (resultsContainer) {
            resultsContainer.setAttribute('aria-live', 'polite');
            resultsContainer.setAttribute('aria-atomic', 'true');
        }
    }
    
    setupFocusManagement() {
        // Focus visible pour navigation clavier
        const style = document.createElement('style');
        style.textContent = `
            .js-focus-visible :focus:not(.focus-visible) {
                outline: none;
            }
            .js-focus-visible .focus-visible {
                outline: 2px solid var(--primary-color);
                outline-offset: 2px;
            }
        `;
        document.head.appendChild(style);
        document.documentElement.classList.add('js-focus-visible');
    }
    
    closeAllOverlays() {
        // Fermer tooltips
        if (window.tooltipManager) {
            window.tooltipManager.closeAll();
        }
        
        // Fermer menu mobile
        const burgerBtn = document.getElementById('burger-btn');
        const mobileNav = document.getElementById('mobile-nav');
        if (burgerBtn && mobileNav && burgerBtn.classList.contains('active')) {
            burgerBtn.click();
        }
    }
    
    handleTabNavigation(e) {
        // Améliorer la navigation au clavier si nécessaire
        const focusableElements = document.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    }
    
    announceToScreenReader(message) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'assertive');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    }
}

/**
 * 🎨 Gestionnaire d'animations modernes
 */
class AnimationManager {
    constructor() {
        this.observers = new Map();
        this.init();
    }
    
    init() {
        this.setupIntersectionObserver();
        this.setupAnimationUtils();
    }
    
    setupIntersectionObserver() {
        if (!window.IntersectionObserver) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fadeIn');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });
        
        // Observer les cartes pour animations d'entrée
        document.querySelectorAll('.result-card, .slider-group').forEach(el => {
            observer.observe(el);
        });
        
        this.observers.set('intersection', observer);
    }
    
    setupAnimationUtils() {
        // Utilitaires d'animation
        this.fadeIn = (element, duration = 300) => {
            element.style.opacity = '0';
            element.style.transition = `opacity ${duration}ms ease`;
            
            requestAnimationFrame(() => {
                element.style.opacity = '1';
            });
        };
        
        this.slideIn = (element, direction = 'up', duration = 300) => {
            const transforms = {
                up: 'translateY(20px)',
                down: 'translateY(-20px)',
                left: 'translateX(20px)',
                right: 'translateX(-20px)'
            };
            
            element.style.transform = transforms[direction];
            element.style.opacity = '0';
            element.style.transition = `all ${duration}ms ease`;
            
            requestAnimationFrame(() => {
                element.style.transform = 'translate(0)';
                element.style.opacity = '1';
            });
        };
        
        this.bounce = (element) => {
            element.style.animation = 'bounce 0.6s ease';
            setTimeout(() => {
                element.style.animation = '';
            }, 600);
        };
    }
    
    animateResults(resultsElement) {
        if (!resultsElement) return;
        
        const cards = resultsElement.querySelectorAll('.result-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                this.slideIn(card, 'up', 300);
            }, index * 100);
        });
    }
    
    animateSliderChange(slider) {
        if (!slider) return;
        
        // Animation subtle lors du changement
        slider.style.transform = 'scale(1.02)';
        slider.style.transition = 'transform 0.15s ease';
        
        setTimeout(() => {
            slider.style.transform = 'scale(1)';
        }, 150);
    }
}

/**
 * 🚀 Gestionnaire principal des fonctionnalités modernes
 */
class ModernFeaturesManager {
    constructor() {
        this.notifications = new NotificationSystem();
        this.storage = new LocalStorageManager();
        this.analytics = new SimpleAnalytics();
        this.accessibility = new AccessibilityManager();
        this.animations = new AnimationManager();
        
        this.init();
    }
    
    init() {
        console.log('[ModernFeatures] Initializing modern features...');
        
        // Intégration avec le simulateur existant
        this.integrateWithSimulator();
        
        // Sauvegarde automatique
        this.setupAutoSave();
        
        // Notifications de bienvenue
        setTimeout(() => {
            this.notifications.show(
                'Simulateur de réussite scolaire chargé avec succès !',
                'success',
                2000
            );
        }, 1000);
    }
    
    integrateWithSimulator() {
        // Hook dans les événements du simulateur existant
        const originalUpdateResults = window.simulateur?.updateResults;
        if (originalUpdateResults) {
            window.simulateur.updateResults = (...args) => {
                const result = originalUpdateResults.apply(window.simulateur, args);
                
                // Analytics
                this.analytics.track('results_updated');
                
                // Animations
                const resultsContainer = document.querySelector('.results');
                if (resultsContainer) {
                    this.animations.animateResults(resultsContainer);
                }
                
                return result;
            };
        }
        
        // Hook pour les sliders
        document.querySelectorAll('input[type="range"]').forEach(slider => {
            slider.addEventListener('input', (e) => {
                this.analytics.trackSliderChange(e.target.id, e.target.value);
                this.animations.animateSliderChange(e.target);
            });
        });
    }
    
    setupAutoSave() {
        let saveTimeout;
        
        const autoSave = () => {
            if (!window.simulateur) return;
            
            const sliderValues = window.simulateur.getSliderValues();
            const results = window.simulateur.calculateResults();
            
            if (this.storage.saveSimulatorState(sliderValues, results)) {
                console.log('[ModernFeatures] State auto-saved');
            }
        };
        
        // Sauvegarde après changements
        document.addEventListener('input', (e) => {
            if (e.target.type === 'range') {
                clearTimeout(saveTimeout);
                saveTimeout = setTimeout(autoSave, 1000);
            }
        });
    }
    
    // API publique
    showNotification(message, type, duration) {
        return this.notifications.show(message, type, duration);
    }
    
    getAnalytics() {
        return this.analytics.getStats();
    }
    
    saveState() {
        if (!window.simulateur) return false;
        
        const sliderValues = window.simulateur.getSliderValues();
        const results = window.simulateur.calculateResults();
        
        return this.storage.saveSimulatorState(sliderValues, results);
    }
    
    loadState() {
        return this.storage.loadSimulatorState();
    }
}

// Export pour utilisation globale
window.ModernFeaturesManager = ModernFeaturesManager;

// Auto-initialisation quand le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.modernFeatures = new ModernFeaturesManager();
    });
} else {
    window.modernFeatures = new ModernFeaturesManager();
}

