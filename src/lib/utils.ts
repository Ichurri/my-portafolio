import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Función para navegar suavemente a una sección con animación
 * @param {string} sectionId - El ID de la sección sin el #
 * @param {number} duration - Duración de la animación en milisegundos
 * @param {number} offset - Offset en píxeles (útil para ajustar la posición por encabezados fijos)
 */
export function scrollToSection(sectionId: string, duration = 1000, offset = 0) {
  // Evitar ejecución durante SSR
  if (typeof window === 'undefined') return;
  
  const targetElement = document.getElementById(sectionId);
  if (!targetElement) return;
  
  // Obtener la altura del header para ajustar el desplazamiento
  const header = document.querySelector('header');
  const headerHeight = header ? header.offsetHeight : 0;
  
  // Ajustar el offset con la altura del header si no se proporciona un offset específico
  const adjustedOffset = offset || headerHeight;
  
  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - adjustedOffset;
  const startPosition = window.pageYOffset;
  const distanceToTravel = targetPosition - startPosition;
  let startTime: number | null = null;

  function animationStep(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    const easedProgress = easeInOutCubic(progress);
    
    window.scrollTo(0, startPosition + distanceToTravel * easedProgress);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animationStep);
    } else {
      // Cuando la animación termine, aplicar la clase de animación a la sección
      if (targetElement && !targetElement.classList.contains('section-entering')) {
        targetElement.classList.add('section-entering');
        
        // Quitar la clase después de la animación
        setTimeout(() => {
          targetElement.classList.remove('section-entering');
        }, 1000);
      }
    }
  }
  
  // Función easing para hacer la animación más natural
  function easeInOutCubic(t: number) {
    return t < 0.5 
      ? 4 * t * t * t 
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }
  
  requestAnimationFrame(animationStep);
}
