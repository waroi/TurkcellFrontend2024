import { dir } from "i18next";
import { languages } from "../i18n/settings";
import Providers from "./components/Provider";
import "@/app/styles/main.scss";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head>
        <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet" />
      </head>
      <body>
        <Providers>
          <div className="custom-container">
            <Navbar lng={lng} />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
