import { getTopSellingItems } from '@/service/api'
import { renderStars } from '@/app/Hooks/renderStar'
import { useLocale } from 'next-intl'
import Link from 'next/link'
import '../Products.scss'
const ProductItemTopSelling = async () => {
  const locale = useLocale()
  const topSelling = await getTopSellingItems()
  return (
    <>
      {topSelling.map((item) => (
        <div className="product-card">
          <Link href={`/${locale}/details/topSelling/${item.id}`}>
            <div className="img">
              <img src={item.img} alt={item.title} />
            </div>
          </Link>

          <div className="product-content">
            <h5>{item.title}</h5>
            <div className="stars">{renderStars(item.stars)}</div>
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
