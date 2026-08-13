import { useGlobal } from '@/lib/global'
import Image from 'next/image'
import { useEffect, useState } from 'react'

/**
 * 路由切换时的品牌等待页。
 * 路由完成后保留短暂的退出阶段，让两层面板依次滑出。
 */
export default function LoadingCover() {
  const { onLoading } = useGlobal()
  const [isVisible, setIsVisible] = useState(false)
  const [isLeaving, setIsLeaving] = useState(false)

  useEffect(() => {
    if (onLoading) {
      setIsLeaving(false)
      setIsVisible(true)
      return
    }

    if (!isVisible) {
      return
    }

    setIsLeaving(true)
    const timer = window.setTimeout(() => {
      setIsVisible(false)
      setIsLeaving(false)
    }, 1350)

    return () => window.clearTimeout(timer)
  }, [isVisible, onLoading])

  if (typeof window === 'undefined') {
    return null
  }

  return isVisible ? (
    <div
      id='loading-cover'
      role='status'
      aria-live='polite'
      aria-label='页面加载中'
      className={isLeaving ? 'is-leaving' : ''}>
      <div className='loading-cover-pattern' aria-hidden='true'>
        <span className='loading-cover-pattern-word'>ALLEN</span>
      </div>
      <div className='loading-cover-main'>
        <div className='loading-cover-progress' aria-hidden='true'>
          <span />
        </div>

        <div className='loading-cover-portrait' aria-hidden='true'>
          <span className='loading-cover-orbit loading-cover-orbit-one' />
          <span className='loading-cover-orbit loading-cover-orbit-two' />
          <div className='loading-cover-window loading-cover-window-back' />
          <div className='loading-cover-window loading-cover-window-front'>
            <div className='loading-cover-window-bar'>
              <i />
              <i />
              <i />
            </div>
            <Image
              src='/wechat-avatar.jpg'
              width={112}
              height={112}
              priority
              alt=''
            />
            <span className='loading-cover-code'>&lt;/&gt;</span>
          </div>
        </div>

        <p className='loading-cover-title' data-text='LOADING'>LOADING</p>
        <p className='loading-cover-caption'>知行录 · 正在整理下一页</p>
      </div>
    </div>
  ) : null
}
