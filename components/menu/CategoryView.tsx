'use client'

import type { MenuItem } from '@/types'
import MenuGrid from '@/components/menu/MenuGrid'

interface CategoryViewProps {
  items: MenuItem[]
  onSelectItem: (item: MenuItem) => void
  animate?: boolean
}

export default function CategoryView({ items, onSelectItem, animate = false }: CategoryViewProps): React.JSX.Element {
  return <MenuGrid items={items} onSelectItem={onSelectItem} animate={animate} />
}
