import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines class names with Tailwind CSS merge support.
 * Handles conditional classes and resolves Tailwind conflicts.
 *
 * @example
 * cn("px-4 py-2", condition && "bg-primary", className)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a CSS variable for use in Tailwind classes.
 * Useful for dynamic token usage.
 *
 * @example
 * cssVar("color-primary") // "var(--color-primary)"
 */
export function cssVar(name: string): string {
  return `var(--${name})`
}

/**
 * Creates an HSL color string from a CSS variable.
 * For use with Tailwind's arbitrary value syntax.
 *
 * @example
 * hslVar("color-primary") // "hsl(var(--color-primary))"
 */
export function hslVar(name: string): string {
  return `hsl(var(--${name}))`
}
