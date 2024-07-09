import ShopPageFilter from '@/Components/Shop/ShopPageFilter'
import '../../../../Components/Shop/ShopPage.scss'
import ProductsCard from '@/Components/Shop/ProductsCard'

const ShopPage = async () => {
  return (
    <section className="shop-page">
      <div className="shop-page-wrapper">
        <div className="shop-page-filter-wrapper">
          <ShopPageFilter />
        </div>

        <div className="products">
          <ProductsCard />
        </div>
      </div>
    </section>
  )
}

export default ShopPage
