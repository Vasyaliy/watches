import { productsMock } from './productsMock'
import axios from 'axios'

export interface Product {
  image: number;
  name: string;
  price: string;
  user: number;
  description?: string;
  images: string[];
  charachteristics?: {[key: string]: string};
  brand: number;
  id?: number;
}

export function getCookie (coockieName: string) {
  const results = document.cookie.match('(^|;) ?' + `${coockieName}` + '=([^;]*)(;|$)')
  if (results) return unescape(results[2])
  else return null
}

export class Products {
  list: any
  currentProduct: Product | undefined
  loading: boolean

  constructor () {
    this.list = productsMock
    this.currentProduct = undefined
    this.loading = false
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
      user: 1,
      image: 0,
      brand: 1,
      images: [],
      description: '',
      price: '',
      charachteristics: {
        size: ''
      }
    }
  }

  fetchProducts = () => {
    this.loading = true
    axios
      .get('http://127.0.0.1:8000/watch/api/product_get/?format=json')
      .catch(console.log)
      .then(response => {
        // @ts-ignore
        console.log(response.data)
        // @ts-ignore
        this.list = response.data
      })
      .finally(() => {
        this.loading = false
      })
  }

  getProduct = (productId: number) => {
    // @ts-ignore
    this.currentProduct = this.list.find(({ id }) => id === productId)
  }

  get current () {
    return this.currentProduct
  }
}

export const products = new Products()
products.fetchProducts()
