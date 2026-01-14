# Figma File Structure

> Структура Figma-файла синхронизирована с кодом

---

## 1. File Organization

### 1.1 Pages Structure

```
📁 Balansity Design System
│
├── 📄 00_Cover
│   └── File cover, version, status
│
├── 📄 01_Foundations
│   ├── Colors (primitives + semantic)
│   ├── Typography
│   ├── Spacing
│   ├── Radius
│   ├── Shadows
│   └── Icons
│
├── 📄 02_Tokens
│   ├── Color tokens (light/dark)
│   ├── Typography tokens
│   ├── Spacing tokens
│   └── Effect tokens
│
├── 📄 03_Atoms
│   ├── Button
│   ├── Input
│   ├── Checkbox
│   ├── Radio
│   ├── Toggle
│   ├── Badge
│   ├── Avatar
│   └── Icon
│
├── 📄 04_Molecules
│   ├── Input Group (label + input + helper)
│   ├── Card
│   ├── List Item
│   ├── Tab
│   ├── Toast
│   ├── Tooltip
│   └── Progress
│
├── 📄 05_Organisms
│   ├── Task Card
│   ├── Navigation (Bottom, Header)
│   ├── Modal
│   ├── Form
│   ├── Calendar
│   └── Timeline
│
├── 📄 06_Patterns
│   ├── Empty State
│   ├── Loading State
│   ├── Error State
│   ├── Onboarding Flow
│   └── Form Layout
│
├── 📄 07_Templates
│   ├── Dashboard
│   ├── Task List
│   ├── Task Detail
│   ├── Profile
│   └── Settings
│
├── 📄 08_Illustrations
│   ├── Characters
│   ├── Icons (custom)
│   ├── Decorative
│   └── Empty States
│
└── 📄 99_Archive
    └── Deprecated components
```

---

## 2. Naming Convention

### 2.1 Component Naming

```
[Category]/[Component]/[Variant]/[State]

Examples:
├── Atom/Button/Primary/Default
├── Atom/Button/Primary/Hover
├── Atom/Button/Primary/Disabled
├── Atom/Button/Secondary/Default
├── Molecule/Card/Elevated/Default
├── Molecule/Card/Outlined/Default
├── Organism/TaskCard/Daily/Active
```

### 2.2 Token Naming

```
[type]/[category]/[name]

Examples:
├── color/background/default
├── color/text/primary
├── color/border/focus
├── typography/heading/h1
├── spacing/component/md
├── radius/card
├── shadow/card/hover
```

### 2.3 Rules

1. **kebab-case** для всех имён
2. **Нет визуальных названий** (blue, large)
3. **Семантические имена** (primary, accent, md)
4. **Английский язык** only
5. **Без аббревиатур** (button, не btn)

---

## 3. Component Structure

### 3.1 Auto Layout Settings

```
Все компоненты используют Auto Layout:

├── Padding: spacing tokens
├── Gap: spacing tokens
├── Alignment: consistent
├── Fill container: where appropriate
└── Hug contents: default
```

### 3.2 Variant Properties

```
Button component properties:
├── variant: primary | secondary | ghost | accent | soft | link
├── size: xs | sm | md | lg | xl
├── state: default | hover | focus | active | disabled | loading
├── icon: none | left | right | only
└── pill: false | true

Card component properties:
├── variant: elevated | outlined | filled | ghost | glass
├── padding: none | sm | md | lg
└── interactive: false | true
```

### 3.3 Base Component Pattern

```
.Component (Frame)
├── Auto Layout: Horizontal/Vertical
├── Padding: var(spacing-component-*)
├── Gap: var(spacing-component-*)
├── Fill: var(color-surface-*)
├── Stroke: var(color-border-*)
├── Radius: var(radius-*)
└── Effects: var(shadow-*)
```

---

## 4. Token Integration

### 4.1 Variables Setup

```
Figma Variables:

📁 Primitives
├── mint/50...500
├── lavender/50...500
├── coral/50...500
├── yellow/50...500
├── green/50...500
├── red/50...500
└── gray/0...950

📁 Semantic (Mode: Light | Dark)
├── color/background
├── color/surface/primary
├── color/surface/secondary
├── color/text/primary
├── color/text/secondary
├── color/border/default
├── color/primary
├── color/accent
├── color/success
├── color/warning
├── color/error
└── ...

📁 Spacing
├── component/xs...xl
├── layout/xs...2xl
└── section/sm...xl

📁 Radius
├── xs...3xl
├── button
├── card
├── modal
└── ...

📁 Typography
├── display/xl...sm
├── heading/h1...h6
├── body/lg...sm
└── ui/lg...xs
```

### 4.2 Mode Switching

