import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  external: ['react', 'react-dom', '@atlaskit/tokens', '@radix-ui/react-dropdown-menu', '@radix-ui/react-checkbox'],
})


