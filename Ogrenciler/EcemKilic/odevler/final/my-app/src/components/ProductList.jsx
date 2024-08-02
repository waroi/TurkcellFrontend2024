import React from 'react';
import styles from './styles/ProductList.module.scss';

const ProductList = ({ products }) => {
  return (
    <div className={styles.productGrid}>
      {products.map(product => (
        <div key={product.id} className={styles.productCard}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
