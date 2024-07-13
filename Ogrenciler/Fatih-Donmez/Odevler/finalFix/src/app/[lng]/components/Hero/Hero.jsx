import "@/app/styles/components/Hero.scss";
import { useTranslation } from "@/app/i18n";
import Image from "next/image";
import heroBg from "../../../../../public/mobile1.png";
export default async function Hero({ lng }) {
  const { t } = await useTranslation(lng);

  return (
    <>
      <div className="hero-container">
        <div className="inner-container">
          <div className="row">
            <div className="col hero-text">
              <h1>{t("hero.title")}</h1>
              <p>{t("hero.subtitle")}</p>
              <button>{t("hero.shop")}</button>
              <div className="stats">
                <div className="stat-item">
                  <h3>{t("hero.counts.brands")}</h3>
                  <p>{t("hero.stats.brands")}</p>
                </div>
                <div className="stat-item">
                  <h3>{t("hero.counts.products")}</h3>
                  <p>{t("hero.stats.products")}</p>
                </div>
                <div className="stat-item">
                  <h3>{t("hero.counts.customers")}</h3>
                  <p>{t("hero.stats.customers")}</p>
                </div>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
      <div>
        <div className="hero-mobile-container">
          <p className="hero-mobile-title">{t("hero.stats.title")}</p>
          <p className="hero-mobile-desc">{t("hero.stats.subtitle")}</p>
          <button className="hero-mobile-btn"> {t("hero.shop")}</button>
          <div className="stats">
            <div className="stat-group">
              <div className="stat-item1">
                <h3>{t("hero.counts.brands")}</h3>
                <p>{t("hero.stats.brands")}</p>
              </div>
              <div className="stat-item">
                <h3>{t("hero.counts.products")}</h3>
                <p>{t("hero.stats.products")}</p>
              </div>
            </div>
            <div className="stat-item3">
              <h3>{t("hero.counts.customers")}</h3>
              <p>{t("hero.stats.customers")}</p>
            </div>
          </div>
        </div>{" "}
        <Image
          src={heroBg}
          style={{ maxHeight: "450px" }}
          className="d-md-none hero-mobile-img"
        />
      </div>
    </>
  );
}
