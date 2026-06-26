'use client'

import { useRef } from 'react'

interface SwipeableMenuContainerProps {
  activeIndex: number
  count: number
  onSwipe: (index: number) => void
  children: React.ReactNode
}

/**
 * Envuelve el contenido del menú y detecta gestos de swipe horizontal
 * para cambiar de categoría. Solo renderiza el panel activo (se le pasa
 * directamente como children), evitando que paneles ocultos capturen taps.
 */
export default function SwipeableMenuContainer({
  activeIndex,
  count,
  onSwipe,
  children,
}: SwipeableMenuContainerProps): React.JSX.Element {
  const touchStartX = useRef(0)
  const touchStartY = useRef(0)
  const moved = useRef(false)

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
    moved.current = false
  }

  function handleTouchMove(e: React.TouchEvent) {
    const dx = Math.abs(e.touches[0].clientX - touchStartX.current)
    const dy = Math.abs(e.touches[0].clientY - touchStartY.current)
    if (dx > 10 && dx > dy) {
      moved.current = true
    }
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (!moved.current) return // fue un tap, no un swipe

    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    const deltaY = e.changedTouches[0].clientY - touchStartY.current

    if (Math.abs(deltaX) <= Math.abs(deltaY)) return

    const SWIPE_THRESHOLD = 50
    if (Math.abs(deltaX) < SWIPE_THRESHOLD) return

    if (deltaX < 0) {
      onSwipe(Math.min(activeIndex + 1, count - 1))
    } else {
      onSwipe(Math.max(activeIndex - 1, 0))
    }
  }

  return (
    <div
      className="w-full"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </div>
  )
}
