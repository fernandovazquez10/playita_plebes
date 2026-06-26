'use client'

const TAB_LABELS = ['Mariscos', 'Desayunos', 'Bebidas'] as const

interface CategoryTabsProps {
  activeIndex: number
  onChange: (index: number) => void
}

export default function CategoryTabs({ activeIndex, onChange }: CategoryTabsProps): React.JSX.Element {
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
            id={`tab-${label.toLowerCase()}`}
            role="tab"
            aria-selected={isActive}
            aria-controls={`tabpanel-${label.toLowerCase()}`}
            type="button"
            className={`relative flex-1 py-3 text-center font-body text-sm font-medium transition-colors
              focus:outline-none
              ${isActive ? 'bg-dark-navy text-white' : 'text-dark-navy/70 hover:text-dark-navy'}
            `}
            onClick={() => onChange(index)}
          >
            {label}
          </button>
        )
      })}
    </nav>
  )
}
