import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  PlusIcon,
} from '@radix-ui/react-icons'
import { type IconProps } from '@radix-ui/react-icons/dist/types'
import Link from 'next/link'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'

type ContactType = {
  title: string
  description: string
  link: string
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
  username: string
}

const contacts: ContactType[] = [
  {
    title: 'Instagram',
    description: 'Follow us for the latest updates',
    link: 'https://www.instagram.com/webaja',
    Icon: InstagramLogoIcon,
    username: 'View on Instagram',
  },
  {
    title: 'LinkedIn',
    description: 'Connect with us professionally',
    link: 'https://www.linkedin.com/in/web-aja',
    Icon: LinkedInLogoIcon,
    username: 'View on LinkedIn',
  },
  {
    title: 'Github',
    description: 'Explore our projects and contributions',
    link: 'https://github.com/webaja',
    Icon: GitHubLogoIcon,
    username: 'View on Github',
  },
]

export default function Contact() {
  return (
    <section
      id='contact'
      className='md:max-w-5xl mx-auto mt-32 max-w-xs px-7 xl:px-0'
    >
      <h3 className='text-xl font-bold tracking-tight text-foreground text-center'>
        Contact
      </h3>
      <h2 className='text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-center md:text-balance'>
        Let&apos;s build an awesome project together!
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 mt-10 gap-5'>
        {contacts.map(({ title, description, link, Icon, username }, index) => (
          <div
            className='border p-4 flex justify-between flex-col gap-y-16 relative'
            key={index}
          >
            <div className='rounded-md border p-2 w-fit'>
              <Icon />
            </div>
            <div className='space-y-3'>
              <div className='space-y-1'>
                <h5 className='font-semibold text-xl'>{title}</h5>
                <p className='text-sm'>{description}</p>
              </div>
              <Link href={link} className='font-medium underline'>
                {username}
              </Link>
            </div>
            <PlusIcon className='absolute h-3 w-3 -top-[6px] -left-[6px] dark:text-white text-black' />
            <PlusIcon className='absolute h-3 w-3 -bottom-[6px] -left-[6px] dark:text-white text-black' />
            <PlusIcon className='absolute h-3 w-3 -top-[6px] -right-[6px] dark:text-white text-black' />
            <PlusIcon className='absolute h-3 w-3 -bottom-[6px] -right-[6px] dark:text-white text-black' />
          </div>
        ))}
      </div>
    </section>
  )
}
