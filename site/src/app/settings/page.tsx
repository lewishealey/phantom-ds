import { Heading, Checkbox, Button } from 'design-system'

export default function Settings() {
  return (
    <div className="space-y-4">
      <Heading as="h1" size="lg">Settings</Heading>
      <Checkbox label="Enable notifications" defaultChecked />
      <Button>Save changes</Button>
    </div>
  )
}


