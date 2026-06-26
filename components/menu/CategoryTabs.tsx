'use client'

import { useEffect, useRef } from 'react'

const TAB_LABELS = ['Mariscos', 'Desayunos', 'Bebidas'] as const

interface CategoryTabsProps {
  activeIndex: number
  onChange: (index: number) => void
}

export default function CategoryTabs({ activeIndex, onChange }: CategoryTabsProps): React.JSX.Element {
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([])

  // Move focus to the active tab when it changes via keyboard
  useEffect(() => {
    tabsRef.current[activeIndex]?.focus()
  }, [activeIndex])

  return (
    <nav
      className="sticky top-0 z-10 flex w-full bg-brand-cream border-b border-neutral-200"
      role="tablist"
      aria-label="Categorías del menú"
    >
      {TAB_LABELS.map((label, index) => {
        const isActive = index === activeIndex
        return (
          <button
            key={label}
            ref={(el) => { tabsRef.current[index] = el }}
            id={`tab-${label.toLowerCase()}`}
            role="tab"
            aria-selected={isActive}
            aria-controls={`tabpanel-${label.toLowerCase()}`}
            tabIndex={isActive ? 0 : -1}
            className={`relative flex-1 py-3 text-center font-body text-sm font-medium transition-colors
              focus:outline-none
              ${isActive ? 'bg-dark-navy text-white' : 'text-dark-navy/70 hover:text-dark-navy'}
            `}
            onClick={() => onChange(index)}
            onKeyDown={(e) => {
              let newIndex = activeIndex
              if (e.key === 'ArrowRight') {
                newIndex = Math.min(activeIndex + 1, TAB_LABELS.length - 1)
              } else if (e.key === 'ArrowLeft') {
                newIndex = Math.max(activeIndex - 1, 0)
              } else if (e.key === 'Home') {
                newIndex = 0
              } else if (e.key === 'End') {
                newIndex = TAB_LABELS.length - 1
              } else {
                return
              }
              e.preventDefault()
              onChange(newIndex)
            }}
          >
            {label}
          </button>
        )
      })}
    </nav>
  )
}
