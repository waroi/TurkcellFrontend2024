'use client'
import { useDispatch, useSelector } from 'react-redux'
import './Cart.scss'
import { incrementQuantity, removeFromCart } from '@/app/lib/features/cartslice'
import { useTranslations } from 'next-intl'

const CartLeft = () => {
  const cartItems = useSelector((state) => state.cart.cartItems)
  const dispatch = useDispatch()
  const deleteItem = (id) => {
    dispatch(removeFromCart(id))
  }

  const changeQuantityHande = (quantity) => {
    dispatch(incrementQuantity(quantity))
  }

  const t = useTranslations('CartPage')
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
                  <input
                    type="number"
                    value={cartItem.quantity}
                    onChange={() => changeQuantityHande(cartItem.quantity)}
                  />
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
