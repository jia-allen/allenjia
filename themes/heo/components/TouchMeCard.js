import FlipCard from '@/components/FlipCard'
import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'

/**
 * 职业成长入口
 * @returns
 */
export default function TouchMeCard() {
  if (!JSON.parse(siteConfig('HEO_SOCIAL_CARD', null, CONFIG))) {
    return <></>
  }
  return (
    <div className={'relative h-28 text-white flex flex-col'}>
      <FlipCard
        className='cursor-pointer lg:p-6 p-4 border rounded-xl bg-[var(--heo-color-primary)] dark:bg-[var(--heo-color-accent)] dark:border-gray-600'
        frontContent={
          <div className='relative flex h-full flex-col justify-center overflow-hidden'>
            <i
              aria-hidden='true'
              className='fas fa-route absolute -right-2 top-1/2 -translate-y-1/2 text-6xl opacity-15'
            />
            <h2 className='relative text-3xl font-black'>
              {siteConfig('HEO_SOCIAL_CARD_TITLE_1', null, CONFIG)}
            </h2>
            <h3 className='relative pt-2 text-sm font-medium leading-5 opacity-90'>
              {siteConfig('HEO_SOCIAL_CARD_TITLE_2', null, CONFIG)}
            </h3>
          </div>
        }
        backContent={
          <SmartLink href={siteConfig('HEO_SOCIAL_CARD_URL', null, CONFIG)}>
            <div className='flex h-full items-center justify-center gap-2 text-xl font-black'>
              <i aria-hidden='true' className='fas fa-arrow-right' />
              {siteConfig('HEO_SOCIAL_CARD_TITLE_3', null, CONFIG)}
            </div>
          </SmartLink>
        }
      />
    </div>
  )
}
