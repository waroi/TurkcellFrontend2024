import './ProductDetails.scss'

const ProductDetailsİmages = ({ data }) => {
  return (
    <div className="product-images">
      <div className="images-left">
        <img src={`/${data.img}`} alt="Product" />
        <img src={`/${data.img}`} alt="Product" />
      </div>

      <div className="main-img">
        <img src={`/${data.img}`} alt="Product" />
      </div>
    </div>
  )
}

export default ProductDetailsİmages
