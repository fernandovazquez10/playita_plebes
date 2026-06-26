'use client'

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

  return (
    <section aria-label="Menú del restaurante">
      <CategoryTabs activeIndex={activeIndex} onChange={setActiveIndex} />

      <div className="py-6">
        <SwipeableMenuContainer activeIndex={activeIndex} onSwipe={setActiveIndex}>
          {itemsByCategory.map((items, index) => (
            <CategoryView
              key={CATEGORIES[index]}
              items={items}
              onSelectItem={selectItem}
            />
          ))}
        </SwipeableMenuContainer>
      </div>

      <DetailModal item={selectedItem} onClose={closeModal} />
    </section>
  )
}
