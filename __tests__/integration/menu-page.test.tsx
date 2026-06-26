/**
 * Integration tests for Menu Page — filtrado y modal
 * **Validates: Requirements 7.4, 7.5, 8.1, 8.3, 8.5**
 *
 * Tests:
 * - Renders all mariscos items by default (first tab active)
 * - Clicking "Desayunos" tab shows desayunos items
 * - Clicking a MenuCard opens DetailModal with correct item data
 * - Clicking the close button (aria-label="Cerrar") closes the modal
 * - Pressing Escape closes the modal
 */
import { describe, test, expect, vi } from 'vitest'
import { render, screen, fireEvent, within } from '@testing-library/react'
import React from 'react'

// Mock next/image to render plain <img> tags
vi.mock('next/image', () => ({
  default: (props: Record<string, unknown>) => {
    const { fill, ...rest } = props as Record<string, unknown> & { fill?: boolean }
    void fill
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...rest} />
  },
}))

// Mock next/link to render plain <a> tags
vi.mock('next/link', () => ({
  default: ({ children, href, ...rest }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}))

import MenuPage from '@/app/menu/page'
import menuData from '@/data/menu.json'

const mariscosItems = menuData.filter((item) => item.category === 'mariscos')
const desayunosItems = menuData.filter((item) => item.category === 'desayunos')

describe('Menu Page Integration — Filtrado y Modal', () => {
  test('renders all mariscos items by default (first tab active)', () => {
    render(<MenuPage />)

    // The "Mariscos" tab should be active by default
    const mariscosTab = screen.getByRole('tab', { name: 'Mariscos' })
    expect(mariscosTab).toHaveAttribute('aria-selected', 'true')

    // All mariscos items should be visible
    for (const item of mariscosItems) {
      expect(screen.getByText(item.name)).toBeInTheDocument()
    }
  })

  test('clicking "Desayunos" tab shows desayunos items', () => {
    render(<MenuPage />)

    // Click the "Desayunos" tab
    const desayunosTab = screen.getByRole('tab', { name: 'Desayunos' })
    fireEvent.click(desayunosTab)

    // The "Desayunos" tab should now be active
    expect(desayunosTab).toHaveAttribute('aria-selected', 'true')

    // Desayunos items should be present in the document
    for (const item of desayunosItems) {
      expect(screen.getByText(item.name)).toBeInTheDocument()
    }
  })

  test('clicking a MenuCard opens DetailModal with correct item data (name, description, price)', () => {
    render(<MenuPage />)

    // Click the first mariscos item card
    const firstItem = mariscosItems[0]
    const itemButton = screen.getByRole('button', { name: new RegExp(firstItem.name) })
    fireEvent.click(itemButton)

    // The modal should open with the correct item data
    const dialog = screen.getByRole('dialog')
    expect(dialog).toBeInTheDocument()
    expect(dialog).toHaveAttribute('aria-label', firstItem.name)

    // Verify name, description, and price are displayed inside the modal
    const modalContent = within(dialog)
    expect(modalContent.getByText(firstItem.name)).toBeInTheDocument()
    expect(modalContent.getByText(firstItem.description)).toBeInTheDocument()
    expect(modalContent.getByText(`$${firstItem.price}`)).toBeInTheDocument()
  })

  test('clicking the close button (aria-label="Cerrar") closes the modal', () => {
    render(<MenuPage />)

    // Open the modal
    const firstItem = mariscosItems[0]
    const itemButton = screen.getByRole('button', { name: new RegExp(firstItem.name) })
    fireEvent.click(itemButton)

    // Modal should be open
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    // Click the close button
    const closeButton = screen.getByLabelText('Cerrar')
    fireEvent.click(closeButton)

    // Modal should be closed
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  test('pressing Escape closes the modal', () => {
    render(<MenuPage />)

    // Open the modal
    const firstItem = mariscosItems[0]
    const itemButton = screen.getByRole('button', { name: new RegExp(firstItem.name) })
    fireEvent.click(itemButton)

    // Modal should be open
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    // Press Escape
    fireEvent.keyDown(document, { key: 'Escape' })

    // Modal should be closed
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
