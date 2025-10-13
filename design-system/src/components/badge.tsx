import * as React from 'react'
import { cn } from '../lib/cn'
import { token } from '../tokens'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  appearance?: 'default' | 'primary' | 'important'
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, appearance = 'default', ...props }, ref) => {
    const styles: Record<NonNullable<BadgeProps['appearance']>, React.CSSProperties> = {
      default: { backgroundColor: token('color.background.neutral'), color: token('color.text.subtle') as unknown as string },
      primary: { backgroundColor: token('color.background.selected.hovered'), color: '#09326C' },
      important: { backgroundColor: token('color.background.danger.hovered'), color: '#5D1F1A' },
    }

    return (
      <span
        ref={ref}
        className={cn('inline-flex min-w-5 items-center justify-center rounded-sm px-1.5 py-0.5 text-xs font-medium', className)}
        style={styles[appearance]}
        {...props}
      />
    )
  }
)

Badge.displayName = 'Badge'


