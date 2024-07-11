import CartLeft from '@/Components/Cart/CartLeft'
import CartRight from '@/Components/Cart/CartRight'
import '../../../../Components/Cart/Cart.scss'
export const metadata = {
  title: 'SHOP.CO / Cart',
  description: 'The best clothes',
}
const Cart = () => {
  return (
    <>
      <div className="line"></div>
      <section className="cart-page">
        <div className="cart-wrapper container">
          <div className="cart-left">
            <CartLeft />
          </div>

          <div className="cart-right">
            <CartRight />
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart
