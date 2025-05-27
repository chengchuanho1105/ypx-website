// infoImg import
import homepageHeroImg1 from '@/assets/media/關於我們.png'
import homepageHeroImg2 from '@/assets/media/精選產品.png'
import homepageHeroImg3 from '@/assets/media/媒體介紹.png'
import homepageHeroImg4 from '@/assets/media/客戶見證.png'

export const heroSectionData = [
  {
    bgImg: homepageHeroImg1,
    imgHeight: '60svh',
    direction: true,
    mainTitle: '關於我們',
    subTitle: '',
    description:
      '源品香由一群熱愛土地與豆製品的職人組成。<br>並秉持「傳承、專業、誠信」，淬鍊出豆香的純粹與真誠，讓健康的飲食悄然在每一張豆皮中發芽。',
    link: '/about',
    linkText: '了解更多',
  },
  {
    bgImg: homepageHeroImg2,
    imgHeight: '60svh',
    direction: false,
    mainTitle: '精選產品',
    subTitle: '',
    description:
      '產品皆由天然食材製成，無無外添加任何化學成分。<br>讓您在享受美味的同時，也能感受健康生活的美好。',
    link: '/product',
    linkText: '挑選產品',
  },
  {
    bgImg: homepageHeroImg3,
    imgHeight: '60svh',
    direction: true,
    mainTitle: '媒體介紹',
    subTitle: '',
    description:
      '媒體報導不只是產品的介紹，更是我們對品質與服務的承諾。<br>源品香相信能讓每一位顧客感受到我們的用心與專業。',
    link: '/media',
    linkText: '更多介紹',
  },
  {
    bgImg: homepageHeroImg4,
    imgHeight: '60svh',
    direction: false,
    mainTitle: '客戶見證',
    subTitle: '',
    description:
      '客戶見證是我們最好的廣告。讓我們一起分享這些美好的故事。邀請更多人認識源品香的堅持與美味。',
    link: '/contact',
    linkText: '聯絡購買',
  },
  {
    bgImg: 'https://picsum.photos/1920/1080?random=1',
    imgHeight: '60svh',
    direction: true,
    mainTitle: '輸入標題',
    subTitle: '',
    description: '此處可依需求增改',
    link: '/',
    linkText: '新增按鈕',
  },
]
