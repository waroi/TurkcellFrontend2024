import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, filterProducts } from '../store/productSlice';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.filteredProducts);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products');
      const data = await response.json();
      dispatch(setProducts(data));
      dispatch(filterProducts());
    };
    fetchProducts();
  }, [dispatch]);

  return (
    <>
      <Header />
      <ProductList products={products} />
      <Footer />
    </>
  );
};

export default Home;
