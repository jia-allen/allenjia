import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { useRouter } from 'next/router'

/**
 * 右下角个人形象挂件
 * @returns
 */
export default function Live2D() {
  const { theme } = useGlobal()
  const router = useRouter()
  const showPet = isEnabled(siteConfig('WIDGET_PET'))
  const petSwitchTheme = isEnabled(siteConfig('WIDGET_PET_SWITCH_THEME'))

  function handleClick() {
    if (!petSwitchTheme) return

    const currentTheme = router.query.theme || theme
    const nextTheme = currentTheme === 'hexo' ? 'heo' : 'hexo'
    router.push({
      pathname: router.pathname,
      query: { ...router.query, theme: nextTheme }
    })
  }

  if (!showPet) {
    return <></>
  }

  return (
    <>
      <button
        type='button'
        onClick={handleClick}
        title='切换 Heo 与 Hexo 主题'
        aria-label='切换 Heo 与 Hexo 主题'
        className='allen-mascot group fixed bottom-1 right-1 z-30 hidden h-[220px] w-[202px] cursor-pointer items-end justify-end border-0 bg-transparent p-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 lg:flex'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src='/images/allen-mascot.webp'
          width='600'
          height='655'
          alt='Allen 的 AI 代码龙仔'
          draggable='false'
          className='h-auto w-full select-none object-contain drop-shadow-[0_12px_18px_rgba(37,99,235,0.22)] transition-transform duration-300 group-hover:-rotate-2 group-hover:scale-105 group-active:scale-95'
        />
      </button>

      <style jsx>{`
        .allen-mascot {
          animation: mascot-float 4.8s ease-in-out infinite;
          transform-origin: 50% 100%;
        }

        @keyframes mascot-float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-9px) rotate(1deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .allen-mascot {
            animation: none;
          }
        }
      `}</style>
    </>
  )
}

function isEnabled(value) {
  return value === true || value === 1 || value === 'true' || value === '1'
}
