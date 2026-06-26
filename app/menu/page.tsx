'use client'

import { useRef, useEffect } from 'react'
import { useMenuPageState, CATEGORIES } from '@/hooks/useMenuPageState'
import { getMenuItems, filterByCategory } from '@/lib/menu'
import CategoryTabs from '@/components/menu/CategoryTabs'
import SwipeableMenuContainer from '@/components/menu/SwipeableMenuContainer'
import CategoryView from '@/components/menu/CategoryView'
import DetailModal from '@/components/menu/DetailModal'

export default function MenuPage() {
  const { activeIndex, selectedItem, setActiveIndex, selectItem, closeModal } =
    useMenuPageState()

  const allItems = getMenuItems()

  const itemsByCategory = CATEGORIES.map((category) =>
    filterByCategory(allItems, category)
  )

  // Rastrea qué categorías ya se animaron para no repetir el fade al regresar
  const animatedRef = useRef<Set<number>>(new Set())
  const shouldAnimate = !animatedRef.current.has(activeIndex)

  useEffect(() => {
    animatedRef.current.add(activeIndex)
  }, [activeIndex])

  return (
    <section aria-label="Menú del restaurante">
      <CategoryTabs activeIndex={activeIndex} onChange={setActiveIndex} />

      <div className="py-6">
        <SwipeableMenuContainer
          activeIndex={activeIndex}
          count={CATEGORIES.length}
          onSwipe={setActiveIndex}
        >
          <CategoryView
            items={itemsByCategory[activeIndex]}
            onSelectItem={selectItem}
            animate={shouldAnimate}
          />
        </SwipeableMenuContainer>
      </div>

      <DetailModal item={selectedItem} onClose={closeModal} />
    </section>
  )
}
