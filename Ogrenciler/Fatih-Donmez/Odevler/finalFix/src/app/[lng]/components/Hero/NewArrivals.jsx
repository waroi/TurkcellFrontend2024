import "@/app/styles/components/NewArrivals.scss";
import ProductCard from "../Products/ProductCard";
import { useTranslation } from "@/app/i18n";

async function fetchData() {
  const response = await fetch("http://localhost:3001/arrival");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
}

const NewArrivals = async ({ lng }) => {
  const products = await fetchData();
  const { t } = await useTranslation(lng);
  return (
    <div className="new-arrivals">
      <h1 className="new-arrivals-title">{t("newArrivals")}</h1>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <button className="view-all-button">{t("viewAll")}</button>
    </div>
  );
};

export default NewArrivals;
