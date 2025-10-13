import type { Metadata } from 'next'
import './globals.css'
import 'design-system/dist/styles.css'
import { Heading, Text } from 'design-system'

export const metadata: Metadata = {
  title: 'Phantom Site',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="h-full antialiased text-[color:var(--ds-text)]">
        <div className="grid min-h-screen grid-cols-[240px_1fr] grid-rows-[56px_1fr]">
          <header className="col-span-2 flex items-center gap-3 border-b bg-white px-4">
            <Heading size="sm">Phantom</Heading>
            <Text className="text-[color:var(--ds-text-subtle)]">Demo dashboard</Text>
          </header>
          <aside className="border-r p-3">
            <nav className="flex flex-col gap-2 text-sm">
              <a href="/" className="hover:underline">Overview</a>
              <a href="/analytics" className="hover:underline">Analytics</a>
              <a href="/settings" className="hover:underline">Settings</a>
            </nav>
          </aside>
          <main className="p-6">{children}</main>
        </div>
      </body>
    </html>
  )
}


