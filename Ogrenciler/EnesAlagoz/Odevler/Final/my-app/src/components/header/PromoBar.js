import styles from "./PromoBar.module.scss";

const PromoBar = () => {
  return (
    <div className={styles["promo-bar"]}>
      <div className={styles["promo-message"]}>
        Sign up now and get 20% off to your first Order. <a href="/">Sign Up Now</a>
      </div>
    </div>
  );
};

export default PromoBar;
