import React from "react";
import "@/app/styles/components/AlsoLike.scss";
import Image from "next/image";
import Link from "next/link";

const AlsoLike = ({ alsolike }) => {
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
  return (
    <Link href={`/product/${alsolike.id}`} passHref>
      <div className="alsolike-card">
        <Image
          src={`/${alsolike.img}`}
          alt={alsolike.title}
          className="alsolike-image"
          layout="responsive"
          width={300}
          height={300}
        />
        <h3 className="alsolike-title">{alsolike.title}</h3>
        <div className="alsolike-rating">
          {renderStars(alsolike.stars)}
          <p>
            {alsolike.stars}
            <span>/5</span>
          </p>
        </div>
        <div className="alsolike-price">
          <span className="current-price">${alsolike.price}</span>
          {alsolike.oldprice && (
            <>
              <span className="old-price">{alsolike.oldprice}</span>
              <span className="discount">{alsolike.discount}</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default AlsoLike;
