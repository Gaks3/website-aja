import React from 'react'
import Hero from '../_components/hero'
import Dashboard from '../_components/dashboard'
import GetStarted from '../_components/get-started'
import Benefits from '../_components/benefits'
import Pricing from '../_components/pricing'
import Testimonial from '../_components/testimonial'
import Contact from '../_components/contact'
import { routing } from '@/i18n/routing'
import { unstable_setRequestLocale } from 'next-intl/server'
import { type Locale } from '@/i18n/config'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default function Home({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  unstable_setRequestLocale(locale)

  return (
    <>
      <Hero />
      <Dashboard />
      <GetStarted />
      <Benefits />
      <Pricing />
      <Testimonial />
      <Contact />
    </>
  )
}
