import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        // Use Atlassian token radius via CSS var fallback
        'xs': 'var(--ds-radius-xs, 0.125rem)',
        'sm': 'var(--ds-radius-sm, 0.25rem)',
        'md': 'var(--ds-radius-md, 0.375rem)',
        'lg': 'var(--ds-radius-lg, 0.5rem)'
      },
      colors: {
        // Semantic slots wired to CSS vars populated by tokens in components
        brand: {
          DEFAULT: 'var(--ds-brand-bg, #0C66E4)',
          hovered: 'var(--ds-brand-bg-hovered, #0055CC)',
          pressed: 'var(--ds-brand-bg-pressed, #09326C)',
          contrast: 'var(--ds-brand-contrast, #FFFFFF)'
        },
        neutral: {
          subtle: 'var(--ds-neutral-subtle, #00000000)',
          DEFAULT: 'var(--ds-neutral, #091E420F)',
          hovered: 'var(--ds-neutral-hovered, #091E4224)',
          pressed: 'var(--ds-neutral-pressed, #091E424F)'
        },
        border: {
          input: 'var(--ds-border-input, #8590A2)',
          focused: 'var(--ds-border-focused, #388BFF)'
        },
        text: {
          DEFAULT: 'var(--ds-text, #172B4D)',
          inverse: 'var(--ds-text-inverse, #FFFFFF)',
          subtle: 'var(--ds-text-subtle, #44546F)'
        }
      },
      boxShadow: {
        overlay: 'var(--ds-shadow-overlay, 0px 8px 12px #091E4226, 0px 0px 1px #091E424F)',
        raised: 'var(--ds-shadow-raised, 0px 1px 1px #091E4240, 0px 0px 1px #091E424F)'
      }
    },
  },
  plugins: [],
}

export default config


