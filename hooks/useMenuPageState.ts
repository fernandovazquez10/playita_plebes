'use client'

import { useState } from 'react'
import type { MenuItem } from '@/types'

export const CATEGORIES = ['mariscos', 'desayunos', 'bebidas'] as const

interface MenuPageState {
  activeIndex: number
  selectedItem: MenuItem | null
  setActiveIndex: (index: number) => void
  selectItem: (item: MenuItem) => void
  closeModal: () => void
}

export function useMenuPageState(): MenuPageState {
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)

  return {
    activeIndex,
    selectedItem,
    setActiveIndex: (i) => setActiveIndex(Math.max(0, Math.min(2, i))),
    selectItem: (item) => setSelectedItem(item),
    closeModal: () => setSelectedItem(null),
  }
}
