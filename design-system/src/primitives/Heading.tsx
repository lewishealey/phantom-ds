import * as React from 'react'
import { cn } from '../lib/cn'
import { token } from '../tokens'

export type HeadingSize = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs'

const sizeToClasses: Record<HeadingSize, string> = {
  xxl: 'text-4xl leading-tight font-semibold',
  xl: 'text-3xl leading-snug font-semibold',
  lg: 'text-2xl leading-snug font-semibold',
  md: 'text-xl leading-snug font-semibold',
  sm: 'text-lg leading-snug font-semibold',
  xs: 'text-base leading-snug font-semibold',
  xxs: 'text-sm leading-snug font-semibold',
}

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: HeadingSize
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as: Tag = 'h2', size = 'lg', className, ...props }, ref) => {
    return (
      <Tag
        ref={ref}
        className={cn(sizeToClasses[size], className)}
        style={{ color: token('color.text') as unknown as string }}
        {...props}
      />
    )
  }
)

Heading.displayName = 'Heading'


