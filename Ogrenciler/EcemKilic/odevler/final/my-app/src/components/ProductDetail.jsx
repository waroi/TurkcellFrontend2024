import React from 'react';
import { useParams } from 'react-router-dom';
import CommentCard from './CommentCard';
import products from '../data/db.json';
import styles from './styles/ProductDetail.module.scss';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className={styles.productDetailContainer}>
      <div className={styles.productImage}>
        <img src={`/images/${product.image}`} alt={product.name} />
      </div>
      <div className={styles.productInfo}>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price}</p>
        <p>Stock: {product.stock}</p>
        <p>Rating: {product.rating}</p>
        <div className={styles.productColors}>
          <h3>Available Colors:</h3>
          {product.colors.map(color => (
            <span key={color} style={{ backgroundColor: color }}></span>
          ))}
        </div>
        <div className={styles.productSizes}>
          <h3>Available Sizes:</h3>
          {product.sizes.map(size => (
            <span key={size}>{size}</span>
          ))}
        </div>
      </div>
      <div className={styles.commentsSection}>
        <h2>Comments</h2>
        {products.comments
          .filter(comment => comment.items.some(item => item.product_id === product.id))
          .map((comment, index) => (
            <CommentCard key={index} comment={comment.items.find(item => item.product_id === product.id)} />
          ))}
      </div>
    </div>
  );
};

export default ProductDetail;
