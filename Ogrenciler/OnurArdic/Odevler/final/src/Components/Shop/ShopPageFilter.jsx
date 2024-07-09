import React from 'react'
import './Filter.scss'

const ShopPageFilter = () => {
  return (
    <div className="shop-page-filter">
      <div className="filter-section">
        <h3>Ürün Filtreleme</h3>
        <hr />
        <div className="categories">
          <div className="category active">T-shirt</div>
          <div className="category">Shorts</div>
          <div className="category">Shirts</div>
          <div className="category">Hoodie</div>
          <div className="category">Jeans</div>
        </div>
      </div>

      <div className="filter-section">
        <h3>Fiyat Aralığı</h3>
        <hr />
        <input type="range" min="0" max="1000" className="price-range" />
        <div className="price-range-value">$0 - $1000</div>
      </div>

      <div className="filter-section">
        <h3>Renkler</h3>
        <hr />
        <div className="colors">
          <div className="color" style={{ backgroundColor: 'red' }}></div>
          <div className="color" style={{ backgroundColor: 'blue' }}></div>
          <div className="color" style={{ backgroundColor: 'green' }}></div>
          <div className="color" style={{ backgroundColor: 'yellow' }}></div>
          <div className="color" style={{ backgroundColor: 'black' }}></div>
        </div>
      </div>

      <div className="filter-section">
        <h3>Size</h3>
        <hr />
        <div className="sizes">
          <div className="size">Small</div>
          <div className="size">Medium</div>
          <div className="size">Large</div>
          <div className="size">X-Large</div>
        </div>
      </div>

      <div className="filter-section">
        <h3>Dress Style</h3>
        <hr />
        <div className="styles">
          <div className="style">Casual</div>
          <div className="style">Formal</div>
          <div className="style">Party</div>
          <div className="style">Gym</div>
        </div>
      </div>

      <button className="apply-button">Filtrele</button>
    </div>
  )
}

export default ShopPageFilter
