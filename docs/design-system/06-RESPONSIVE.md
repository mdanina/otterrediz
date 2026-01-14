# Responsive & Mobile Guidelines

> Mobile-first design approach

---

## 1. Breakpoint System

### 1.1 Breakpoints

| Name | Width | Target |
|------|-------|--------|
| `base` | 0px | Mobile portrait |
| `sm` | 640px | Mobile landscape / small tablet |
| `md` | 768px | Tablet portrait |
| `lg` | 1024px | Tablet landscape / small desktop |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Large desktop |

### 1.2 Design Targets

```
Primary design targets:

Mobile:  375px (iPhone SE / small phones)
Tablet:  768px (iPad portrait)
Desktop: 1440px (Standard laptop)
```

### 1.3 Tailwind Usage

```css
/* Mobile-first approach */

/* Base (mobile) */
.element {
  @apply p-4;
}

/* Tablet (768px+) */
@screen md {
  .element {
    @apply p-6;
  }
}

/* Desktop (1024px+) */
@screen lg {
  .element {
    @apply p-8;
  }
}
```

---

## 2. Layout Patterns

### 2.1 Grid System

```
Mobile (< 640px):
├── 1 column
├── Full width containers
└── Stacked layout

Tablet (640px - 1023px):
├── 2 columns
├── Max-width containers
└── Side-by-side where appropriate

Desktop (1024px+):
├── 3-4 columns
├── Max-width: 1280px
└── Full layout with sidebars
```

### 2.2 Container Widths

```css
/* Container tokens */
:root {
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-2xl: 1536px;
}

/* Usage */
.container {
  width: 100%;
  max-width: var(--container-xl);
  margin: 0 auto;
  padding-inline: var(--spacing-layout-xs);
}

@media (min-width: 768px) {
  .container {
    padding-inline: var(--spacing-layout-sm);
  }
}
```

### 2.3 Content Width

```
Optimal reading width: 65-75 characters

.content-narrow {
  max-width: 65ch;  /* ~580px */
}

.content-medium {
  max-width: 75ch;  /* ~650px */
}

.content-wide {
  max-width: 90ch;  /* ~780px */
}
```

---

## 3. Navigation Adaptation

### 3.1 Mobile Navigation

```
┌─────────────────────────────────────────┐
│  [←]        Title            [Action]   │  ← Header (fixed)
├─────────────────────────────────────────┤
│                                         │
│              Content                    │
│              (scrollable)               │
│                                         │
├─────────────────────────────────────────┤
│   🏠     ✓      🔖      ⚙️             │  ← Bottom nav (fixed)
│  Home  Tasks  Saved  Settings          │
└─────────────────────────────────────────┘
```

### 3.2 Desktop Navigation

```
┌─────────────────────────────────────────────────────────────┐
│  Logo    Dashboard  Tasks  Progress  Settings      [User]  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                     Content                                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 3.3 Navigation Switch

```typescript
// Automatic navigation switching
const useNavigation = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)")

  return isDesktop ? <TopNavigation /> : <BottomNavigation />
}
```

---

## 4. Component Adaptation

### 4.1 Buttons

| Viewport | Size | Width |
|----------|------|-------|
| Mobile | `lg` (h-12) | Full width |
| Tablet | `md` (h-10) | Auto |
| Desktop | `md` (h-10) | Auto |

```tsx
// Mobile: full-width stacked
<div className="flex flex-col gap-3 md:flex-row md:gap-4">
  <Button className="w-full md:w-auto">Primary</Button>
  <Button variant="secondary" className="w-full md:w-auto">
    Secondary
  </Button>
</div>
```

### 4.2 Cards

```
Mobile:
├── Full width (edge-to-edge or with small margin)
├── Stack vertically
├── Padding: spacing-component-md (12px)

Desktop:
├── Fixed width or grid-based
├── Grid layout (2-4 columns)
├── Padding: spacing-component-lg (16px)
```

### 4.3 Modals

| Viewport | Behavior |
|----------|----------|
| Mobile | Bottom sheet, full width, drag to dismiss |
| Tablet | Centered modal, max-width: 500px |
| Desktop | Centered modal, max-width: 600px |

### 4.4 Forms

```
Mobile:
├── Labels above inputs
├── Full-width inputs
├── Single column layout
├── Large touch targets (h-12)

Desktop:
├── Labels can be inline
├── Multi-column where appropriate
├── Standard input height (h-10)
```

---

## 5. Typography Scaling

### 5.1 Responsive Type Scale

```css
/* Mobile-first typography */
:root {
  --font-size-display-xl: 2.5rem;   /* 40px */
  --font-size-h1: 1.75rem;          /* 28px */
  --font-size-h2: 1.5rem;           /* 24px */
  --font-size-body-md: 1rem;        /* 16px */
}

