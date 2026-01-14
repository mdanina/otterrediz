# Foundation Tokens

> Все визуальные значения системы. HSL-first, semantic-named.

---

## 1. Color System

### 1.1 Primitive Palette

Базовые цвета — **никогда не используются напрямую в компонентах**.

```css
/* primitives/colors.css */

:root {
  /* Mint (Primary Background) */
  --primitive-mint-50:  180 35% 97%;   /* #F5FBFB */
  --primitive-mint-100: 180 35% 93%;   /* #E6F5F5 */
  --primitive-mint-200: 180 32% 85%;   /* #C5E8E8 */
  --primitive-mint-300: 180 30% 75%;   /* #A3D9D9 */
  --primitive-mint-400: 180 28% 65%;   /* #82C9C9 */
  --primitive-mint-500: 180 25% 55%;   /* #66B8B8 */

  /* Lavender (Secondary) */
  --primitive-lavender-50:  260 40% 97%;
  --primitive-lavender-100: 260 40% 93%;
  --primitive-lavender-200: 260 35% 85%;
  --primitive-lavender-300: 260 30% 75%;
  --primitive-lavender-400: 260 25% 65%;
  --primitive-lavender-500: 260 20% 55%;

  /* Coral (Accent) */
  --primitive-coral-50:  15 85% 97%;
  --primitive-coral-100: 15 85% 93%;
  --primitive-coral-200: 15 80% 85%;
  --primitive-coral-300: 15 75% 75%;
  --primitive-coral-400: 15 70% 65%;
  --primitive-coral-500: 15 65% 55%;

  /* Yellow (Reward/Success) */
  --primitive-yellow-50:  45 95% 97%;
  --primitive-yellow-100: 45 95% 90%;
  --primitive-yellow-200: 45 90% 80%;
  --primitive-yellow-300: 45 85% 70%;
  --primitive-yellow-400: 45 80% 60%;
  --primitive-yellow-500: 45 75% 50%;

  /* Green (Success/Complete) */
  --primitive-green-50:  145 60% 97%;
  --primitive-green-100: 145 55% 90%;
  --primitive-green-200: 145 50% 75%;
  --primitive-green-300: 145 45% 60%;
  --primitive-green-400: 145 50% 45%;
  --primitive-green-500: 145 55% 35%;

  /* Red (Error) */
  --primitive-red-50:  0 70% 97%;
  --primitive-red-100: 0 70% 93%;
  --primitive-red-200: 0 65% 85%;
  --primitive-red-300: 0 60% 70%;
  --primitive-red-400: 0 65% 55%;
  --primitive-red-500: 0 70% 45%;

  /* Neutral (Gray scale) */
  --primitive-gray-0:   0 0% 100%;     /* White */
  --primitive-gray-50:  220 15% 98%;
  --primitive-gray-100: 220 15% 95%;
  --primitive-gray-200: 220 12% 90%;
  --primitive-gray-300: 220 10% 80%;
  --primitive-gray-400: 220 8% 65%;
  --primitive-gray-500: 220 6% 50%;
  --primitive-gray-600: 220 8% 40%;
  --primitive-gray-700: 220 10% 30%;
  --primitive-gray-800: 220 12% 20%;
  --primitive-gray-900: 220 15% 10%;
  --primitive-gray-950: 220 20% 5%;    /* Near black */
}
```

### 1.2 Semantic Color Tokens

Используются в компонентах. **Это единственный слой, который видят разработчики.**

