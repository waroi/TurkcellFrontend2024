import { useLocale, useTranslations } from 'next-intl'
import './Cart.scss'
import Link from 'next/link'

const Cart = ({ isSidebarOpen, toggleSidebar }) => {
  const locale = useLocale()
  const t = useTranslations('Navbar')
  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        ×
      </button>
      <h2>{t('CartText')}</h2>
      <div className="cart-items">
        <div className="cart-item-img">
          <img src="/products/arrival00.png" alt="" />
        </div>

        <div className="cart-items-content">
          <h5>Product Name</h5>
          <p>Price: $100</p>
          <p>Size : XL</p>
          <p>Color : Black</p>
          <p>Quantity: 1</p>
        </div>

        <div className="buttons">
          <button className="remove-btn">
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>

      <div className="cart-btn">
        <Link href={`${locale}/cart`} className="go-to-cart">
          Sepete Git
        </Link>

        <button className="clear-all">Sepeti Temizle</button>
      </div>
    </div>
  )
}

export default Cart
