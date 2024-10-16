'use client'

import { useTheme } from 'next-themes'
import { Button } from './button'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useEffect } from 'react'
import { setCookie } from 'cookies-next'

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    setCookie('theme', theme, { maxAge: 60 * 60 * 24 * 365 * 10 })
  }, [theme])

  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}
    >
      {theme == 'light' ? (
        <MoonIcon className='h-[1.2rem] w-[1.2rem]' />
      ) : (
        <SunIcon className='h-[1.2rem] w-[1.2rem]' />
      )}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