```
Collection: Semantic Colors
├── Mode: Light (default)
└── Mode: Dark

Применение:
- Выбрать frame
- Variables → Semantic Colors
- Switch mode: Light ↔ Dark
```

---

## 5. States Documentation

### 5.1 Interactive States Frame

Каждый интерактивный компонент имеет frame со всеми состояниями:

```
┌─────────────────────────────────────────────────────────┐
│  Button / Primary                                       │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  [Default]  [Hover]  [Focus]  [Active]  [Disabled]     │
│                                                         │
│  Loading:                                               │
│  [Loading]                                              │
│                                                         │
│  Sizes:                                                 │
│  [xs] [sm] [md] [lg] [xl]                              │
│                                                         │
│  With Icons:                                            │
│  [Icon Left] [Icon Right] [Icon Only]                  │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### 5.2 State Annotations

```
Каждое состояние аннотировано:

State: Hover
├── Background: color/primary-hover
├── Shadow: shadow/button-hover
├── Cursor: pointer
└── Transition: 100ms ease-out
```

---

## 6. Responsive Design

### 6.1 Breakpoint Frames

```
Desktop (1440px)    │ Tablet (768px)     │ Mobile (375px)
────────────────────┼────────────────────┼──────────────────
Full layout         │ Adapted layout     │ Mobile-first
                    │                    │
Side nav visible    │ Top nav            │ Bottom nav
                    │                    │
4 column grid       │ 2 column grid      │ 1 column
```

### 6.2 Component Adaptation

```
Документировать для каждого компонента:

Desktop:
├── Max width: 400px
├── Padding: spacing-layout-md
└── Typography: body-md

Mobile:
├── Full width
├── Padding: spacing-layout-xs
└── Typography: body-sm
```

---

## 7. Handoff Specifications

### 7.1 Spec Annotations

```
Каждый компонент имеет:

1. Spacing specs (отступы)
2. Size specs (размеры)
3. Typography specs (шрифты)
4. Color specs (цвета)
5. States documentation
6. Code reference
```

### 7.2 Developer Notes

```
┌─────────────────────────────────────────────────────────┐
│  📋 Developer Notes                                     │
├─────────────────────────────────────────────────────────┤
│  Component: Button                                      │
│  File: src/components/ui/button.tsx                    │
│                                                         │
│  Props:                                                 │
│  • variant: "primary" | "secondary" | ...              │
│  • size: "sm" | "md" | "lg"                            │
│                                                         │
│  Dependencies:                                          │
│  • Radix UI (no change needed)                         │
│  • class-variance-authority                            │
│                                                         │
│  Notes:                                                 │
│  • Focus ring uses --color-border-focus               │
│  • Loading state adds spinner before text              │
└─────────────────────────────────────────────────────────┘
```

---

## 8. Version Control

### 8.1 File Versioning

```
Filename: Balansity-DS-v1.0.0

Version format: Major.Minor.Patch

Major: Breaking changes
Minor: New components/variants
Patch: Bug fixes, small updates
```

### 8.2 Change Log Page

```
📄 00_Cover

## Changelog

### v1.0.0 (2026-01-14)
- Initial design system setup
- Foundation tokens
- Core components (Button, Card, Input)

### v1.1.0 (TBD)
- Added Task Card component
- Added Timeline pattern
- Updated color tokens
```

### 8.3 Branch Strategy

```
Main file: Production-ready
Branch: Experimental/new features

Merge process:
1. Create branch from main
2. Make changes
3. Review with team
4. Merge to main
5. Update version
```

---

## 9. Quality Checklist

### 9.1 New Component Checklist

- [ ] Auto Layout applied
- [ ] All spacing uses tokens
- [ ] All colors use semantic tokens
- [ ] All typography uses presets
- [ ] All radius uses tokens
- [ ] All shadows use tokens
- [ ] Variant properties defined
- [ ] All states documented
- [ ] Responsive versions created
- [ ] Developer notes added
- [ ] Accessibility checked
- [ ] Named correctly

### 9.2 File Health Check

- [ ] No detached styles
- [ ] No absolute colors (use variables)
- [ ] No absolute spacing (use tokens)
- [ ] Components organized in pages
- [ ] Archive cleaned up
- [ ] Version updated

---

## 10. Collaboration

### 10.1 Roles

| Role | Permissions |
|------|-------------|
| DS Lead | Edit all, manage versions |
| Designer | Edit components, propose changes |
| Developer | View only, comment |

### 10.2 Review Process

```
1. Designer creates/updates component
2. Add "[Review]" prefix to name
3. DS Lead reviews
4. Feedback addressed
5. Remove "[Review]" prefix
6. Update changelog
```

### 10.3 Communication

```
Questions/Issues:
- Comment directly in Figma
- Tag relevant person
- Link to specific frame

Updates:
- Post in #design-system channel
- Include changelog summary
- Link to updated component
```
