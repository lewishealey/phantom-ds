import { Heading, Text, Button, Badge, Lozenge } from 'design-system'

export default function Overview() {
  return (
    <div className="space-y-6">
      <Heading as="h1" size="lg">Overview</Heading>
      <div className="flex gap-2 items-center">
        <Badge appearance="primary">3 New</Badge>
        <Lozenge tone="success">Healthy</Lozenge>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-white p-4 shadow-sm">
          <Heading size="sm">Card A</Heading>
          <Text className="mt-1">Some metric</Text>
          <Button className="mt-3">View</Button>
        </div>
        <div className="rounded-lg border bg-white p-4 shadow-sm">
          <Heading size="sm">Card B</Heading>
          <Text className="mt-1">Another metric</Text>
          <Button className="mt-3" variant="secondary">Details</Button>
        </div>
        <div className="rounded-lg border bg-white p-4 shadow-sm">
          <Heading size="sm">Card C</Heading>
          <Text className="mt-1">More metric</Text>
          <Button className="mt-3" variant="ghost">Explore</Button>
        </div>
      </div>
    </div>
  )
}


