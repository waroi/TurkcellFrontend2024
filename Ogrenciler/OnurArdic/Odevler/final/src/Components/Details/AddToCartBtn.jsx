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

  const handleIncrement = () => {
    if (quantity < 10) {
      setQuantity((prevQuantity) => prevQuantity + 1)
    }
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1)
    }
  }

  const handleChange = (e) => {
    const value = e.target.value
    if (/^\d*$/.test(value)) {
      setQuantity(Number(value))
    }
  }

  return (
    <div className="product-quantity">
      <div className="quantity-input">
        <button onClick={handleDecrement} className="quantity-btn decrement">
          <i className="bi bi-dash"></i>
        </button>
        <input type="text" value={quantity} onChange={handleChange} />
        <button onClick={handleIncrement} className="quantity-btn increment">
          <i className="bi bi-plus"></i>
        </button>
      </div>
      {user ? (
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          {t('AddToCart')}
        </button>
      ) : (
        <p className="alert">Ürünü satın almak için giriş yapınız</p>
      )}
    </div>
  )
}

export default AddToCartBtn
