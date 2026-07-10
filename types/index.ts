export type Category = 'mariscos' | 'desayunos' | 'bebidas'

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number       // pesos MXN
  category: Category
  imageUrl: string    // Ruta relativa /public/
  active: boolean     // Solo los items activos se muestran en la vista
}

export interface Chef {
  id: string
  name: string
  bio: string
  imageUrl: string
}
