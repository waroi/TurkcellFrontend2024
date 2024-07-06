import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

const locales = ['en', 'tr'] // Desteklenen dilleri listeleyin

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) {
    return notFound()
  }

  // İstenilen dil için çevirileri yükleyin
  const messages = (await import(`../messages/${locale}.json`)).default

  return {
    messages, // Çevirileri döndürün
  }
})
