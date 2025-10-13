import { Heading, Text, Button } from 'design-system'

export default function ButtonDocs() {
  return (
    <div className="space-y-6">
      <Heading as="h2" size="md">Button</Heading>
      <Text>Primary, Secondary, and Ghost variants styled with Atlassian tokens.</Text>
      <div className="flex gap-3 items-center">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      <section>
        <Heading as="h3" size="sm">API</Heading>
        <pre className="mt-2 rounded bg-[color:var(--ds-neutral)] p-3 text-xs">
{`interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}`}
        </pre>
      </section>
    </div>
  )
}


