'use client'

import { renderStars } from '@/app/Hooks/renderStar'
import { getAlsoLike } from '@/service/api'
import { useLocale } from 'next-intl'
import './AlsoLike.scss'

import Link from 'next/link'

const AlsoLike = async () => {
  const locale = useLocale()
  const AlsoItem = await getAlsoLike()
  return (
    <div className="also-like-card">
      {AlsoItem.map((item) => (
        <div className="product-card" key={item.id}>
          <Link href={`/${locale}/details/alsolike/${item.id}`}>
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
    </div>
  )
}

export default AlsoLike
