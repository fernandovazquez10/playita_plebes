import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

// Mock next/image to render plain <img> tags
vi.mock('next/image', () => ({
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />
  },
}))

// Mock next/link to render plain <a> tags
vi.mock('next/link', () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode;[key: string]: unknown }) => {
    return <a href={href} {...rest}>{children}</a>
  },
}))

import DetailModal from '@/components/menu/DetailModal'
import MapSection from '@/components/home/MapSection'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import ChefsPage from '@/app/chefs/page'
import MenuGrid from '@/components/menu/MenuGrid'
import type { MenuItem } from '@/types'

const mockItem: MenuItem = {
  id: 'test-item-1',
  name: 'Tostada de Atún',
  description: 'Deliciosa tostada de atún fresco.',
  price: 100,
  category: 'mariscos',
  imageUrl: '/test-image.jpg',
}

describe('DetailModal', () => {
  it('returns null when item is null (container is empty)', () => {
    const { container } = render(<DetailModal item={null} onClose={() => {}} />)
    expect(container.innerHTML).toBe('')
  })

  it('shows close button with aria-label="Cerrar" when given an item', () => {
    render(<DetailModal item={mockItem} onClose={() => {}} />)
    const closeButton = screen.getByRole('button', { name: 'Cerrar' })
    expect(closeButton).toBeDefined()
    expect(closeButton.getAttribute('aria-label')).toBe('Cerrar')
  })
})

describe('MapSection', () => {
  it('renders an iframe element', () => {
    const { container } = render(<MapSection />)
    const iframe = container.querySelector('iframe')
    expect(iframe).not.toBeNull()
  })

  it('renders address text with Mazatlán', () => {
    render(<MapSection />)
    expect(screen.getByText(/Mazatlán/)).toBeDefined()
  })
})

describe('Footer', () => {
  it('renders links with target="_blank"', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link')
    const externalLinks = links.filter(
      (link) => link.getAttribute('target') === '_blank'
    )
    expect(externalLinks.length).toBeGreaterThan(0)
  })
})

describe('Header', () => {
  it('renders img with alt="Playita Plebes logo"', () => {
    render(<Header />)
    const logo = screen.getByAltText('Playita Plebes logo')
    expect(logo).toBeDefined()
  })
})

describe('ChefsPage', () => {
  it('renders "Próximamente" text', () => {
    render(<ChefsPage />)
    expect(screen.getByText('Próximamente')).toBeDefined()
  })
})

describe('MenuGrid', () => {
  it('shows "No hay platillos disponibles en esta categoría." when items=[]', () => {
    render(<MenuGrid items={[]} onSelectItem={() => {}} />)
    expect(
      screen.getByText('No hay platillos disponibles en esta categoría.')
    ).toBeDefined()
  })
})
