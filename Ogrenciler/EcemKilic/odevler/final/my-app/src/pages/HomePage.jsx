import React from 'react';
import Header from '../components/Header';
import NewArrivals from '../components/NewArrivals';
import TopSelling from '../components/TopSelling';
import BrowseByDressStyle from '../components/BrowseByDressStyle';
import CustomerReviews from '../components/CustomerReviews';
import Footer from '../components/Footer';
import './Homepage.css';

const Homepage = () => (
  <div className="homepage">
    <Header />
    <NewArrivals />
    <TopSelling />
    <BrowseByDressStyle />
    <CustomerReviews />
    <Footer />
  </div>
);

export default Homepage;
