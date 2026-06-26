/**
 * Property 5: Limpieza de estado al cerrar modal
 * Validates: Requirements 8.3, 8.5, 8.6
 *
 * Para cualquier MenuItem que esté en selectedItem, después de invocar closeModal(),
 * el estado selectedItem debe ser null. Abrir y cerrar en secuencia cualquier número
 * de ítems nunca debe dejar rastro del ítem previo.
 */
import { describe, test, expect } from 'vitest'
import fc from 'fast-check'
import { renderHook, act } from '@testing-library/react'
import { useMenuPageState } from '@/hooks/useMenuPageState'

const menuItemArb = fc.record({
  id: fc.uuid(),
  name: fc.string({ minLength: 1 }),
  description: fc.string(),
  price: fc.integer({ min: 1, max: 1000 }),
  category: fc.constantFrom('mariscos' as const, 'desayunos' as const, 'bebidas' as const),
  imageUrl: fc.webUrl(),
})

describe('Property 5: Limpieza de estado al cerrar modal', () => {
  test('closeModal() siempre produce selectedItem === null para cualquier MenuItem', () => {
    fc.assert(
      fc.property(menuItemArb, (item) => {
        const { result } = renderHook(() => useMenuPageState())

        act(() => result.current.selectItem(item))
        expect(result.current.selectedItem).not.toBeNull()

        act(() => result.current.closeModal())
        expect(result.current.selectedItem).toBeNull()
      }),
      { numRuns: 100 }
    )
  })

  test('abrir y cerrar en secuencia múltiples ítems nunca deja rastro del ítem previo', () => {
    fc.assert(
      fc.property(
        fc.array(menuItemArb, { minLength: 1, maxLength: 10 }),
        (items) => {
          const { result } = renderHook(() => useMenuPageState())

          for (const item of items) {
            act(() => result.current.selectItem(item))
            expect(result.current.selectedItem?.id).toBe(item.id)

            act(() => result.current.closeModal())
            expect(result.current.selectedItem).toBeNull()
          }
        }
      ),
      { numRuns: 100 }
    )
  })
})
