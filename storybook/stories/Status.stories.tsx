import type { Meta, StoryObj } from '@storybook/react'
import { Lozenge, Badge } from 'design-system'

const meta: Meta = {
  title: 'Status',
}

export default meta

export const BadgesAndLozenges: StoryObj = {
  render: () => (
    <div className="flex flex-wrap gap-2 items-center">
      <Badge>Default</Badge>
      <Badge appearance="primary">Primary</Badge>
      <Badge appearance="important">Important</Badge>
      <Lozenge>Default</Lozenge>
      <Lozenge tone="success">Success</Lozenge>
      <Lozenge tone="warning">Warning</Lozenge>
      <Lozenge tone="danger">Danger</Lozenge>
      <Lozenge tone="information">Info</Lozenge>
      <Lozenge tone="discovery">Discovery</Lozenge>
    </div>
  ),
}


