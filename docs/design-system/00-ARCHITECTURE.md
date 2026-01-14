# Balansity Design System Architecture

> Version: 1.0.0
> Status: Foundation
> Stack: shadcn/ui + Radix UI + Tailwind CSS + CVA

---

## Executive Summary

Balansity Design System — эволюционная система, построенная на принципе **"переодевания без переписывания"**. Визуальный слой отделён от логики компонентов через semantic tokens и CSS variables.

### Ключевые принципы

1. **Token-first** — все визуальные значения через CSS variables
2. **API Stability** — логика компонентов неизменна
3. **CVA Variants** — расширение через class-variance-authority
4. **Figma = Code** — токены синхронизированы между Figma и Tailwind
5. **Accessibility First** — WCAG AA как минимум

---

## 1. Strategy: Evolution Architecture

### 1.1 Архитектурные слои

```
┌─────────────────────────────────────────────────────────┐
│                    APPLICATION LAYER                     │
│              (Pages, Features, Layouts)                  │
├─────────────────────────────────────────────────────────┤
│                    PATTERN LAYER                         │
│         (Compositions, Templates, Workflows)             │
├─────────────────────────────────────────────────────────┤
│                   COMPONENT LAYER                        │
│                                                          │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │   STYLING   │  │   VARIANTS  │  │  BEHAVIOR   │     │
│  │  (tokens,   │  │    (cva,    │  │   (Radix,   │     │
│  │   theme)    │  │   states)   │  │   logic)    │     │
│  │             │  │             │  │             │     │
│  │  ИЗМЕНЯЕМ   │  │ РАСШИРЯЕМ   │  │ НЕ ТРОГАЕМ  │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
├─────────────────────────────────────────────────────────┤
│                   FOUNDATION LAYER                       │
│                                                          │
│  Colors │ Typography │ Spacing │ Radius │ Elevation     │
│                    (CSS Variables)                       │
└─────────────────────────────────────────────────────────┘
```

### 1.2 Что изменяем

| Слой | Действие | Механизм |
|------|----------|----------|
| Foundation | Заменяем значения | CSS variables |
| Styling | Обновляем визуал | Tailwind config + tokens |
| Variants | Добавляем новые | CVA extend |
| Behavior | **НЕ ТРОГАЕМ** | Radix primitives |

### 1.3 Стратегия обновления

```typescript
// ❌ НЕ ТАК — хардкод стилей
className="bg-blue-500 rounded-lg p-4"

// ✅ ТАК — semantic tokens
className="bg-surface-primary rounded-card p-spacing-4"

// ✅ ТАК — через CSS variables
className="bg-[hsl(var(--surface-primary))] rounded-[var(--radius-card)]"
```

---

## 2. Token Architecture

### 2.1 Token Layers (3-уровневая система)

```
┌────────────────────────────────────────┐
│         COMPONENT TOKENS               │
│   button-bg, card-radius, input-border │
│              (specific)                │
├────────────────────────────────────────┤
│         SEMANTIC TOKENS                │
│   surface-primary, text-muted, accent  │
│            (meaningful)                │
├────────────────────────────────────────┤
│         PRIMITIVE TOKENS               │
│   mint-100, gray-900, radius-8         │
│              (raw values)              │
└────────────────────────────────────────┘
```

### 2.2 Mapping Flow

```
Primitive          Semantic              Component
────────────────────────────────────────────────────
mint-50      →    background        →   page-bg
mint-100     →    surface-primary   →   card-bg
gray-900     →    text-primary      →   heading-color
coral-500    →    accent            →   button-primary-bg
```

---

## 3. File Structure

```
src/
├── styles/
│   ├── globals.css              # CSS variables, base styles
│   ├── tokens/
│   │   ├── colors.css           # Color tokens
│   │   ├── typography.css       # Type tokens
│   │   ├── spacing.css          # Space tokens
│   │   └── index.css            # Token aggregator
│   └── themes/
│       ├── light.css            # Light theme overrides
│       └── dark.css             # Dark theme overrides
│
├── lib/
│   ├── utils.ts                 # cn() helper
│   └── tokens.ts                # Token type definitions
│
├── components/
│   └── ui/
│       ├── button.tsx           # shadcn components
│       ├── card.tsx
│       └── ...
│
└── tailwind.config.ts           # Tailwind + tokens mapping
```

---

## 4. Design Principles (from References)

Анализ референсов выявил следующие визуальные паттерны:

### 4.1 Visual Language

| Аспект | Характеристика |
|--------|----------------|
| **Mood** | Playful, friendly, encouraging |
| **Shapes** | Soft, organic, rounded |
| **Colors** | Pastel palette with accent pops |
| **Illustrations** | Character-based, hand-drawn feel |
| **Typography** | Clean, readable, hierarchy-focused |
| **Space** | Generous whitespace, breathable |

### 4.2 Key Visual Elements

1. **Soft Backgrounds** — mint/teal (#C5E8E8 range)
2. **Card-based UI** — elevated surfaces with subtle shadows
3. **Progress Visualization** — calendar grids, timelines
4. **Gamification** — coins, stars, rewards badges
5. **Character Illustrations** — emotional connection
6. **Bottom Navigation** — icon-based, 4-5 items

### 4.3 Emotional Variants

```
┌─────────────────────────────────────────────────────┐
│  PLAYFUL (default)                                  │
│  Яркие акценты, иллюстрации, мягкие тени           │
├─────────────────────────────────────────────────────┤
│  CALM                                               │
│  Приглушённые тона, меньше контраста               │
├─────────────────────────────────────────────────────┤
│  FOCUSED                                            │
│  Минимум отвлечений, чёткая иерархия               │
└─────────────────────────────────────────────────────┘
```

---

## 5. Implementation Phases

### Phase 1: Foundation (Current)
- [ ] Token architecture
- [ ] CSS variables setup
- [ ] Tailwind configuration
- [ ] Base theme (light)

### Phase 2: Core Components
- [ ] Button variants
- [ ] Card system
- [ ] Input family
- [ ] Navigation

### Phase 3: Patterns
- [ ] Task cards
- [ ] Progress indicators
- [ ] Reward system UI
- [ ] Onboarding flows

### Phase 4: Polish
- [ ] Dark theme
- [ ] Animations
- [ ] Micro-interactions
- [ ] Documentation

---

## 6. Success Metrics

| Metric | Target |
|--------|--------|
| Token coverage | 100% visual properties |
| Theme switch | < 1ms, no layout shift |
| New variant time | < 30 min to add |
| A11y compliance | WCAG AA |
| Figma-Code sync | Automated |

---

## Next Steps

1. → `01-TOKENS.md` — Foundation tokens specification
2. → `02-COMPONENTS.md` — Component system details
3. → `03-PATTERNS.md` — UI patterns library
4. → `04-ACCESSIBILITY.md` — A11y guidelines
