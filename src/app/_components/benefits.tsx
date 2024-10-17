'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Globe from './ui/globe'
import { Cover } from './ui/cover'
import { Boxes } from './ui/background-boxes'
import { useTranslations } from 'next-intl'

export default function Benefits() {
  const t = useTranslations('Benefits')

  const features = [
    {
      title: t('feature-1.title'),
      description: t('feature-1.description'),
      skeleton: <SkeletonOne />,
      className:
        'col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800',
    },
    {
      title: t('feature-2.title'),
      description: t('feature-2.description'),
      skeleton: <SkeletonTwo />,
      className: 'border-b col-span-1 lg:col-span-2 dark:border-neutral-800',
    },
    {
      title: t('feature-3.title'),
      description: t('feature-3.description'),
      skeleton: (
        <SkeletonThree
          title={t('feature-3.skeleton-title')}
          description={t('feature-3.skeleton-description')}
        />
      ),
      className: 'col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800',
    },
    {
      title: t('feature-4.title'),
      description: t('feature-4.description'),
      skeleton: <SkeletonFour />,
      className: 'col-span-1 lg:col-span-3 border-b lg:border-none',
    },
  ]

  return (
    <section
      id='benefits'
      className='w-full max-w-5xl mx-auto space-y-5 mt-32 px-7 xl:px-0'
    >
      <h3 className='text-xl font-bold tracking-tight text-foreground text-center'>
        {t('section')}
      </h3>
      <div className='flex items-center justify-center'>
        <Cover className='text-center font-bold text-4xl md:text-5xl'>
          {t('title')}
        </Cover>
      </div>
      <p className='text-center lg:text-balance text-lg'>{t('description')}</p>
      <div className='relative'>
        <div className='grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800'>
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className='h-full w-full'>{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </section>
  )
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  )
}

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=' max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug'>
      {children}
    </p>
  )
}

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        'text-sm md:text-base  max-w-4xl text-left mx-auto',
        'text-neutral-500 text-center font-normal dark:text-neutral-300',
        'text-left max-w-sm mx-0 md:text-sm my-2'
      )}
    >
      {children}
    </p>
  )
}

export const SkeletonOne = () => {
  return (
    <div className='relative flex py-8 px-2 gap-10 h-full'>
      <div className='w-full  p-5  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full'>
        <div className='flex flex-1 w-full h-full flex-col space-y-2'>
          {/* TODO */}
          <Image
            src='/landing.png'
            alt='Landing Page Image'
            width={1000}
            height={1000}
            className='h-full w-full aspect-square object-cover object-left-top rounded-sm'
            quality={100}
          />
        </div>
      </div>

      <div className='absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none' />
      <div className='absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none' />
    </div>
  )
}

export const SkeletonTwo = () => {
  const images = [
    '/seo-3.jpeg',
    '/seo-1.jpeg',
    '/seo-4.jpeg',
    '/seo-2.jpeg',
    '/seo-5.jpeg',
    '/seo-6.jpeg',
  ]

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  }
  return (
    <div className='relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden'>
      {/* TODO */}
      <div className='flex flex-row -ml-20'>
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={'images-first' + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover='whileHover'
            whileTap='whileTap'
            className='rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden'
          >
            <Image
              src={image}
              alt='SEO Images'
              width='500'
              height='500'
              className='rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0'
            />
          </motion.div>
        ))}
      </div>
      <div className='flex flex-row'>
        {images.slice(2).map((image, idx) => (
          <motion.div
            key={'images-second' + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover='whileHover'
            whileTap='whileTap'
            className='rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden'
          >
            <Image
              src={image}
              alt='SEO Images'
              width='500'
              height='500'
              className='rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0'
            />
          </motion.div>
        ))}
      </div>

      <div className='absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent  h-full pointer-events-none' />
      <div className='absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black  to-transparent h-full pointer-events-none' />
    </div>
  )
}

export const SkeletonThree = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return (
    <div className='w-full mx-auto bg-transparent dark:bg-transparent group h-60 md:h-full'>
      <div className='flex flex-1 w-full h-full flex-col space-y-2 relative overflow-hidden'>
        <div className='h-96 relative w-full overflow-hidden bg-neutral-900 flex flex-col items-center justify-center rounded-lg'>
          <div className='absolute inset-0 w-full h-full bg-neutral-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none' />
          <Boxes />
          <h1 className={cn('md:text-4xl text-lg text-white relative z-20')}>
            {title}
          </h1>
          <p className='text-center mt-2 text-neutral-300 relative z-20 max-w-xs'>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export const SkeletonFour = () => {
  return (
    <div className='h-60 md:h-60 flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10'>
      <Globe className='absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72' />
    </div>
  )
}
