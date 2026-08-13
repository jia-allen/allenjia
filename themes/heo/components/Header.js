import { siteConfig } from '@/lib/config'
import throttle from 'lodash.throttle'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useRef, useState } from 'react'
import DarkModeButton from './DarkModeButton'
import Logo from './Logo'
import { MenuListTop } from './MenuListTop'
import RandomPostButton from './RandomPostButton'
import ReadingProgress from './ReadingProgress'
import SearchButton from './SearchButton'
import SlideOver from './SlideOver'
import { useGlobal } from '@/lib/global'

/**
 * 页头：顶部导航
 * @param {*} param0
 * @returns
 */
const Header = props => {
  const { theme } = useGlobal()
  const [fixedNav, setFixedNav] = useState(false)
  const [textWhite, setTextWhite] = useState(false)
  const [navBgWhite, setBgWhite] = useState(false)
  // 是否存在文章页背景图（仅客户端检测）
  const [hasPostBg, setHasPostBg] = useState(false)

  const router = useRouter()
  const slideOverRef = useRef()
  // 缓存 #post-bg 节点的引用，避免每次滚动都重新查询 DOM
  const postBgRef = useRef(null)

  const toggleMenuOpen = () => {
    slideOverRef?.current?.toggleSlideOvers()
  }

  /**
   * 根据滚动条，切换导航栏样式
   * 用 useMemo 持有 throttle 实例，避免每次渲染重建
   */
  const scrollTrigger = useMemo(
    () =>
      throttle(() => {
        const scrollS = window.scrollY
        // 导航栏设置 白色背景
        if (scrollS <= 1) {
          setFixedNav(false)
          setBgWhite(false)
          setTextWhite(false)

          // 文章详情页特殊处理
          if (postBgRef.current) {
            setFixedNav(true)
            setTextWhite(true)
          }
        } else {
          // 向下滚动后的导航样式
          setFixedNav(true)
          setTextWhite(false)
          setBgWhite(true)
        }
      }, 100),
    []
  )

  // 路由变化后重新探测 #post-bg 与初始化导航状态
  useEffect(() => {
    postBgRef.current = document.querySelector('#post-bg')
    setHasPostBg(!!postBgRef.current)
    scrollTrigger()
  }, [router.asPath, scrollTrigger])

  // 监听滚动
  useEffect(() => {
    window.addEventListener('scroll', scrollTrigger, { passive: true })
    return () => {
      window.removeEventListener('scroll', scrollTrigger)
      scrollTrigger.cancel?.()
    }
  }, [scrollTrigger])

  return (
    <>
      <style jsx>{`
        @keyframes fade-in-down {
          0% {
            opacity: 0.5;
            transform: translateY(-30%);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          0% {
            opacity: 0.5;
            transform: translateY(30%);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-down {
          animation: fade-in-down 0.3s ease-in-out;
        }

        .fade-in-up {
          animation: fade-in-up 0.3s ease-in-out;
        }
      `}</style>

      {/* fixed时留白高度 */}
      {fixedNav && !hasPostBg && (
        <div className='h-[60px] md:h-16'></div>
      )}

      {/* 顶部导航菜单栏 */}
      <nav
        id='nav'
        className={`z-20 h-[60px] md:h-16 top-0 w-full duration-300 transition-all
            ${fixedNav ? 'fixed' : 'relative bg-transparent'} 
            ${textWhite ? 'text-white ' : 'text-black dark:text-white'}  
            ${navBgWhite ? 'heo-nav-floating' : 'bg-transparent'}`}>
        <div className='flex min-w-0 h-full mx-auto justify-between items-center gap-2 max-w-[86rem] px-3 md:px-6'>
          {/* 左侧logo */}
          <div id='nav-brand' className='min-w-0 flex-1 lg:flex-none'>
            <Logo {...props} />
          </div>

          {/* 页面顶部显示数据库菜单；滚动吸顶后隐藏中间区域 */}
          <div
            id='nav-bar-top'
            className={`hidden lg:flex min-w-0 flex-grow items-center justify-center transition-opacity duration-200 ${navBgWhite ? 'invisible opacity-0 pointer-events-none' : 'visible opacity-100'}`}>
            <MenuListTop {...props} />
          </div>

          {/* 右侧固定 */}
          <div
            id='nav-actions'
            className='flex flex-shrink-0 justify-end items-center gap-1 rounded-full bg-white/80 dark:bg-[var(--heo-color-card-dark)] px-1.5 shadow-sm w-auto'
          >
            <RandomPostButton {...props} />
            <SearchButton {...props} />
            {(theme === 'heo' || !siteConfig('THEME_SWITCH', false)) && (
              <DarkModeButton {...props} />
            )}
            <ReadingProgress />

            {/* 移动端菜单按钮 */}
            <div
              onClick={toggleMenuOpen}
              className='flex lg:hidden w-8 justify-center items-center h-8 cursor-pointer'>
              <i className='fas fa-bars' />
            </div>
          </div>

          {/* 右边侧拉抽屉 */}
          <SlideOver cRef={slideOverRef} {...props} />
        </div>
      </nav>
    </>
  )
}

export default Header
