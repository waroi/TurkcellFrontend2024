import '../../../../globals.scss'
import '../../../../../../Components/Details/ProductDetails.scss'

import ProductVariants from '@/Components/Details/ProductVariants'
import ProductDetailsİmages from '@/Components/Details/ProductDetailsİmages'
import { renderStars } from '@/app/Hooks/renderStar'
import { getComments } from '@/service/api'
import ReviewsNav from '@/Components/Details/Reviews/ReviewsNav'
import CommentSection from '@/Components/Details/Reviews/CommentSection'
import AlsoLike from '@/Components/Details/AlsoLikeItems/AlsoLike'

export const generateMetadata = ({ params }) => {
  return {
    title: `SHOP.CO / Product Details / ${params.id}`,
  }
}
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
  const initialComments = await getComments()

  return (
    <>
      <div className="line container"></div>
      <section className="product-detail-page container">
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
            <ProductVariants data={data} />
          </div>
        </div>

        <div className="reviews-wrap">
          <div className="reviews-wrapper">
            <div className="product-detail-nav">
              <ReviewsNav />
            </div>
          </div>

          <CommentSection initialComments={initialComments} />
        </div>

        <div className="also-like-wrapper">
          <h4>You might also like</h4>
          <AlsoLike />
        </div>
      </section>
    </>
  )
}

export default Details
