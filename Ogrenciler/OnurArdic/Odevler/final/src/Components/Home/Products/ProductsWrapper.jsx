import { useTranslations } from 'next-intl'
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
        </div>
      </div>
    </section>
  )
}

export default ProductsWrapper
