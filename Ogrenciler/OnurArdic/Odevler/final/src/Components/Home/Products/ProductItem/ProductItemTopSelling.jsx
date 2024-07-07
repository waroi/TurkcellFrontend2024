import { getTopSellingItems } from '@/service/api'
import '../Products.scss'
import Link from 'next/link'
const ProductItemTopSelling = async () => {
  const topSelling = await getTopSellingItems()
  return (
    <>
      {topSelling.map((item) => (
        <div className="product-card">
          <Link href={'/'}>
            <div className="img">
              <img src={item.img} alt={item.title} />
            </div>
          </Link>

          <div className="product-content">
            <h5>{item.title}</h5>
            <div className="stars">
              <i className="bi bi-star"></i>
            </div>
            <div className="price-wrapper">
              <p className="price">
                ${item.price}
                {item.oldprice && <span>{item.oldprice}</span>}
              </p>
              {item.discount && <p className="discount">{item.discount}</p>}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ProductItemTopSelling
