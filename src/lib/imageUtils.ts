/**
 * Image optimization utilities
 */

/**
 * Generates a tiny placeholder image as a base64-encoded SVG
 * @param width Width of the placeholder
 * @param height Height of the placeholder
 * @param color Background color of the placeholder
 * @returns Base64-encoded SVG string
 */
export function generatePlaceholderSVG(
  width: number = 200, 
  height: number = 200, 
  color: string = '#f0f0f0'
): string {
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"><rect width="${width}" height="${height}" fill="${color}"/></svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}

/**
 * Creates srcSet for responsive images
 * @param baseUrl Base URL of the image
 * @param sizes Array of sizes to generate [width, height]
 * @returns Object with srcSet and sizes strings
 */
export function createResponsiveImageSrcSet(
  baseUrl: string,
  sizes: [number, number][] = [[640, 360], [768, 432], [1024, 576], [1280, 720]]
): { srcSet: string, sizes: string } {
  // This is a simplified version - in real-world usage, you might want to 
  // implement this with a real image optimization service
  
  // For S3 images, you would typically use a CDN or resize at upload time
  // This is just a placeholder to show the concept
  
  return {
    srcSet: sizes.map(([w]) => `${baseUrl} ${w}w`).join(', '),
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
  };
}

/**
 * Configuration for image optimization
 */
export const imageConfig = {
  // Default quality for JPEG and WebP images
  quality: 75,
  
  // Domains allowed for external images
  domains: [
    'personal-website-s3-bucket.s3.us-east-2.amazonaws.com',
    'img.icons8.com',
    'upload.wikimedia.org',
    'logos-world.net',
    'nocodestartup.io',
  ],
  
  // Default sizes for responsive images
  defaultSizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
};

/**
 * Returns appropriate loading strategy based on image importance
 * @param isPriority Whether the image is important enough to preload
 * @returns 'eager' | 'lazy'
 */
export function getLoadingStrategy(isPriority: boolean): 'eager' | 'lazy' {
  return isPriority ? 'eager' : 'lazy';
}
