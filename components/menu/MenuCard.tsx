'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { MenuItem } from '@/types'

interface MenuCardProps {
  item: MenuItem
  onClick: (item: MenuItem) => void
}

export default function MenuCard({ item, onClick }: MenuCardProps) {
  const [imgSrc, setImgSrc] = useState(item.imageUrl)
  const [loaded, setLoaded] = useState(false)

  return (
    <button
      type="button"
      onClick={() => onClick(item)}
      className="group flex flex-col items-center rounded-2xl bg-neutral-100 p-4 transition-shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 w-full"
    >
      <div className="relative w-full aspect-square overflow-hidden rounded-[20px]">
        <Image
          src={imgSrc}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
          className={`object-cover transition-all duration-500 ease-out group-hover:scale-105 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setLoaded(true)}
          onError={() => setImgSrc('/placeholder.svg')}
        />
      </div>
      <span className="mt-3 font-body text-sm font-medium text-dark-navy line-clamp-2 text-center w-full">
        {item.name}
      </span>
      <span className="mt-1 font-body text-base font-semibold text-brand-orange">
        ${item.price}
      </span>
    </button>
  )
}
