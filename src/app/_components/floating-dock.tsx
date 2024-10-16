'use client'

import {
  BookUserIcon,
  ChartNoAxesColumnIcon,
  CircleDollarSignIcon,
  HomeIcon,
  MessageSquareTextIcon,
} from 'lucide-react'
import { FloatingDockMobile } from './ui/floating-dock'
import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type NavItem = {
  href: string
  title: string
  icon: ReactNode
}

const navItems: NavItem[] = [
  {
    href: '#home',
    title: 'Home',
    icon: <HomeIcon size={16} />,
  },
  {
    href: '#benefits',
    title: 'Benefits',
    icon: <ChartNoAxesColumnIcon size={16} />,
  },
  {
    href: '#pricing',
    title: 'Pricing',
    icon: <CircleDollarSignIcon size={16} />,
  },
  {
    href: '#testimonial',
    title: 'Testimonial',
    icon: <MessageSquareTextIcon size={16} />,
  },
  {
    href: '#contact',
    title: 'Contact',
    icon: <BookUserIcon size={16} />,
  },
]

export default function FloatingDock() {
  return (
    <header className='w-full fixed bottom-0 inset-x-0 z-[150] block xl:hidden max-w-full'>
      <FloatingDockMobile
        className={cn(
          'will-change-auto transition-all duration-700 -translate-y-16 right-5 absolute w-fit z-[100]'
        )}
        items={navItems}
      />
    </header>
  )
}
