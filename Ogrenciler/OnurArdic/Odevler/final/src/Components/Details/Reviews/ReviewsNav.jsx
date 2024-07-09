import { useTranslations } from 'next-intl'
import '../ProductDetails.scss'

const ReviewsNav = () => {
  const t = useTranslations('DetailPage')
  return (
    <>
      <h4 className="nav-link">{t('Details')}</h4>
      <h4 className="nav-link active">{t('Reviews')}</h4>
      <h4 className="nav-link">{t('FAQ')}</h4>
    </>
  )
}

export default ReviewsNav
