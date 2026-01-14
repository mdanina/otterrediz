# Accessibility Guidelines

> WCAG 2.1 AA compliance — non-negotiable

---

## 1. Color & Contrast

### 1.1 Minimum Contrast Ratios

| Element | Ratio | WCAG Level |
|---------|-------|------------|
| Body text | 4.5:1 | AA |
| Large text (18px+) | 3:1 | AA |
| UI components | 3:1 | AA |
| Focus indicators | 3:1 | AA |
| Icons (meaningful) | 3:1 | AA |

### 1.2 Token Contrast Verification

```
Text on Background:
--color-text-primary on --color-background    → ✓ 12.5:1
--color-text-secondary on --color-background  → ✓ 6.8:1
--color-text-tertiary on --color-background   → ✓ 4.5:1

Text on Surface:
--color-text-primary on --color-surface-primary → ✓ 15.2:1
--color-text-on-accent on --color-primary       → ✓ 15.2:1

Status Colors:
--color-error-text on --color-error-subtle     → ✓ 5.1:1
--color-success-text on --color-success-subtle → ✓ 4.7:1
```

### 1.3 Color Independence

Никогда не используй цвет как единственный индикатор:

```
❌ Error only by red border
✓ Error by red border + icon + text message

❌ Success only by green color
✓ Success by green color + checkmark icon
```

---

## 2. Focus Management

### 2.1 Focus Visible

```css
/* Default focus ring */
:focus-visible {
  outline: 2px solid hsl(var(--color-border-focus));
  outline-offset: 2px;
}

/* High contrast mode */
@media (forced-colors: active) {
  :focus-visible {
    outline: 3px solid CanvasText;
  }
}
```

### 2.2 Focus Order

```
Tab order должен следовать визуальному порядку:

1. Header (logo, nav)
2. Main content (top to bottom, left to right)
3. Sidebar (if present)
4. Footer
5. Modal content (when open, trap focus)
```

### 2.3 Focus Trap (Modals)

```typescript
// Modal должен ловить фокус
const FocusTrap = {
  onMount: () => {
    // 1. Save previously focused element
    // 2. Move focus to first focusable in modal
    // 3. Trap Tab/Shift+Tab within modal
  },
  onUnmount: () => {
    // Return focus to saved element
  },
}
```

---

## 3. Keyboard Navigation

### 3.1 Required Keyboard Support

| Element | Keys |
|---------|------|
| **Button** | Enter, Space |
| **Link** | Enter |
| **Checkbox** | Space |
| **Radio** | Arrows, Space |
| **Select** | Arrows, Enter, Esc |
| **Tab** | Arrows (within group) |
| **Modal** | Esc to close |
| **Dropdown** | Esc to close, Arrows to navigate |
| **Slider** | Arrows, Home, End |

### 3.2 Skip Links

```html
<!-- First element in body -->
<a href="#main-content" class="skip-link">
  Skip to main content
</a>

<style>
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  padding: var(--spacing-2) var(--spacing-4);
  background: hsl(var(--color-primary));
  color: hsl(var(--color-text-on-accent));
  z-index: var(--z-max);
}

.skip-link:focus {
  top: 0;
}
</style>
```

### 3.3 Arrow Key Navigation

Для grouped controls (tabs, radio groups):

```typescript
const handleArrowKeys = (e: KeyboardEvent) => {
  const items = getAllFocusableItems()
  const currentIndex = items.indexOf(document.activeElement)

  switch (e.key) {
    case "ArrowDown":
    case "ArrowRight":
      items[(currentIndex + 1) % items.length].focus()
      break
    case "ArrowUp":
    case "ArrowLeft":
      items[(currentIndex - 1 + items.length) % items.length].focus()
      break
    case "Home":
      items[0].focus()
      break
    case "End":
      items[items.length - 1].focus()
      break
  }
}
```

---

## 4. Semantic HTML & ARIA

### 4.1 Use Semantic Elements

```html
<!-- ❌ Div soup -->
<div class="button" onclick="...">Click me</div>

<!-- ✓ Semantic -->
<button type="button">Click me</button>
```

### 4.2 ARIA Roles (When Needed)

```html
<!-- Tab interface -->
<div role="tablist">
  <button role="tab" aria-selected="true" aria-controls="panel-1">
    Tab 1
  </button>
  <button role="tab" aria-selected="false" aria-controls="panel-2">
    Tab 2
  </button>
</div>
<div role="tabpanel" id="panel-1">Content 1</div>
<div role="tabpanel" id="panel-2" hidden>Content 2</div>

<!-- Dialog -->
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="dialog-title"
  aria-describedby="dialog-description"
>
  <h2 id="dialog-title">Title</h2>
  <p id="dialog-description">Description</p>
</div>
```

### 4.3 ARIA Labels

```html
<!-- Icon-only button -->
<button aria-label="Close dialog">
  <XIcon aria-hidden="true" />
</button>

<!-- Form field -->
<label id="email-label" for="email">Email</label>
<input
  id="email"
  type="email"
  aria-labelledby="email-label"
  aria-describedby="email-hint email-error"
/>
<span id="email-hint">We'll never share your email</span>
<span id="email-error" role="alert">Invalid email format</span>
```

### 4.4 Live Regions

