'use client'

import { useDispatch, useSelector } from 'react-redux'
import {
  setSelectedColor,
  setSelectedSize,
  selectSelectedColor,
  selectSelectedSize,
} from '@/app/lib/features/cartslice'
import AddToCartBtn from './AddToCartBtn'
import { useTranslations } from 'next-intl'

const ProductVariants = ({ data }) => {
  const t = useTranslations('DetailPage')
  const dispatch = useDispatch()
  const selectedColor = useSelector(selectSelectedColor)
  const selectedSize = useSelector(selectSelectedSize)

  const handleColorSelect = (color) => {
    dispatch(setSelectedColor(color))
  }

  const handleSizeSelect = (size) => {
    dispatch(setSelectedSize(size))
  }

  return (
    <div className="product-variants">
      <div className="product-colors">
        <p>{t('SelecetColor')}</p>
        <div className="color-variants">
          {['red', 'blue', 'green', 'white', 'black'].map((color) => (
            <button
              key={color}
              className={`variant-btn ${selectedColor === color ? 'selected' : ''}`}
              onClick={() => handleColorSelect(color)}
            >
              {selectedColor === color && <i className="bi bi-check"></i>}
            </button>
          ))}
        </div>
      </div>

      <hr />

      <div className="product-size">
        <p>{t('SelectSize')}</p>
        <div className="size-variants">
          {['SMALL', 'MEDIUM', 'LARGE', 'X-LARGE'].map((size) => (
            <button
              key={size}
              className={`variant-btn ${selectedSize === size ? 'active' : ''}`}
              onClick={() => handleSizeSelect(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <AddToCartBtn data={{ ...data, selectedColor, selectedSize }} />
    </div>
  )
}

export default ProductVariants
