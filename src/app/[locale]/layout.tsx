import '../globals.css'
import { type Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from 'next-intl/server'
import localFont from 'next/font/local'
import { ThemeProvider } from '../_components/theme-provider'
import Navbar from '../_components/navbar'
import FloatingDock from '../_components/floating-dock'
import Footer from '../_components/footer'
import { routing } from '@/i18n/routing'
import { cookies } from 'next/headers'
import { type Locale } from '@/i18n/config'

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Metadata' })

  return {
    title: t('title'),
    description: t('description'),
    verification: {
      google: t('google'),
    },
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  const theme = cookies().get('theme')?.value || 'light'

  unstable_setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <html
      lang={locale}
      className={`scroll-smooth xl:scroll-pt-20 ${theme}`}
      style={theme !== 'system' ? { colorScheme: theme } : {}}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute='class' defaultTheme={theme} enableSystem>
            <Navbar locale={locale} />
            {children}
            <FloatingDock />
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
