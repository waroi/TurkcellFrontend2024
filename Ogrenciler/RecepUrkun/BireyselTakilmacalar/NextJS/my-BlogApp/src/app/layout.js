import { Hahmlet } from "next/font/google";
import styles from "./styles.module.css"
import "../../styles/global.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

const hahmletFont = Hahmlet(
  {
    subsets: ["latin"],
    weight: ["500"]
  }
);

export const metadata = {
  title: "Next.js 14 | Blog",
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={hahmletFont.className}>
      <body className={styles.container}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}