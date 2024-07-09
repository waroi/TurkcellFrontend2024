import { useLocale, useTranslations } from 'next-intl'
import './Cart.scss'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '@/app/lib/features/cartslice'

const Cart = ({ isSidebarOpen, toggleSidebar }) => {
  const dispatch = useDispatch()

  const deleteItemHandler = (itemId) => {
    dispatch(removeFromCart(itemId))
  }

  const locale = useLocale()
  const t = useTranslations('Navbar')
  const cartItems = useSelector((state) => state.cart.cartItems)
  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        ×
      </button>
      <h2>{t('CartText')}</h2>

      {cartItems.length > 0 ? (
        cartItems.map((cartItem) => (
          <div key={cartItem.id} className="cart-items">
            <div className="cart-item-img">
              <img src={`/${cartItem.img}`} alt={cartItem.title} />
            </div>

            <div className="cart-items-content">
              <h5>{cartItem.title}</h5>
              <p>Price: {cartItem.price}</p>
              <p>Size : {cartItem.selectedSize}</p>
              <p>Color : {cartItem.selectedColor}</p>
              <p>Quantity: {cartItem.quantity}</p>
            </div>

            <div className="buttons">
              <button className="remove-btn" onClick={() => deleteItemHandler(cartItem.id)}>
                <i className="bi bi-trash"></i>
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Sepetinizde ürün bulunmamaktadır.</p>
      )}

      {cartItems.length ? (
        <div className="cart-btn">
          <Link href={`/${locale}/cart`} className="go-to-cart">
            Sepete Git
          </Link>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Cart
