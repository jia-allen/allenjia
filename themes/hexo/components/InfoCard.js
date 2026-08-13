import { useRouter } from 'next/router'
import Card from './Card'
import SocialButton from './SocialButton'
import MenuGroupCard from './MenuGroupCard'
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import HEO_CONFIG from '@/themes/heo/config'

/**
 * 社交信息卡
 * @param {*} props
 * @returns
 */
export function InfoCard(props) {
  const { className, siteInfo } = props
  const router = useRouter()
  const avatar = siteConfig('HEO_PROFILE_AVATAR', siteInfo?.icon, HEO_CONFIG)
  const title = siteConfig(
    'HEO_INFO_CARD_TITLE',
    siteInfo?.title || siteConfig('TITLE'),
    HEO_CONFIG
  )
  const description = siteConfig(
    'HEO_INFO_CARD_DESCRIPTION',
    siteInfo?.description || siteConfig('DESCRIPTION'),
    HEO_CONFIG
  )
  const descriptionLines = Array.isArray(description)
    ? description
    : [description]

  return (
    <Card className={className}>
      <div
        className='flex cursor-pointer items-center justify-center py-6 transform duration-200 dark:text-gray-100'
        onClick={() => {
          router.push('/')
        }}>
        <LazyImage
          src={avatar}
          className='rounded-full object-cover'
          width={120}
          height={120}
          alt={title}
        />
      </div>
      <div className='pb-3 text-center text-xl font-medium'>{title}</div>
      <div className='space-y-1 px-4 pb-2 text-center text-sm'>
        {descriptionLines.filter(Boolean).map(line => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <MenuGroupCard {...props} />
      <SocialButton />
    </Card>
  )
}
