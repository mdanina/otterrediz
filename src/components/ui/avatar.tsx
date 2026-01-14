import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const avatarVariants = cva(
  [
    "relative inline-flex items-center justify-center",
    "rounded-full",
    "overflow-hidden",
    "bg-[hsl(var(--color-surface-secondary))]",
    "text-[hsl(var(--color-text-secondary))]",
    "font-medium",
    "select-none",
    "shrink-0",
  ],
  {
    variants: {
      size: {
        xs: "h-6 w-6 text-[10px]",
        sm: "h-8 w-8 text-[12px]",
        md: "h-10 w-10 text-[14px]",
        lg: "h-12 w-12 text-[16px]",
        xl: "h-16 w-16 text-[20px]",
        "2xl": "h-20 w-20 text-[24px]",
        "3xl": "h-24 w-24 text-[28px]",
      },
      ring: {
        none: "",
        default: "ring-2 ring-[hsl(var(--color-surface-primary))] ring-offset-2",
        success: "ring-2 ring-[hsl(var(--color-success))] ring-offset-2",
        warning: "ring-2 ring-[hsl(var(--color-warning))] ring-offset-2",
        error: "ring-2 ring-[hsl(var(--color-error))] ring-offset-2",
        accent: "ring-2 ring-[hsl(var(--color-accent))] ring-offset-2",
      },
    },
    defaultVariants: {
      size: "md",
      ring: "none",
    },
  }
)

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string
  alt?: string
  fallback?: string
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, size, ring, src, alt, fallback, children, ...props }, ref) => {
    const [imageError, setImageError] = React.useState(false)

    return (
      <div
        ref={ref}
        className={cn(avatarVariants({ size, ring }), className)}
        {...props}
      >
        {src && !imageError ? (
          <img
            src={src}
            alt={alt || ""}
            className="h-full w-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center">
            {fallback || children || "?"}
          </span>
        )}
      </div>
    )
  }
)
Avatar.displayName = "Avatar"

// Avatar Group
interface AvatarGroupProps {
  children: React.ReactNode
  max?: number
  className?: string
}

const AvatarGroup = ({ children, max = 4, className }: AvatarGroupProps) => {
  const childArray = React.Children.toArray(children)
  const visibleChildren = childArray.slice(0, max)
  const remainingCount = childArray.length - max

  return (
    <div className={cn("flex -space-x-3", className)}>
      {visibleChildren.map((child, index) => (
        <div key={index} className="relative" style={{ zIndex: max - index }}>
          {child}
        </div>
      ))}
      {remainingCount > 0 && (
        <div
          className={cn(
            avatarVariants({ size: "md" }),
            "bg-[hsl(var(--color-surface-tertiary))] text-[hsl(var(--color-text-secondary))]"
          )}
          style={{ zIndex: 0 }}
        >
          +{remainingCount}
        </div>
      )}
    </div>
  )
}

export { Avatar, AvatarGroup, avatarVariants }
