import { Home } from '@/components/HeroIcons'
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'

const Logo = props => {
  const avatar = siteConfig('HEO_PROFILE_AVATAR', null, CONFIG)
  return (
    <SmartLink href='/' passHref legacyBehavior>
      <div className='flex min-w-0 w-full flex-nowrap items-center cursor-pointer font-extrabold'>
        <LazyImage
          src={avatar}
          width={32}
          height={32}
          alt={siteConfig('AUTHOR')}
          className='mr-3 hidden md:block rounded-full object-cover'
        />
        <div id='logo-text' className='group min-w-0 rounded-2xl relative'>
          <div className='logo truncate whitespace-nowrap group-hover:opacity-0 opacity-100 visible group-hover:invisible text-base md:text-lg my-auto rounded dark:border-white duration-200'>
            {siteConfig('TITLE')}
          </div>
          <div className='flex justify-center rounded-2xl group-hover:bg-[var(--heo-color-primary)] w-full group-hover:opacity-100 opacity-0 invisible group-hover:visible absolute top-0 py-1 duration-200'>
            <Home className={'w-6 h-6 stroke-white stroke-2 '} />
          </div>
        </div>
      </div>
    </SmartLink>
  )
}
export default Logo
