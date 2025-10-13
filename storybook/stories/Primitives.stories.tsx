import type { Meta, StoryObj } from '@storybook/react'
import { Heading, Text } from 'design-system'

const meta: Meta = {
  title: 'Primitives',
}

export default meta

export const Typography: StoryObj = {
  render: () => (
    <div className="space-y-3">
      <Heading size="xxl">Heading XXL</Heading>
      <Heading size="lg">Heading L</Heading>
      <Text size="lg">Body LG</Text>
      <Text>Body MD</Text>
      <Text size="sm">Body SM</Text>
    </div>
  ),
}


