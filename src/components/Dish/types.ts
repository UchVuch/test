export interface Dish {
  id?: number
  title?: string
  weight?: string | number
  description?: string
  price?: string | number 
  oldPrice?: string | number | null
  image?: string
  weightUnit?: string
}