import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  [
    "rounded-[var(--radius-card)]",
    "overflow-hidden",
    "transition-all duration-200",
  ],
  {
    variants: {
      variant: {
        elevated: [
          "bg-[hsl(var(--color-surface-primary))]",
          "shadow-[var(--shadow-card)]",
          "hover:shadow-[var(--shadow-card-hover)]",
        ],
        outlined: [
          "bg-[hsl(var(--color-surface-primary))]",
          "border border-[hsl(var(--color-border-default))]",
        ],
        filled: [
          "bg-[hsl(var(--color-surface-secondary))]",
        ],
        ghost: [
          "bg-transparent",
        ],
        glass: [
          "bg-[hsl(var(--color-surface-primary)/0.7)]",
          "backdrop-blur-md",
          "border border-[hsl(var(--color-border-subtle))]",
        ],
      },
      padding: {
        none: "p-0",
        sm: "p-3",
        md: "p-4",
        lg: "p-6",
      },
      interactive: {
        true: [
          "cursor-pointer",
          "hover:shadow-[var(--shadow-card-hover)]",
          "active:scale-[0.99]",
        ],
      },
    },
    defaultVariants: {
      variant: "elevated",
      padding: "md",
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, interactive, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, padding, interactive }), className)}
      {...props}
    />
  )
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col gap-1 p-4 pb-0", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-[20px] font-semibold leading-tight text-[hsl(var(--color-text-primary))]",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-[14px] text-[hsl(var(--color-text-secondary))]", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-4", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-3 p-4 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, cardVariants }
