import * as React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { cn } from '../lib/cn'
import { token } from '../tokens'

export interface DropdownProps {
  trigger: React.ReactNode
  children: React.ReactNode
}

export function Dropdown({ trigger, children }: DropdownProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content sideOffset={6}
          style={{ backgroundColor: '#fff', boxShadow: token('elevation.shadow.overlay') as unknown as string, borderColor: token('color.background.neutral.hovered') as unknown as string, borderWidth: 1 }}
          className={cn('min-w-40 rounded-md p-1 border')}
        >
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export const DropdownItem = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof DropdownMenu.Item>>(
  ({ className, ...props }, ref) => (
    <DropdownMenu.Item
      ref={ref}
      className={cn('flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none', className)}
      style={{ color: token('color.text') as unknown as string }}
      {...props}
    />
  )
)

DropdownItem.displayName = 'DropdownItem'


