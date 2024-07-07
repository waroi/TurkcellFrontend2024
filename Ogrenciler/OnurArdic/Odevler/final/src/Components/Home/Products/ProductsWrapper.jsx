import { useTranslations } from 'next-intl'
import CustomButton from '@/Components/ui/CustomButton'
import ProductItemTopSelling from './ProductItem/ProductItemTopSelling'
import ProductItem from './ProductItem/ProductItem'
import './Products.scss'

const ProductsWrapper = async () => {
  const t = useTranslations('HomePageText')
  return (
    <section>
      <div className="product-item-wrapper container">
        <div className="new-arrival-wrapper">
          <h4> {t('ArrivalsTitle')}</h4>
          <div className="new-arrival-items">
            <ProductItem />
          </div>
          <div className="button-wrapper">
            <CustomButton text={'View All'} />
          </div>
        </div>

        <hr />

        <div className="top-selling-wrapper">
          <h4>{t('TopSellingTitle')}</h4>
          <div className="top-selling-items">
            <ProductItemTopSelling />
          </div>
          <div className="button-wrapper">
            <CustomButton text={'View All'} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsWrapper
