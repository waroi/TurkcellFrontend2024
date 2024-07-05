import Header from '@/Components/Home/Header'
import { useTranslations } from 'next-intl'

export default function Home() {
  const { locale } = useTranslations()
  const t = useTranslations('HomePage')
  return (
    <main>
      <h1>{t('title')}</h1>
    </main>
  )
}
