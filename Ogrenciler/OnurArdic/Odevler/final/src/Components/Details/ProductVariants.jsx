import AddToCartBtn from './AddToCartBtn'

const ProductVariants = ({ data }) => {
  return (
    <div className="product-variants">
      <div className="product-colors">
        <p>Select Color</p>
        <div className="color-variants">
          <button className="variant-btn">
            <i className="bi bi-check"></i>
          </button>
          <button className="variant-btn"></button>
          <button className="variant-btn"></button>
        </div>
      </div>

      <hr />

      <div className="product-size">
        <p>Select Size</p>
        <div className="size-variants">
          <button className="variant-btn active">SMALL</button>
          <button className="variant-btn">MEDİUM</button>
          <button className="variant-btn">LARGE</button>
          <button className="variant-btn">X-LARGE</button>
        </div>
      </div>

      <AddToCartBtn data={data} />
    </div>
  )
}

export default ProductVariants
