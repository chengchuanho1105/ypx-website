export interface Product {
  id: string
  name: string
  image: string
  price: string
  category: string
  description: string
  cookingMethod: string
  certifications: string[]
  buyLink?: string
}

export const products: Product[] = [
  {
    id: '00001', // EAN碼 第5~9碼
    name: '法棍豆皮', // 商品名稱
    image: 'https://picsum.photos/1920/1080?random=1', // 商品圖片路徑
    price: 'NT$ 請洽客服', // 商品價格
    category: '豆皮', // 商品類別
    description: '使用非基改黃豆製作的傳統豆皮，風味純正。', // 商品描述
    cookingMethod: '泡水 10 分鐘後即可炒、煮、炸皆宜。', // 商品烹飪方法
    certifications: ['HACCP', 'ISO22000'], // 商品認證
    buyLink: 'https://shop.ypx.com/products/tofu-skin', // 購買連結
  },
  {
    id: '00002',
    name: '傳統豆皮',
    image: 'https://picsum.photos/1920/1080?random=2',
    price: 'NT$ 請洽客服',
    category: '豆皮',
    description: '使用非基改黃豆製作的傳統豆皮，風味純正。',
    cookingMethod: '泡水 10 分鐘後即可炒、煮、炸皆宜。',
    certifications: ['HACCP', 'ISO22000'],
    buyLink: 'https://shop.ypx.com/products/tofu-skin',
  },
  {
    id: '00003',
    name: '傳統豆乾',
    image: 'https://picsum.photos/1920/1080?random=3',
    price: 'NT$ 請洽客服',
    category: '豆乾',
    description: '使用非基改黃豆製作的傳統豆皮，風味純正。',
    cookingMethod: '泡水 10 分鐘後即可炒、煮、炸皆宜。',
    certifications: ['HACCP', 'ISO22000'],
    buyLink: 'https://shop.ypx.com/products/tofu-skin',
  },
  {
    id: '00003',
    name: '傳統豆乾',
    image: 'https://picsum.photos/1920/1080?random=4',
    price: 'NT$ 請洽客服',
    category: '豆乾',
    description: '使用非基改黃豆製作的傳統豆皮，風味純正。',
    cookingMethod: '泡水 10 分鐘後即可炒、煮、炸皆宜。',
    certifications: ['HACCP', 'ISO22000'],
    buyLink: 'https://shop.ypx.com/products/tofu-skin',
  },
  {
    id: '00003',
    name: '傳統豆乾',
    image: 'https://picsum.photos/1920/1080?random=5',
    price: 'NT$ 請洽客服',
    category: '豆乾',
    description: '使用非基改黃豆製作的傳統豆皮，風味純正。',
    cookingMethod: '泡水 10 分鐘後即可炒、煮、炸皆宜。',
    certifications: ['HACCP', 'ISO22000'],
    buyLink: 'https://shop.ypx.com/products/tofu-skin',
  },
  {
    id: '00003',
    name: '傳統豆乾',
    image: 'https://picsum.photos/1920/1080?random=6',
    price: 'NT$ 請洽客服',
    category: '豆乾',
    description: '使用非基改黃豆製作的傳統豆皮，風味純正。',
    cookingMethod: '泡水 10 分鐘後即可炒、煮、炸皆宜。',
    certifications: ['HACCP', 'ISO22000'],
    buyLink: 'https://shop.ypx.com/products/tofu-skin',
  },
  // 更多產品 ...
]
