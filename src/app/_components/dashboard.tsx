import Image from 'next/image'
import ShineBorder from './ui/shine-border'

export default function Dashboard() {
  return (
    <section className='mx-auto px-7 xl:px-0 max-w-5xl'>
      <ShineBorder
        className='relative rounded-[32px] border border-neutral-200/50 bg-neutral-100 p-2 backdrop-blur-lg dark:border-neutral-700 dark:bg-neutral-800/50 md:p-4'
        color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
        borderRadius={32}
      >
        <div className='rounded-[24px] border border-neutral-200 bg-white p-2 dark:border-neutral-700 dark:bg-black'>
          <Image
            src={'/dashboard.png'}
            alt='Dashboard'
            width={1920}
            height={1080}
            className='rounded-[20px]'
          />
        </div>
      </ShineBorder>
    </section>
  )
}
