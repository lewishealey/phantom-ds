## Design System Starterkit

This starterkit provides a small component library styled with Tailwind CSS and primitives inspired by shadcn (via Radix UI). Atlassian Design System tokens are used for semantic colors and primary button styling.

### Install

```bash
npm install
npm run build
```

Node 18+ recommended for the best dev experience.

### Usage

Import styles once in your app:

```ts
import 'design-system/dist/styles.css'
```

Then import components:

```tsx
import { Button, Dropdown, DropdownItem, Checkbox, Lozenge, Badge, Heading, Text } from 'design-system'
```

### Available components

- Button (primary, secondary, ghost)
- Dropdown + DropdownItem
- Checkbox
- Lozenge
- Badge

### Primitives

- Heading
- Text


