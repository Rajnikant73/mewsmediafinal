'use client';

import { usePathname } from 'next/navigation';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fallback to empty string if usePathname() returns null
  const pathname = usePathname() ?? '';

  if (!pathname.startsWith('/admin/login')) {
    // Add authentication check here
  }

  return <>{children}</>;
}