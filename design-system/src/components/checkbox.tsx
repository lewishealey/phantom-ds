import * as React from 'react'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { cn } from '../lib/cn'
import { token } from '../tokens'

export interface CheckboxProps extends React.ComponentProps<typeof RadixCheckbox.Root> {
  label?: React.ReactNode
}

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <label className="inline-flex items-center gap-2 text-sm" style={{ color: token('color.text') as unknown as string }}>
        <RadixCheckbox.Root
          ref={ref as any}
          className={cn(
            'h-4 w-4 shrink-0 rounded border outline-none focus-visible:ring-2',
            className
          )}
          style={{ borderColor: token('color.border.input') as unknown as string }}
          {...props}
        >
          <RadixCheckbox.Indicator className="grid place-items-center" style={{ color: token('color.text.inverse') as unknown as string }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
        {label && <span>{label}</span>}
      </label>
    )
  }
)

Checkbox.displayName = 'Checkbox'


