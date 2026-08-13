import { siteConfig } from '@/lib/config'
import HEO_CONFIG from '@/themes/heo/config'
import Card from './Card'

export function AnalyticsCard(props) {
  const isLocalPreview = process.env.NODE_ENV === 'development'
  const { postCount } = props
  const targetDate = new Date(
    siteConfig('HEO_SITE_CREATE_TIME', null, HEO_CONFIG)
  )
  const diffDays = Math.ceil(
    (Date.now() - targetDate.getTime()) / (1000 * 60 * 60 * 24)
  )
  const visitOffset = siteConfig('HEO_SITE_VISIT_OFFSET', 0, HEO_CONFIG)
  const visitorOffset = siteConfig('HEO_SITE_VISITOR_OFFSET', 0, HEO_CONFIG)

  return (
    <Card>
      <div className='ml-2 mb-3'>
        <i className='fas fa-chart-area' /> 统计
      </div>
      <div className='mx-7 space-y-1 justify-center text-xs font-light'>
        <div className='flex justify-between'>
          <div>文章数:</div>
          <div>{postCount}</div>
        </div>
        <div className='flex justify-between'>
          <div>建站天数:</div>
          <div>{Number.isFinite(diffDays) ? `${diffDays} 天` : '--'}</div>
        </div>
        <div
          className={
            isLocalPreview ? '' : 'hidden busuanzi_container_site_pv'
          }>
          <div className='flex justify-between'>
            <div>全站访问量:</div>
            {isLocalPreview ? (
              <div>--</div>
            ) : (
              <div
                className='busuanzi_value_site_pv'
                data-busuanzi-offset={visitOffset}
              />
            )}
          </div>
        </div>
        <div
          className={
            isLocalPreview ? '' : 'hidden busuanzi_container_site_uv'
          }>
          <div className='flex justify-between'>
            <div>访客数:</div>
            {isLocalPreview ? (
              <div>--</div>
            ) : (
              <div
                className='busuanzi_value_site_uv'
                data-busuanzi-offset={visitorOffset}
              />
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}
