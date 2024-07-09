'use client'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  setCategories,
  setPriceRange,
  setColors,
  setSizes,
  setStyles,
} from '../../app/lib/features/filterslice'
import './Filter.scss'

const ShopPageFilter = () => {
  const dispatch = useDispatch()

  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 1000])
  const [selectedColors, setSelectedColors] = useState([])
  const [selectedSizes, setSelectedSizes] = useState([])
  const [selectedStyles, setSelectedStyles] = useState([])

  const handleCategoryClick = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((item) => item !== category)
      : [...selectedCategories, category]
    setSelectedCategories(updatedCategories)
  }

  const handleColorClick = (color) => {
    const updatedColors = selectedColors.includes(color)
      ? selectedColors.filter((item) => item !== color)
      : [...selectedColors, color]
    setSelectedColors(updatedColors)
  }

  const handleSizeClick = (size) => {
    const updatedSizes = selectedSizes.includes(size)
      ? selectedSizes.filter((item) => item !== size)
      : [...selectedSizes, size]
    setSelectedSizes(updatedSizes)
  }

  const handleStyleClick = (style) => {
    const updatedStyles = selectedStyles.includes(style)
      ? selectedStyles.filter((item) => item !== style)
      : [...selectedStyles, style]
    setSelectedStyles(updatedStyles)
  }

  const handleApplyFilters = () => {
    dispatch(setCategories(selectedCategories))
    dispatch(setPriceRange(selectedPriceRange))
    dispatch(setColors(selectedColors))
    dispatch(setSizes(selectedSizes))
    dispatch(setStyles(selectedStyles))
  }

  return (
    <div className="shop-page-filter">
      <div className="filter-section">
        <h3>Ürün Filtreleme</h3>
        <hr />
        <div className="categories">
          {['T-shirt', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'].map((category) => (
            <div
              key={category}
              className={`category ${selectedCategories.includes(category) ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </div>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3>Fiyat Aralığı</h3>
        <hr />
        <input
          type="range"
          min="0"
          max="1000"
          value={selectedPriceRange}
          className="price-range"
          onChange={(e) => setSelectedPriceRange([0, e.target.value])}
        />
        <div className="price-range-value">
          ${selectedPriceRange[0]} - ${selectedPriceRange[1]}
        </div>
      </div>

      <div className="filter-section">
        <h3>Renkler</h3>
        <hr />
        <div className="colors">
          {['Red', 'Blue', 'Green', 'Yellow', 'Black'].map((color) => (
            <div
              key={color}
              className={`color ${selectedColors.includes(color) ? 'active' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3>Size</h3>
        <hr />
        <div className="sizes">
          {['Small', 'Medium', 'Large', 'X-Large'].map((size) => (
            <div
              key={size}
              className={`size ${selectedSizes.includes(size) ? 'active' : ''}`}
              onClick={() => handleSizeClick(size)}
            >
              {size}
            </div>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3>Dress Style</h3>
        <hr />
        <div className="styles">
          {['Casual', 'Formal', 'Party', 'Gym'].map((style) => (
            <div
              key={style}
              className={`style ${selectedStyles.includes(style) ? 'active' : ''}`}
              onClick={() => handleStyleClick(style)}
            >
              {style}
            </div>
          ))}
        </div>
        <button className="apply-button" onClick={handleApplyFilters}>
          Filtrele
        </button>
      </div>
    </div>
  )
}

export default ShopPageFilter
