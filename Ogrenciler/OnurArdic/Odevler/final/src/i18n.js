import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

const locales = ['en', 'tr']

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) {
    return notFound()
  }

  const messages = (await import(`../messages/${locale}.json`)).default

  return {
    messages,
  }
})
