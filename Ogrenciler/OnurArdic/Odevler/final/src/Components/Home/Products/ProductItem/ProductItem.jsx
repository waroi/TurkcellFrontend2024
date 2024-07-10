import { getArrivalItem } from '@/service/api'
import '../Products.scss'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { renderStars } from '@/app/Hooks/renderStar'
const ProductItem = async () => {
  const locale = useLocale()
  const Arrival = await getArrivalItem()
  return (
    <>
      {Arrival.map((item) => (
        <div className="product-card" key={item.id}>
          <Link href={`/${locale}/details/arrival/${item.id}`}>
            <div className="img">
              <img src={`/${item.img} `} alt={item.title} />
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

export default ProductItem
