import * as React from 'react'
import { cn } from '../lib/cn'
import { token } from '../tokens'

type Tone = 'default' | 'success' | 'warning' | 'danger' | 'information' | 'discovery'

const toneToVars: Record<Tone, { bg: string; text: string }> = {
  default: { bg: token('color.background.neutral') as string, text: token('color.text') as string },
  success: { bg: token('color.background.success.hovered') as string, text: '#164B35' },
  warning: { bg: token('color.background.warning.hovered') as string, text: '#533F04' },
  danger: { bg: token('color.background.danger.hovered') as string, text: '#5D1F1A' },
  information: { bg: token('color.background.information.hovered') as string, text: '#09326C' },
  discovery: { bg: token('color.background.discovery.hovered') as string, text: '#352C63' },
}

export interface LozengeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: Tone
}

export const Lozenge = React.forwardRef<HTMLSpanElement, LozengeProps>(
  ({ className, tone = 'default', ...props }, ref) => {
    const { bg, text } = toneToVars[tone]
    return (
      <span
        ref={ref}
        style={{ backgroundColor: bg, color: text }}
        className={cn('inline-flex items-center rounded-sm px-2 py-0.5 text-xs font-semibold', className)}
        {...props}
      />
    )
  }
)

Lozenge.displayName = 'Lozenge'


