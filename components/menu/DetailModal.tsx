'use client'

import { useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import type { MenuItem } from '@/types'
import { assetPath } from '@/lib/assetPath'

interface DetailModalProps {
  item: MenuItem | null
  onClose: () => void
}

const FOCUSABLE_SELECTORS =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

export default function DetailModal({ item, onClose }: DetailModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  // Store the previously focused element when modal opens
  useEffect(() => {
    if (item) {
      previousFocusRef.current = document.activeElement as HTMLElement
    }
  }, [item])

  // Scroll lock: block body scroll while modal is open
  useEffect(() => {
    if (!item) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [item])

  // Focus trap and Escape key handling
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)
        if (focusableElements.length === 0) return

        const firstElement = focusableElements[0]
        const lastElement = focusableElements[focusableElements.length - 1]

        if (e.shiftKey) {
          // Shift+Tab: if on first element, wrap to last
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement.focus()
          }
        } else {
          // Tab: if on last element, wrap to first
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement.focus()
          }
        }
      }
    },
    [onClose]
  )

  useEffect(() => {
    if (!item) return

    document.addEventListener('keydown', handleKeyDown)

    // Move focus inside the modal
    if (modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)
      if (focusableElements.length > 0) {
        focusableElements[0].focus()
      }
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      // Return focus to the element that triggered the modal
      if (previousFocusRef.current && previousFocusRef.current.focus) {
        previousFocusRef.current.focus()
      }
    }
  }, [item, handleKeyDown])

  if (!item) return null

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onMouseDown={onClose}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-label={item.name}
        className="relative bg-brand-cream rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-xl"
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          aria-label="Cerrar"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-dark-navy/80 text-white flex items-center justify-center text-lg hover:bg-dark-navy transition-colors focus:outline-none focus:ring-2 focus:ring-brand-teal"
        >
          ×
        </button>

        {/* Item image */}
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-xl">
          <Image
            src={assetPath(item.imageUrl)}
            alt={item.name}
            fill
            sizes="(max-width: 640px) 100vw, 512px"
            className="object-cover"
          />
        </div>

        {/* Item details */}
        <div className="p-6">
          <h2 className="font-display text-2xl text-dark-navy mb-2">
            {item.name}
          </h2>
          <p className="font-body text-neutral-500 text-base mb-4">
            {item.description}
          </p>
          <span className="font-body text-xl font-semibold text-brand-orange">
            ${item.price}
          </span>
        </div>
      </div>
    </div>
  )
}
