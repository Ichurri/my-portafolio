'use client';

import { useEffect, useState } from 'react';

interface ClientOnlyProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * ClientOnly component to avoid hydration mismatch errors
 * Only renders children on the client-side
 */
const ClientOnly: React.FC<ClientOnlyProps> = ({ children, fallback = null }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

export default ClientOnly;
