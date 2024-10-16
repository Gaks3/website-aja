import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

type NavItem = {
  link: string
  name: string
}

export default function Footer() {
  const t = useTranslations('Navigation')

  const navItems: NavItem[] = [
    {
      link: '#home',
      name: t('home'),
    },
    {
      link: '#benefits',
      name: t('benefits'),
    },
    {
      link: '#pricing',
      name: t('pricing'),
    },
    {
      link: '#testimonial',
      name: t('testimonial'),
    },
    {
      link: '#contact',
      name: t('contact'),
    },
  ]

  return (
    <footer className='relative mt-32'>
      <div className='border-t border-neutral-100  dark:border-neutral-800 px-8 py-20 relative bg-white dark:bg-black space-y-10'>
        <div className='max-w-7xl mx-auto text-sm text-neutral-500 dark:text-neutral-400 flex sm:flex-row flex-col justify-between items-start'>
          <div className='flex flex-col gap-4'>
            <Link
              href={'/'}
              className='font-normal flex items-center text-sm mr-4 text-black px-2 py-1 relative z-20'
            >
              <Image
                src={'/logo-white.png'}
                className='dark:block hidden'
                alt='Logo'
                width={23}
                height={23}
              />
              <Image
                src={'/logo-dark.png'}
                className='block dark:hidden'
                alt='Logo'
                width={23}
                height={23}
              />
              <span className='font-medium text-black dark:text-white ml-2'>
                WebGue
              </span>
            </Link>
            <p className='text-sm text-muted-foreground'>
              Effortless website solutions, tailored for your success.
            </p>
            <div className='flex space-x-4'>
              <Link
                href='https://www.instagram.com/webgue'
                className='text-muted-foreground hover:text-foreground'
              >
                <span className='sr-only'>Instagram</span>
                <InstagramLogoIcon className='size-5' />
              </Link>
              <Link
                href='https://www.linkedin.com/in/web-gue'
                className='text-muted-foreground hover:text-foreground'
              >
                <span className='sr-only'>LinkedIn</span>
                <LinkedInLogoIcon className='size-5' />
              </Link>
              <Link
                href='https://github.com/webgue'
                className='text-muted-foreground hover:text-foreground'
              >
                <span className='sr-only'>Github</span>
                <GitHubLogoIcon className='size-5' />
              </Link>
            </div>
            {/* <p className='text-sm text-muted-foreground'>
              Copyright © 2024 WebAja
            </p> */}
          </div>
          <div className='grid grid-cols-3 gap-10 items-start mt-10 md:mt-0'>
            <div className='flex justify-center space-y-4 flex-col mt-4'>
              {navItems.slice(0, 3).map((value, index) => (
                <Link
                  href={value.link}
                  className='transition-colors hover:text-black dark:hover:text-neutral-400 text-xs sm:text-sm'
                  key={`footer-nav-${index}`}
                >
                  {value.name}
                </Link>
              ))}
            </div>
            <div className='flex justify-center space-y-4 flex-col mt-4'>
              {navItems.slice(3).map((value, index) => (
                <Link
                  href={value.link}
                  className='transition-colors hover:text-black dark:hover:text-neutral-400 text-xs sm:text-sm'
                  key={`footer-nav-${index}`}
                >
                  {value.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <p className='text-center text-5xl md:text-9xl xl:text-[14rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 inset-x-0'>
          Web Gue
        </p>
      </div>
    </footer>
  )
}