```css
/* tokens/colors.css */

:root {
  /* ═══════════════════════════════════════════════════════
     BACKGROUNDS
     ═══════════════════════════════════════════════════════ */

  /* Page background — основной фон приложения */
  --color-background: var(--primitive-mint-100);

  /* Surface levels — карточки и контейнеры */
  --color-surface-primary: var(--primitive-gray-0);      /* Основные карточки */
  --color-surface-secondary: var(--primitive-gray-50);   /* Вложенные секции */
  --color-surface-tertiary: var(--primitive-gray-100);   /* Глубокие уровни */
  --color-surface-elevated: var(--primitive-gray-0);     /* Модалки, попапы */

  /* Overlay */
  --color-overlay: 220 15% 10% / 0.5;                    /* Затемнение под модалками */

  /* ═══════════════════════════════════════════════════════
     TEXT
     ═══════════════════════════════════════════════════════ */

  --color-text-primary: var(--primitive-gray-900);       /* Заголовки, основной текст */
  --color-text-secondary: var(--primitive-gray-600);     /* Второстепенный текст */
  --color-text-tertiary: var(--primitive-gray-400);      /* Подсказки, плейсхолдеры */
  --color-text-disabled: var(--primitive-gray-300);      /* Неактивный текст */
  --color-text-inverse: var(--primitive-gray-0);         /* Текст на тёмном фоне */
  --color-text-on-accent: var(--primitive-gray-0);       /* Текст на акцентных кнопках */

  /* ═══════════════════════════════════════════════════════
     BORDERS
     ═══════════════════════════════════════════════════════ */

  --color-border-default: var(--primitive-gray-200);     /* Стандартные границы */
  --color-border-subtle: var(--primitive-gray-100);      /* Едва заметные разделители */
  --color-border-strong: var(--primitive-gray-300);      /* Выраженные границы */
  --color-border-focus: var(--primitive-mint-400);       /* Focus ring */

  /* ═══════════════════════════════════════════════════════
     BRAND / ACCENT
     ═══════════════════════════════════════════════════════ */

  --color-primary: var(--primitive-gray-900);            /* Основной акцент (тёмный) */
  --color-primary-hover: var(--primitive-gray-800);
  --color-primary-active: var(--primitive-gray-950);

  --color-secondary: var(--primitive-lavender-200);      /* Вторичный акцент */
  --color-secondary-hover: var(--primitive-lavender-300);
  --color-secondary-active: var(--primitive-lavender-400);

  --color-accent: var(--primitive-coral-400);            /* Яркий акцент */
  --color-accent-hover: var(--primitive-coral-500);
  --color-accent-active: var(--primitive-coral-300);
  --color-accent-subtle: var(--primitive-coral-100);     /* Фон для акцентных элементов */

  /* ═══════════════════════════════════════════════════════
     STATUS
     ═══════════════════════════════════════════════════════ */

  /* Success */
  --color-success: var(--primitive-green-400);
  --color-success-subtle: var(--primitive-green-50);
  --color-success-text: var(--primitive-green-500);

  /* Warning */
  --color-warning: var(--primitive-yellow-400);
  --color-warning-subtle: var(--primitive-yellow-50);
  --color-warning-text: var(--primitive-yellow-500);

  /* Error */
  --color-error: var(--primitive-red-400);
  --color-error-subtle: var(--primitive-red-50);
  --color-error-text: var(--primitive-red-500);

  /* Info */
  --color-info: var(--primitive-mint-400);
  --color-info-subtle: var(--primitive-mint-100);
  --color-info-text: var(--primitive-mint-500);

  /* ═══════════════════════════════════════════════════════
     INTERACTIVE
     ═══════════════════════════════════════════════════════ */

  --color-interactive: var(--primitive-gray-900);        /* Links, clickable text */
  --color-interactive-hover: var(--primitive-gray-700);
  --color-interactive-visited: var(--primitive-gray-600);

  /* ═══════════════════════════════════════════════════════
     SPECIAL: GAMIFICATION
     ═══════════════════════════════════════════════════════ */

  --color-reward: var(--primitive-yellow-300);           /* Coins, rewards */
  --color-reward-glow: var(--primitive-yellow-200);
  --color-progress: var(--primitive-green-400);          /* Progress bars */
  --color-streak: var(--primitive-coral-400);            /* Streak indicators */
}
```

