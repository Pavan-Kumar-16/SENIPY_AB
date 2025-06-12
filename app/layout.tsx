import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
// app/layout.tsx
'use client'

import { useEffect } from 'react'
import { initPostHog } from '@/lib/posthog'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initPostHog()
  }, [])

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
