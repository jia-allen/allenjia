import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'
import HEO_CONFIG from '@/themes/heo/config'

const Footer = () => {
  const isLocalPreview = process.env.NODE_ENV === 'development'
  const currentYear = new Date().getFullYear()
  const since = siteConfig('HEO_FOOTER_SINCE', siteConfig('SINCE'), HEO_CONFIG)
  const copyrightDate =
    Number(since) < currentYear ? `${since}-${currentYear}` : currentYear
  const BEI_AN = siteConfig('BEI_AN')
  const BEI_AN_LINK = siteConfig('BEI_AN_LINK')
  const visitOffset = siteConfig('HEO_SITE_VISIT_OFFSET', 0, HEO_CONFIG)
  const visitorOffset = siteConfig('HEO_SITE_VISITOR_OFFSET', 0, HEO_CONFIG)

  return (
    <footer className='relative z-10 flex-shrink-0 bg-hexo-light-gray px-6 py-8 text-sm text-gray-600 dark:bg-black dark:text-gray-100'>
      <div className='mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-5 gap-y-2'>
        <span className='inline-flex items-center gap-1.5 whitespace-nowrap'>
          <i className='far fa-copyright' aria-hidden='true' />
          <span>{copyrightDate}</span>
          <SmartLink href='/about' className='font-semibold underline'>
            {siteConfig('TITLE')}
          </SmartLink>
        </span>

        {BEI_AN && (
          <span className='inline-flex items-center gap-1.5 whitespace-nowrap'>
            <i className='fas fa-shield-alt' aria-hidden='true' />
            <a href={BEI_AN_LINK} target='_blank' rel='noreferrer nofollow'>
              {BEI_AN}
            </a>
          </span>
        )}

        <BeiAnGongAn className='inline-flex items-center whitespace-nowrap' />

        {isLocalPreview ? (
          <>
            <span title='全站访问量'>
              <i className='fas fa-eye mr-1.5' aria-hidden='true' />--
            </span>
            <span title='访客数'>
              <i className='fas fa-users mr-1.5' aria-hidden='true' />--
            </span>
          </>
        ) : (
          <>
            <span
              className='hidden busuanzi_container_site_pv'
              title='全站访问量'>
              <i className='fas fa-eye mr-1.5' aria-hidden='true' />
              <span
                className='busuanzi_value_site_pv'
                data-busuanzi-offset={visitOffset}
              />
            </span>
            <span
              className='hidden busuanzi_container_site_uv'
              title='访客数'>
              <i className='fas fa-users mr-1.5' aria-hidden='true' />
              <span
                className='busuanzi_value_site_uv'
                data-busuanzi-offset={visitorOffset}
              />
            </span>
          </>
        )}
      </div>
    </footer>
  )
}

export default Footer
