import { useLocale, useTranslations } from 'next-intl'
import './Cart.scss'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const Cart = ({ isSidebarOpen, toggleSidebar }) => {
  const locale = useLocale()
  const t = useTranslations('Navbar')
  const cartItems = useSelector((state) => state.cart.cartItems)
  console.log(cartItems)
  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        ×
      </button>
      <h2>{t('CartText')}</h2>

      {cartItems.map((cartItem) => (
        <div key={cartItem.id} className="cart-items">
          <div className="cart-item-img">
            <img src={`/${cartItem.img}`} alt={cartItem.title} />
          </div>

          <div className="cart-items-content">
            <h5>{cartItem.title}</h5>
            <p>Price: {cartItem.price}</p>
            <p>Size : {cartItem.size}</p>
            <p>Color : {cartItem.color}</p>
            <p>Quantity: {cartItem.quantity}</p>
          </div>

          <div className="buttons">
            <button className="remove-btn">
              <i className="bi bi-trash"></i>
            </button>
          </div>
        </div>
      ))}

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
