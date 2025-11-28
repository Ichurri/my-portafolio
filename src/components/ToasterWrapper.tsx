'use client';

import { useEffect, useState } from 'react';
import { Toaster } from '@/components/ui/toaster';

/**
 * Wrapper para Toaster que asegura que solo se renderice en el cliente
 * Esto evita problemas de SSR con localStorage
 */
export function ToasterWrapper() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <Toaster />;
}
