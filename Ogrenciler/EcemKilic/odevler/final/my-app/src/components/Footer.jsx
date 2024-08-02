import React from 'react';
import FooterPayment from './FooterPayment';
import styles from './styles/Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.newsletter}>
        <div className={styles.newsletterLeft}>
          <h1 className={styles.newsletterTitle}>
            STAY UPTO DATE ABOUT
            <br /> OUR LATEST OFFERS
          </h1>
        </div>
        <div className={styles.newsletterRight}>
          <input
            className={styles.newsletterRightBg}
            type="text"
            placeholder="Enter your email address"
          />
          <button className={styles.newsletterRightBg}>
            Subscribe to Newsletter
          </button>
        </div>
      </div>
      <div className={styles.rectangle}>
        <div className="container">
          <div className="row ">
            <div className="col-lg-3">
              <h1 className={styles.footerTitle}>Shop.co</h1>
              <p className={styles.footerText}>
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className={styles.social}>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-github"></i>
              </div>
            </div>
            <div className="col-lg-2">
              <h1 className={styles.footerSubtitle}>COMPANY</h1>
              <div className={styles.footerList}>
                <p className={styles.footerListItem}>Home</p>
                <p className={styles.footerListItem}>Shop</p>
                <p className={styles.footerListItem}>Blog</p>
                <p className={styles.footerListItem}>FAQ</p>
              </div>
            </div>
            <div className="col-lg-2">
              <h1 className={styles.footerSubtitle}>HELP</h1>
              <div className={styles.footerList}>
                <p className={styles.footerListItem}>Customer Support</p>
                <p className={styles.footerListItem}>Delivery Details</p>
                <p className={styles.footerListItem}>Terms & Conditions</p>
                <p className={styles.footerListItem}>Privacy Policy</p>
              </div>
            </div>
            <div className="col-lg-2">
              <h1 className={styles.footerSubtitle}>FAQ</h1>
              <div className={styles.footerList}>
                <p className={styles.footerListItem}>Account</p>
                <p className={styles.footerListItem}>Manage Deliveries</p>
                <p className={styles.footerListItem}>Orders</p>
                <p className={styles.footerListItem}>Payments</p>
              </div>
            </div>
            <div className="col-lg-3">
              <h1 className={styles.footerSubtitle}>RESOURCES</h1>
              <div className={styles.footerList}>
                <p className={styles.footerListItem}>Free eBooks</p>
                <p className={styles.footerListItem}>Development Tutorial</p>
                <p className={styles.footerListItem}>How to - Blog</p>
                <p className={styles.footerListItem}>Youtube Playlist</p>
              </div>
            </div>
          </div>
          <hr className={styles.footerLine} />
          <div className="row d-flex justify-content-between">
            <div className="col-lg-6">
              <p className={styles.footerEndText}>
                Shop.co © 2000-2023, All Rights Reserved
              </p>
            </div>
            <div className="col-lg-6 d-flex justify-content-end">
              <FooterPayment />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
