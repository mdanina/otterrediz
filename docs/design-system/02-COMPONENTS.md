# Component System Specification

> shadcn/ui + Radix UI + CVA architecture
> Логика НЕ меняется — только styling layer

---

## 1. Component Architecture

### 1.1 Anatomy

```
┌─────────────────────────────────────────────────────────┐
│                     COMPONENT                            │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌─────────────────────────────────────────────────┐    │
│  │              BEHAVIOR (Radix)                    │    │
│  │                                                  │    │
│  │   • Accessibility                               │    │
│  │   • Keyboard navigation                         │    │
│  │   • State management                            │    │
│  │   • Event handling                              │    │
│  │                                                  │    │
│  │              ❌ НЕ ИЗМЕНЯЕМ                      │    │
│  └─────────────────────────────────────────────────┘    │
│                                                          │
│  ┌─────────────────────────────────────────────────┐    │
│  │              VARIANTS (CVA)                      │    │
│  │                                                  │    │
│  │   • intent: primary | secondary | ghost         │    │
│  │   • size: sm | md | lg                          │    │
│  │   • emphasis: subtle | default | strong         │    │
│  │                                                  │    │
│  │              ✅ РАСШИРЯЕМ                        │    │
│  └─────────────────────────────────────────────────┘    │
│                                                          │
│  ┌─────────────────────────────────────────────────┐    │
│  │              STYLING (Tokens)                    │    │
│  │                                                  │    │
│  │   • Colors via CSS variables                    │    │
│  │   • Spacing via tokens                          │    │
│  │   • Typography via presets                      │    │
│  │                                                  │    │
│  │              ✅ ИЗМЕНЯЕМ                         │    │
│  └─────────────────────────────────────────────────┘    │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### 1.2 CVA Pattern

```typescript
// Стандартная структура компонента

