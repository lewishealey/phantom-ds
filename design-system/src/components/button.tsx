import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'
import { token } from '../tokens'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: '',
        secondary: '',
        ghost: '',
      },
      size: {
        sm: 'h-8 px-3',
        md: 'h-9 px-4',
        lg: 'h-10 px-5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size, ...props }, ref) => {
    const base = buttonVariants({ variant, size })

    const styleForVariant: React.CSSProperties =
      variant === 'primary'
        ? {
            backgroundColor: token('color.background.brand.bold'),
            color: token('color.text.inverse'),
          }
        : variant === 'secondary'
        ? {
            backgroundColor: token('color.background.neutral'),
            color: token('color.text'),
          }
        : {
            backgroundColor: 'transparent',
            color: token('color.link'),
          }

    return (
      <button ref={ref} className={cn(base, className)} style={styleForVariant} {...props} />
    )
  }
)

Button.displayName = 'Button'


