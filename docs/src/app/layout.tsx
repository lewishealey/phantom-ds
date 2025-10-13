import type { Metadata } from 'next'
import './globals.css'
import 'design-system/dist/styles.css'

export const metadata: Metadata = {
  title: 'Design System Docs',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-[color:var(--ds-text)]">
        <div className="mx-auto max-w-5xl p-6">
          {children}
        </div>
      </body>
    </html>
  )
}


