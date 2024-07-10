import Link from "next/link";
import styles from "./Navbar.module.scss"; // SCSS dosyasını import et

const Navbar = ({ toggleMenu, isMenuOpen, toggleSidebar }) => {
  return (
    <div className={styles.nav}>
      <nav className={styles.navbar}>
        <div className={styles["navbar-wrapper"]}>
          <div className={styles.logo}>
            <Link href="/">SHOP.CO</Link>
          </div>

          <div className={`${styles["navbar-links"]} `}>
            <Link href="/shop" className={styles["nav-link"]}>
              LinkShop
            </Link>
            <Link href="/onsale" className={styles["nav-link"]}>
              LinkOnSale
            </Link>
            <Link href="/arrivals" className={styles["nav-link"]}>
              LinkArrivals
            </Link>
            <Link href="/brands" className={styles["nav-link"]}>
              Brands
            </Link>
            <div className={styles["navbar-search"]}>
              <i className="bi bi-search"></i>
              <input type="text" placeholder="Search" className={styles["search-input"]} />
            </div>
            <div className={styles["buttons-wrapper"]}>
              <button className={styles["theme-button"]}>ThemeButton</button>
            </div>
          </div>

          <div className={styles["user-buttons"]}>
            <button className={styles["search-btn"]}>
              <i className="bi bi-search"></i>
            </button>
            <button className={styles["cart-btn"]} onClick={toggleSidebar}>
              <i className="bi bi-cart-plus"></i>
            </button>
            <Link href="/auth/login" className={styles["login-btn"]}>
              <i className="bi bi-person-circle"></i>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
