import React from 'react';
import styles from './styles/TopSelling.module.scss';
import products from '../data/db.json';

const TopSelling = () => (
  <section className={styles.topSelling}>
    <h2>Top Selling</h2>
    <div className={styles.products}>
      {products.slice(4, 8).map((product) => (
        <div key={product.id} className={styles.productCard}>
          <img src={`/images/${product.image}`} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}⭐</p>
        </div>
      ))}
    </div>
  </section>
);

export default TopSelling;
