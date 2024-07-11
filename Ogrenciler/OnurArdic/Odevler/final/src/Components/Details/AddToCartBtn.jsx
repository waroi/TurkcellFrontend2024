'use client'

import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '@/app/lib/features/cartslice'
import toast from 'react-hot-toast'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

const AddToCartBtn = ({ data }) => {
  const user = useSelector((state) => state.auth.user)
  const t = useTranslations('DetailPage')
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    if (!data.selectedColor || !data.selectedSize) {
      toast.error('Lütfen renk ve beden bilgisi seçiniz!')
      return
    }

    const cartItem = {
      ...data,
      quantity,
    }

    toast.success('Ürün sepete eklendi!')
    dispatch(addToCart(cartItem))
  }

  return (
    <div className="product-quantity">
      <input
        type="number"
        min="1"
        max="10"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />

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
