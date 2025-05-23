import { useTranslations } from "next-intl";
import DressCard from "./DressCard";
import { StyledBrowseByDressStyle } from "../_styled";

const BrowseByDressStyle = () => {
  const t = useTranslations("lang");
  return (
    <StyledBrowseByDressStyle className="container-xl py-5 rounded-5 px-5">
      <h2 className="integralFont fw-bold text-center text-uppercase">
        {t("browseStyle")}
      </h2>
      <div className="row mt-5">
        <DressCard
          col={4}
          link={"Casual"}
          title={t("casual")}
          image={"casual"}
        />
        <DressCard
          col={8}
          link={"Formal"}
          title={t("formal")}
          image={"formal"}
        />
        <DressCard col={8} link={"Party"} title={t("party")} image={"party"} />
        <DressCard col={4} link={"Gym"} title={t("gym")} image={"gym"} />
      </div>
    </StyledBrowseByDressStyle>
  );
};

export default BrowseByDressStyle;
