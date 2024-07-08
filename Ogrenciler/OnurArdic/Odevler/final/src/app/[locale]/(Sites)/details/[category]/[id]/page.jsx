import '../../../../globals.scss'
import '../../../../../../Components/Details/ProductDetails.scss'

renderStars
import ProductVariants from '@/Components/Details/ProductVariants'
import ProductDetailsİmages from '@/Components/Details/ProductDetailsİmages'
import { renderStars } from '@/app/Hooks/renderStar'
import CommentsCard from '@/Components/Home/HappyCustomer/CommentsCard'
import { getComments } from '@/service/api'
import { useTranslations } from 'next-intl'
import ReviewsNav from '@/Components/Details/Reviews/ReviewsNav'
import CustomButton from '@/Components/ui/CustomButton'
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
  const comments = await getComments()
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

        <section className="reviews-wrap">
          <div className="reviews-wrapper">
            <div className="product-detail-nav">
              <ReviewsNav />
            </div>
          </div>

          <div className="sort-btn">
            <select id="sort">
              <option value="Latest">Latest</option>
              <option value="New">New</option>
            </select>

            <button className="write-review-modal">Write a Review</button>
          </div>
          <div className="rewiews">
            {comments.map((comment) => (
              <CommentsCard comment={comment} />
            ))}
          </div>

          <div className="button-wrapper">
            <CustomButton text={'Load More Views'} />
          </div>
        </section>
      </section>
    </>
  )
}

export default Details