### 1.3 Dark Theme Overrides

```css
/* themes/dark.css */

.dark {
  /* Backgrounds */
  --color-background: var(--primitive-gray-950);
  --color-surface-primary: var(--primitive-gray-900);
  --color-surface-secondary: var(--primitive-gray-800);
  --color-surface-tertiary: var(--primitive-gray-700);
  --color-surface-elevated: var(--primitive-gray-800);

  /* Text */
  --color-text-primary: var(--primitive-gray-50);
  --color-text-secondary: var(--primitive-gray-300);
  --color-text-tertiary: var(--primitive-gray-500);
  --color-text-disabled: var(--primitive-gray-600);
  --color-text-inverse: var(--primitive-gray-900);

  /* Borders */
  --color-border-default: var(--primitive-gray-700);
  --color-border-subtle: var(--primitive-gray-800);
  --color-border-strong: var(--primitive-gray-600);

  /* Primary inverts */
  --color-primary: var(--primitive-gray-0);
  --color-primary-hover: var(--primitive-gray-100);
  --color-primary-active: var(--primitive-gray-200);
}
```

### 1.4 Color Token Reference

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--color-background` | mint-100 | gray-950 | Page background |
| `--color-surface-primary` | white | gray-900 | Cards, panels |
| `--color-text-primary` | gray-900 | gray-50 | Headings, body |
| `--color-primary` | gray-900 | white | Primary buttons |
| `--color-accent` | coral-400 | coral-400 | CTAs, highlights |
| `--color-success` | green-400 | green-400 | Success states |
| `--color-error` | red-400 | red-400 | Error states |

---

## 2. Typography System

### 2.1 Font Stack

```css
:root {
  /* Primary font — UI and body text */
  --font-sans: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  /* Monospace — code, data, numbers */
  --font-mono: 'Geist Mono', 'SF Mono', 'Fira Code', monospace;

  /* Display — large headlines (optional custom) */
  --font-display: var(--font-sans);
}
```

### 2.2 Type Scale

Base: `16px` (1rem)
Scale ratio: `1.25` (Major Third)

```css
:root {
  /* ═══════════════════════════════════════════════════════
     FONT SIZES
     ═══════════════════════════════════════════════════════ */

  /* Display — hero sections, landing pages */
  --font-size-display-xl: 4.5rem;    /* 72px */
  --font-size-display-lg: 3.75rem;   /* 60px */
  --font-size-display-md: 3rem;      /* 48px */
  --font-size-display-sm: 2.25rem;   /* 36px */

  /* Headings */
  --font-size-h1: 2rem;              /* 32px */
  --font-size-h2: 1.75rem;           /* 28px */
  --font-size-h3: 1.5rem;            /* 24px */
  --font-size-h4: 1.25rem;           /* 20px */
  --font-size-h5: 1.125rem;          /* 18px */
  --font-size-h6: 1rem;              /* 16px */

  /* Body */
  --font-size-body-lg: 1.125rem;     /* 18px */
  --font-size-body-md: 1rem;         /* 16px — default */
  --font-size-body-sm: 0.875rem;     /* 14px */

  /* UI Text */
  --font-size-ui-lg: 1rem;           /* 16px */
  --font-size-ui-md: 0.875rem;       /* 14px */
  --font-size-ui-sm: 0.75rem;        /* 12px */
  --font-size-ui-xs: 0.6875rem;      /* 11px */

  /* ═══════════════════════════════════════════════════════
     LINE HEIGHTS
     ═══════════════════════════════════════════════════════ */

  --line-height-none: 1;
  --line-height-tight: 1.1;          /* Display, large headings */
  --line-height-snug: 1.25;          /* Headings */
  --line-height-normal: 1.5;         /* Body text */
  --line-height-relaxed: 1.625;      /* Long-form reading */
  --line-height-loose: 2;            /* Spacious UI */

  /* ═══════════════════════════════════════════════════════
     LETTER SPACING
     ═══════════════════════════════════════════════════════ */

  --letter-spacing-tighter: -0.04em;  /* Large display */
  --letter-spacing-tight: -0.02em;    /* Headings */
  --letter-spacing-normal: 0;         /* Body */
  --letter-spacing-wide: 0.02em;      /* Small caps, labels */
  --letter-spacing-wider: 0.04em;     /* ALL CAPS text */

  /* ═══════════════════════════════════════════════════════
     FONT WEIGHTS
     ═══════════════════════════════════════════════════════ */

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}
```

### 2.3 Typography Presets

Составные токены для типичных use cases:

```css
:root {
  /* Display */
  --typography-display-xl: var(--font-weight-bold) var(--font-size-display-xl)/var(--line-height-tight) var(--font-display);
  --typography-display-lg: var(--font-weight-bold) var(--font-size-display-lg)/var(--line-height-tight) var(--font-display);

  /* Headings */
  --typography-h1: var(--font-weight-bold) var(--font-size-h1)/var(--line-height-snug) var(--font-sans);
  --typography-h2: var(--font-weight-bold) var(--font-size-h2)/var(--line-height-snug) var(--font-sans);
  --typography-h3: var(--font-weight-semibold) var(--font-size-h3)/var(--line-height-snug) var(--font-sans);
  --typography-h4: var(--font-weight-semibold) var(--font-size-h4)/var(--line-height-snug) var(--font-sans);
  --typography-h5: var(--font-weight-medium) var(--font-size-h5)/var(--line-height-normal) var(--font-sans);
  --typography-h6: var(--font-weight-medium) var(--font-size-h6)/var(--line-height-normal) var(--font-sans);

  /* Body */
  --typography-body-lg: var(--font-weight-regular) var(--font-size-body-lg)/var(--line-height-relaxed) var(--font-sans);
  --typography-body-md: var(--font-weight-regular) var(--font-size-body-md)/var(--line-height-normal) var(--font-sans);
  --typography-body-sm: var(--font-weight-regular) var(--font-size-body-sm)/var(--line-height-normal) var(--font-sans);

  /* UI */
  --typography-ui-lg: var(--font-weight-medium) var(--font-size-ui-lg)/var(--line-height-none) var(--font-sans);
  --typography-ui-md: var(--font-weight-medium) var(--font-size-ui-md)/var(--line-height-none) var(--font-sans);
  --typography-ui-sm: var(--font-weight-medium) var(--font-size-ui-sm)/var(--line-height-none) var(--font-sans);

  /* Labels */
  --typography-label: var(--font-weight-medium) var(--font-size-ui-sm)/var(--line-height-none) var(--font-sans);
  --typography-caption: var(--font-weight-regular) var(--font-size-ui-xs)/var(--line-height-normal) var(--font-sans);

  /* Mono */
  --typography-mono-md: var(--font-weight-regular) var(--font-size-body-md)/var(--line-height-normal) var(--font-mono);
  --typography-mono-sm: var(--font-weight-regular) var(--font-size-body-sm)/var(--line-height-normal) var(--font-mono);
}
```

### 2.4 Responsive Typography

```css
/* Mobile-first breakpoints */