/* Tablet */
@media (min-width: 640px) {
  :root {
    --font-size-display-xl: 3.5rem;  /* 56px */
    --font-size-h1: 1.875rem;        /* 30px */
    --font-size-h2: 1.625rem;        /* 26px */
  }
}

/* Desktop */
@media (min-width: 1024px) {
  :root {
    --font-size-display-xl: 4.5rem;  /* 72px */
    --font-size-h1: 2rem;            /* 32px */
    --font-size-h2: 1.75rem;         /* 28px */
  }
}
```

### 5.2 Line Length Control

```css
/* Prevent overly long lines on large screens */
.prose {
  max-width: 65ch;
}

/* Headings can be wider */
h1, h2, h3 {
  max-width: 35ch;
}
```

---

## 6. Touch Considerations

### 6.1 Touch Targets

Minimum: **44x44 pixels** on mobile

```css
/* Ensure touch targets */
.touch-target {
  min-height: 44px;
  min-width: 44px;
}

/* For smaller visual elements, extend hit area */
.small-button {
  position: relative;
  /* Visual size can be smaller */
}

.small-button::before {
  content: "";
  position: absolute;
  inset: -8px; /* Extend hit area */
}
```

### 6.2 Touch Spacing

```
Minimum spacing between touch targets: 8px

Recommended spacing: 16px for frequently used actions
```

### 6.3 Gesture Support

```
Supported gestures:
├── Tap: Primary action
├── Swipe: Navigation, dismiss, delete
├── Long press: Context menu
├── Pull to refresh: List refresh
└── Pinch: Zoom (where applicable)

Every gesture must have a button alternative!
```

---

## 7. Performance

### 7.1 Image Optimization

```tsx
// Responsive images
<Image
  src="/task.jpg"
  alt="Task"
  sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 50vw,
         33vw"
  srcSet="/task-sm.jpg 640w,
          /task-md.jpg 1024w,
          /task-lg.jpg 1440w"
/>
```

### 7.2 Lazy Loading

```tsx
// Lazy load below-fold content
<LazyComponent>
  <HeavyComponent />
</LazyComponent>

// Lazy load images
<img loading="lazy" src="..." alt="..." />
```

### 7.3 Conditional Rendering

```tsx
// Don't render desktop-only elements on mobile
const isDesktop = useMediaQuery("(min-width: 1024px)")

return (
  <>
    {isDesktop && <Sidebar />}
    <MainContent />
  </>
)
```

---

## 8. Safe Areas

### 8.1 iOS Safe Areas

```css
/* Handle notch and home indicator */
.full-height {
  min-height: 100vh;
  min-height: 100dvh; /* Dynamic viewport height */
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
}

.bottom-nav {
  padding-bottom: env(safe-area-inset-bottom);
}

.header {
  padding-top: env(safe-area-inset-top);
}
```

### 8.2 Keyboard Handling

```css
/* Adjust for virtual keyboard */
.input-area {
  /* Use visual viewport */
  position: fixed;
  bottom: 0;
}

/* Or use resize observer */
@supports (height: 100dvh) {
  .full-height {
    height: 100dvh;
  }
}
```

---

## 9. Testing Checklist

### 9.1 Device Testing

- [ ] iPhone SE (375px) - smallest supported
- [ ] iPhone 14 (390px) - common size
- [ ] iPhone 14 Pro Max (430px) - large phone
- [ ] iPad Mini (768px) - small tablet
- [ ] iPad Pro 11" (834px) - tablet
- [ ] MacBook Air (1440px) - laptop
- [ ] External display (1920px+) - desktop

### 9.2 Orientation Testing

- [ ] Portrait mode (primary)
- [ ] Landscape mode (support required)
- [ ] Rotation behavior (smooth)

### 9.3 Interaction Testing

- [ ] Touch targets accessible
- [ ] Gestures working
- [ ] No hover-only interactions on touch
- [ ] Keyboard accessible on desktop

### 9.4 Content Testing

- [ ] Text readable at all sizes
- [ ] Images properly scaled
- [ ] No horizontal scroll (unless intentional)
- [ ] Forms usable on all devices

---

## 10. What NOT to Adapt

Some things should remain constant:

| Element | Reason |
|---------|--------|
| Brand colors | Consistency |
| Icon sizes (in nav) | Recognition |
| Animation easing | Feel consistent |
| Focus rings | Accessibility |
| Minimum contrast | Accessibility |
| Touch target minimum | Accessibility |

---

## Responsive Component Reference

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| Button | Full width, h-12 | Auto, h-10 | Auto, h-10 |
| Card | Full width | Grid 2-col | Grid 3-4 col |
| Modal | Bottom sheet | Center, 500px | Center, 600px |
| Nav | Bottom | Top | Top + sidebar |
| Form | Stacked | Stacked | Inline labels |
| Table | Card view | Scroll | Full |
| Tabs | Scroll | Full | Full |
