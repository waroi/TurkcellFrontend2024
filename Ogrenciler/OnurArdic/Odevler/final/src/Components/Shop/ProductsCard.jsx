'use client'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
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
    console.error('Error fetching data:', error)
    throw error
  }
}

const ProductsCard = () => {
  const filters = useSelector((state) => state.filters)
  const [data, setData] = useState({ arrival: [], topSelling: [], alsolike: [] })

  useEffect(() => {
    const fetchData = async () => {
      const allData = await getAllData()
      setData(allData)
    }

    fetchData()
  }, [])

  const filteredProducts = (products) =>
    products.filter((product) => {
      const categoryMatch = filters.categories.length
        ? filters.categories.includes(product.category)
        : true
      const priceMatch =
        product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
      const colorMatch = filters.colors.length ? filters.colors.includes(product.color) : true
      const sizeMatch = filters.sizes.length ? filters.sizes.includes(product.size) : true
      const styleMatch = filters.styles.length ? filters.styles.includes(product.style) : true

      return categoryMatch && priceMatch && colorMatch && sizeMatch && styleMatch
    })

  return (
    <>
      {filteredProducts(data.arrival).map((item) => (
        <div className="product-card" key={item.id}>
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

      {filteredProducts(data.topSelling).map((item) => (
        <div className="product-card" key={item.id}>
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

      {filteredProducts(data.alsolike).map((item) => (
        <div className="product-card" key={item.id}>
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
