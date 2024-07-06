import { getArrivalItem } from '@/service/api'
import ProductItem from './ProductItem/ProductItem'

const ProductsWrapper = async () => {
  const Arrival = await getArrivalItem()

  return (
    <section>
      <div className="product-item-wrapper">
        <div className="new-arrival-wrapper">
          <h4>New Arrivals</h4>
          <div className="new-arrival-items">
            <ProductItem product={Arrival} />
          </div>
          <div className="new-arrival-items"></div>
        </div>
      </div>
    </section>
  )
}

export default ProductsWrapper
