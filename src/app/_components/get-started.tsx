import { cn } from '@/lib/utils'
import GridPattern from './ui/grid-pattern'
import { RainbowButton } from './ui/rainbow-button'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function GetStarted() {
  const t = useTranslations('GetStarted')

  return (
    <section
      id='get-started'
      className='relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg mx-auto bg-background mt-32 max-w-4xl [mask-image:radial-gradient(800px_circle_at_center,white,transparent)]'
    >
      <div className='text-center z-10 text-balance space-y-5'>
        <h2 className='text-3xl md:text-4xl font-bold my-4  text-center'>
          {t('title')}
        </h2>
        <p>{t('description')}</p>
        <RainbowButton>
          <Link href={'#pricing'}>{t('button')}</Link>
        </RainbowButton>
      </div>
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
          [15, 10],
          [10, 15],
          [15, 10],
        ]}
        className={cn(
          '[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]',
          'inset-x-0 inset-y-0 h-[100%] skew-y-12 absolute'
        )}
      />
    </section>
  )
}
