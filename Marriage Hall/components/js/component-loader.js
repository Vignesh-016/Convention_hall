// Component Loader
class ComponentLoader {
    constructor() {
        this.components = [
            'header',
            'hero', 
            'about',
            'happiness',
            'event',
            'cta',
            'gallery',
            'features',
            'testimonials',
            'venue',
            'footer'
        ];
        this.loadedComponents = new Set();
    }

    async loadComponent(componentName) {
        try {
            // Load HTML
            const htmlResponse = await fetch(`components/${componentName}.html`);
            const htmlContent = await htmlResponse.text();
            
            // Load CSS
            const cssResponse = await fetch(`components/css/${componentName}.css`);
            const cssContent = await cssResponse.text();
            
            // Load JS
            const jsResponse = await fetch(`components/js/${componentName}.js`);
            const jsContent = await jsResponse.text();
            
            return {
                html: htmlContent,
                css: cssContent,
                js: jsContent
            };
        } catch (error) {
            console.error(`Error loading component ${componentName}:`, error);
            return null;
        }
    }

    async loadAllComponents() {
        const loadPromises = this.components.map(async (componentName) => {
            const component = await this.loadComponent(componentName);
            if (component) {
                this.injectComponent(componentName, component);
                this.loadedComponents.add(componentName);
            }
        });

        await Promise.all(loadPromises);
        console.log('All components loaded successfully');
    }

    injectComponent(componentName, component) {
        // Inject CSS
        const styleId = `${componentName}-styles`;
        if (!document.getElementById(styleId)) {
            const style = document.createElement('style');
            style.id = styleId;
            style.textContent = component.css;
            document.head.appendChild(style);
        }

        // Inject HTML
        const containerId = `${componentName}-container`;
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = component.html;
        }

        // Execute JS
        try {
            const script = document.createElement('script');
            script.textContent = component.js;
            document.head.appendChild(script);
        } catch (error) {
            console.error(`Error executing ${componentName} script:`, error);
        }
    }

    // Method to load a specific component
    async loadSpecificComponent(componentName) {
        if (this.loadedComponents.has(componentName)) {
            console.log(`Component ${componentName} already loaded`);
            return;
        }

        const component = await this.loadComponent(componentName);
        if (component) {
            this.injectComponent(componentName, component);
            this.loadedComponents.add(componentName);
        }
    }

    // Method to reload a component
    async reloadComponent(componentName) {
        this.loadedComponents.delete(componentName);
        await this.loadSpecificComponent(componentName);
    }
}

// Initialize component loader when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
    const loader = new ComponentLoader();
    await loader.loadAllComponents();
    
    // Make loader globally available for debugging
    window.componentLoader = loader;
});
