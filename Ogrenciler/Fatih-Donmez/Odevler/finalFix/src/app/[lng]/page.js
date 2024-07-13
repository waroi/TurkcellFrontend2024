import { useTranslation } from "../i18n";
import BrandLogos from "./components/Hero/BrandLogos";
import BrowseByStyle from "./components/Hero/BrowseByStyle";
import Hero from "./components/Hero/Hero";
import NewArrivals from "./components/Hero/NewArrivals";
import TopSelling from "./components/Hero/TopSelling";
import CustomerReviews from "./components/Hero/CustomerReviews";

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  return (
    <>
      <Hero />
      <BrandLogos />
      <NewArrivals />
      <TopSelling />
      <BrowseByStyle />
      <CustomerReviews />
    </>
  );
}
