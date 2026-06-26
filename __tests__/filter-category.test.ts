// Feature: playita-plebes-website, Property 2: Filter correctness
// **Validates: Requirements 7.4, 7.5**

import fc from 'fast-check'
import { filterByCategory } from '@/lib/menu'
import type { MenuItem, Category } from '@/types'

const menuItemArb = fc.record({
  id: fc.uuid(),
  name: fc.string({ minLength: 1 }),
  description: fc.string(),
  price: fc.integer({ min: 1, max: 1000 }),
  category: fc.constantFrom('mariscos' as const, 'desayunos' as const, 'bebidas' as const),
  imageUrl: fc.webUrl(),
}) as fc.Arbitrary<MenuItem>

describe('Property 2: Corrección del filtro de categoría', () => {
  test('filterByCategory retorna solo ítems de la categoría seleccionada', () => {
    fc.assert(
      fc.property(
        fc.array(menuItemArb),
        fc.constantFrom('mariscos' as const, 'desayunos' as const, 'bebidas' as const),
        (items: MenuItem[], category: Category) => {
          const result = filterByCategory(items, category)
          // Todos los resultados tienen la categoría correcta
          expect(result.every(item => item.category === category)).toBe(true)
        }
      ),
      { numRuns: 100 }
    )
  })

  test('filterByCategory no incluye ítems de otras categorías', () => {
    fc.assert(
      fc.property(
        fc.array(menuItemArb),
        fc.constantFrom('mariscos' as const, 'desayunos' as const, 'bebidas' as const),
        (items: MenuItem[], category: Category) => {
          const result = filterByCategory(items, category)
          // No hay ítems de otras categorías en el resultado
          expect(result.some(item => item.category !== category)).toBe(false)
        }
      ),
      { numRuns: 100 }
    )
  })

  test('filterByCategory retorna un subconjunto del arreglo original (result.length <= items.length)', () => {
    fc.assert(
      fc.property(
        fc.array(menuItemArb),
        fc.constantFrom('mariscos' as const, 'desayunos' as const, 'bebidas' as const),
        (items: MenuItem[], category: Category) => {
          const result = filterByCategory(items, category)
          // El resultado siempre es un subconjunto del original
          expect(result.length).toBeLessThanOrEqual(items.length)
        }
      ),
      { numRuns: 100 }
    )
  })
})
