import { CompanyProfile } from './companyProfile'

export const DefaultSEO = {
  title: CompanyProfile.shortName + '｜' + CompanyProfile.websiteTitleSlogan,
  description: CompanyProfile.websiteDescription,
  keywords: CompanyProfile.keyword,
  author: '祥銓生活服務(https://chuan.life)',
  locale: CompanyProfile.locale,
  siteUrl: CompanyProfile.websiteUrl,
  image: CompanyProfile.promotionalImg,
  robots: 'all, follow',
  googlebot: 'index,follow,snippet,archive',
  og: {
    title: CompanyProfile.shortName + '｜' + CompanyProfile.websiteTitleSlogan,
    description: CompanyProfile.websiteDescription,
    image: CompanyProfile.promotionalImg,
    url: CompanyProfile.websiteUrl,
    type: 'website',
    siteName: CompanyProfile.shortName,
    locale: CompanyProfile.locale,
  },
  favicon: CompanyProfile.favicon,
}
