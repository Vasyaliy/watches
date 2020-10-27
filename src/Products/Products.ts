import { productsMock } from './productsMock'

export interface Product {
  image: string;
  name: string;
  price: string;
  description?: string;
  images: string[];
  charachteristics?: {[key: string]: string};
  brand: string;
  id?: number;
}

export class Products {
  list: Product[]
  currentProduct: Product | undefined

  constructor () {
    this.list = productsMock
    this.currentProduct = undefined
  }

  static conditions = [
    'Новый',
    'Б.у',
    'Ходят',
    'Убитые'
  ]

  static brands = [
    'Omega',
    'Rolex',
    'Omega1',
    'Rolex1',
    'Omega2',
    'Rolex2',
    'Omega3',
    'Rolex4',
    'Omega4',
    'Rolex5',
    'Omega5',
    'Rolex6',
    'Omega6',
    'Rolex7',
    'Omega7',
    'Rolex8',
    'Omega8',
    'Rolex9',
    'Omega9'
  ]

  static getIntial (): Product {
    return {
      name: '',
      image: '',
      brand: '',
      images: [],
      description: '',
      price: '',
      charachteristics: {
        size: ''
      }
    }
  }

  getProduct = (productId: number) => {
    this.currentProduct = this.list.find(({ id }) => id === productId)
  }

  get current () {
    return this.currentProduct
  }
}

export const products = new Products()
