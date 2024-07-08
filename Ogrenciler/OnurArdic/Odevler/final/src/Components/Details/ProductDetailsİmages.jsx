import './ProductDetails.scss'

const ProductDetailsİmages = ({ data }) => {
  return (
    <div className="product-images">
      <div className="images-left">
        {data.img1 && <img src={`/${data.img1}`} alt="Product" />}
        {data.img2 && <img src={`/${data.img2}`} alt="Product" />}
      </div>

      <div className="main-img">
        <img src={`/${data.img}`} alt="Product" />
      </div>
    </div>
  )
}

export default ProductDetailsİmages
