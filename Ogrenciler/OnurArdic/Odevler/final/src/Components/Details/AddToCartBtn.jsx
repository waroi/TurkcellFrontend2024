'use client'

import { useDispatch } from 'react-redux'
import { addToCart } from '@/app/lib/features/cartslice'
import toast from 'react-hot-toast'

const AddToCartBtn = ({ data }) => {
  const dispatch = useDispatch()
  const handleAddToCart = () => {
    if (!data.selectedColor || !data.selectedSize) {
      toast.error('Please select both color and size!')
      return
    }
    toast.success('Product added to cart!')
    dispatch(addToCart(data))
  }

  return (
    <div className="product-quantity">
      <input type="number" min="1" max="10" defaultValue="1" />
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  )
}

export default AddToCartBtn
