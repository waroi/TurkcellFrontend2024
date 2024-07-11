'use client'
import { useSelector } from 'react-redux'
import { selectTotalPrice, selectTotalDiscount } from '../../app/lib/features/cartslice'
import './Cart.scss'
import { useTranslations } from 'next-intl'

const CartRight = () => {
  const totalPrice = useSelector(selectTotalPrice)
  const totalDiscount = useSelector(selectTotalDiscount)
  const t = useTranslations('CartPage')

  return (
    <div className="total-price-cart">
      <h3>{t('Summary')}</h3>

      <div className="content">
        <p>{t('CartTotal')}: </p>
        <p>{totalPrice.toFixed(2)}$</p>
      </div>

      <div className="content disc">
        <p>{t('Discount')} -$</p>
        <p className="disc-price">{totalDiscount.toFixed(2)}$</p>
      </div>
      <hr />

      <div className="content">
        <p>{t('Total')}: </p>
        <p className="total-price">${(totalPrice - totalDiscount).toFixed(2)}$</p>
      </div>

      <div className="input-area">
        <input type="text" placeholder="Coupon Code" />
        <button>Apply</button>
      </div>

      <button className="checkout-btn">Checkout</button>
    </div>
  )
}

export default CartRight
