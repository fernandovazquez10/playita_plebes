import fc from 'fast-check'
import { renderHook, act } from '@testing-library/react'
import { useMenuPageState } from '@/hooks/useMenuPageState'

/**
 * Property 6: Exclusividad del modal
 * Validates: Requirements 8.4
 *
 * Para cualquier secuencia de selecciones de MenuItem, el estado selectedItem
 * es siempre null o exactamente una referencia a un único MenuItem.
 * Seleccionar un segundo ítem mientras el primero está seleccionado reemplaza el primero.
 */

const menuItemArb = fc.record({
  id: fc.uuid(),
  name: fc.string({ minLength: 1 }),
  description: fc.string(),
  price: fc.integer({ min: 1, max: 1000 }),
  category: fc.constantFrom('mariscos' as const, 'desayunos' as const, 'bebidas' as const),
  imageUrl: fc.webUrl(),
})

describe('Property 6: Exclusividad del modal', () => {
  test('seleccionar un segundo ítem reemplaza al primero — selectedItem siempre es el último seleccionado', () => {
    fc.assert(
      fc.property(
        fc.array(menuItemArb, { minLength: 2, maxLength: 10 }),
        (items) => {
          const { result } = renderHook(() => useMenuPageState())

          // Seleccionar el primer ítem
          act(() => result.current.selectItem(items[0]))
          expect(result.current.selectedItem).not.toBeNull()
          expect(result.current.selectedItem?.id).toBe(items[0].id)

          // Seleccionar el segundo ítem reemplaza al primero
          act(() => result.current.selectItem(items[1]))
          expect(result.current.selectedItem?.id).toBe(items[1].id)
          expect(result.current.selectedItem?.id).not.toBe(items[0].id)
        }
      ),
      { numRuns: 100 }
    )
  })

  test('seleccionar secuencialmente N ítems siempre deja selectedItem === último ítem', () => {
    fc.assert(
      fc.property(
        fc.array(menuItemArb, { minLength: 2, maxLength: 10 }),
        (items) => {
          const { result } = renderHook(() => useMenuPageState())

          // Seleccionar cada ítem en secuencia
          for (const item of items) {
            act(() => result.current.selectItem(item))
          }

          // Solo el último ítem queda seleccionado
          const lastItem = items[items.length - 1]
          expect(result.current.selectedItem).not.toBeNull()
          expect(result.current.selectedItem?.id).toBe(lastItem.id)
        }
      ),
      { numRuns: 100 }
    )
  })
})
