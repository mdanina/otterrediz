import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  [
    "inline-flex items-center",
    "rounded-full",
    "font-medium",
    "transition-colors",
  ],
  {
    variants: {
      variant: {
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
        success: [
          "bg-[hsl(var(--color-success-subtle))]",
          "text-[hsl(var(--color-success))]",
        ],
        warning: [
          "bg-[hsl(var(--color-warning-subtle))]",
          "text-[hsl(var(--color-warning))]",
        ],
        error: [
          "bg-[hsl(var(--color-error-subtle))]",
          "text-[hsl(var(--color-error))]",
        ],
        info: [
          "bg-[hsl(var(--color-info-subtle))]",
          "text-[hsl(var(--color-info))]",
        ],
        outline: [
          "bg-transparent",
          "border border-[hsl(var(--color-border-default))]",
          "text-[hsl(var(--color-text-primary))]",
        ],
      },
      size: {
        sm: "h-5 px-2 text-[11px]",
        md: "h-6 px-2.5 text-[12px]",
        lg: "h-7 px-3 text-[13px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, size }), className)}
        {...props}
      />
    )
  }
)
Badge.displayName = "Badge"

export { Badge, badgeVariants }
