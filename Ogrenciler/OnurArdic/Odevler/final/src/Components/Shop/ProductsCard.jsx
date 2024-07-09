import Link from 'next/link'
import ProductImage from './ProductImage'
import { renderStars } from '@/app/Hooks/renderStar'

export async function getAllData() {
  try {
    const arrivalResponse = await fetch('http://localhost:3000/arrival')
    const topSellingResponse = await fetch('http://localhost:3000/topSelling')
    const alsolikeResponse = await fetch('http://localhost:3000/alsolike')

    if (!arrivalResponse.ok || !topSellingResponse.ok || !alsolikeResponse.ok) {
      throw new Error('Failed to fetch data')
    }

    const arrivalData = await arrivalResponse.json()
    const topSellingData = await topSellingResponse.json()
    const alsolikeData = await alsolikeResponse.json()

    const combinedData = {
      arrival: arrivalData,
      topSelling: topSellingData,
      alsolike: alsolikeData,
    }

    return combinedData
  } catch (error) {
    toast.error('Error fetching data:', error)
    throw error
  }
}

const ProductsCard = async () => {
  const { arrival, topSelling, alsolike } = await getAllData()

  return (
    <>
      {arrival.map((item) => (
        <div className="product-card">
          <ProductImage item={item} category={'arrival'} />

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

      {topSelling.map((item) => (
        <div className="product-card">
          <ProductImage item={item} category={'topSelling'} />

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

      {alsolike.map((item) => (
        <div className="product-card">
          <ProductImage item={item} category={'alsolike'} />

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

export default ProductsCard
