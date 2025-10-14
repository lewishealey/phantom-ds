'use client'

import { Heading, Text, Button } from 'design-system'

export default function Page() {
  return (
    <main className="space-y-6">
      <Heading as="h1" size="lg">Design System Docs</Heading>
      <Text>Browse component API and embedded stories.</Text>
      <div className="flex gap-3">
        <Button onClick={() => window.open('http://localhost:6006', '_blank')}>Open Storybook</Button>
      </div>
    </main>
  )
}


