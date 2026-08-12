import LazyImage from '@/components/LazyImage'
import NotionIcon from './NotionIcon'
import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'
import TagItemMini from './TagItemMini'

const BlogPostCard = ({ index, post, showSummary, siteInfo }) => {
  const showPreview =
    siteConfig('HEO_POST_LIST_PREVIEW', null, CONFIG) && post.blockMap
  if (
    post &&
    !post.pageCoverThumbnail &&
    siteConfig('HEO_POST_LIST_COVER_DEFAULT', null, CONFIG)
  ) {
    post.pageCoverThumbnail = siteInfo?.pageCover
  }
  const showPageCover =
    siteConfig('HEO_POST_LIST_COVER', null, CONFIG) &&
    post?.pageCoverThumbnail &&
    !showPreview

  const POST_TWO_COLS = siteConfig('HEO_HOME_POST_TWO_COLS', true, CONFIG)
  const COVER_HOVER_ENLARGE = siteConfig(
    'HEO_POST_LIST_COVER_HOVER_ENLARGE',
    true,
    CONFIG
  )
  const referenceImages = siteConfig('HEO_REFERENCE_POST_IMAGES', [], CONFIG)
  const useReferenceImages = siteConfig(
    'HEO_USE_REFERENCE_IMAGES',
    false,
    CONFIG
  )
  const coverImage =
    useReferenceImages && referenceImages.length > 0
      ? referenceImages[index % referenceImages.length]
      : post?.pageCoverThumbnail || siteInfo?.pageCover

  return (
    <article
      className={`heo-post-card-shell ${COVER_HOVER_ENLARGE ? 'hover:transition-all duration-150' : ''}`}
    >
      <div
        data-wow-delay='.2s'
        className={`heo-post-card ${POST_TWO_COLS ? 'heo-post-card-grid' : 'heo-post-card-list'} wow fadeInUp group`}
      >
        {/* 图片封面 */}
        {(showPageCover || coverImage) && (
          <SmartLink href={post?.href} passHref legacyBehavior>
            <div className='heo-post-card-cover overflow-hidden cursor-pointer select-none'>
              <LazyImage
                priority={index === 0}
                src={coverImage}
                alt={post?.title}
                className='h-full w-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out'
              />
            </div>
          </SmartLink>
        )}

        {/* 文字区块 */}
        <div className='heo-post-card-body flex flex-col justify-between'>
          <header>
            {/* 分类 */}
            {post?.category && (
              <div className='heo-post-card-category flex mb-1 items-center flex-wrap dark:text-gray-300 text-gray-600 hover:text-[var(--heo-color-primary)] dark:hover:text-[var(--heo-color-accent)]'>
                <SmartLink
                  passHref
                  href={`/category/${post.category}`}
                  className='cursor-pointer text-xs font-normal menu-link '
                >
                  {post.category}
                </SmartLink>
              </div>
            )}

            {/* 标题和图标 */}
            <SmartLink
              href={post?.href}
              passHref
              className={
                'heo-post-card-title group-hover:text-[var(--heo-color-primary)] dark:hover:text-[var(--heo-color-accent)] dark:group-hover:text-[var(--heo-color-accent)] text-black dark:text-gray-100 line-clamp-2 replace cursor-pointer font-extrabold leading-tight'
              }
            >
              {siteConfig('POST_TITLE_ICON') && (
                <NotionIcon
                  icon={post.pageIcon}
                  className='heo-icon w-6 h-6 mr-1 align-middle transform translate-y-[-8%]' // 专门为 Heo 主题的图标设置样式
                />
              )}
              <span className='menu-link '>{post.title}</span>
            </SmartLink>
          </header>

          {/* 摘要 */}
          {(!showPreview || showSummary) && (
            <main className='heo-post-card-summary line-clamp-2 replace text-gray-700 dark:text-gray-300 text-sm font-light leading-tight'>
              {post.summary}
            </main>
          )}

          <div className='heo-post-card-tags'>
            {post.tagItems?.map(tag => (
              <TagItemMini key={tag.name} tag={tag} />
            ))}
          </div>
        </div>
        {post.tags?.includes('推荐') && (
          <span className='heo-post-card-badge'>荐</span>
        )}
      </div>
    </article>
  )
}

export default BlogPostCard
