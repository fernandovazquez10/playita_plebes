'use client'

import { useRef, useEffect, useState } from 'react'

interface SwipeableMenuContainerProps {
  activeIndex: number
  onSwipe: (index: number) => void
  children: React.ReactNode[]
}

export default function SwipeableMenuContainer({
  activeIndex,
  onSwipe,
  children,
}: SwipeableMenuContainerProps): React.JSX.Element {
  const touchStartX = useRef(0)
  const touchStartY = useRef(0)
  const prevIndex = useRef(activeIndex)
  const [transitionEnabled, setTransitionEnabled] = useState(true)

  useEffect(() => {
    const isAdjacent = Math.abs(activeIndex - prevIndex.current) <= 1
    if (!isAdjacent) {
      setTransitionEnabled(false)
    } else {
      setTransitionEnabled(true)
    }
    prevIndex.current = activeIndex
  }, [activeIndex])

  useEffect(() => {
    if (!transitionEnabled) {
      const frameId = requestAnimationFrame(() => {
        setTransitionEnabled(true)
      })
      return () => cancelAnimationFrame(frameId)
    }
  }, [transitionEnabled])

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  function handleTouchEnd(e: React.TouchEvent) {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    const deltaY = e.changedTouches[0].clientY - touchStartY.current

    // Only trigger swipe when horizontal movement dominates
    if (Math.abs(deltaX) <= Math.abs(deltaY)) return

    const SWIPE_THRESHOLD = 50
    if (Math.abs(deltaX) < SWIPE_THRESHOLD) return

    if (deltaX < 0) {
      onSwipe(activeIndex + 1)
    } else {
      onSwipe(activeIndex - 1)
    }
  }

  return (
    <div
      className="overflow-hidden w-full"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex w-full"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
          transition: transitionEnabled ? 'transform 300ms ease' : 'none',
        }}
      >
        {children.map((child, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}
