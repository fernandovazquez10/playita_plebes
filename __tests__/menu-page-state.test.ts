import { describe, test, expect } from 'vitest'
import fc from 'fast-check'
import { renderHook, act } from '@testing-library/react'
import { useMenuPageState } from '@/hooks/useMenuPageState'

/**
 * Property tests para el estado del menú — activeIndex con clamp
 * **Validates: Requirements 7.5**
 */
describe('useMenuPageState — activeIndex clamp property tests', () => {
  test('setActiveIndex nunca produce valores fuera del rango 0–2 para cualquier entero', () => {
    fc.assert(
      fc.property(fc.integer({ min: -1000, max: 1000 }), (index) => {
        const { result } = renderHook(() => useMenuPageState())
        act(() => result.current.setActiveIndex(index))
        expect(result.current.activeIndex).toBeGreaterThanOrEqual(0)
        expect(result.current.activeIndex).toBeLessThanOrEqual(2)
      }),
      { numRuns: 100 }
    )
  })

  test('swipe en borde izquierdo (index 0) no produce index negativo', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 100 }),
        (swipeAmount) => {
          const { result } = renderHook(() => useMenuPageState())
          // Asegurar que estamos en index 0
          act(() => result.current.setActiveIndex(0))
          expect(result.current.activeIndex).toBe(0)
          // Simular swipe hacia la derecha (decrementa index)
          act(() => result.current.setActiveIndex(0 - swipeAmount))
          expect(result.current.activeIndex).toBeGreaterThanOrEqual(0)
          expect(result.current.activeIndex).toBe(0)
        }
      ),
      { numRuns: 100 }
    )
  })

  test('swipe en borde derecho (index 2) no produce index > 2', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 100 }),
        (swipeAmount) => {
          const { result } = renderHook(() => useMenuPageState())
          // Ir al borde derecho (index 2)
          act(() => result.current.setActiveIndex(2))
          expect(result.current.activeIndex).toBe(2)
          // Simular swipe hacia la izquierda (incrementa index)
          act(() => result.current.setActiveIndex(2 + swipeAmount))
          expect(result.current.activeIndex).toBeLessThanOrEqual(2)
          expect(result.current.activeIndex).toBe(2)
        }
      ),
      { numRuns: 100 }
    )
  })
})
