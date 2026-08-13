import BLOG from '@/blog.config'
import busuanzi from '@/lib/plugins/busuanzi'
import { useRouter } from 'next/router'
import { useGlobal } from '@/lib/global'
import { useEffect } from 'react'

export function isOfficialBusuanziHost(hostname, siteLink = BLOG.LINK) {
  try {
    return hostname === new URL(siteLink).hostname
  } catch (error) {
    return false
  }
}

export default function Busuanzi() {
  const { theme } = useGlobal()
  const router = useRouter()

  useEffect(() => {
    if (!theme) return

    const refresh = () => {
      if (isOfficialBusuanziHost(window.location.hostname)) {
        busuanzi.fetch()
      } else {
        busuanzi.showPlaceholder()
      }
    }

    refresh()
    router.events.on('routeChangeComplete', refresh)

    return () => {
      router.events.off('routeChangeComplete', refresh)
    }
  }, [router.events, theme])

  return null
}
