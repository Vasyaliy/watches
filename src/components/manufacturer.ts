const manufactorsData = [
  ['Omega', 'https://cdn4.chrono24.com/images/topmodels/74-984eorvfjxmx240c0i4zlfhx-Original.png?auto=compress&h=305'],
  ['Rolex', 'https://cdn4.chrono24.com/images/topmodels/1-w70x429knb132x17edf24c63-Original.png?auto=compress&h=305'],
  ['Omega', 'https://cdn4.chrono24.com/images/topmodels/74-984eorvfjxmx240c0i4zlfhx-Original.png?auto=compress&h=305'],
  ['daniel wellington', 'https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw-classic-black-sheffield-36rg.png'],
  ['Breitling', 'https://cdn4.chrono24.com/images/topmodels/8-3g7rumkwno3vld8seo8cavnl-Original.png?auto=compress&h=305'],
  ['Hublot', 'https://cdn4.chrono24.com/images/topmodels/1064-nqwd5o8wcf5bvegiuv7oxv75-Original.png?auto=compress&h=305'],
  ['Breitling', 'https://cdn4.chrono24.com/images/topmodels/8-3g7rumkwno3vld8seo8cavnl-Original.png?auto=compress&h=305'],
  ['daniel wellington', 'https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw-classic-black-sheffield-36rg.png'],
  ['Tissot', 'https://cdn4.chrono24.com/images/topmodels/2383-exdh6w8zi45576urljlhsjv8-Original.png?auto=compress&h=305'],
  ['daniel wellington', 'https://www.danielwellington.com/media/staticbucket/media/catalog/product/d/w/dw-classic-black-sheffield-36rg.png'],
  ['Rolex', 'https://cdn4.chrono24.com/images/topmodels/1-w70x429knb132x17edf24c63-Original.png?auto=compress&h=305'],
  ['Rolex', 'https://cdn4.chrono24.com/images/topmodels/1-w70x429knb132x17edf24c63-Original.png?auto=compress&h=305']
]

export class WatchManufactorer {
  name: string
  img: string
  constructor (name: string, img: string) {
    this.name = name
    this.img = img
  }
}

export class Manufactorers {
  list: WatchManufactorer[]

  constructor () {
    this.list = []
    this.addData()
  }

  addData () {
    this.list = manufactorsData.map(([name, img]) => new WatchManufactorer(name, img))
  }
}

export const manufactorers = new Manufactorers()
