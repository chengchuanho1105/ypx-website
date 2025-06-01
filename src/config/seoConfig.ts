import { CompanyProfile } from './companyProfile'

export const DefaultSEO = {
  title: CompanyProfile.business.shortName + '｜' + CompanyProfile.seo.titleSlogan,
  description: CompanyProfile.seo.description,
  keywords: CompanyProfile.seo.keywords,
  author: CompanyProfile.website.author,
  authorUrl: CompanyProfile.website.authorUrl,
  locale: CompanyProfile.website.locale,
  siteUrl: CompanyProfile.website.fullUrl,
  image: CompanyProfile.promotionalImage,
  robots: 'all, follow',
  googlebot: 'index,follow,snippet,archive',
  og: {
    title: CompanyProfile.business.shortName + '｜' + CompanyProfile.seo.titleSlogan,
    description: CompanyProfile.seo.description,
    image: CompanyProfile.promotionalImage,
    url: CompanyProfile.website.fullUrl,
    type: 'website',
    siteName: CompanyProfile.business.shortName,
    locale: CompanyProfile.website.locale,
  },
  favicon: CompanyProfile.favicon,
}
