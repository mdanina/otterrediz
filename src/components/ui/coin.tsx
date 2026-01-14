import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const coinVariants = cva(
  [
    "inline-flex items-center justify-center",
    "rounded-full",
    "font-bold",
    "bg-[hsl(var(--color-reward))]",
    "text-[hsl(var(--color-text-primary))]",
    "shadow-[var(--shadow-reward)]",
    "select-none",
  ],
  {
    variants: {
      size: {
        xs: "h-5 w-5 text-[9px]",
        sm: "h-6 w-6 text-[10px]",
        md: "h-8 w-8 text-[12px]",
        lg: "h-10 w-10 text-[14px]",
        xl: "h-14 w-14 text-[18px]",
        "2xl": "h-20 w-20 text-[24px]",
      },
      animated: {
        true: "animate-[reward-glow_2s_ease-in-out_infinite]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

export interface CoinProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof coinVariants> {
  value?: number
  showValue?: boolean
}

const Coin = React.forwardRef<HTMLDivElement, CoinProps>(
  ({ className, size, animated, value, showValue = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(coinVariants({ size, animated }), className)}
        {...props}
      >
        {showValue && value !== undefined ? value : "$"}
      </div>
    )
  }
)
Coin.displayName = "Coin"

// Coin Display with label
interface CoinDisplayProps {
  value: number
  label?: string
  size?: "sm" | "md" | "lg"
  className?: string
}

const CoinDisplay = ({ value, label, size = "md", className }: CoinDisplayProps) => {
  const sizeClasses = {
    sm: "gap-1.5 text-[14px]",
    md: "gap-2 text-[18px]",
    lg: "gap-3 text-[24px]",
  }

  const coinSize = {
    sm: "sm" as const,
    md: "md" as const,
    lg: "lg" as const,
  }

  return (
    <div className={cn("inline-flex items-center", sizeClasses[size], className)}>
      <Coin size={coinSize[size]} showValue={false} />
      <span className="font-bold text-[hsl(var(--color-text-primary))]">
        {value.toLocaleString()}
      </span>
      {label && (
        <span className="text-[hsl(var(--color-text-secondary))] font-normal">
          {label}
        </span>
      )}
    </div>
  )
}

// Balance Display (like in header)
interface BalanceDisplayProps {
  value: number
  className?: string
}

const BalanceDisplay = ({ value, className }: BalanceDisplayProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="text-[hsl(var(--color-text-secondary))] text-[14px]">
        Total balance
      </span>
      <div className="flex items-baseline gap-1">
        <span className="text-[32px] font-bold text-[hsl(var(--color-text-primary))]">
          ${value.toLocaleString()}
        </span>
      </div>
    </div>
  )
}

export { Coin, CoinDisplay, BalanceDisplay, coinVariants }
