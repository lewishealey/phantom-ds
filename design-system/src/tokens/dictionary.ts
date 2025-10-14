import { token as tokenFn } from './index'

type TokenEntry = { name: string; fallback: string }

const TOKENS: TokenEntry[] = [
  // Text & links
  { name: 'color.text', fallback: '#172B4D' },
  { name: 'color.text.inverse', fallback: '#FFFFFF' },
  { name: 'color.text.subtle', fallback: '#44546F' },
  { name: 'color.link', fallback: '#0C66E4' },
  { name: 'color.link.pressed', fallback: '#0055CC' },
  { name: 'color.link.visited', fallback: '#5E4DB2' },

  // Icons
  { name: 'color.icon', fallback: '#44546F' },
  { name: 'color.icon.disabled', fallback: '#091E424F' },
  { name: 'color.icon.inverse', fallback: '#FFFFFF' },

  // Borders
  { name: 'color.border', fallback: '#091E4224' },
  { name: 'color.border.focused', fallback: '#388BFF' },
  { name: 'color.border.input', fallback: '#8590A2' },
  { name: 'color.border.inverse', fallback: '#FFFFFF' },
  { name: 'color.border.bold', fallback: '#758195' },

  // Backgrounds - brand
  { name: 'color.background.brand.bold', fallback: '#0C66E4' },
  { name: 'color.background.brand.bold.hovered', fallback: '#0055CC' },
  { name: 'color.background.brand.bold.pressed', fallback: '#09326C' },
  { name: 'color.background.brand.subtlest', fallback: '#E9F2FF' },
  { name: 'color.background.brand.subtlest.hovered', fallback: '#CCE0FF' },
  { name: 'color.background.brand.subtlest.pressed', fallback: '#85B8FF' },

  // Backgrounds - neutral
  { name: 'color.background.neutral', fallback: '#091E420F' },
  { name: 'color.background.neutral.hovered', fallback: '#091E4224' },
  { name: 'color.background.neutral.pressed', fallback: '#091E424F' },
  { name: 'color.background.neutral.subtle', fallback: 'transparent' },
  { name: 'color.background.neutral.subtle.hovered', fallback: '#091E420F' },
  { name: 'color.background.neutral.subtle.pressed', fallback: '#091E4224' },
  { name: 'color.background.neutral.bold', fallback: '#44546F' },
  { name: 'color.background.neutral.bold.hovered', fallback: '#2C3E5D' },
  { name: 'color.background.neutral.bold.pressed', fallback: '#172B4D' },

  // Backgrounds - selected
  { name: 'color.background.selected', fallback: '#E9F2FF' },
  { name: 'color.background.selected.hovered', fallback: '#CCE0FF' },
  { name: 'color.background.selected.pressed', fallback: '#85B8FF' },
  { name: 'color.background.selected.bold', fallback: '#0C66E4' },
  { name: 'color.background.selected.bold.hovered', fallback: '#0055CC' },
  { name: 'color.background.selected.bold.pressed', fallback: '#09326C' },

  // Backgrounds - status
  { name: 'color.background.danger', fallback: '#FFECEB' },
  { name: 'color.background.danger.hovered', fallback: '#FFD5D2' },
  { name: 'color.background.danger.pressed', fallback: '#FD9891' },
  { name: 'color.background.danger.bold', fallback: '#C9372C' },
  { name: 'color.background.danger.bold.hovered', fallback: '#AE2E24' },
  { name: 'color.background.danger.bold.pressed', fallback: '#5D1F1A' },

  { name: 'color.background.warning', fallback: '#FFF7D6' },
  { name: 'color.background.warning.hovered', fallback: '#F8E6A0' },
  { name: 'color.background.warning.pressed', fallback: '#F5CD47' },
  { name: 'color.background.warning.bold', fallback: '#F5CD47' },
  { name: 'color.background.warning.bold.hovered', fallback: '#E2B203' },
  { name: 'color.background.warning.bold.pressed', fallback: '#CF9F02' },

  { name: 'color.background.success', fallback: '#DCFFF1' },
  { name: 'color.background.success.hovered', fallback: '#BAF3DB' },
  { name: 'color.background.success.pressed', fallback: '#7EE2B8' },
  { name: 'color.background.success.bold', fallback: '#1F845A' },
  { name: 'color.background.success.bold.hovered', fallback: '#216E4E' },
  { name: 'color.background.success.bold.pressed', fallback: '#164B35' },

  { name: 'color.background.information', fallback: '#E9F2FF' },
  { name: 'color.background.information.hovered', fallback: '#CCE0FF' },
  { name: 'color.background.information.pressed', fallback: '#85B8FF' },
  { name: 'color.background.information.bold', fallback: '#0C66E4' },
  { name: 'color.background.information.bold.hovered', fallback: '#0055CC' },
  { name: 'color.background.information.bold.pressed', fallback: '#09326C' },

  { name: 'color.background.discovery', fallback: '#F3F0FF' },
  { name: 'color.background.discovery.hovered', fallback: '#DFD8FD' },
  { name: 'color.background.discovery.pressed', fallback: '#B8ACF6' },
  { name: 'color.background.discovery.bold', fallback: '#6E5DC6' },
  { name: 'color.background.discovery.bold.hovered', fallback: '#5E4DB2' },
  { name: 'color.background.discovery.bold.pressed', fallback: '#352C63' },

  // Elevation
  { name: 'elevation.surface', fallback: '#FFFFFF' },
  { name: 'elevation.surface.hovered', fallback: '#F1F2F4' },
  { name: 'elevation.surface.pressed', fallback: '#DCDFE4' },
  { name: 'elevation.surface.overlay', fallback: '#FFFFFF' },
  { name: 'elevation.surface.sunken', fallback: '#F7F8F9' },
  { name: 'elevation.shadow.overlay', fallback: '0px 8px 12px #091E4226, 0px 0px 1px #091E424F' },
  { name: 'elevation.shadow.raised', fallback: '0px 1px 1px #091E4240, 0px 0px 1px #091E424F' },

  // Misc
  { name: 'color.blanket', fallback: '#091E427D' },
  { name: 'color.skeleton', fallback: '#091E420F' },
  { name: 'color.skeleton.subtle', fallback: '#091E4208' },
  { name: 'opacity.disabled', fallback: '0.4' },
  { name: 'opacity.loading', fallback: '0.2' },

  // Spacing
  { name: 'space.0', fallback: '0rem' },
  { name: 'space.025', fallback: '0.125rem' },
  { name: 'space.050', fallback: '0.25rem' },
  { name: 'space.075', fallback: '0.375rem' },
  { name: 'space.100', fallback: '0.5rem' },
  { name: 'space.150', fallback: '0.75rem' },
  { name: 'space.200', fallback: '1rem' },
  { name: 'space.250', fallback: '1.25rem' },
  { name: 'space.300', fallback: '1.5rem' },
  { name: 'space.400', fallback: '2rem' },
  { name: 'space.500', fallback: '2.5rem' },
  { name: 'space.600', fallback: '3rem' },
  { name: 'space.800', fallback: '4rem' },
  { name: 'space.1000', fallback: '5rem' },

  // Radius & border
  { name: 'radius.xsmall', fallback: '0.125rem' },
  { name: 'radius.small', fallback: '0.25rem' },
  { name: 'radius.medium', fallback: '0.375rem' },
  { name: 'radius.large', fallback: '0.5rem' },
  { name: 'border.radius', fallback: '0.25rem' },
  { name: 'border.radius.050', fallback: '0.125rem' },
  { name: 'border.radius.100', fallback: '0.25rem' },
  { name: 'border.radius.200', fallback: '0.5rem' },
  { name: 'border.radius.300', fallback: '0.75rem' },
  { name: 'border.radius.400', fallback: '1rem' },
  { name: 'border.width', fallback: '0.0625rem' },
  { name: 'border.width.0', fallback: '0rem' },
  { name: 'border.width.indicator', fallback: '0.1875rem' },
  { name: 'border.width.outline', fallback: '0.125rem' },
  { name: 'border.width.selected', fallback: '0.125rem' },
  { name: 'border.width.focused', fallback: '0.125rem' },

  // Fonts
  { name: 'font.family.body', fallback: 'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif' },
  { name: 'font.family.heading', fallback: 'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif' },
  { name: 'font.family.code', fallback: 'ui-monospace, Menlo, "Segoe UI Mono", "Ubuntu Mono", monospace' },
  { name: 'font.weight.regular', fallback: '400' },
  { name: 'font.weight.medium', fallback: '500' },
  { name: 'font.weight.semibold', fallback: '600' },
  { name: 'font.weight.bold', fallback: '700' },
]

function setNested(target: any, path: string[], value: string) {
  let obj = target
  for (let i = 0; i < path.length - 1; i++) {
    const key = path[i]
    // If the key doesn't exist or is a primitive value (string), create/replace with empty object
    if (!(key in obj) || typeof obj[key] !== 'object' || obj[key] === null) {
      obj[key] = {}
    }
    obj = obj[key]
  }
  obj[path[path.length - 1]] = value
}

export const tokenMap: Record<string, string> = Object.fromEntries(
  TOKENS.map(({ name, fallback }) => [name, tokenFn(name, fallback)])
)

export const tokenTree: Record<string, any> = {}
for (const { name, fallback } of TOKENS) {
  setNested(tokenTree, name.split('.'), tokenFn(name, fallback))
}

export function getTokenValue(name: string): string {
  const match = TOKENS.find(t => t.name === name)
  return tokenFn(name, match?.fallback)
}


