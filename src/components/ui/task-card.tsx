import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Badge } from "./badge"
import { Coin } from "./coin"
import { StarRating } from "./star-rating"

const taskCardVariants = cva(
  [
    "flex items-center gap-4",
    "p-4",
    "bg-[hsl(var(--color-surface-primary))]",
    "rounded-[var(--radius-card)]",
    "transition-all duration-200",
  ],
  {
    variants: {
      status: {
        pending: "opacity-100",
        active: [
          "ring-2 ring-[hsl(var(--color-accent)/0.3)]",
          "shadow-[var(--shadow-accent)]",
        ],
        completed: [
          "bg-[hsl(var(--color-success-subtle))]",
        ],
        locked: [
          "opacity-50",
          "grayscale",
        ],
      },
      variant: {
        default: "shadow-[var(--shadow-card)]",
        compact: "shadow-none border border-[hsl(var(--color-border-default))]",
      },
    },
    defaultVariants: {
      status: "pending",
      variant: "default",
    },
  }
)

type TaskStatus = "pending" | "active" | "completed" | "locked"
type TaskType = "daily" | "one-time" | "recurring" | "bonus"

export interface TaskCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof taskCardVariants> {
  title: string
  description?: string
  image?: string
  imageIcon?: React.ReactNode
  reward?: number
  rating?: number
  taskType?: TaskType
  status?: TaskStatus
  onAction?: () => void
  actionLabel?: string
}

const TaskCard = React.forwardRef<HTMLDivElement, TaskCardProps>(
  (
    {
      className,
      status = "pending",
      variant,
      title,
      description,
      image,
      imageIcon,
      reward,
      rating,
      taskType,
      onAction,
      actionLabel,
      ...props
    },
    ref
  ) => {
    const statusLabels: Record<TaskStatus, string> = {
      pending: "Pending",
      active: "Active",
      completed: "Done",
      locked: "Locked",
    }

    const statusBadgeVariant: Record<TaskStatus, "default" | "accent" | "success" | "outline"> = {
      pending: "default",
      active: "accent",
      completed: "success",
      locked: "outline",
    }

    return (
      <div
        ref={ref}
        className={cn(taskCardVariants({ status, variant }), className)}
        {...props}
      >
        {/* Image/Icon */}
        <div className="h-16 w-16 rounded-[var(--radius-lg)] bg-[hsl(var(--color-surface-secondary))] flex items-center justify-center overflow-hidden shrink-0">
          {image ? (
            <img src={image} alt="" className="h-full w-full object-cover" />
          ) : imageIcon ? (
            <div className="text-[hsl(var(--color-text-secondary))]">
              {imageIcon}
            </div>
          ) : (
            <div className="text-[24px]">📋</div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <Badge variant={statusBadgeVariant[status]} size="sm">
              {statusLabels[status]}
            </Badge>
            {taskType && (
              <span className="text-[11px] text-[hsl(var(--color-text-tertiary))] uppercase tracking-wide">
                {taskType}
              </span>
            )}
          </div>

          <h4 className="font-semibold text-[hsl(var(--color-text-primary))] truncate">
            {title}
          </h4>

          {description && (
            <p className="text-[13px] text-[hsl(var(--color-text-secondary))] truncate mt-0.5">
              {description}
            </p>
          )}

          {rating !== undefined && (
            <div className="mt-1.5">
              <StarRating value={rating} size="sm" />
            </div>
          )}
        </div>

        {/* Reward & Action */}
        <div className="flex flex-col items-end gap-2 shrink-0">
          {reward !== undefined && (
            <div className="flex items-center gap-1.5">
              <Coin size="sm" showValue={false} />
              <span className="font-semibold text-[hsl(var(--color-text-primary))]">
                {reward}
              </span>
            </div>
          )}

          {status === "completed" && (
            <div className="h-8 w-8 rounded-full bg-[hsl(var(--color-success))] flex items-center justify-center">
              <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          )}

          {status === "active" && onAction && (
            <button
              onClick={onAction}
              className="px-3 py-1.5 text-[12px] font-medium bg-[hsl(var(--color-primary))] text-[hsl(var(--color-text-on-accent))] rounded-[var(--radius-button)] hover:opacity-90 transition-opacity"
            >
              {actionLabel || "Complete"}
            </button>
          )}

          {status === "pending" && (
            <svg className="h-5 w-5 text-[hsl(var(--color-text-tertiary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
        </div>
      </div>
    )
  }
)
TaskCard.displayName = "TaskCard"

// Task Card List Item (compact variant)
interface TaskListItemProps {
  title: string
  status?: TaskStatus
  reward?: number
  onClick?: () => void
}

const TaskListItem = ({ title, status = "pending", reward, onClick }: TaskListItemProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 p-3 rounded-[var(--radius-lg)] cursor-pointer transition-colors",
        "hover:bg-[hsl(var(--color-surface-secondary))]",
        status === "completed" && "bg-[hsl(var(--color-success-subtle))]"
      )}
    >
      <div
        className={cn(
          "h-5 w-5 rounded-full border-2 flex items-center justify-center shrink-0",
          status === "completed"
            ? "bg-[hsl(var(--color-success))] border-[hsl(var(--color-success))]"
            : "border-[hsl(var(--color-border-default))]"
        )}
      >
        {status === "completed" && (
          <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>

      <span
        className={cn(
          "flex-1 text-[14px]",
          status === "completed"
            ? "text-[hsl(var(--color-text-secondary))] line-through"
            : "text-[hsl(var(--color-text-primary))]"
        )}
      >
        {title}
      </span>

      {reward !== undefined && (
        <div className="flex items-center gap-1">
          <Coin size="xs" showValue={false} />
          <span className="text-[12px] font-medium text-[hsl(var(--color-text-secondary))]">
            {reward}
          </span>
        </div>
      )}
    </div>
  )
}

export { TaskCard, TaskListItem, taskCardVariants }
