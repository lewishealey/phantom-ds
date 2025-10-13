import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox, Dropdown, DropdownItem, Button } from 'design-system'

const meta: Meta = {
  title: 'Forms',
}

export default meta

export const Controls: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <Checkbox label="Accept terms" defaultChecked />
      <Dropdown trigger={<Button>Open menu</Button>}>
        <DropdownItem>Item one</DropdownItem>
        <DropdownItem>Item two</DropdownItem>
      </Dropdown>
    </div>
  ),
}


