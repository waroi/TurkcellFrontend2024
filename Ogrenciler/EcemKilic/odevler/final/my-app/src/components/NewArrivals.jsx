import React from 'react';
import styles from './styles/NewArrivals.module.scss';
import products from '../data/db.json';

const NewArrivals = () => (
  <section className={styles.newArrivals}>
    <h2>New Arrivals</h2>
    <div className={styles.products}>
      {products.slice(0, 4).map((product) => (
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

export default NewArrivals;
