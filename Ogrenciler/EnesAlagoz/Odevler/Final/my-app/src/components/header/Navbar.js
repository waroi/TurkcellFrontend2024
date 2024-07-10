import { NavbarContainer } from "./Navbar.jsx";
import styles from "./Navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <NavbarContainer>
      <div>
        <Link href="/">Anasayfa</Link>
        <Link href="/category">Kategoriler</Link>
        <Link href="/cart">Sepet</Link>
        <Link href="/auth/login">Giriş</Link>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
