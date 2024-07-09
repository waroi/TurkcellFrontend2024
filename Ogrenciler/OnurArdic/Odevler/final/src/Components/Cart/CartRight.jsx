'use client'
import { useSelector } from 'react-redux'
import { selectTotalPrice, selectTotalDiscount } from '../../app/lib/features/cartslice'
import './Cart.scss'

const CartRight = () => {
  const totalPrice = useSelector(selectTotalPrice)
  const totalDiscount = useSelector(selectTotalDiscount)

  return (
    <div className="total-price-cart">
      <h3>Order Summary</h3>
      <p>Subtotal: ${totalPrice.toFixed(2)}</p>
      <p>Discount: -${totalDiscount.toFixed(2)}</p>
      <hr />
      <p>Total: ${(totalPrice - totalDiscount).toFixed(2)}</p>

      <div className="input-area">
        <input type="text" placeholder="Coupon Code" />
        <button>Apply</button>
      </div>

      <button className="checkout-btn">Checkout</button>
    </div>
  )
}

export default CartRight
