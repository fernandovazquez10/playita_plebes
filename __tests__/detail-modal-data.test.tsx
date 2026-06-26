import { describe, test, expect, vi } from 'vitest'
import fc from 'fast-check'
import { render } from '@testing-library/react'
import type { MenuItem } from '@/types'

vi.mock('next/image', () => ({
  default: (props: Record<string, unknown>) => {
    return <img {...props} />
  },
}))

import DetailModal from '@/components/menu/DetailModal'

/**
 * Property 4: Apertura del modal con datos correctos
 *
 * Para cualquier MenuItem válido pasado como selectedItem, el DetailModal
 * debe renderizar en su contenido el nombre, la descripción y el precio
 * de exactamente ese ítem.
 *
 * **Validates: Requirements 8.1**
 */

const categoryArb = fc.constantFrom('mariscos' as const, 'desayunos' as const, 'bebidas' as const)

const menuItemArb: fc.Arbitrary<MenuItem> = fc.record({
  id: fc.uuid(),
  name: fc.string({ minLength: 1 }).filter(s => s.trim().length > 0),
  description: fc.string({ minLength: 1 }).filter(s => s.trim().length > 0),
  price: fc.integer({ min: 1, max: 10000 }),
  category: categoryArb,
  imageUrl: fc.webUrl(),
})

describe('DetailModal - Property 4: datos correctos', () => {
  test('para cualquier MenuItem válido, el modal contiene item.name, item.description y $item.price', () => {
    fc.assert(
      fc.property(menuItemArb, (item) => {
        const { container } = render(
          <DetailModal item={item} onClose={() => {}} />
        )

        const textContent = container.textContent ?? ''

        // El modal debe contener el nombre del ítem
        expect(textContent).toContain(item.name)

        // El modal debe contener la descripción del ítem
        expect(textContent).toContain(item.description)

        // El modal debe contener el precio formateado como $price
        expect(textContent).toContain(`$${item.price}`)
      }),
      { numRuns: 100 }
    )
  })
})
