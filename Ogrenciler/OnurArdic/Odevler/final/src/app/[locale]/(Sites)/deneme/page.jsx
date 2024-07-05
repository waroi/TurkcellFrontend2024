import { useTranslations } from 'next-intl'

const page = () => {
  const t = useTranslations('Deneme')
  return (
    <div>
      <h1>{t('title')}</h1>
    </div>
  )
}

export default page
