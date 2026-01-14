import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const inputVariants = cva(
  [
    "flex w-full",
    "bg-[hsl(var(--color-surface-primary))]",
    "border border-[hsl(var(--color-border-default))]",
    "rounded-[var(--radius-input)]",
    "text-[hsl(var(--color-text-primary))]",
    "placeholder:text-[hsl(var(--color-text-tertiary))]",
    "transition-all duration-150",
    "focus-visible:outline-none",
    "focus-visible:border-[hsl(var(--color-border-focus))]",
    "focus-visible:shadow-[var(--shadow-input-focus)]",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
    "disabled:bg-[hsl(var(--color-surface-secondary))]",
  ],
  {
    variants: {
      inputSize: {
        sm: "h-8 px-3 text-[13px]",
        md: "h-10 px-3 text-[14px]",
        lg: "h-12 px-4 text-[16px]",
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
      inputSize: "md",
      state: "default",
    },
  }
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, inputSize, state, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ inputSize, state }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

// Label component
const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "text-[13px] font-medium text-[hsl(var(--color-text-primary))] mb-1.5 block",
      className
    )}
    {...props}
  />
))
Label.displayName = "Label"

// Helper text component
const helperTextVariants = cva(
  "text-[12px] mt-1.5",
  {
    variants: {
      state: {
        default: "text-[hsl(var(--color-text-secondary))]",
        error: "text-[hsl(var(--color-error))]",
        success: "text-[hsl(var(--color-success))]",
      },
    },
    defaultVariants: {
      state: "default",
    },
  }
)

export interface HelperTextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof helperTextVariants> {}

const HelperText = React.forwardRef<HTMLParagraphElement, HelperTextProps>(
  ({ className, state, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(helperTextVariants({ state }), className)}
      {...props}
    />
  )
)
HelperText.displayName = "HelperText"

// Input Group component
interface InputGroupProps {
  label?: string
  helperText?: string
  error?: string
  children: React.ReactNode
  className?: string
}

const InputGroup = ({ label, helperText, error, children, className }: InputGroupProps) => (
  <div className={cn("space-y-1.5", className)}>
    {label && <Label>{label}</Label>}
    {children}
    {error ? (
      <HelperText state="error">{error}</HelperText>
    ) : helperText ? (
      <HelperText>{helperText}</HelperText>
    ) : null}
  </div>
)

export { Input, Label, HelperText, InputGroup, inputVariants }
