import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery, setSortOption, filterProducts } from '../store/productSlice';
import styles from './styles/Header.module.scss';

const Header = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
    dispatch(filterProducts());
  };

  const handleSort = (e) => {
    dispatch(setSortOption(e.target.value));
    dispatch(filterProducts());
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.logo} href="/">SHOP.CO</a>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>Shop</li>
        <li className={styles.menuItem}>On Sale</li>
        <li className={styles.menuItem}>New Arrivals</li>
        <li className={styles.menuItem}>Brands</li>
      </ul>
      <input
        type="search"
        placeholder="Search for products..."
        className={styles.searchInput}
        onChange={handleSearch}
      />
      <select onChange={handleSort} className={styles.sortSelect}>
        <option value="">Sort By</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
      <div className={styles.iconContainer}>
        <i className={`bi bi-cart ${styles.icon}`}></i>
        <i className={`bi bi-person ${styles.icon}`}></i>
      </div>
    </nav>
  );
};

export default Header;
