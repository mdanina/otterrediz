import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Linear Progress
const progressTrackVariants = cva(
  [
    "relative w-full overflow-hidden",
    "bg-[hsl(var(--color-surface-tertiary))]",
    "rounded-full",
  ],
  {
    variants: {
      size: {
        xs: "h-1",
        sm: "h-1.5",
        md: "h-2",
        lg: "h-3",
        xl: "h-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

const progressIndicatorVariants = cva(
  [
    "h-full",
    "rounded-full",
    "transition-all duration-300 ease-out",
  ],
  {
    variants: {
      variant: {
        default: "bg-[hsl(var(--color-progress))]",
        primary: "bg-[hsl(var(--color-primary))]",
        accent: "bg-[hsl(var(--color-accent))]",
        success: "bg-[hsl(var(--color-success))]",
        warning: "bg-[hsl(var(--color-warning))]",
        error: "bg-[hsl(var(--color-error))]",
        reward: "bg-[hsl(var(--color-reward))]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface ProgressProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressTrackVariants>,
    VariantProps<typeof progressIndicatorVariants> {
  value?: number
  max?: number
  showLabel?: boolean
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = 0, max = 100, size, variant, showLabel, ...props }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

    return (
      <div className={cn("relative", className)}>
        <div
          ref={ref}
          className={cn(progressTrackVariants({ size }))}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
          {...props}
        >
          <div
            className={cn(progressIndicatorVariants({ variant }))}
            style={{ width: `${percentage}%` }}
          />
        </div>
        {showLabel && (
          <span className="absolute right-0 top-1/2 -translate-y-1/2 ml-3 text-[12px] font-medium text-[hsl(var(--color-text-secondary))]">
            {Math.round(percentage)}%
          </span>
        )}
      </div>
    )
  }
)
Progress.displayName = "Progress"

// Circular Progress
interface CircularProgressProps {
  value?: number
  max?: number
  size?: number
  strokeWidth?: number
  variant?: "default" | "primary" | "accent" | "success" | "warning" | "error" | "reward"
  showValue?: boolean
  className?: string
  children?: React.ReactNode
}

const CircularProgress = ({
  value = 0,
  max = 100,
  size = 48,
  strokeWidth = 4,
  variant = "default",
  showValue = false,
  className,
  children,
}: CircularProgressProps) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  const colorMap = {
    default: "hsl(var(--color-progress))",
    primary: "hsl(var(--color-primary))",
    accent: "hsl(var(--color-accent))",
    success: "hsl(var(--color-success))",
    warning: "hsl(var(--color-warning))",
    error: "hsl(var(--color-error))",
    reward: "hsl(var(--color-reward))",
  }

  return (
    <div
      className={cn("relative inline-flex items-center justify-center", className)}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="hsl(var(--color-surface-tertiary))"
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={colorMap[variant]}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-300 ease-out"
        />
      </svg>
      {(showValue || children) && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children || (
            <span className="text-[12px] font-semibold text-[hsl(var(--color-text-primary))]">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
    </div>
  )
}

export { Progress, CircularProgress, progressTrackVariants, progressIndicatorVariants }
