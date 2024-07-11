'use client'
import { useDispatch, useSelector } from 'react-redux'
import './Cart.scss'
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  updateQuantity,
} from '@/app/lib/features/cartslice'
import { useTranslations } from 'next-intl'

const CartLeft = () => {
  const cartItems = useSelector((state) => state.cart.cartItems)
  const dispatch = useDispatch()
  const t = useTranslations('CartPage')

  const deleteItem = (id) => {
    dispatch(removeFromCart(id))
  }

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id))
  }

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id))
  }

  const handleChange = (id, value) => {
    if (/^\d*$/.test(value) && Number(value) >= 1 && Number(value) <= 10) {
      dispatch(updateQuantity({ id, quantity: Number(value) }))
    }
  }

  return (
    <div className="cart-left">
      <h4>{t('CartTitle')}</h4>

      <div className="cart-items-wrapper">
        <div className="cart-items">
          {cartItems.length > 0 ? (
            cartItems.map((cartItem) => (
              <div className="cart" key={cartItem.id}>
                <div className="cart-left" key={cartItem.id}>
                  <div className="cart-img">
                    <img src={`/${cartItem.img}`} alt={cartItem.title} />
                  </div>

                  <div className="card-content">
                    <h5>{cartItem.title}</h5>
                    <p>
                      {t('Size')} : {cartItem.selectedSize}
                    </p>
                    <p>
                      {t('Color')} : {cartItem.selectedColor}
                    </p>
                    <p>
                      {t('Price')}: {cartItem.price}
                    </p>
                  </div>
                </div>

                <div className="cart-btn">
                  <button className="remove" onClick={() => deleteItem(cartItem.id)}>
                    <i className="bi bi-trash"></i>
                  </button>
                  <div className="quantity-input">
                    <button
                      onClick={() => handleDecrement(cartItem.id)}
                      className="quantity-btn decrement"
                    >
                      <i className="bi bi-dash"></i>
                    </button>
                    <input
                      type="text"
                      value={cartItem.quantity}
                      onChange={(e) => handleChange(cartItem.id, e.target.value)}
                    />
                    <button
                      onClick={() => handleIncrement(cartItem.id)}
                      className="quantity-btn increment"
                    >
                      <i className="bi bi-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>{t('CartEmpty')}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default CartLeft
