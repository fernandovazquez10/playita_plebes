'use client'

import type { MenuItem } from '@/types'
import MenuGrid from '@/components/menu/MenuGrid'

interface CategoryViewProps {
  items: MenuItem[]
  onSelectItem: (item: MenuItem) => void
}

export default function CategoryView({ items, onSelectItem }: CategoryViewProps): React.JSX.Element {
  return <MenuGrid items={items} onSelectItem={onSelectItem} />
}
