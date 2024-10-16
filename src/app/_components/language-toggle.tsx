// import { useRouter } from '@/i18n/routing'
import { useTransition } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function LanguageToggle({ locale }: { locale: string }) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  function handleChangeLanguage() {
    const nextLocale = locale == 'us' ? 'id' : 'us'
    startTransition(() => {
      router.replace(`/${nextLocale}`)
    })
  }

  return (
    <Button
      disabled={isPending}
      onClick={handleChangeLanguage}
      variant={'ghost'}
    >
      {locale == 'us' ? (
        <Image src={'/us.svg'} alt='USA Flag' width={20} height={18} />
      ) : (
        <Image src='/id.svg' alt='Indonesia Flag' width={20} height={18} />
      )}
    </Button>
  )
}
