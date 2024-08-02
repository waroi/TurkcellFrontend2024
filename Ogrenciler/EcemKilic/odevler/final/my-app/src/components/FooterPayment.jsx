import React from "react";
import styles from './styles/FooterPayment.module.scss';

const FooterPayment = () => {
  return (
    <div className={styles.footerPayment}>
      <img src="/images/payment-methods/visa.png" alt="Visa" />
      <img src="/images/payment-methods/mastercard.png" alt="Mastercard" />
      <img src="/images/payment-methods/paypal.png" alt="Paypal" />
      <img src="/images/payment-methods/amex.png" alt="American Express" />
    </div>
  );
};

export default FooterPayment;
