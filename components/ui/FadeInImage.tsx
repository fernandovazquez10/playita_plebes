'use client'

import Image, { type ImageProps } from 'next/image'
import { useState } from 'react'
import { assetPath } from '@/lib/assetPath'

/**
 * Imagen que aparece con un fade-in suave cuando termina de cargar.
 * Aplica automáticamente el basePath del sitio a rutas locales.
 */
export default function FadeInImage({ className = '', onLoad, src, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false)

  const finalSrc = typeof src === 'string' ? assetPath(src) : src

  return (
    <Image
      {...props}
      src={finalSrc}
      onLoad={(e) => {
        setLoaded(true)
        onLoad?.(e)
      }}
      className={`${className} transition-opacity duration-700 ease-out ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}
    />
  )
}
