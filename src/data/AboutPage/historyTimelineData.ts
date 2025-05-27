export interface HistoryTimelineItem {
  index: number
  mainTitle: string
  subTitle: string
  description: string
  iconClass: string
}

export const aboutpageHistoryTimelineData: HistoryTimelineItem[] = [
  {
    index: 1,
    mainTitle: '創業起點',
    subTitle: '1985年貸款數百萬，於濁水溪畔扎根',
    description:
      '懷抱理想與毅力，創辦人投入大量資金，選址於水質優良的濁水溪畔，正式展開豆皮事業的第一步。',
    iconClass: 'bi bi-sunrise',
  },
  {
    index: 2,
    mainTitle: '成長階段',
    subTitle: '製程調整，找出黃豆與石灰質水源的最佳比例',
    description:
      '經過三年不斷嘗試與優化，團隊成功掌握原料與水質的黃金比例，使豆皮口感與品質雙雙升級，奠定市場口碑。',
    iconClass: 'bi bi-rocket-takeoff',
  },
  {
    index: 3,
    mainTitle: '技術升級',
    subTitle: '引進先進設備，提升品質與產能',
    description:
      '因應市場需求與品質提升目標，引進先進製造設備，自動化流程逐步成形，確保穩定生產並符合國際標準。',
    iconClass: 'bi bi-shift',
  },
  {
    index: 4,
    mainTitle: '外銷拓展',
    subTitle: '進軍國際市場，成為台灣之光',
    description:
      '憑藉穩定品質與口感特色，產品成功進軍國際市場，每年外銷量逾 20 公噸。主要銷往歐美日等地，打響臺灣豆皮品牌。',
    iconClass: 'bi bi-stars',
  },
]
