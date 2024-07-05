import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('Index')
  return (
    <main>
      <h1>{t('title')}</h1>
    </main>
  )
}
