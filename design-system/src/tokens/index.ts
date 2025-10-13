// Token utilities: map token names like `color.text` to CSS custom properties
// and return a usable CSS var() expression for inline styles or style props.

function normalizeTokenToCssVarName(name: string): string {
  const parts = name.split('.')
  if (parts[0] === 'color') parts.shift()
  return `--ds-${parts.join('-')}`
}

export function cssVarName(name: string): string {
  return normalizeTokenToCssVarName(name)
}

export function token(name: string, fallback?: string): string {
  const varName = cssVarName(name)
  return fallback ? `var(${varName}, ${fallback})` : `var(${varName})`
}

// A minimal dictionary with commonly used tokens wired to var() for easy import.
// Consumers can also call token('...') directly for any valid token name.
export const tokens: Record<string, string> = {
  'color.text': token('text'),
  'color.text.inverse': token('text.inverse'),
  'color.link': token('link'),
  'color.background.brand.bold': token('background-brand-bold'),
  'color.background.brand.bold.hovered': token('background-brand-bold-hovered'),
  'color.background.brand.bold.pressed': token('background-brand-bold-pressed'),
  'color.background.neutral': token('background-neutral'),
  'color.background.neutral.hovered': token('background-neutral-hovered'),
  'color.background.neutral.pressed': token('background-neutral-pressed'),
  'color.border.focused': token('border-focused'),
  'color.border.input': token('border-input'),
}

export * from './dictionary'


