import * as React from "react"
import { cn } from "@/lib/utils"

interface ToggleProps {
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  size?: "sm" | "md" | "lg"
  className?: string
}

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({ checked = false, onChange, disabled = false, size = "md", className }, ref) => {
    const sizeConfig = {
      sm: { track: "h-5 w-9", thumb: "h-4 w-4", translate: "translate-x-4" },
      md: { track: "h-6 w-11", thumb: "h-5 w-5", translate: "translate-x-5" },
      lg: { track: "h-7 w-14", thumb: "h-6 w-6", translate: "translate-x-7" },
    }

    const config = sizeConfig[size]

    return (
      <button
        ref={ref}
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={cn(
          "relative inline-flex shrink-0 cursor-pointer items-center rounded-full transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--color-border-focus))] focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          config.track,
          checked
            ? "bg-[hsl(var(--color-primary))]"
            : "bg-[hsl(var(--color-surface-tertiary))]",
          className
        )}
      >
        <span
          className={cn(
            "pointer-events-none inline-block rounded-full bg-white shadow-sm transition-transform",
            config.thumb,
            checked ? config.translate : "translate-x-0.5"
          )}
        />
      </button>
    )
  }
)
Toggle.displayName = "Toggle"

// Checkbox
interface CheckboxProps {
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  indeterminate?: boolean
  size?: "sm" | "md" | "lg"
  className?: string
}

const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ checked = false, onChange, disabled = false, indeterminate = false, size = "md", className }, ref) => {
    const sizeConfig = {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
    }

    return (
      <button
        ref={ref}
        role="checkbox"
        aria-checked={indeterminate ? "mixed" : checked}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={cn(
          "inline-flex items-center justify-center rounded-[var(--radius-checkbox)] border-2 transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--color-border-focus))] focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          sizeConfig[size],
          checked || indeterminate
            ? "bg-[hsl(var(--color-primary))] border-[hsl(var(--color-primary))]"
            : "bg-[hsl(var(--color-surface-primary))] border-[hsl(var(--color-border-default))] hover:border-[hsl(var(--color-border-strong))]",
          className
        )}
      >
        {checked && (
          <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
        {indeterminate && !checked && (
          <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        )}
      </button>
    )
  }
)
Checkbox.displayName = "Checkbox"

// Radio
interface RadioProps {
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  size?: "sm" | "md" | "lg"
  className?: string
}

const Radio = React.forwardRef<HTMLButtonElement, RadioProps>(
  ({ checked = false, onChange, disabled = false, size = "md", className }, ref) => {
    const sizeConfig = {
      sm: { outer: "h-4 w-4", inner: "h-2 w-2" },
      md: { outer: "h-5 w-5", inner: "h-2.5 w-2.5" },
      lg: { outer: "h-6 w-6", inner: "h-3 w-3" },
    }

    const config = sizeConfig[size]

    return (
      <button
        ref={ref}
        role="radio"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={cn(
          "inline-flex items-center justify-center rounded-full border-2 transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--color-border-focus))] focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          config.outer,
          checked
            ? "border-[hsl(var(--color-primary))]"
            : "border-[hsl(var(--color-border-default))] hover:border-[hsl(var(--color-border-strong))]",
          className
        )}
      >
        {checked && (
          <span
            className={cn(
              "rounded-full bg-[hsl(var(--color-primary))]",
              config.inner
            )}
          />
        )}
      </button>
    )
  }
)
Radio.displayName = "Radio"

export { Toggle, Checkbox, Radio }
