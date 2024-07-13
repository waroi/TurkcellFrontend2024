import React, { cache } from "react";
import "@/app/styles/components/DetailPage.scss";
import Image from "next/image";
import Colors from "@/app/[lng]/components/DetailPage/Colors";
import Size from "@/app/[lng]/components/DetailPage/Size";
import Amount from "@/app/[lng]/components/DetailPage/Amount";
import AddToCart from "@/app/[lng]/components/DetailPage/AddToCart";
import CommentsSection from "@/app/[lng]/components/DetailPage/CommentsSection";
import AlsoLike from "@/app/[lng]/components/DetailPage/AlsoLike";
import AddReview from "@/app/[lng]/components/DetailPage/AddReview";
const renderStars = (stars) => {
  const fullStars = Math.floor(stars);
  const halfStar = stars - fullStars > 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <>
      {[...Array(fullStars)].map((_, index) => (
        <svg
          key={`full-${index}`}
          width="19"
          height="17"
          viewBox="0 0 19 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
            fill="#FFC633"
          />
        </svg>
      ))}
      {halfStar === 1 && (
        <svg
          key="half"
          width="19"
          height="17"
          viewBox="0 0 19 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="half-grad">
              <stop offset="50%" stopColor="#FFC633" />
              <stop offset="50%" stopColor="white" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
            fill="url(#half-grad)"
          />
        </svg>
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <svg
          key={`empty-${index}`}
          width="19"
          height="17"
          viewBox="0 0 19 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
            fill="none"
            stroke="#FFC633"
          />
        </svg>
      ))}
    </>
  );
};
const DetailPage = async () => {
  const res = await fetch("http://localhost:3001/Products", {
    cache: "no-cache",
  });
  const products = await res.json();
  console.log(products[0][0]);

  const firstProd = products[0];
  console.log(firstProd[0]);
  return (
    <div className="inner-container">
      <div className="">
        <p
          className="breadcrumb"
          style={{
            fontFamily: "Satoshi",
            fontWeight: 400,
            fontSize: "1rem",
            color: " #00000099",
          }}
        >
          <span>Home</span>
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.53073 0.469372L6.53073 5.46937C6.60065 5.53905 6.65613 5.62184 6.69399 5.71301C6.73184 5.80417 6.75133 5.90191 6.75133 6.00062C6.75133 6.09933 6.73184 6.19707 6.69399 6.28824C6.65613 6.3794 6.60065 6.46219 6.53073 6.53187L1.53073 11.5319C1.38984 11.6728 1.19874 11.7519 0.999484 11.7519C0.800227 11.7519 0.609131 11.6728 0.468235 11.5319C0.327338 11.391 0.248184 11.1999 0.248184 11.0006C0.248184 10.8014 0.327338 10.6103 0.468235 10.4694L4.93761 6L0.46761 1.53062C0.326714 1.38973 0.247559 1.19863 0.247559 0.999372C0.247559 0.800115 0.326714 0.609018 0.46761 0.468122C0.608506 0.327227 0.799603 0.24807 0.99886 0.24807C1.19812 0.24807 1.38921 0.327227 1.53011 0.468122L1.53073 0.469372Z"
              fill="black"
              fill-opacity="0.6"
            />
          </svg>
          <span>Shop</span>
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.53073 0.469372L6.53073 5.46937C6.60065 5.53905 6.65613 5.62184 6.69399 5.71301C6.73184 5.80417 6.75133 5.90191 6.75133 6.00062C6.75133 6.09933 6.73184 6.19707 6.69399 6.28824C6.65613 6.3794 6.60065 6.46219 6.53073 6.53187L1.53073 11.5319C1.38984 11.6728 1.19874 11.7519 0.999484 11.7519C0.800227 11.7519 0.609131 11.6728 0.468235 11.5319C0.327338 11.391 0.248184 11.1999 0.248184 11.0006C0.248184 10.8014 0.327338 10.6103 0.468235 10.4694L4.93761 6L0.46761 1.53062C0.326714 1.38973 0.247559 1.19863 0.247559 0.999372C0.247559 0.800115 0.326714 0.609018 0.46761 0.468122C0.608506 0.327227 0.799603 0.24807 0.99886 0.24807C1.19812 0.24807 1.38921 0.327227 1.53011 0.468122L1.53073 0.469372Z"
              fill="black"
              fill-opacity="0.6"
            />
          </svg>
          <span>{firstProd[0].dressStyle}</span>
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.53073 0.469372L6.53073 5.46937C6.60065 5.53905 6.65613 5.62184 6.69399 5.71301C6.73184 5.80417 6.75133 5.90191 6.75133 6.00062C6.75133 6.09933 6.73184 6.19707 6.69399 6.28824C6.65613 6.3794 6.60065 6.46219 6.53073 6.53187L1.53073 11.5319C1.38984 11.6728 1.19874 11.7519 0.999484 11.7519C0.800227 11.7519 0.609131 11.6728 0.468235 11.5319C0.327338 11.391 0.248184 11.1999 0.248184 11.0006C0.248184 10.8014 0.327338 10.6103 0.468235 10.4694L4.93761 6L0.46761 1.53062C0.326714 1.38973 0.247559 1.19863 0.247559 0.999372C0.247559 0.800115 0.326714 0.609018 0.46761 0.468122C0.608506 0.327227 0.799603 0.24807 0.99886 0.24807C1.19812 0.24807 1.38921 0.327227 1.53011 0.468122L1.53073 0.469372Z"
              fill="black"
              fill-opacity="0.6"
            />
          </svg>{" "}
          <span style={{ color: "black" }}>{firstProd[0].cat}</span>
        </p>
      </div>
      <div className="detail-card">
        <div className="product-images">
          <div className="small-imgs">
            <div className="small-img-container">
              <Image
                src={`/${firstProd[0].img}`}
                width={167}
                height={170}
                alt="product"
              />
              <Image
                src={`/${firstProd[0].img}`}
                width={167}
                height={170}
                alt="product"
              />
              <Image
                src={`/${firstProd[0].img}`}
                width={167}
                height={170}
                alt="product"
              />
            </div>
          </div>
          <div className="main-img">
            <Image src={`/${firstProd[0].img}`} fill alt="product" />
          </div>
          <div className="small-imgs-mobile">
            <div className="small-img-container">
              <div className="small-img-wrapper">
                <Image src={`/${firstProd[0].img}`} fill alt="product" />
              </div>
              <div className="small-img-wrapper">
                <Image src={`/${firstProd[0].img}`} fill alt="product" />
              </div>
              <div className="small-img-wrapper">
                <Image src={`/${firstProd[0].img}`} fill alt="product" />
              </div>
            </div>
          </div>
        </div>
        <div className="product-desc">
          <h2 className="desc-title">{firstProd[0].title.slice(0, 20)}</h2>
          <div>
            {renderStars(firstProd[0].stars)}
            <span className="rating">
              {firstProd[0].stars}
              <span style={{ color: "gray" }}>/5</span>
            </span>
          </div>
          <div className="product-price">
            <span className="current-price">${firstProd[0].price}</span>
            {firstProd[0].oldprice && (
              <>
                <span className="old-price">{firstProd[0].oldprice}</span>
                <span className="discount">{firstProd[0].discount}</span>
              </>
            )}
          </div>
          <div className="product-lead">{firstProd[0].desc}</div>
          <div className="product-colors">
            <p className="product-color-text">Select Colors</p>
            <div className="colors">
              <Colors />
            </div>
          </div>
          <div className="product-size-container">
            <p className="product-size">Choose Size</p>
            <Size />
          </div>
          <div className="amount-increase">
            <Amount />
            <AddToCart product={firstProd[0]} />
          </div>
        </div>
      </div>
      <div className="select-section">
        <p className="select-section-title ">Product Details</p>
        <p className="select-section-title-active">Rating & Reviews</p>
        <p className="select-section-title">FAQs</p>
      </div>
      <div>
        <div className="reviews">
          <h1 className="reviews-title">
            All Reviews <span>({firstProd[0].price})</span>
          </h1>
          <div className="reviews-filter">
            <span className="reviews-filter-setting">
              <svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.125 9.625V18.25C12.125 18.5484 12.0065 18.8345 11.7955 19.0455C11.5845 19.2565 11.2984 19.375 11 19.375C10.7016 19.375 10.4155 19.2565 10.2045 19.0455C9.99353 18.8345 9.875 18.5484 9.875 18.25V9.625C9.875 9.32663 9.99353 9.04048 10.2045 8.8295C10.4155 8.61853 10.7016 8.5 11 8.5C11.2984 8.5 11.5845 8.61853 11.7955 8.8295C12.0065 9.04048 12.125 9.32663 12.125 9.625ZM17.75 16C17.4516 16 17.1655 16.1185 16.9545 16.3295C16.7435 16.5405 16.625 16.8266 16.625 17.125V18.25C16.625 18.5484 16.7435 18.8345 16.9545 19.0455C17.1655 19.2565 17.4516 19.375 17.75 19.375C18.0484 19.375 18.3345 19.2565 18.5455 19.0455C18.7565 18.8345 18.875 18.5484 18.875 18.25V17.125C18.875 16.8266 18.7565 16.5405 18.5455 16.3295C18.3345 16.1185 18.0484 16 17.75 16ZM20 12.25H18.875V1.75C18.875 1.45163 18.7565 1.16548 18.5455 0.954505C18.3345 0.743526 18.0484 0.625 17.75 0.625C17.4516 0.625 17.1655 0.743526 16.9545 0.954505C16.7435 1.16548 16.625 1.45163 16.625 1.75V12.25H15.5C15.2016 12.25 14.9155 12.3685 14.7045 12.5795C14.4935 12.7905 14.375 13.0766 14.375 13.375C14.375 13.6734 14.4935 13.9595 14.7045 14.1705C14.9155 14.3815 15.2016 14.5 15.5 14.5H20C20.2984 14.5 20.5845 14.3815 20.7955 14.1705C21.0065 13.9595 21.125 13.6734 21.125 13.375C21.125 13.0766 21.0065 12.7905 20.7955 12.5795C20.5845 12.3685 20.2984 12.25 20 12.25ZM4.25 13C3.95163 13 3.66548 13.1185 3.4545 13.3295C3.24353 13.5405 3.125 13.8266 3.125 14.125V18.25C3.125 18.5484 3.24353 18.8345 3.4545 19.0455C3.66548 19.2565 3.95163 19.375 4.25 19.375C4.54837 19.375 4.83452 19.2565 5.0455 19.0455C5.25647 18.8345 5.375 18.5484 5.375 18.25V14.125C5.375 13.8266 5.25647 13.5405 5.0455 13.3295C4.83452 13.1185 4.54837 13 4.25 13ZM6.5 9.25H5.375V1.75C5.375 1.45163 5.25647 1.16548 5.0455 0.954505C4.83452 0.743526 4.54837 0.625 4.25 0.625C3.95163 0.625 3.66548 0.743526 3.4545 0.954505C3.24353 1.16548 3.125 1.45163 3.125 1.75V9.25H2C1.70163 9.25 1.41548 9.36853 1.2045 9.5795C0.993526 9.79048 0.875 10.0766 0.875 10.375C0.875 10.6734 0.993526 10.9595 1.2045 11.1705C1.41548 11.3815 1.70163 11.5 2 11.5H6.5C6.79837 11.5 7.08452 11.3815 7.2955 11.1705C7.50647 10.9595 7.625 10.6734 7.625 10.375C7.625 10.0766 7.50647 9.79048 7.2955 9.5795C7.08452 9.36853 6.79837 9.25 6.5 9.25ZM13.25 4.75H12.125V1.75C12.125 1.45163 12.0065 1.16548 11.7955 0.954505C11.5845 0.743526 11.2984 0.625 11 0.625C10.7016 0.625 10.4155 0.743526 10.2045 0.954505C9.99353 1.16548 9.875 1.45163 9.875 1.75V4.75H8.75C8.45163 4.75 8.16548 4.86853 7.9545 5.0795C7.74353 5.29048 7.625 5.57663 7.625 5.875C7.625 6.17337 7.74353 6.45952 7.9545 6.6705C8.16548 6.88147 8.45163 7 8.75 7H13.25C13.5484 7 13.8345 6.88147 14.0455 6.6705C14.2565 6.45952 14.375 6.17337 14.375 5.875C14.375 5.57663 14.2565 5.29048 14.0455 5.0795C13.8345 4.86853 13.5484 4.75 13.25 4.75Z"
                  fill="black"
                />
              </svg>
            </span>
            <div className="reviews-filter-select">
              <select name="filter" id="filter">
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="highest">Highest Rating</option>
                <option value="lowest">Lowest Rating</option>
              </select>
            </div>
            <AddReview />
          </div>
        </div>
        <CommentsSection />
      </div>
      <div style={{ marginTop: "4rem" }}>
        <h1 style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          YOU MIGHT ALSO LIKE
        </h1>
        <div className="also-like-container">
          {products[0].slice(0, 3).map((product) => (
            <AlsoLike alsolike={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
