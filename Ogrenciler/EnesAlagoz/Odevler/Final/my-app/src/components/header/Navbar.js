import { NavbarContainer } from "@/Styled/Global";
import Link from "next/link";

const Navbar = () => {
  return (
    <NavbarContainer>
      <div>
        <Link href="/">Anasayfa</Link>
        <Link href="/category">Kategoriler</Link>
      </div>
      <div>
        <Link href="/cart">Sepet</Link>
        <Link href="/auth/login">Giriş</Link>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
