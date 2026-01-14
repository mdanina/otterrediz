import * as React from "react"
import { cn } from "@/lib/utils"

interface StarRatingProps {
  value: number
  max?: number
  size?: "sm" | "md" | "lg"
  showEmpty?: boolean
  readonly?: boolean
  onChange?: (value: number) => void
  className?: string
}

const StarRating = ({
  value,
  max = 5,
  size = "md",
  showEmpty = true,
  readonly = true,
  onChange,
  className,
}: StarRatingProps) => {
  const [hoverValue, setHoverValue] = React.useState<number | null>(null)

  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  }

  const displayValue = hoverValue !== null ? hoverValue : value

  const handleClick = (index: number) => {
    if (!readonly && onChange) {
      onChange(index + 1)
    }
  }

  const handleMouseEnter = (index: number) => {
    if (!readonly) {
      setHoverValue(index + 1)
    }
  }

  const handleMouseLeave = () => {
    if (!readonly) {
      setHoverValue(null)
    }
  }

  return (
    <div
      className={cn("inline-flex gap-0.5", className)}
      onMouseLeave={handleMouseLeave}
    >
      {Array.from({ length: max }).map((_, index) => {
        const isFilled = index < displayValue

        return (
          <button
            key={index}
            type="button"
            className={cn(
              "transition-colors",
              !readonly && "cursor-pointer hover:scale-110",
              readonly && "cursor-default"
            )}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            disabled={readonly}
          >
            <svg
              className={cn(
                sizeClasses[size],
                isFilled
                  ? "text-[hsl(var(--color-reward))]"
                  : showEmpty
                  ? "text-[hsl(var(--color-text-tertiary))]"
                  : "text-transparent"
              )}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </button>
        )
      })}
    </div>
  )
}

export { StarRating }
