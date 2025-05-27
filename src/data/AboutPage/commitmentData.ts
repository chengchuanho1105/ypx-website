import aboutpageCommitmentImg1 from '@/assets/media/嚴選黃豆.png'
import aboutpageCommitmentImg2 from '@/assets/media/傳統工法.png'
import aboutpageCommitmentImg3 from '@/assets/media/手工製作.png'
import aboutpageCommitmentImg4 from '@/assets/media/匠心堅持.png'

const images = [
  aboutpageCommitmentImg1,
  aboutpageCommitmentImg2,
  aboutpageCommitmentImg3,
  aboutpageCommitmentImg4,
]

export interface CommitmentItem {
  imageUrl: string
  imageAlt: string
  iconClass: string
  title: string
  content: string
}

export const aboutpageCommitmentData: CommitmentItem[] = [
  {
    imageAlt: '嚴選黃豆圖片',
    iconClass: 'bi bi-award-fill',
    title: '嚴選黃豆',
    content: '使用單一品種非基因改造黃豆，味道更純正，成本也比混合豆高出5～6%。',
  },
  {
    imageAlt: '傳統工法圖片',
    iconClass: 'bi bi-droplet-half',
    title: '傳統三溫暖工法',
    content: '全程遵循「浸泡 → 煮滾 → 過濾」的黃豆三溫暖製程。',
  },
  {
    imageAlt: '手工製作圖片',
    iconClass: 'bi bi-hand-index-thumb',
    title: '手工製作',
    content: '每張豆皮皆由人工細心撈取，無任何化學添加。',
  },
  {
    imageAlt: '匠心堅持圖片',
    iconClass: 'bi bi-heart-fill',
    title: '匠心堅持',
    content: '每片豆皮都是源自耐心與堅持的結晶。',
  },
].map((item, index) => ({
  ...item,
  imageUrl: images[index],
}))
