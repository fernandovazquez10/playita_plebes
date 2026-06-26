/**
 * Properties 3 & 7: Renderizado de MenuCard
 * **Validates: Requirements 7.9, 11.3**
 *
 * Property 3: Para cualquier MenuItem válido, el DOM contiene item.name y $${item.price}
 * Property 7: Todas las <img> tienen atributo alt no vacío
 */
import fc from 'fast-check'
import { describe, test, expect, vi } from 'vitest'
import { render, cleanup } from '@testing-library/react'
import React from 'react'

vi.mock('next/image', () => ({
  default: (props: Record<string, unknown>) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />
  },
}))

import MenuCard from '@/components/menu/MenuCard'
import type { MenuItem } from '@/types'

const menuItemArb = fc.record({
  id: fc.string({ minLength: 1, unit: 'grapheme-ascii' }),
  name: fc.string({ minLength: 1, unit: 'grapheme-ascii' }).filter(s => s.trim().length > 0),
  description: fc.string({ unit: 'grapheme-ascii' }),
  price: fc.integer({ min: 1, max: 10_000 }),
  category: fc.constantFrom('mariscos' as const, 'desayunos' as const, 'bebidas' as const),
  imageUrl: fc.constant('/placeholder.svg'),
}) as fc.Arbitrary<MenuItem>

describe('Property 3: Completitud de renderizado de MenuCard', () => {
  test('MenuCard renderiza item.name y $${item.price} para cualquier MenuItem válido', () => {
    fc.assert(
      fc.property(menuItemArb, (item) => {
        const { container } = render(<MenuCard item={item} onClick={() => {}} />)
        const textContent = container.textContent ?? ''

        // El nombre del ítem debe estar presente en el DOM
        expect(textContent).toContain(item.name)

        // El precio formateado como $<price> debe estar presente
        expect(textContent).toContain(`$${item.price}`)

        cleanup()
      }),
      { numRuns: 100 }
    )
  })
})

describe('Property 7: Atributo alt en imágenes de MenuCard', () => {
  test('todas las <img> en MenuCard tienen atributo alt no vacío', () => {
    fc.assert(
      fc.property(menuItemArb, (item) => {
        const { container } = render(<MenuCard item={item} onClick={() => {}} />)
        const images = container.querySelectorAll('img')

        // Debe haber al menos una imagen
        expect(images.length).toBeGreaterThan(0)

        // Cada imagen debe tener alt no vacío
        images.forEach((img) => {
          const alt = img.getAttribute('alt')
          expect(alt).not.toBeNull()
          expect(alt).not.toBe('')
        })

        cleanup()
      }),
      { numRuns: 100 }
    )
  })
})
