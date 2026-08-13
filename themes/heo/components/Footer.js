import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'

/**
 * 页脚
 * @returns
 */
const Footer = () => {
  const isLocalPreview = process.env.NODE_ENV === 'development'
  const BEI_AN = siteConfig('BEI_AN')
  const BEI_AN_LINK = siteConfig('BEI_AN_LINK')
  const footerSince = siteConfig('HEO_FOOTER_SINCE', 2023, CONFIG)
  const currentYear = new Date().getFullYear()
  const copyrightYears =
    Number(footerSince) < currentYear
      ? `${footerSince}-${currentYear}`
      : currentYear
  const reserveMusicPlayerSpace =
    siteConfig('MUSIC_PLAYER') && siteConfig('MUSIC_PLAYER_VISIBLE')

  return (
    <footer className='heo-footer relative flex-shrink-0 w-full text-sm'>
      <div
        id='footer-bottom'
        className={`w-full flex flex-col lg:flex-row justify-between items-center ${
          reserveMusicPlayerSpace ? 'pb-20' : ''
        }`}
      >
        <div id='footer-bottom-left' className='heo-footer-group'>
          <div className='heo-footer-copyright'>
            <i className='far fa-copyright' aria-hidden='true' />
            <span>{copyrightYears}</span>
            <SmartLink href='/about'>{siteConfig('TITLE')}</SmartLink>
            <span aria-hidden='true'>✦</span>
          </div>
        </div>

        <div id='footer-bottom-right' className='heo-footer-group'>
          {BEI_AN && (
            <div className='heo-footer-record'>
              <i className='fas fa-shield-alt' aria-hidden='true' />
              <a href={BEI_AN_LINK} target='_blank' rel='noreferrer nofollow'>
                {siteConfig('BEI_AN')}
              </a>
            </div>
          )}
          <BeiAnGongAn className='heo-footer-police-record' />

          {isLocalPreview ? (
            <>
              <span className='heo-footer-stat' title='全站访问量'>
                <i className='fas fa-eye' aria-hidden='true' />
                <span>--</span>
              </span>
              <span className='heo-footer-stat' title='访客数'>
                <i className='fas fa-users' aria-hidden='true' />
                <span>--</span>
              </span>
            </>
          ) : (
            <>
              <span className='hidden busuanzi_container_site_pv'>
                <span className='heo-footer-stat' title='全站访问量'>
                  <i className='fas fa-eye' aria-hidden='true' />
                  <span
                    className='busuanzi_value_site_pv'
                    data-busuanzi-offset={siteConfig('HEO_SITE_VISIT_OFFSET', 0, CONFIG)}
                  />
                </span>
              </span>
              <span className='hidden busuanzi_container_site_uv'>
                <span className='heo-footer-stat' title='访客数'>
                  <i className='fas fa-users' aria-hidden='true' />
                  <span
                    className='busuanzi_value_site_uv'
                    data-busuanzi-offset={siteConfig('HEO_SITE_VISITOR_OFFSET', 0, CONFIG)}
                  />
                </span>
              </span>
            </>
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer
