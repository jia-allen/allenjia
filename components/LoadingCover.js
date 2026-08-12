import { useGlobal } from '@/lib/global'
import { useEffect, useState } from 'react'
/**
 * 路由切换时的轻量等待页。
 * 采用 Heo 主题的蓝色几何纹理和顶部进度条，避免整屏黑色扩散动画。
 */
export default function LoadingCover() {
  const { onLoading } = useGlobal()
  const [isVisible, setIsVisible] = useState(false) // 初始状态设置为false，避免服务端渲染与客户端渲染不一致

  useEffect(() => {
    // 确保在客户端渲染时才设置可见性
    if (onLoading) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [onLoading])

  if (typeof window === 'undefined') {
    return null // 避免在服务端渲染时渲染出这个组件
  }

  return isVisible ? (
    <div
      id='loading-cover'
      role='status'
      aria-live='polite'
      className={`dark:text-white text-black animate__animated animate__faster ${
        onLoading ? 'animate__fadeIn' : 'animate__fadeOut'
      }`}
    >
      <div className='loading-cover-pattern' aria-hidden='true' />
      <div className='loading-cover-main'>
        <div className='loading-cover-progress' aria-hidden='true'>
          <span />
        </div>
        <div className='loading-cover-mark'>
          <img src='/avatar.svg' alt='' />
        </div>
        <p className='loading-cover-title'>正在打开</p>
        <p className='loading-cover-caption'>稍等片刻，内容马上就来</p>
      </div>
    </div>
  ) : null
}
