'use client'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductImage from './ProductImage'
import { renderStars } from '@/app/Hooks/renderStar'

const ProductsCard = () => {
  const filters = useSelector((state) => state.filters)
  const [data, setData] = useState({ arrival: [], topSelling: [], alsolike: [] })
  const [sortBy, setSortBy] = useState('lowest-price')

  useEffect(() => {
    const fetchData = async () => {
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

        setData({ arrival: arrivalData, topSelling: topSellingData, alsolike: alsolikeData })
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  const sortProducts = (products, sortBy) => {
    switch (sortBy) {
      case 'lowest-price':
        return [...products].sort((a, b) => a.price - b.price)
      case 'highest-price':
        return [...products].sort((a, b) => b.price - a.price)
      default:
        return products
    }
  }

  const handleSortChange = (e) => {
    setSortBy(e.target.value)
  }

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

  const sortedAndFilteredProducts = (category) => {
    const filtered = filteredProducts(data[category])
    return sortProducts(filtered, sortBy)
  }

  return (
    <>
      <div className="nav-sort">
        <label htmlFor="sort">Sorted by</label>
        <select className="sort" id="sort" value={sortBy} onChange={handleSortChange}>
          <option value="lowest-price">Lowest Price</option>
          <option value="highest-price">Highest Price</option>
        </select>
      </div>

      {['arrival', 'topSelling', 'alsolike'].map((category) =>
        sortedAndFilteredProducts(category).map((item) => (
          <div className="product-card" key={item.id}>
            <ProductImage item={item} category={category} />

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
        )),
      )}
    </>
  )
}

export default ProductsCard
