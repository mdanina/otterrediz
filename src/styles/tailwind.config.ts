import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ═══════════════════════════════════════════════════════
      // COLORS
      // All colors reference CSS variables for theming support
      // ═══════════════════════════════════════════════════════
      colors: {
        // Backgrounds
        background: "hsl(var(--color-background))",
        surface: {
          primary: "hsl(var(--color-surface-primary))",
          secondary: "hsl(var(--color-surface-secondary))",
          tertiary: "hsl(var(--color-surface-tertiary))",
          elevated: "hsl(var(--color-surface-elevated))",
        },
        overlay: "hsl(var(--color-overlay))",

        // Text
        text: {
          primary: "hsl(var(--color-text-primary))",
          secondary: "hsl(var(--color-text-secondary))",
          tertiary: "hsl(var(--color-text-tertiary))",
          disabled: "hsl(var(--color-text-disabled))",
          inverse: "hsl(var(--color-text-inverse))",
          "on-accent": "hsl(var(--color-text-on-accent))",
        },

        // Borders
        border: {
          DEFAULT: "hsl(var(--color-border-default))",
          subtle: "hsl(var(--color-border-subtle))",
          strong: "hsl(var(--color-border-strong))",
          focus: "hsl(var(--color-border-focus))",
        },

        // Brand
        primary: {
          DEFAULT: "hsl(var(--color-primary))",
          hover: "hsl(var(--color-primary-hover))",
          active: "hsl(var(--color-primary-active))",
        },
        secondary: {
          DEFAULT: "hsl(var(--color-secondary))",
          hover: "hsl(var(--color-secondary-hover))",
          active: "hsl(var(--color-secondary-active))",
        },
        accent: {
          DEFAULT: "hsl(var(--color-accent))",
          hover: "hsl(var(--color-accent-hover))",
          active: "hsl(var(--color-accent-active))",
          subtle: "hsl(var(--color-accent-subtle))",
        },

        // Status
        success: {
          DEFAULT: "hsl(var(--color-success))",
          subtle: "hsl(var(--color-success-subtle))",
          text: "hsl(var(--color-success-text))",
        },
        warning: {
          DEFAULT: "hsl(var(--color-warning))",
          subtle: "hsl(var(--color-warning-subtle))",
          text: "hsl(var(--color-warning-text))",
        },
        error: {
          DEFAULT: "hsl(var(--color-error))",
          subtle: "hsl(var(--color-error-subtle))",
          text: "hsl(var(--color-error-text))",
        },
        info: {
          DEFAULT: "hsl(var(--color-info))",
          subtle: "hsl(var(--color-info-subtle))",
          text: "hsl(var(--color-info-text))",
        },

        // Interactive
        interactive: {
          DEFAULT: "hsl(var(--color-interactive))",
          hover: "hsl(var(--color-interactive-hover))",
          visited: "hsl(var(--color-interactive-visited))",
        },

        // Gamification
        reward: "hsl(var(--color-reward))",
        "reward-glow": "hsl(var(--color-reward-glow))",
        progress: "hsl(var(--color-progress))",
        streak: "hsl(var(--color-streak))",
      },

      // ═══════════════════════════════════════════════════════
      // TYPOGRAPHY
      // ═══════════════════════════════════════════════════════
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        display: ["var(--font-display)"],
      },

      fontSize: {
        // Display
        "display-xl": ["var(--font-size-display-xl)", { lineHeight: "var(--line-height-tight)" }],
        "display-lg": ["var(--font-size-display-lg)", { lineHeight: "var(--line-height-tight)" }],
        "display-md": ["var(--font-size-display-md)", { lineHeight: "var(--line-height-tight)" }],
        "display-sm": ["var(--font-size-display-sm)", { lineHeight: "var(--line-height-tight)" }],

        // Headings
        h1: ["var(--font-size-h1)", { lineHeight: "var(--line-height-snug)" }],
        h2: ["var(--font-size-h2)", { lineHeight: "var(--line-height-snug)" }],
        h3: ["var(--font-size-h3)", { lineHeight: "var(--line-height-snug)" }],
        h4: ["var(--font-size-h4)", { lineHeight: "var(--line-height-snug)" }],
        h5: ["var(--font-size-h5)", { lineHeight: "var(--line-height-normal)" }],
        h6: ["var(--font-size-h6)", { lineHeight: "var(--line-height-normal)" }],

        // Body
        "body-lg": ["var(--font-size-body-lg)", { lineHeight: "var(--line-height-relaxed)" }],
        "body-md": ["var(--font-size-body-md)", { lineHeight: "var(--line-height-normal)" }],
        "body-sm": ["var(--font-size-body-sm)", { lineHeight: "var(--line-height-normal)" }],

        // UI
        "ui-lg": ["var(--font-size-ui-lg)", { lineHeight: "var(--line-height-none)" }],
        "ui-md": ["var(--font-size-ui-md)", { lineHeight: "var(--line-height-none)" }],
        "ui-sm": ["var(--font-size-ui-sm)", { lineHeight: "var(--line-height-none)" }],
        "ui-xs": ["var(--font-size-ui-xs)", { lineHeight: "var(--line-height-none)" }],
      },

      fontWeight: {
        regular: "var(--font-weight-regular)",
        medium: "var(--font-weight-medium)",
        semibold: "var(--font-weight-semibold)",
        bold: "var(--font-weight-bold)",
      },

      letterSpacing: {
        tighter: "var(--letter-spacing-tighter)",
        tight: "var(--letter-spacing-tight)",
        normal: "var(--letter-spacing-normal)",
        wide: "var(--letter-spacing-wide)",
        wider: "var(--letter-spacing-wider)",
      },

      lineHeight: {
        none: "var(--line-height-none)",
        tight: "var(--line-height-tight)",
        snug: "var(--line-height-snug)",
        normal: "var(--line-height-normal)",
        relaxed: "var(--line-height-relaxed)",
        loose: "var(--line-height-loose)",
      },

      // ═══════════════════════════════════════════════════════
      // SPACING
      // ═══════════════════════════════════════════════════════
      spacing: {
        // Component spacing
        "component-xs": "var(--spacing-component-xs)",
        "component-sm": "var(--spacing-component-sm)",
        "component-md": "var(--spacing-component-md)",
        "component-lg": "var(--spacing-component-lg)",
        "component-xl": "var(--spacing-component-xl)",

        // Layout spacing
        "layout-xs": "var(--spacing-layout-xs)",
        "layout-sm": "var(--spacing-layout-sm)",
        "layout-md": "var(--spacing-layout-md)",
        "layout-lg": "var(--spacing-layout-lg)",
        "layout-xl": "var(--spacing-layout-xl)",
        "layout-2xl": "var(--spacing-layout-2xl)",

        // Section spacing
        "section-sm": "var(--spacing-section-sm)",
        "section-md": "var(--spacing-section-md)",
        "section-lg": "var(--spacing-section-lg)",
        "section-xl": "var(--spacing-section-xl)",
      },

      // ═══════════════════════════════════════════════════════
      // BORDER RADIUS
      // ═══════════════════════════════════════════════════════
      borderRadius: {
        none: "var(--radius-none)",
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        DEFAULT: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        "3xl": "var(--radius-3xl)",
        full: "var(--radius-full)",

        // Semantic
        button: "var(--radius-button)",
        "button-pill": "var(--radius-button-pill)",
        input: "var(--radius-input)",
        card: "var(--radius-card)",
        modal: "var(--radius-modal)",
        badge: "var(--radius-badge)",
        avatar: "var(--radius-avatar)",
        thumbnail: "var(--radius-thumbnail)",
        tooltip: "var(--radius-tooltip)",
        checkbox: "var(--radius-checkbox)",
      },

      // ═══════════════════════════════════════════════════════
      // BOX SHADOW
      // ═══════════════════════════════════════════════════════
      boxShadow: {
        none: "var(--shadow-none)",
        xs: "var(--shadow-xs)",
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        DEFAULT: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        "2xl": "var(--shadow-2xl)",
        inner: "var(--shadow-inner)",

        // Semantic
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
        button: "var(--shadow-button)",
        "button-hover": "var(--shadow-button-hover)",
        dropdown: "var(--shadow-dropdown)",
        modal: "var(--shadow-modal)",
        toast: "var(--shadow-toast)",
        "input-focus": "var(--shadow-input-focus)",

        // Colored
        reward: "var(--shadow-reward)",
        success: "var(--shadow-success)",
        accent: "var(--shadow-accent)",
      },

      // ═══════════════════════════════════════════════════════
      // ANIMATION
      // ═══════════════════════════════════════════════════════
      transitionDuration: {
        instant: "var(--duration-instant)",
        fast: "var(--duration-fast)",
        normal: "var(--duration-normal)",
        slow: "var(--duration-slow)",
        slower: "var(--duration-slower)",
        slowest: "var(--duration-slowest)",
      },

      transitionTimingFunction: {
        linear: "var(--ease-linear)",
        in: "var(--ease-in)",
        out: "var(--ease-out)",
        "in-out": "var(--ease-in-out)",
        bounce: "var(--ease-bounce)",
        spring: "var(--ease-spring)",
      },

      // ═══════════════════════════════════════════════════════
      // Z-INDEX
      // ═══════════════════════════════════════════════════════
      zIndex: {
        base: "var(--z-base)",
        dropdown: "var(--z-dropdown)",
        sticky: "var(--z-sticky)",
        fixed: "var(--z-fixed)",
        "modal-backdrop": "var(--z-modal-backdrop)",
        modal: "var(--z-modal)",
        popover: "var(--z-popover)",
        tooltip: "var(--z-tooltip)",
        toast: "var(--z-toast)",
        max: "var(--z-max)",
      },

      // ═══════════════════════════════════════════════════════
      // KEYFRAMES & ANIMATIONS
      // ═══════════════════════════════════════════════════════
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-out": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        "slide-in-from-top": {
          from: { transform: "translateY(-100%)" },
          to: { transform: "translateY(0)" },
        },
        "slide-in-from-bottom": {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        "slide-in-from-left": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-in-from-right": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "zoom-in": {
          from: { transform: "scale(0.95)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
        "zoom-out": {
          from: { transform: "scale(1)", opacity: "1" },
          to: { transform: "scale(0.95)", opacity: "0" },
        },
        "bounce-in": {
          "0%": { transform: "scale(0.3)", opacity: "0" },
          "50%": { transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "coin-collect": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.5)", opacity: "0.8" },
          "100%": { transform: "scale(0) translateY(-50px)", opacity: "0" },
        },
        "reward-glow": {
          "0%, 100%": { boxShadow: "var(--shadow-reward)" },
          "50%": { boxShadow: "0 0 20px hsl(var(--primitive-yellow-300) / 0.6)" },
        },
      },

      animation: {
        "fade-in": "fade-in var(--duration-normal) var(--ease-out)",
        "fade-out": "fade-out var(--duration-normal) var(--ease-out)",
        "slide-in-top": "slide-in-from-top var(--duration-normal) var(--ease-out)",
        "slide-in-bottom": "slide-in-from-bottom var(--duration-normal) var(--ease-out)",
        "slide-in-left": "slide-in-from-left var(--duration-normal) var(--ease-out)",
        "slide-in-right": "slide-in-from-right var(--duration-normal) var(--ease-out)",
        "zoom-in": "zoom-in var(--duration-normal) var(--ease-out)",
        "zoom-out": "zoom-out var(--duration-normal) var(--ease-out)",
        "bounce-in": "bounce-in var(--duration-slow) var(--ease-bounce)",
        spin: "spin 1s linear infinite",
        pulse: "pulse 2s ease-in-out infinite",
        "coin-collect": "coin-collect var(--duration-slow) var(--ease-out) forwards",
        "reward-glow": "reward-glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}

export default config
