'use client'

import type { MenuItem } from '@/types'
import MenuCard from './MenuCard'

interface MenuGridProps {
  items: MenuItem[]
  onSelectItem: (item: MenuItem) => void
  animate?: boolean
}

export default function MenuGrid({ items, onSelectItem, animate = false }: MenuGridProps) {
  if (items.length === 0) {
    return (
      <p className="text-center font-body text-neutral-500 py-8">
        No hay platillos disponibles en esta categoría.
      </p>
    )
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] lg:w-[calc(16.666%-0.85rem)] ${
            animate ? 'card-fade-in' : ''
          }`}
          style={animate ? { animationDelay: `${index * 40}ms` } : undefined}
        >
          <MenuCard item={item} onClick={onSelectItem} />
        </div>
      ))}
    </div>
  )
}
