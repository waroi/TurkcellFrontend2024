import React from 'react';
import styles from './styles/CustomerReviews.module.scss';
import comments from '../data/comments.json';

const CustomerReviews = () => (
  <section className={styles.customerReviews}>
    <h2>Our Happy Customers</h2>
    <div className={styles.reviews}>
      {comments.map((comment, index) => (
        <div key={index} className={styles.reviewCard}>
          <p>{comment.items[0].comment}</p>
          <p>Rating: {comment.items[0].rating}⭐</p>
        </div>
      ))}
    </div>
  </section>
);

export default CustomerReviews;
