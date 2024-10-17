'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ReactNode, useEffect, useState } from 'react'
import { ModeToggle } from './ui/mode-toggle'
import Image from 'next/image'
import {
  BookUser,
  ChartNoAxesColumnIcon,
  CircleDollarSignIcon,
  HomeIcon,
  MessageSquareTextIcon,
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import LanguageToggle from './language-toggle'

type NavItem = {
  href: string
  title: string
  icon: ReactNode
}

export default function Navbar({ locale }: { locale: string }) {
  const t = useTranslations('Navigation')

  const navItems: NavItem[] = [
    {
      href: '#home',
      title: t('home'),
      icon: <HomeIcon />,
    },
    {
      href: '#benefits',
      title: t('benefits'),
      icon: <ChartNoAxesColumnIcon />,
    },
    {
      href: '#pricing',
      title: t('pricing'),
      icon: <CircleDollarSignIcon />,
    },
    {
      href: '#testimonial',
      title: t('testimonial'),
      icon: <MessageSquareTextIcon />,
    },
    {
      href: '#contact',
      title: t('contact'),
      icon: <BookUser />,
    },
  ]

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <header className='w-full absolute lg:fixed top-0 inset-x-0 z-[150]'>
      <div
        className={cn(
          'hidden lg:flex flex-row self-start items-center justify-between py-2 max-w-7xl mx-auto px-4 rounded-full relative z-[150] w-full min-w-[800px] will-change-auto transition-all duration-500 border-transparent',
          !scrolled
            ? 'bg-transparent dark:bg-transparent translate-y-0 w-full'
            : 'bg-white/80 dark:bg-neutral-950/80 translate-y-5 w-[40%] backdrop-blur-md border dark:border-l-0 dark:border-r-0 dark:border-b-0 dark:border-t border-border shadow-inner'
        )}
      >
        <Logo />
        <nav className='lg:flex flex-row flex-1 absolute inset-0 hidden items-center justify-center space-x-2 lg:space-x-2 text-sm transition duration-200'>
          {navItems.map(({ href, title }, index) => (
            <Link
              key={index}
              href={href}
              className='hidden xl:inline-block text-neutral-600 dark:text-neutral-300 relative px-4 py-2 hover:text-neutral-950 font-semibold dark:hover:text-neutral-100 transition-colors duration-200'
            >
              {title}
            </Link>
          ))}
        </nav>
        <div className='flex items-center gap-3 z-40'>
          <LanguageToggle locale={locale} />
          <ModeToggle />
        </div>
      </div>
      <div className='flex lg:hidden flex-row self-start items-center justify-between py-2 max-w-full mx-auto px-4 relative z-[60] w-full bg-transparent dark:bg-transparent translate-y-0'>
        <Logo />
        <div className='flex gap-3 z-40'>
          <LanguageToggle locale={locale} />
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

export function Logo() {
  return (
    <Link href={'/'} className='flex gap-3 items-center'>
      <Image
        src={'/logo-white.png'}
        className='dark:block hidden'
        alt='Logo'
        width={25}
        height={25}
      />
      <Image
        src={'/logo-dark.png'}
        className='block dark:hidden'
        alt='Logo'
        width={25}
        height={25}
      />
      <span className='font-semibold'>WebGue</span>
    </Link>
  )
}
