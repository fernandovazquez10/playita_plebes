// Feature: playita-plebes-website, Property 3: Completitud de formatPrice
// **Validates: Requirements 7.7**

import fc from 'fast-check'
import { formatPrice } from '@/lib/menu'

describe('Property 3: Completitud de formatPrice', () => {
  test('formatPrice(price) retorna `$${price}` para cualquier entero positivo', () => {
    fc.assert(
      fc.property(fc.integer({ min: 1, max: 100_000 }), (price) => {
        const formatted = formatPrice(price)
        expect(formatted).toBe(`$${price}`)
      }),
      { numRuns: 100 }
    )
  })

  test('formatPrice siempre retorna una cadena que comienza con $', () => {
    fc.assert(
      fc.property(fc.integer({ min: 1, max: 100_000 }), (price) => {
        const formatted = formatPrice(price)
        expect(formatted.startsWith('$')).toBe(true)
      }),
      { numRuns: 100 }
    )
  })
})