```html
<!-- Toast notifications -->
<div aria-live="polite" aria-atomic="true">
  <!-- Dynamic content here -->
</div>

<!-- Error messages -->
<div role="alert">
  Error: Please fix the following issues
</div>

<!-- Loading states -->
<div aria-busy="true" aria-live="polite">
  Loading...
</div>
```

---

## 5. Touch & Motor

### 5.1 Touch Target Size

Minimum: **44x44 pixels** (WCAG 2.5.5)

```css
/* Ensure minimum touch target */
.touch-target {
  min-width: 44px;
  min-height: 44px;

  /* If visual element is smaller, expand hit area */
  position: relative;
}

.touch-target::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 44px;
  min-height: 44px;
}
```

### 5.2 Spacing Between Targets

```
Minimum 8px gap between touch targets
to prevent accidental activation
```

### 5.3 Gesture Alternatives

```
Every gesture must have a button alternative:

Swipe to delete  → Delete button
Pinch to zoom    → Zoom +/- buttons
Drag to reorder  → Move up/down buttons
Long press       → Context menu button
```

---

## 6. Screen Reader Support

### 6.1 Hidden Content

```css
/* Visually hidden, available to screen readers */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Hide from screen readers */
[aria-hidden="true"] {
  /* Also add to decorative elements */
}
```

### 6.2 Meaningful Alt Text

```html
<!-- ❌ Bad -->
<img alt="image" src="..." />
<img alt="task-icon.png" src="..." />

<!-- ✓ Good -->
<img alt="Make the bed task" src="..." />
<img alt="" src="decorative.svg" />  <!-- Empty for decorative -->

<!-- ✓ Complex images -->
<figure>
  <img alt="Progress chart" src="..." aria-describedby="chart-desc" />
  <figcaption id="chart-desc">
    Shows task completion: 80% in week 1, 95% in week 2
  </figcaption>
</figure>
```

### 6.3 Heading Structure

```html
<!-- One h1 per page -->
<h1>Dashboard</h1>

<!-- Proper hierarchy, no skipping levels -->
<h2>Your Tasks</h2>
  <h3>Daily Challenges</h3>
  <h3>One-time Tasks</h3>
<h2>Progress</h2>
  <h3>This Week</h3>
```

---

## 7. Motion & Animation

### 7.1 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### 7.2 Pause/Stop Controls

```html
<!-- Auto-playing animations must be controllable -->
<div class="animated-content">
  <button aria-pressed="false" onclick="toggleAnimation()">
    Pause animation
  </button>
</div>
```

### 7.3 No Flashing

```
WCAG 2.3.1: No content flashes more than 3 times per second
```

---

## 8. Forms

### 8.1 Labels

```html
<!-- Every input needs a visible label -->
<label for="task-name">Task name</label>
<input id="task-name" type="text" />

<!-- Or aria-label if visually hidden -->
<input type="search" aria-label="Search tasks" />
```

### 8.2 Error Handling

```html
<!-- Errors must be: -->
<!-- 1. Associated with field -->
<!-- 2. Announced to screen readers -->
<!-- 3. Visible (not just color) -->

<label for="email">Email</label>
<input
  id="email"
  type="email"
  aria-invalid="true"
  aria-describedby="email-error"
/>
<span id="email-error" role="alert">
  <ErrorIcon aria-hidden="true" />
  Please enter a valid email address
</span>
```

### 8.3 Required Fields

```html
<label for="name">
  Name
  <span aria-hidden="true">*</span>
  <span class="sr-only">(required)</span>
</label>
<input id="name" type="text" required aria-required="true" />
```

---

## 9. Component-Specific Guidelines

### 9.1 Button

```html
<button
  type="button"
  disabled={isDisabled}
  aria-disabled={isDisabled}
  aria-busy={isLoading}
>
  {isLoading && <Spinner aria-hidden="true" />}
  {children}
</button>
```

### 9.2 Modal

```html
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-desc"
>
  <h2 id="modal-title">Confirm Action</h2>
  <p id="modal-desc">Are you sure you want to proceed?</p>
  <button>Cancel</button>
  <button>Confirm</button>
</div>
```

### 9.3 Toast

```html
<div
  role="status"
  aria-live="polite"
  aria-atomic="true"
>
  Task completed successfully!
</div>
```

### 9.4 Progress

```html
<div
  role="progressbar"
  aria-valuenow={75}
  aria-valuemin={0}
  aria-valuemax={100}
  aria-label="Task completion progress"
>
  <div style={{ width: "75%" }} />
</div>
```

---

## 10. Testing Checklist

### 10.1 Automated Testing

- [ ] Run axe-core or similar
- [ ] Run Lighthouse accessibility audit
- [ ] Validate HTML

### 10.2 Manual Testing

- [ ] Keyboard-only navigation (no mouse)
- [ ] Screen reader testing (VoiceOver, NVDA)
- [ ] Zoom to 200% (no horizontal scroll)
- [ ] High contrast mode
- [ ] Reduced motion mode
- [ ] Test with color blindness simulation

### 10.3 Per-Component

- [ ] Focus visible on all interactive elements
- [ ] Proper ARIA attributes
- [ ] Meaningful labels
- [ ] Touch targets 44x44px minimum
- [ ] Color contrast 4.5:1+

---

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WAI-ARIA Practices](https://www.w3.org/WAI/ARIA/apg/)
- [Radix UI Accessibility](https://www.radix-ui.com/docs/primitives/overview/accessibility)
- [axe DevTools](https://www.deque.com/axe/)
