export type Category = 'mariscos' | 'desayunos' | 'bebidas'

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number       // pesos MXN
  category: Category
  imageUrl: string    // URL de Google Drive o ruta relativa /public/
}

export interface Chef {
  id: string
  name: string
  bio: string
  imageUrl: string
}
