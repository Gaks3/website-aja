import { useTranslations } from 'next-intl'
import { FlipWords } from './ui/flip-words'
import Iphone15Pro from './ui/iphone-15-pro'
import { RainbowButton } from './ui/rainbow-button'
import RetroGrid from './ui/retro-grid'
import Link from 'next/link'

export default function Hero() {
  const t = useTranslations('Hero')

  const words = [t('beautiful'), t('modern'), t('better')]

  return (
    <section
      id='home'
      className='w-full min-h-screen max-h-screen relative flex items-center justify-center overflow-hidden'
    >
      <div className='max-w-xs mx-auto md:mx-0 md:max-w-2xl lg:max-w-5xl z-20 flex items-center justify-center gap-10 md:gap-20 lg:gap-40 flex-col md:flex-row px-0 md:px-7 xl:px-0'>
        <div className='z-20 space-y-5'>
          <h1 className='font-bold text-3xl md:text-4xl lg:text-6xl'>
            {t('word-1')} <FlipWords words={words} className='text-current' />{' '}
            <br /> {t('word-2')}
          </h1>
          <p className='text-base md:text-lgfont-medium inter-var text-slate-600 dark:text-slate-400'>
            {t('description')}
          </p>
          <RainbowButton>
            <Link href={'#pricing'}>{t('button')}</Link>
          </RainbowButton>
        </div>
        <div className='z-20 hidden md:block'>
          <Iphone15Pro className='w-60 h-auto' src='/mobile.jpeg' />
        </div>
      </div>
      <RetroGrid />
    </section>
  )
}
