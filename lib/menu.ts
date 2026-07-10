import menuData from '@/data/menu.json'
import type { MenuItem, Category } from '@/types'

const VALID_CATEGORIES = ['mariscos', 'desayunos', 'bebidas'] as const

/**
 * Runtime guard that validates an unknown value conforms to the MenuItem interface.
 * Checks all required fields exist with correct types and constraints.
 */
export function isValidMenuItem(item: unknown): item is MenuItem {
  if (typeof item !== 'object' || item === null) return false
  const i = item as Record<string, unknown>
  return (
    typeof i.id === 'string' && i.id.length > 0 &&
    typeof i.name === 'string' && i.name.length > 0 &&
    typeof i.description === 'string' &&
    typeof i.price === 'number' && i.price >= 0 &&
    VALID_CATEGORIES.includes(i.category as typeof VALID_CATEGORIES[number]) &&
    typeof i.imageUrl === 'string' && i.imageUrl.length > 0
  )
}

/**
 * Returns all active menu items from the local JSON data, filtered through the
 * isValidMenuItem guard for runtime safety. Items with active: false are excluded.
 */
export function getMenuItems(): MenuItem[] {
  const items = menuData as unknown[]
  return items.filter(isValidMenuItem).filter(item => item.active)
}

/**
 * Filters an array of MenuItems to only include those matching the given category.
 */
export function filterByCategory(items: MenuItem[], category: Category): MenuItem[] {
  return items.filter(item => item.category === category)
}

/**
 * Formats a numeric price as a string with $ prefix.
 * Returns "Precio por el chef" when price is 0 (special items).
 */
export function formatPrice(price: number): string {
  if (price === 0) return 'Preguntar al chef'
  return `$${price}`
}
