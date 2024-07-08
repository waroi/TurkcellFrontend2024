import '../../../../globals.scss'
import '../../../../../../Components/Details/ProductDetails.scss'

renderStars
import ProductVariants from '@/Components/Details/ProductVariants'
import ProductDetailsİmages from '@/Components/Details/ProductDetailsİmages'
import { renderStars } from '@/app/Hooks/renderStar'
async function getProductDetail(category, id) {
  const res = await fetch(`http://localhost:3000/${category}/${id}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
const Details = async ({ params }) => {
  const { category, id } = params
  const data = await getProductDetail(category, id)
  return (
    <>
      <div className="line container"></div>
      <section className="product-detail-page">
        <div className="product-detail-wrapper container">
          <div className="product-detail-images">
            <ProductDetailsİmages data={data} />
          </div>

          <div className="products-content">
            <h4 className="product-name">{data.title}</h4>
            <div className="stars">{renderStars(data.stars)}</div>

            <div className="price">
              <p className="price">${data.price}</p>
              {data.oldprice && <span className="old-price">{data.oldprice}</span>}
              {data.discount && <span className="discount">-{data.discount}</span>}
            </div>

            {data.desc && <div className="desc">{data.desc}</div>}

            <hr />
            <ProductVariants />
          </div>
        </div>
      </section>
    </>
  )
}

export default Details