/* Base (mobile) */
:root {
  --font-size-display-xl: 2.5rem;   /* 40px on mobile */
  --font-size-display-lg: 2rem;     /* 32px */
  --font-size-h1: 1.75rem;          /* 28px */
  --font-size-h2: 1.5rem;           /* 24px */
}

/* Tablet (640px+) */
@media (min-width: 640px) {
  :root {
    --font-size-display-xl: 3.5rem;
    --font-size-display-lg: 2.75rem;
    --font-size-h1: 1.875rem;
    --font-size-h2: 1.625rem;
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  :root {
    --font-size-display-xl: 4.5rem;
    --font-size-display-lg: 3.75rem;
    --font-size-h1: 2rem;
    --font-size-h2: 1.75rem;
  }
}
```

### 2.5 Typography Reference

| Preset | Size | Weight | Line Height | Use Case |
|--------|------|--------|-------------|----------|
| `display-xl` | 72px | 700 | 1.1 | Hero headlines |
| `h1` | 32px | 700 | 1.25 | Page titles |
| `h2` | 28px | 700 | 1.25 | Section headers |
| `h3` | 24px | 600 | 1.25 | Card titles |
| `body-md` | 16px | 400 | 1.5 | Paragraphs |
| `body-sm` | 14px | 400 | 1.5 | Secondary text |
| `ui-md` | 14px | 500 | 1 | Buttons, labels |
| `ui-sm` | 12px | 500 | 1 | Tags, badges |

---

## 3. Spacing System

### 3.1 Base Unit

Base: `4px` (0.25rem)
Все значения кратны базовому юниту.

```css
:root {
  /* ═══════════════════════════════════════════════════════
     SPACING SCALE
     ═══════════════════════════════════════════════════════ */

  --spacing-0: 0;
  --spacing-px: 1px;
  --spacing-0-5: 0.125rem;   /* 2px */
  --spacing-1: 0.25rem;      /* 4px */
  --spacing-1-5: 0.375rem;   /* 6px */
  --spacing-2: 0.5rem;       /* 8px */
  --spacing-2-5: 0.625rem;   /* 10px */
  --spacing-3: 0.75rem;      /* 12px */
  --spacing-3-5: 0.875rem;   /* 14px */
  --spacing-4: 1rem;         /* 16px */
  --spacing-5: 1.25rem;      /* 20px */
  --spacing-6: 1.5rem;       /* 24px */
  --spacing-7: 1.75rem;      /* 28px */
  --spacing-8: 2rem;         /* 32px */
  --spacing-9: 2.25rem;      /* 36px */
  --spacing-10: 2.5rem;      /* 40px */
  --spacing-11: 2.75rem;     /* 44px */
  --spacing-12: 3rem;        /* 48px */
  --spacing-14: 3.5rem;      /* 56px */
  --spacing-16: 4rem;        /* 64px */
  --spacing-20: 5rem;        /* 80px */
  --spacing-24: 6rem;        /* 96px */
  --spacing-28: 7rem;        /* 112px */
  --spacing-32: 8rem;        /* 128px */

  /* ═══════════════════════════════════════════════════════
     SEMANTIC SPACING
     ═══════════════════════════════════════════════════════ */

  /* Component internal spacing */
  --spacing-component-xs: var(--spacing-1);     /* 4px - tight elements */
  --spacing-component-sm: var(--spacing-2);     /* 8px - compact */
  --spacing-component-md: var(--spacing-3);     /* 12px - default */
  --spacing-component-lg: var(--spacing-4);     /* 16px - spacious */
  --spacing-component-xl: var(--spacing-6);     /* 24px - very spacious */

  /* Layout spacing */
  --spacing-layout-xs: var(--spacing-4);        /* 16px */
  --spacing-layout-sm: var(--spacing-6);        /* 24px */
  --spacing-layout-md: var(--spacing-8);        /* 32px */
  --spacing-layout-lg: var(--spacing-12);       /* 48px */
  --spacing-layout-xl: var(--spacing-16);       /* 64px */
  --spacing-layout-2xl: var(--spacing-24);      /* 96px */

  /* Section spacing */
  --spacing-section-sm: var(--spacing-12);      /* 48px */
  --spacing-section-md: var(--spacing-16);      /* 64px */
  --spacing-section-lg: var(--spacing-24);      /* 96px */
  --spacing-section-xl: var(--spacing-32);      /* 128px */
}
```

### 3.2 Spacing Usage Guide

| Context | Token | Value | Example |
|---------|-------|-------|---------|
| Icon + text gap | `component-xs` | 4px | Button icon margin |
| Input padding | `component-sm` | 8px | Horizontal padding |
| Card padding | `component-lg` | 16px | Internal padding |
| Cards gap | `layout-sm` | 24px | Grid gap |
| Section margin | `section-md` | 64px | Between sections |

---

## 4. Border Radius

### 4.1 Radius Scale

Система радиусов отражает "playful" характер UI — мягкие, органичные формы.

```css
:root {
  /* ═══════════════════════════════════════════════════════
     RADIUS SCALE
     ═══════════════════════════════════════════════════════ */

  --radius-none: 0;
  --radius-xs: 0.125rem;     /* 2px - subtle */
  --radius-sm: 0.25rem;      /* 4px - minimal */
  --radius-md: 0.5rem;       /* 8px - default */
  --radius-lg: 0.75rem;      /* 12px - prominent */
  --radius-xl: 1rem;         /* 16px - large */
  --radius-2xl: 1.25rem;     /* 20px - very large */
  --radius-3xl: 1.5rem;      /* 24px - extra large */
  --radius-full: 9999px;     /* Pill/circle */

  /* ═══════════════════════════════════════════════════════
     SEMANTIC RADIUS
     ═══════════════════════════════════════════════════════ */

  /* Components */
  --radius-button: var(--radius-lg);           /* 12px - buttons feel friendly */
  --radius-button-pill: var(--radius-full);    /* Pill buttons */
  --radius-input: var(--radius-lg);            /* 12px - inputs */
  --radius-card: var(--radius-2xl);            /* 20px - cards are soft */
  --radius-modal: var(--radius-3xl);           /* 24px - modals */
  --radius-badge: var(--radius-full);          /* Pills for badges/tags */
  --radius-avatar: var(--radius-full);         /* Circular avatars */
  --radius-thumbnail: var(--radius-xl);        /* Image thumbnails */
  --radius-tooltip: var(--radius-md);          /* Tooltips */
  --radius-checkbox: var(--radius-sm);         /* Checkboxes */
}
```

### 4.2 Radius Philosophy

```
┌────────────────────────────────────────────────────────┐
│  SOFT & FRIENDLY                                       │
│                                                        │
│  ╭──────────────────╮    ← radius-card (20px)         │
│  │                  │                                  │
│  │   ╭──────────╮   │    ← radius-button (12px)       │
│  │   │  Click!  │   │                                  │
│  │   ╰──────────╯   │                                  │
│  │                  │                                  │
│  ╰──────────────────╯                                  │
│                                                        │
│  Большие контейнеры = большой радиус                  │
│  Маленькие элементы = меньший (но не острый)          │
└────────────────────────────────────────────────────────┘
```

---

## 5. Elevation / Shadows

### 5.1 Shadow Scale

Мягкие, рассеянные тени для "floating" эффекта.

```css
:root {
  /* ═══════════════════════════════════════════════════════
     SHADOW SCALE
     ═══════════════════════════════════════════════════════ */

  --shadow-none: none;

  /* Subtle - едва заметная глубина */
  --shadow-xs:
    0 1px 2px 0 hsl(var(--primitive-gray-900) / 0.03);

  /* Small - лёгкое поднятие */
  --shadow-sm:
    0 1px 3px 0 hsl(var(--primitive-gray-900) / 0.04),
    0 1px 2px -1px hsl(var(--primitive-gray-900) / 0.03);

  /* Medium - карточки (default) */
  --shadow-md:
    0 4px 6px -1px hsl(var(--primitive-gray-900) / 0.05),
    0 2px 4px -2px hsl(var(--primitive-gray-900) / 0.03);

  /* Large - поднятые элементы */
  --shadow-lg:
    0 10px 15px -3px hsl(var(--primitive-gray-900) / 0.06),
    0 4px 6px -4px hsl(var(--primitive-gray-900) / 0.04);

  /* XL - модалки, попапы */
  --shadow-xl:
    0 20px 25px -5px hsl(var(--primitive-gray-900) / 0.08),
    0 8px 10px -6px hsl(var(--primitive-gray-900) / 0.05);

  /* 2XL - максимальный уровень */
  --shadow-2xl:
    0 25px 50px -12px hsl(var(--primitive-gray-900) / 0.15);

  /* Inner shadow */
  --shadow-inner:
    inset 0 2px 4px 0 hsl(var(--primitive-gray-900) / 0.04);

  /* ═══════════════════════════════════════════════════════
     SEMANTIC SHADOWS
     ═══════════════════════════════════════════════════════ */

  --shadow-card: var(--shadow-md);
  --shadow-card-hover: var(--shadow-lg);
  --shadow-button: var(--shadow-sm);
  --shadow-button-hover: var(--shadow-md);
  --shadow-dropdown: var(--shadow-lg);
  --shadow-modal: var(--shadow-xl);
  --shadow-toast: var(--shadow-lg);
  --shadow-input-focus: 0 0 0 3px hsl(var(--color-border-focus) / 0.2);
}
```

### 5.2 Colored Shadows (Accent)

Для gamification-элементов — цветные glow-эффекты:

```css
:root {
  /* Reward glow */
  --shadow-reward:
    0 4px 14px -2px hsl(var(--primitive-yellow-300) / 0.4);

  /* Success glow */
  --shadow-success:
    0 4px 14px -2px hsl(var(--primitive-green-400) / 0.3);

  /* Accent glow */
  --shadow-accent:
    0 4px 14px -2px hsl(var(--primitive-coral-400) / 0.3);
}
```

---

## 6. Animation Tokens

### 6.1 Duration

```css
:root {
  --duration-instant: 0ms;
  --duration-fast: 100ms;
  --duration-normal: 200ms;
  --duration-slow: 300ms;
  --duration-slower: 500ms;
  --duration-slowest: 700ms;
}
```

### 6.2 Easing

```css
:root {
  --ease-linear: linear;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

  /* Playful bounce */
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Smooth spring */
  --ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
```

### 6.3 Semantic Animations

```css
:root {
  --transition-colors: color, background-color, border-color var(--duration-fast) var(--ease-out);
  --transition-opacity: opacity var(--duration-fast) var(--ease-out);
  --transition-transform: transform var(--duration-normal) var(--ease-out);
  --transition-shadow: box-shadow var(--duration-fast) var(--ease-out);
  --transition-all: all var(--duration-normal) var(--ease-out);
}
```

---

## 7. Z-Index Scale

```css
:root {
  --z-base: 0;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-fixed: 300;
  --z-modal-backdrop: 400;
  --z-modal: 500;
  --z-popover: 600;
  --z-tooltip: 700;
  --z-toast: 800;
  --z-max: 9999;
}
```

---

## 8. Breakpoints

```css
/* Defined in Tailwind config, documented here for reference */

--breakpoint-sm: 640px;   /* Mobile landscape / small tablet */
--breakpoint-md: 768px;   /* Tablet portrait */
--breakpoint-lg: 1024px;  /* Tablet landscape / small desktop */
--breakpoint-xl: 1280px;  /* Desktop */
--breakpoint-2xl: 1536px; /* Large desktop */
```

---

## Token Naming Convention

### Pattern

```
--{category}-{property}-{variant}-{state}
```

### Examples

```css
--color-text-primary           /* category: color, property: text, variant: primary */
--color-text-primary-hover     /* + state: hover */
--spacing-component-md         /* category: spacing, property: component, variant: md */
--radius-button                /* category: radius, property: button */
--shadow-card-hover            /* category: shadow, property: card, state: hover */
```

### Rules

1. Всегда kebab-case
2. Нет визуальных названий (`blue`, `large`)
3. Семантические имена (`primary`, `accent`, `md`)
4. State в конце (`-hover`, `-active`, `-disabled`)
