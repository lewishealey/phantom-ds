import * as React from 'react'
import { cn } from '../lib/cn'
import { token } from '../tokens'

export type TextSize = 'lg' | 'md' | 'sm'

const sizeToClasses: Record<TextSize, string> = {
  lg: 'text-base leading-6',
  md: 'text-sm leading-5',
  sm: 'text-xs leading-4',
}

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: 'p' | 'span' | 'div'
  size?: TextSize
}

export const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ as: Tag = 'p', size = 'md', className, ...props }, ref) => {
    return (
      <Tag
        ref={ref as any}
        className={cn(sizeToClasses[size], className)}
        style={{ color: token('color.text') as unknown as string }}
        {...props}
      />
    )
  }
)

Text.displayName = 'Text'


