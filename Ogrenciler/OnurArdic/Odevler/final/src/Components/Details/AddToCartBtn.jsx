'use client'

import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '@/app/lib/features/cartslice'
import toast from 'react-hot-toast'
import { useTranslations } from 'next-intl'

const AddToCartBtn = ({ data }) => {
  const user = useSelector((state) => state.auth.user)
  const t = useTranslations('DetailPage')
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

      {user ? (
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          {t('AddToCart')}
        </button>
      ) : (
        <p>Ürünü satın almak için giriş yapınız</p>
      )}
    </div>
  )
}

export default AddToCartBtn
