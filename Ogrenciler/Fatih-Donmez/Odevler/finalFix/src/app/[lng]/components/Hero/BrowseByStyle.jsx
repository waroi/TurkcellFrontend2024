import React from "react";
import "@/app/styles/components/BrowseByStyle.scss";
import Image from "next/image";
import casual from "../../../../../public/Style/Casual.png";
import formal from "../../../../../public/Style/Formal.png";
import party from "../../../../../public/Style/Party.png";
import gym from "../../../../../public/Style/Gym.png";

const BrowseByStyle = () => {
  return (
    <div className="inner-container">
      <div className="browse-by-style">
        <h2 className="title">BROWSE BY DRESS STYLE</h2>
        <div className="row">
          <div className="col-md-5">
            <div className="style-card">
              <Image src={casual} alt="Casual" className="style-image" />
              <p className="style-name">Casual</p>
            </div>
          </div>
          <div className="col-md-7">
            {" "}
            <div className="style-card">
              <Image src={formal} alt="Formal" className="style-image" />
              <p className="style-name">Formal</p>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-7">
            <div className="style-card">
              <Image src={party} alt="Party" className="style-image" />
              <p className="style-name">Party</p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="style-card">
              <Image src={gym} alt="Gym" className="style-image" />
              <p className="style-name">Gym</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseByStyle;