import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const componentVariants = cva(
  // Base styles — token-based
  "base-classes-using-tokens",
  {
    variants: {
      intent: {
        primary: "primary-token-classes",
        secondary: "secondary-token-classes",
        ghost: "ghost-token-classes",
      },
      size: {
        sm: "size-sm-tokens",
        md: "size-md-tokens",
        lg: "size-lg-tokens",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
    },
  }
)

interface ComponentProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof componentVariants> {}

export function Component({ intent, size, className, ...props }: ComponentProps) {
  return (
    <element
      className={cn(componentVariants({ intent, size }), className)}
      {...props}
    />
  )
}
```

---

## 2. Button

### 2.1 Variants

```typescript
const buttonVariants = cva(
  // Base
  [
    "inline-flex items-center justify-center gap-2",
    "font-medium",
    "transition-all",
    "focus-visible:outline-none focus-visible:ring-2",
    "focus-visible:ring-[hsl(var(--color-border-focus))]",
    "focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "active:scale-[0.98]",
  ],
  {
    variants: {
      variant: {
        // Primary — dark, main CTA
        primary: [
          "bg-[hsl(var(--color-primary))]",
          "text-[hsl(var(--color-text-on-accent))]",
          "hover:bg-[hsl(var(--color-primary-hover))]",
          "shadow-[var(--shadow-button)]",
          "hover:shadow-[var(--shadow-button-hover)]",
        ],
        // Secondary — outlined
        secondary: [
          "bg-transparent",
          "border border-[hsl(var(--color-border-default))]",
          "text-[hsl(var(--color-text-primary))]",
          "hover:bg-[hsl(var(--color-surface-secondary))]",
        ],
        // Ghost — minimal
        ghost: [
          "bg-transparent",
          "text-[hsl(var(--color-text-primary))]",
          "hover:bg-[hsl(var(--color-surface-secondary))]",
        ],
        // Accent — coral highlight
        accent: [
          "bg-[hsl(var(--color-accent))]",
          "text-[hsl(var(--color-text-on-accent))]",
          "hover:bg-[hsl(var(--color-accent-hover))]",
          "shadow-[var(--shadow-accent)]",
        ],
        // Soft — subtle background
        soft: [
          "bg-[hsl(var(--color-surface-secondary))]",
          "text-[hsl(var(--color-text-primary))]",
          "hover:bg-[hsl(var(--color-surface-tertiary))]",
        ],
        // Link — text only
        link: [
          "bg-transparent",
          "text-[hsl(var(--color-interactive))]",
          "underline-offset-4",
          "hover:underline",
          "hover:text-[hsl(var(--color-interactive-hover))]",
        ],
        // Destructive
        destructive: [
          "bg-[hsl(var(--color-error))]",
          "text-[hsl(var(--color-text-on-accent))]",
          "hover:bg-[hsl(var(--color-error)/0.9)]",
        ],
      },

      size: {
        xs: [
          "h-7 px-2",
          "text-[length:var(--font-size-ui-xs)]",
          "rounded-[var(--radius-md)]",
        ],
        sm: [
          "h-8 px-3",
          "text-[length:var(--font-size-ui-sm)]",
          "rounded-[var(--radius-md)]",
        ],
        md: [
          "h-10 px-4",
          "text-[length:var(--font-size-ui-md)]",
          "rounded-[var(--radius-button)]",
        ],
        lg: [
          "h-12 px-6",
          "text-[length:var(--font-size-ui-lg)]",
          "rounded-[var(--radius-button)]",
        ],
        xl: [
          "h-14 px-8",
          "text-[length:var(--font-size-body-md)]",
          "rounded-[var(--radius-button)]",
        ],
        // Icon-only variants
        "icon-sm": "h-8 w-8 rounded-[var(--radius-md)]",
        "icon-md": "h-10 w-10 rounded-[var(--radius-button)]",
        "icon-lg": "h-12 w-12 rounded-[var(--radius-button)]",
      },

      // Pill shape override
      pill: {
        true: "rounded-[var(--radius-button-pill)]",
      },

      // Full width
      fullWidth: {
        true: "w-full",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)
```

### 2.2 States

| State | Visual Treatment |
|-------|-----------------|
| **default** | Base styles |
| **hover** | Lighter/darker bg, elevated shadow |
| **focus** | Ring with `--color-border-focus` |
| **active** | Scale 0.98, pressed state |
| **disabled** | 50% opacity, no pointer events |
| **loading** | Spinner icon, reduced opacity text |

### 2.3 Accessibility

- Minimum touch target: 44x44px (lg size)
- Focus visible ring: 2px offset
- Disabled: `aria-disabled="true"`, visual indication
- Loading: `aria-busy="true"`, spinner

### 2.4 Token Dependencies

```
Button styling depends on:
├── --color-primary / hover / active
├── --color-text-on-accent
├── --color-surface-secondary / tertiary
├── --color-border-default
├── --color-border-focus
├── --radius-button / button-pill
├── --shadow-button / button-hover
├── --font-size-ui-* scale
└── --spacing-* for padding
```

---

## 3. Card

### 3.1 Variants

```typescript
const cardVariants = cva(
  // Base
  [
    "rounded-[var(--radius-card)]",
    "overflow-hidden",
    "transition-shadow",
  ],
  {
    variants: {
      variant: {
        // Elevated — floating card (default)
        elevated: [
          "bg-[hsl(var(--color-surface-primary))]",
          "shadow-[var(--shadow-card)]",
          "hover:shadow-[var(--shadow-card-hover)]",
        ],
        // Outlined — border only
        outlined: [
          "bg-[hsl(var(--color-surface-primary))]",
          "border border-[hsl(var(--color-border-default))]",
        ],
        // Filled — subtle background
        filled: [
          "bg-[hsl(var(--color-surface-secondary))]",
        ],
        // Ghost — transparent
        ghost: [
          "bg-transparent",
        ],
        // Glass — frosted glass effect
        glass: [
          "bg-[hsl(var(--color-surface-primary)/0.7)]",
          "backdrop-blur-md",
          "border border-[hsl(var(--color-border-subtle))]",
        ],
      },

      padding: {
        none: "p-0",
        sm: "p-[var(--spacing-component-sm)]",
        md: "p-[var(--spacing-component-lg)]",
        lg: "p-[var(--spacing-layout-sm)]",
      },

      // Interactive cards
      interactive: {
        true: [
          "cursor-pointer",
          "hover:shadow-[var(--shadow-card-hover)]",
          "active:scale-[0.99]",
          "transition-all",
        ],
      },
    },

    defaultVariants: {
      variant: "elevated",
      padding: "md",
    },
  }
)
```

### 3.2 Card Parts

```typescript
// Card Header
const cardHeaderVariants = cva([
  "flex flex-col gap-[var(--spacing-component-xs)]",
  "p-[var(--spacing-component-lg)]",
  "pb-0", // Remove bottom padding, content has its own
])

// Card Title
const cardTitleVariants = cva([
  "text-[length:var(--font-size-h4)]",
  "font-[var(--font-weight-semibold)]",
  "leading-[var(--line-height-snug)]",
  "text-[hsl(var(--color-text-primary))]",
])

// Card Description
const cardDescriptionVariants = cva([
  "text-[length:var(--font-size-body-sm)]",
  "text-[hsl(var(--color-text-secondary))]",
])

// Card Content
const cardContentVariants = cva([
  "p-[var(--spacing-component-lg)]",
])

// Card Footer
const cardFooterVariants = cva([
  "flex items-center gap-[var(--spacing-component-md)]",
  "p-[var(--spacing-component-lg)]",
  "pt-0",
])
```

### 3.3 Token Dependencies

```
Card styling depends on:
├── --color-surface-primary / secondary
├── --color-border-default / subtle
├── --radius-card
├── --shadow-card / card-hover
├── --spacing-component-* for padding
└── Typography tokens for title/description
```

---

## 4. Input

### 4.1 Variants

```typescript
const inputVariants = cva(
  // Base
  [
    "flex w-full",
    "bg-[hsl(var(--color-surface-primary))]",
    "border border-[hsl(var(--color-border-default))]",
    "rounded-[var(--radius-input)]",
    "text-[hsl(var(--color-text-primary))]",
    "text-[length:var(--font-size-body-md)]",
    "placeholder:text-[hsl(var(--color-text-tertiary))]",
    "transition-all",
    // Focus
    "focus-visible:outline-none",
    "focus-visible:border-[hsl(var(--color-border-focus))]",
    "focus-visible:shadow-[var(--shadow-input-focus)]",
    // Disabled
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
    "disabled:bg-[hsl(var(--color-surface-secondary))]",
  ],
  {
    variants: {
      size: {
        sm: [
          "h-8 px-[var(--spacing-component-sm)]",
          "text-[length:var(--font-size-body-sm)]",
        ],
        md: [
          "h-10 px-[var(--spacing-component-md)]",
        ],
        lg: [
          "h-12 px-[var(--spacing-component-lg)]",
          "text-[length:var(--font-size-body-lg)]",
        ],
      },

      state: {
        default: "",
        error: [
          "border-[hsl(var(--color-error))]",
          "focus-visible:border-[hsl(var(--color-error))]",
          "focus-visible:shadow-[0_0_0_3px_hsl(var(--color-error)/0.2)]",
        ],
        success: [
          "border-[hsl(var(--color-success))]",
          "focus-visible:border-[hsl(var(--color-success))]",
        ],
      },
    },

    defaultVariants: {
      size: "md",
      state: "default",
    },
  }
)
```

### 4.2 Input Group Components

```typescript
// Label
const labelVariants = cva([
  "text-[length:var(--font-size-ui-sm)]",
  "font-[var(--font-weight-medium)]",
  "text-[hsl(var(--color-text-primary))]",
  "mb-[var(--spacing-component-xs)]",
])

// Helper Text
const helperTextVariants = cva(
  [
    "text-[length:var(--font-size-ui-xs)]",
    "mt-[var(--spacing-component-xs)]",
  ],
  {
    variants: {
      state: {
        default: "text-[hsl(var(--color-text-secondary))]",
        error: "text-[hsl(var(--color-error-text))]",
        success: "text-[hsl(var(--color-success-text))]",
      },
    },
    defaultVariants: {
      state: "default",
    },
  }
)

// Input Addon (prefix/suffix icons)
const inputAddonVariants = cva([
  "flex items-center justify-center",
  "text-[hsl(var(--color-text-tertiary))]",
  "pointer-events-none",
])
```

### 4.3 States

| State | Border | Ring | Icon |
|-------|--------|------|------|
| default | `border-default` | - | - |
| hover | `border-strong` | - | - |
| focus | `border-focus` | focus ring | - |
| error | `error` | error ring | error icon |
| success | `success` | - | check icon |
| disabled | `border-subtle` | - | - |

---

## 5. Badge / Tag

### 5.1 Variants

```typescript
const badgeVariants = cva(
  // Base
  [
    "inline-flex items-center",
    "rounded-[var(--radius-badge)]",
    "font-[var(--font-weight-medium)]",
    "transition-colors",
  ],
  {
    variants: {
      variant: {
        // Solid backgrounds
        default: [
          "bg-[hsl(var(--color-surface-secondary))]",
          "text-[hsl(var(--color-text-primary))]",
        ],
        primary: [
          "bg-[hsl(var(--color-primary))]",
          "text-[hsl(var(--color-text-on-accent))]",
        ],
        secondary: [
          "bg-[hsl(var(--color-secondary))]",
          "text-[hsl(var(--color-text-primary))]",
        ],
        accent: [
          "bg-[hsl(var(--color-accent))]",
          "text-[hsl(var(--color-text-on-accent))]",
        ],

        // Status variants
        success: [
          "bg-[hsl(var(--color-success-subtle))]",
          "text-[hsl(var(--color-success-text))]",
        ],
        warning: [
          "bg-[hsl(var(--color-warning-subtle))]",
          "text-[hsl(var(--color-warning-text))]",
        ],
        error: [
          "bg-[hsl(var(--color-error-subtle))]",
          "text-[hsl(var(--color-error-text))]",
        ],
        info: [
          "bg-[hsl(var(--color-info-subtle))]",
          "text-[hsl(var(--color-info-text))]",
        ],

        // Outline variants
        outline: [
          "bg-transparent",
          "border border-[hsl(var(--color-border-default))]",
          "text-[hsl(var(--color-text-primary))]",
        ],
      },

      size: {
        sm: [
          "h-5 px-[var(--spacing-1-5)]",
          "text-[length:var(--font-size-ui-xs)]",
        ],
        md: [
          "h-6 px-[var(--spacing-2)]",
          "text-[length:var(--font-size-ui-sm)]",
        ],
        lg: [
          "h-7 px-[var(--spacing-2-5)]",
          "text-[length:var(--font-size-ui-md)]",
        ],
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)
```

---

## 6. Avatar

### 6.1 Variants

```typescript
const avatarVariants = cva(
  // Base
  [
    "relative inline-flex items-center justify-center",
    "rounded-[var(--radius-avatar)]",
    "overflow-hidden",
    "bg-[hsl(var(--color-surface-secondary))]",
    "text-[hsl(var(--color-text-secondary))]",
    "font-[var(--font-weight-medium)]",
    "select-none",
  ],
  {
    variants: {
      size: {
        xs: "h-6 w-6 text-[length:var(--font-size-ui-xs)]",
        sm: "h-8 w-8 text-[length:var(--font-size-ui-sm)]",
        md: "h-10 w-10 text-[length:var(--font-size-ui-md)]",
        lg: "h-12 w-12 text-[length:var(--font-size-body-md)]",
        xl: "h-16 w-16 text-[length:var(--font-size-body-lg)]",
        "2xl": "h-20 w-20 text-[length:var(--font-size-h4)]",
        "3xl": "h-24 w-24 text-[length:var(--font-size-h3)]",
      },

      // Ring for status
      ring: {
        none: "",
        default: "ring-2 ring-[hsl(var(--color-surface-primary))]",
        success: "ring-2 ring-[hsl(var(--color-success))]",
        warning: "ring-2 ring-[hsl(var(--color-warning))]",
        error: "ring-2 ring-[hsl(var(--color-error))]",
      },
    },

    defaultVariants: {
      size: "md",
      ring: "none",
    },
  }
)
```

---

## 7. Progress

### 7.1 Linear Progress

```typescript
const progressVariants = cva(
  // Track (background)
  [
    "relative w-full overflow-hidden",
    "bg-[hsl(var(--color-surface-tertiary))]",
    "rounded-[var(--radius-full)]",
  ],
  {
    variants: {
      size: {
        sm: "h-1",
        md: "h-2",
        lg: "h-3",
        xl: "h-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

const progressIndicatorVariants = cva(
  // Indicator (fill)
  [
    "h-full",
    "rounded-[var(--radius-full)]",
    "transition-all duration-300",
  ],
  {
    variants: {
      variant: {
        default: "bg-[hsl(var(--color-progress))]",
        accent: "bg-[hsl(var(--color-accent))]",
        success: "bg-[hsl(var(--color-success))]",
        warning: "bg-[hsl(var(--color-warning))]",
        error: "bg-[hsl(var(--color-error))]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)
```

### 7.2 Circular Progress

```typescript
// For task completion wheels, coin displays, etc.
const circularProgressVariants = cva(
  [
    "relative inline-flex items-center justify-center",
  ],
  {
    variants: {
      size: {
        sm: "h-8 w-8",
        md: "h-12 w-12",
        lg: "h-16 w-16",
        xl: "h-24 w-24",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)
```

---

## 8. Navigation

### 8.1 Bottom Navigation (Mobile)

```typescript
const bottomNavVariants = cva([
  "fixed bottom-0 left-0 right-0",
  "flex items-center justify-around",
  "h-16",
  "bg-[hsl(var(--color-surface-primary))]",
  "border-t border-[hsl(var(--color-border-subtle))]",
  "safe-area-inset-bottom",
])

const bottomNavItemVariants = cva(
  [
    "flex flex-col items-center justify-center gap-1",
    "flex-1 h-full",
    "text-[length:var(--font-size-ui-xs)]",
    "transition-colors",
  ],
  {
    variants: {
      active: {
        false: "text-[hsl(var(--color-text-tertiary))]",
        true: "text-[hsl(var(--color-text-primary))]",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
)
```

### 8.2 Tab Navigation

```typescript
const tabsListVariants = cva([
  "inline-flex items-center",
  "gap-[var(--spacing-1)]",
  "p-[var(--spacing-1)]",
  "bg-[hsl(var(--color-surface-secondary))]",
  "rounded-[var(--radius-lg)]",
])

const tabsTriggerVariants = cva(
  [
    "inline-flex items-center justify-center",
    "px-[var(--spacing-component-md)]",
    "py-[var(--spacing-component-sm)]",
    "rounded-[var(--radius-md)]",
    "text-[length:var(--font-size-ui-md)]",
    "font-[var(--font-weight-medium)]",
    "transition-all",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-[hsl(var(--color-border-focus))]",
  ],
  {
    variants: {
      state: {
        inactive: [
          "text-[hsl(var(--color-text-secondary))]",
          "hover:text-[hsl(var(--color-text-primary))]",
        ],
        active: [
          "bg-[hsl(var(--color-surface-primary))]",
          "text-[hsl(var(--color-text-primary))]",
          "shadow-[var(--shadow-sm)]",
        ],
      },
    },
    defaultVariants: {
      state: "inactive",
    },
  }
)
```

---

## 9. Modal / Dialog

### 9.1 Variants

```typescript
const dialogOverlayVariants = cva([
  "fixed inset-0",
  "z-[var(--z-modal-backdrop)]",
  "bg-[hsl(var(--color-overlay))]",
  "animate-in fade-in-0",
])

const dialogContentVariants = cva(
  [
    "fixed",
    "z-[var(--z-modal)]",
    "bg-[hsl(var(--color-surface-elevated))]",
    "shadow-[var(--shadow-modal)]",
    "animate-in fade-in-0 zoom-in-95",
  ],
  {
    variants: {
      position: {
        center: [
          "left-[50%] top-[50%]",
          "translate-x-[-50%] translate-y-[-50%]",
          "rounded-[var(--radius-modal)]",
          "max-h-[85vh]",
        ],
        bottom: [
          "left-0 right-0 bottom-0",
          "rounded-t-[var(--radius-modal)]",
          "max-h-[90vh]",
          "slide-in-from-bottom",
        ],
        fullscreen: [
          "inset-0",
          "rounded-none",
        ],
      },
      size: {
        sm: "w-full max-w-sm",
        md: "w-full max-w-md",
        lg: "w-full max-w-lg",
        xl: "w-full max-w-xl",
        full: "w-full max-w-none",
      },
    },
    defaultVariants: {
      position: "center",
      size: "md",
    },
  }
)
```

---

## 10. Toast / Notification

### 10.1 Variants

```typescript
const toastVariants = cva(
  [
    "flex items-start gap-[var(--spacing-component-md)]",
    "p-[var(--spacing-component-lg)]",
    "rounded-[var(--radius-lg)]",
    "shadow-[var(--shadow-toast)]",
    "pointer-events-auto",
    "animate-in slide-in-from-top-full",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-[hsl(var(--color-surface-primary))]",
          "border border-[hsl(var(--color-border-default))]",
          "text-[hsl(var(--color-text-primary))]",
        ],
        success: [
          "bg-[hsl(var(--color-success-subtle))]",
          "border border-[hsl(var(--color-success)/0.2)]",
          "text-[hsl(var(--color-success-text))]",
        ],
        warning: [
          "bg-[hsl(var(--color-warning-subtle))]",
          "border border-[hsl(var(--color-warning)/0.2)]",
          "text-[hsl(var(--color-warning-text))]",
        ],
        error: [
          "bg-[hsl(var(--color-error-subtle))]",
          "border border-[hsl(var(--color-error)/0.2)]",
          "text-[hsl(var(--color-error-text))]",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)
```

---

## 11. Gamification Components

### 11.1 Coin Display

```typescript
const coinVariants = cva(
  [
    "inline-flex items-center justify-center",
    "rounded-full",
    "font-[var(--font-weight-bold)]",
    "bg-[hsl(var(--color-reward))]",
    "text-[hsl(var(--color-text-primary))]",
    "shadow-[var(--shadow-reward)]",
  ],
  {
    variants: {
      size: {
        sm: "h-6 w-6 text-[length:var(--font-size-ui-xs)]",
        md: "h-8 w-8 text-[length:var(--font-size-ui-sm)]",
        lg: "h-10 w-10 text-[length:var(--font-size-ui-md)]",
        xl: "h-14 w-14 text-[length:var(--font-size-body-lg)]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)
```

### 11.2 Star Rating

```typescript
const starVariants = cva(
  [
    "transition-colors",
  ],
  {
    variants: {
      state: {
        empty: "text-[hsl(var(--color-text-tertiary))]",
        filled: "text-[hsl(var(--color-reward))]",
      },
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
    },
    defaultVariants: {
      state: "empty",
      size: "md",
    },
  }
)
```

### 11.3 Task Card

```typescript
const taskCardVariants = cva(
  [
    "flex items-center gap-[var(--spacing-component-md)]",
    "p-[var(--spacing-component-lg)]",
    "bg-[hsl(var(--color-surface-primary))]",
    "rounded-[var(--radius-card)]",
    "transition-all",
  ],
  {
    variants: {
      status: {
        pending: [
          "opacity-100",
        ],
        active: [
          "ring-2",
          "ring-[hsl(var(--color-accent)/0.3)]",
          "shadow-[var(--shadow-accent)]",
        ],
        completed: [
          "opacity-70",
          "bg-[hsl(var(--color-success-subtle))]",
        ],
      },
    },
    defaultVariants: {
      status: "pending",
    },
  }
)
```

---

## 12. Extending Components

### 12.1 Adding New Variant

```typescript
// Существующий компонент
const buttonVariants = cva(/* ... */, {
  variants: {
    variant: {
      primary: /* ... */,
      secondary: /* ... */,
      // ✅ Добавляем новый вариант
      reward: [
        "bg-[hsl(var(--color-reward))]",
        "text-[hsl(var(--color-text-primary))]",
        "shadow-[var(--shadow-reward)]",
        "hover:scale-105",
      ],
    },
  },
})
```

### 12.2 Theme Override

Меняем значение токена — меняется визуал компонента:

```css
/* Для "calm" темы */
.theme-calm {
  --color-accent: var(--primitive-lavender-300);
  --shadow-card: var(--shadow-sm);
  --radius-button: var(--radius-md);
}

/* Для "focused" темы */
.theme-focused {
  --color-surface-primary: var(--primitive-gray-0);
  --color-background: var(--primitive-gray-50);
  --shadow-card: none;
}
```

### 12.3 Emotional Variants Map

| Mood | Accent | Shadows | Radius | Animations |
|------|--------|---------|--------|------------|
| **Playful** (default) | coral | prominent | large | bouncy |
| **Calm** | lavender | subtle | medium | gentle |
| **Focused** | gray | minimal | small | none |

---

## Component Checklist

При создании/обновлении компонента:

- [ ] Base styles через токены
- [ ] Все variant через CVA
- [ ] States: default, hover, focus, active, disabled
- [ ] Size scale (если применимо)
- [ ] Focus ring через `--color-border-focus`
- [ ] Transitions через animation tokens
- [ ] Accessibility (role, aria-*)
- [ ] Dark theme tested
- [ ] Responsive behavior defined
- [ ] Token dependencies documented
