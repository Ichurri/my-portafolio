import { useEffect } from 'react';

/**
 * Hook para animar secciones cuando se navega a ellas
 * y asegurar que cada sección se alinee correctamente con el header
 */
export function useSectionAnimation() {
  useEffect(() => {
    // Ajustar el posicionamiento de las secciones para que se alineen correctamente
    const adjustSectionPositions = () => {
      // Obtener la altura del header
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 64; // 64px es el valor de h-16
      
      // Aplicar scroll-margin-top a todas las secciones dinámicamente
      const allSections = document.querySelectorAll('section[id]');
      allSections.forEach(section => {
        (section as HTMLElement).style.scrollMarginTop = `${headerHeight}px`;
      });
    };
    
    // Llamar a la función cuando cambie el tamaño de la ventana
    window.addEventListener('resize', adjustSectionPositions);
    
    // Ejecutar una vez al inicio
    adjustSectionPositions();
    
    // Función para manejar el evento de cambio de hash en la URL
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (!hash) return;
      
      const sectionId = hash.substring(1); // Remover el # del hash
      const section = document.getElementById(sectionId);
      
      if (section) {
        // Asegurar que la sección está correctamente posicionada
        adjustSectionPositions();
        
        // Añadir la clase para activar la animación
        if (!section.classList.contains('section-entering')) {
          section.classList.add('section-entering');
          
          // Quitar la clase después de la animación
          setTimeout(() => {
            section.classList.remove('section-entering');
          }, 1000); // Coincide con la duración de la animación
        }
      }
    };

    // Función para manejar el scroll y detectar secciones visibles
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      
      // Obtener la altura del header para el cálculo preciso
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 64;
      
      // Determinar qué sección está más visible en la pantalla
      const viewportHeight = window.innerHeight;
      let maxVisibleArea = 0;
      let mostVisibleSection: Element | null = null;

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        
        // Calcular cuánto de la sección es visible en el viewport
        const visibleTop = Math.max(headerHeight, rect.top);
        const visibleBottom = Math.min(viewportHeight, rect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const visiblePercent = visibleHeight / rect.height;
        
        // Si esta sección tiene más área visible que la anterior, marcarla para animación
        if (visiblePercent > maxVisibleArea) {
          maxVisibleArea = visiblePercent;
          mostVisibleSection = section;
        }
      });

      // Aplicar la clase de animación solo a la sección más visible
      if (mostVisibleSection) {
        const htmlSection = mostVisibleSection as HTMLElement;
        if (!htmlSection.classList.contains('section-entering')) {
          htmlSection.classList.add('section-entering');
        }
      }
    };

    // Añadir listeners
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('scroll', handleScroll);
    
    // Ejecutar una vez al cargar la página para activar la primera sección visible
    handleScroll();
    
    // Limpiar
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', adjustSectionPositions);
    };
  }, []);
}
