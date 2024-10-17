import { CheckIcon } from '@radix-ui/react-icons'
import { Button } from './ui/button'
import { ChevronRightIcon } from 'lucide-react'
import { RainbowButton } from './ui/rainbow-button'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function Pricing() {
  const t = useTranslations('Pricing')

  return (
    <section
      id='pricing'
      className='max-w-5xl mx-auto mt-32 px-7 xl:px-0 py-16'
    >
      <h3 className='text-xl font-bold tracking-tight text-foreground text-center'>
        {t('section')}
      </h3>
      <h2 className='text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-center text-balance'>
        {t('title')}
      </h2>
      <div className='mx-auto mt-16 grid max-w-lg grid-cols-1 items-center xl:gap-y-0 sm:mt-20 gap-y-6 xl:max-w-4xl xl:grid-cols-2'>
        <div className='bg-muted/60 sm:mx-8 lg:mx-0 xl:rounded-b-none xl:rounded-bl-3xl xl:rounded-tr-none rounded-3xl p-8 ring-1 ring-border sm:p-10'>
          <h3 className='text-base font-semibold leading-7 text-primary'>
            {t('basic-plan.title')}
          </h3>
          <p className='mt-4 flex items-baseline gap-x-2'>
            <span className='text-5xl font-bold tracking-tight text-foreground'>
              {t('basic-plan.price-discount')}
            </span>
            <span className='text-3xl font-bold tracking-tight text-muted-foreground line-through'>
              {t('basic-plan.price')}
            </span>
          </p>
          <span className='text-xs font-semibold leading-6 text-muted-foreground mt-2'>
            {t('per-year')}
          </span>
          <p className='mt-6 text-base leading-7 text-muted-foreground'>
            {t('basic-plan.description')}
          </p>
          <p className='mt-6 text-base leading-7 text-muted-foreground font-medium'>
            {t('feature-title')}
          </p>
          <ul className='mt-2 space-y-3 text-sm leading-6 text-muted-foreground'>
            <li className='flex gap-x-3'>
              <CheckIcon className='h-6 p-1 w-6 flex-none text-muted-foreground bg-muted rounded-full' />
              {t('basic-plan.feature-1')}
            </li>
            <li className='flex gap-x-3'>
              <CheckIcon className='h-6 p-1 w-6 flex-none text-muted-foreground bg-muted rounded-full' />
              {t('basic-plan.feature-2')}
            </li>
            <li className='flex gap-x-3'>
              <CheckIcon className='h-6 p-1 w-6 flex-none text-muted-foreground bg-muted rounded-full' />
              {t('basic-plan.feature-3')}
            </li>
            <li className='flex gap-x-3'>
              <CheckIcon className='h-6 p-1 w-6 flex-none text-muted-foreground bg-muted rounded-full' />
              {t('basic-plan.feature-4')}
            </li>
            <li className='flex gap-x-3'>
              <CheckIcon className='h-6 p-1 w-6 flex-none text-muted-foreground bg-muted rounded-full' />
              {t('basic-plan.feature-4')}
            </li>
          </ul>
          <Button
            className='mt-6 w-full gap-2 justify-center h-11'
            variant={'outline'}
            asChild
          >
            <Link
              href={
                'https://wa.me/6282242870305?text=Halo,%20saya%20tertarik%20dengan%20paket%20Basic%20Plan'
              }
            >
              <span>{t('button-plan')}</span>
              <ChevronRightIcon size={18} />
            </Link>
          </Button>
        </div>
        <div className='relative bg-background shadow-2xl rounded-3xl p-8 ring-1 ring-border sm:p-10'>
          <h4 className='text-base font-semibold leading-7 text-primary'>
            {t('standard-plan.title')}
          </h4>
          <p className='mt-4 flex items-baseline gap-x-2'>
            <span className='text-5xl font-bold tracking-tight text-foreground'>
              {t('standard-plan.price-discount')}
            </span>
            <span className='text-3xl font-bold tracking-tight text-muted-foreground line-through'>
              {t('basic-plan.price-discount')}
            </span>
          </p>
          <span className='text-xs font-semibold leading-6 text-muted-foreground mt-2'>
            {t('per-year')}
          </span>
          <p className='mt-6 text-base leading-7 text-muted-foreground'>
            {t('basic-plan.description')}
          </p>
          <p className='mt-6 text-base leading-7 text-muted-foreground font-medium'>
            {t('feature-title')}
          </p>
          <ul className='mt-2 space-y-3 text-sm leading-6 text-muted-foreground'>
            <li className='flex gap-x-3'>
              <CheckIcon className='h-6 p-1 w-6 flex-none text-green-600 bg-green-200 rounded-full' />
              {t('standard-plan.feature-1')}
            </li>
            <li className='flex gap-x-3'>
              <CheckIcon className='h-6 p-1 w-6 flex-none text-green-600 bg-green-200 rounded-full' />
              {t('standard-plan.feature-2')}
            </li>
            <li className='flex gap-x-3'>
              <CheckIcon className='h-6 p-1 w-6 flex-none text-green-600 bg-green-200 rounded-full' />
              {t('standard-plan.feature-3')}
            </li>
            <li className='flex gap-x-3'>
              <CheckIcon className='h-6 p-1 w-6 flex-none text-green-600 bg-green-200 rounded-full' />
              {t('standard-plan.feature-4')}
            </li>
            <li className='flex gap-x-3'>
              <CheckIcon className='h-6 p-1 w-6 flex-none text-green-600 bg-green-200 rounded-full' />
              {t('standard-plan.feature-5')}
            </li>
            <li className='flex gap-x-3'>
              <CheckIcon className='h-6 p-1 w-6 flex-none text-green-600 bg-green-200 rounded-full' />
              {t('standard-plan.feature-6')}
            </li>
            <li className='flex gap-x-3'>
              <CheckIcon className='h-6 p-1 w-6 flex-none text-green-600 bg-green-200 rounded-full' />
              {t('standard-plan.feature-7')}
            </li>
          </ul>
          <Link
            href={
              'https://wa.me/6282242870305?text=Halo,%20saya%20tertarik%20dengan%20paket%20Standard%20Plan'
            }
          >
            <RainbowButton className='mt-6 w-full gap-2 justify-center h-11'>
              <span>{t('button-plan')}</span>
              <ChevronRightIcon size={18} />
            </RainbowButton>
          </Link>
        </div>
      </div>
      <div className='mt-8 max-w-lg mx-auto xl:max-w-4xl'>
        <div className='bg-muted-background/60 shadow-2xl rounded-3xl p-8 ring-1 ring-border sm:p-10'>
          <h4 className='text-3xl font-bold tracking-tight text-foreground'>
            {t('custom-plan.title')}
          </h4>
          <p className='mt-6 text-base leading-7 text-muted-foreground'>
            {t('custom-plan.description')}
          </p>
          <p className='mt-6 text-base leading-7 text-muted-foreground font-medium'>
            {t('feature-title')}
          </p>
          <ul className='mt-2 space-y-3 text-sm leading-6 text-muted-foreground'>
            <li className='flex gap-x-3'>
              <CheckIcon className='h-6 p-1 w-6 flex-none text-green-600 bg-green-200 rounded-full' />
              {t('custom-plan.feature-1')}
            </li>
            <li className='flex gap-x-3'>
              <CheckIcon className='h-6 p-1 w-6 flex-none text-green-600 bg-green-200 rounded-full' />
              {t('custom-plan.feature-2')}
            </li>
            <li className='flex gap-x-3'>
              <CheckIcon className='h-6 p-1 w-6 flex-none text-green-600 bg-green-200 rounded-full' />
              {t('custom-plan.feature-3')}
            </li>
            <li className='flex gap-x-3'>
              <CheckIcon className='h-6 p-1 w-6 flex-none text-green-600 bg-green-200 rounded-full' />
              {t('custom-plan.feature-4')}
            </li>
            <li className='flex gap-x-3'>
              <CheckIcon className='h-6 p-1 w-6 flex-none text-green-600 bg-green-200 rounded-full' />
              {t('custom-plan.feature-5')}
            </li>
            <li className='flex gap-x-3'>
              <CheckIcon className='h-6 p-1 w-6 flex-none text-green-600 bg-green-200 rounded-full' />
              {t('custom-plan.feature-6')}
            </li>
            <li className='flex gap-x-3'>
              <CheckIcon className='h-6 p-1 w-6 flex-none text-green-600 bg-green-200 rounded-full' />
              {t('custom-plan.feature-7')}
            </li>
          </ul>
          <Button
            className='mt-6 w-full gap-2 justify-center h-11'
            variant={'default'}
            asChild
          >
            <Link
              href={
                'https://wa.me/6282242870305?text=Halo,%20saya%20tertarik%20dengan%20paket%20Custom%20Plan'
              }
            >
              <span>{t('custom-plan.button')}</span>
              <ChevronRightIcon size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
