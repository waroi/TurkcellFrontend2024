import { useTranslations } from 'next-intl'
import './Banner.scss'
const Banner = () => {
  const t = useTranslations('HomePageText')
  return (
    <section className="banner-area container">
      <div className="banner-wrapper">
        <h4>{t('DressStyleTitle')}</h4>
        <div className="top-banner">
          <div className="top-banner-left">
            <h5>{t('Casual')}</h5>
          </div>
          <div className="top-banner-right">
            <h5>{t('Formal')}</h5>
          </div>
        </div>

        <div className="bottom-banner">
          <div className="bottom-banner-left">
            <h5>{t('Party')}</h5>
          </div>
          <div className="bottom-banner-right">
            <h5>{t('Gym')}</h5>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
