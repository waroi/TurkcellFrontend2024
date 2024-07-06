import { useTranslations } from 'next-intl'
import './Hero.scss'
import Link from 'next/link'
import Brands from './Brands'

const Hero = () => {
  const t = useTranslations('Hero')
  return (
    <header>
      <div className="hero-wrapper container">
        <div className="hero-left">
          <div className="hero-left-content">
            <h1>{t('HeroBigTitle')}</h1>
            <p>{t('HeroSmallTitle')}</p>
            <Link href="/shop" className="btn btn-primary">
              {t('HeroButton')}
            </Link>

            <div className="statistics">
              <div className="staticks-content">
                <h4>{t('HeroCountBrands')}</h4>
                <p>{t('HeroBrandsText')}</p>
              </div>

              <div className="staticks-content">
                <h4>{t('HeroCountProducts')}</h4>
                <p>{t('HeroProductsText')}</p>
              </div>

              <div className="staticks-content">
                <h4>{t('HeroCountCustomers')}</h4>
                <p>{t('HeroCustomersText')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <img src="/heroimg.jpg" alt="image-hero" />
        </div>
      </div>
      <Brands />
    </header>
  )
}

export default Hero
