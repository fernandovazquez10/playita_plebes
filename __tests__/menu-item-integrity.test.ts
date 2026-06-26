/**
 * Property 1: Integridad de campos de MenuItem
 * Validates: Requirements 6.2
 *
 * Verifica que la función isValidMenuItem acepta cualquier objeto con campos
 * válidos y rechaza objetos con campos inválidos (id vacío o undefined).
 */
import fc from 'fast-check'
import { describe, test, expect } from 'vitest'
import { isValidMenuItem } from '@/lib/menu'

describe('Property 1: Integridad de campos de MenuItem', () => {
  test('todo objeto con campos válidos pasa isValidMenuItem', () => {
    fc.assert(
      fc.property(
        fc.record({
          id: fc.string({ minLength: 1 }),
          name: fc.string({ minLength: 1 }),
          description: fc.string(),
          price: fc.integer({ min: 1 }),
          category: fc.constantFrom('mariscos', 'desayunos', 'bebidas'),
          imageUrl: fc.webUrl(),
        }),
        (item) => {
          expect(isValidMenuItem(item)).toBe(true)
        }
      ),
      { numRuns: 100 }
    )
  })

  test('objeto con id vacío falla la validación', () => {
    fc.assert(
      fc.property(
        fc.record({
          id: fc.constant(''),
          name: fc.string({ minLength: 1 }),
          description: fc.string(),
          price: fc.integer({ min: 1 }),
          category: fc.constantFrom('mariscos', 'desayunos', 'bebidas'),
          imageUrl: fc.webUrl(),
        }),
        (item) => {
          expect(isValidMenuItem(item)).toBe(false)
        }
      ),
      { numRuns: 100 }
    )
  })

  test('objeto con id undefined falla la validación', () => {
    fc.assert(
      fc.property(
        fc.record({
          name: fc.string({ minLength: 1 }),
          description: fc.string(),
          price: fc.integer({ min: 1 }),
          category: fc.constantFrom('mariscos', 'desayunos', 'bebidas'),
          imageUrl: fc.webUrl(),
        }),
        (partialItem) => {
          const item = { ...partialItem, id: undefined }
          expect(isValidMenuItem(item)).toBe(false)
        }
      ),
      { numRuns: 100 }
    )
  })
})
