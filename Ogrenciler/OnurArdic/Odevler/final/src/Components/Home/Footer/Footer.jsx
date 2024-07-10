import { useTranslations } from 'next-intl'
import Link from 'next/link'
import './Footer.scss'

const Footer = () => {
  const t = useTranslations('Footer')
  return (
    <footer>
      <div className="footer-wrapper container">
        <div className="footer-top">
          <div className="footer-top-left">
            <h4>{t('FooterTopTitle')}</h4>
          </div>

          <div className="footer-top-right">
            <div className="input-area">
              <i className="bi bi-envelope"></i>
              <input type="text" name="subscribe" placeholder={t('FooterInput')} />
              <a href="#">{t('FooterButton')}</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <div className="footer-content">
              <h3 className="footer-logo">{t('FooterLogo')}</h3>
              <p className="footer-about">{t('FooterAbout')}</p>
            </div>

            <div className="footer-social-icon">
              <Link href="#">
                <i className="bi bi-twitter"></i>
              </Link>
              <Link href="#">
                <i className="bi bi-facebook"></i>
              </Link>
              <Link href="#">
                <i className="bi bi-instagram"></i>
              </Link>
              <Link href="#">
                <i className="bi bi-github"></i>
              </Link>
            </div>
          </div>

          <div className="footer-links">
            <ul className="company">
              <h4>{t('FooterLinksTitleCompany')}</h4>
              <li>
                <Link href="#">{t('FooterLinksTitleAbout')}</Link>
              </li>
              <li>
                <Link href="#">{t('FooterLinksFeatures')}</Link>
              </li>
              <li>
                <Link href="#">{t('FooterLinksWorks')}</Link>
              </li>
              <li>
                <Link href="#">{t('Career')}</Link>
              </li>
            </ul>

            <ul className="help">
              <h4>{t('FooterLinksTitleHelp')}</h4>
              <li>
                <Link href="#">{t('FooterLinksCustomer')}</Link>
              </li>
              <li>
                <Link href="#">{t('FooterLinksDelivery')}</Link>
              </li>
              <li>
                <Link href="#">{t('FooterLinksTerm')}</Link>
              </li>
              <li>
                <Link href="#">{t('FooterLinksPrivacy')}</Link>
              </li>
            </ul>

            <ul className="help">
              <h4>{t('FooterLinksTitleTerms')}</h4>
              <li>
                <Link href="#">{t('FooterLinksAccount')}</Link>
              </li>
              <li>
                <Link href="#">{t('FooterLinksShipping')}</Link>
              </li>
              <li>
                <Link href="#">{t('FooterLinksReturns')}</Link>
              </li>
              <li>
                <Link href="#">{t('FooterLinksContact')}</Link>
              </li>
            </ul>

            <ul className="help">
              <h4>{t('FooterLinksResoruces')}</h4>
              <li>
                <Link href="#">{t('FooterLinksBooks')}</Link>
              </li>
              <li>
                <Link href="#">{t('FooterLinksDevelopment')}</Link>
              </li>
              <li>
                <Link href="#">{t('FooterLinksReturns')}</Link>
              </li>
              <li>
                <Link href="#">{t('FooterLinksBlog')}</Link>
              </li>
              <li>
                <Link href="#">{t('Youtube Playlist')}</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="footer-reserved">
          <p>{t('FooterReserved')}</p>
          <div className="payment">
            <div className="payment-item">
              <svg
                width="66"
                height="49"
                viewBox="0 0 66 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_dd_20_320)">
                  <rect x="10" y="5" width="46.6143" height="30.0304" rx="5.37857" fill="white" />
                  <rect
                    x="9.88795"
                    y="4.88795"
                    width="46.8384"
                    height="30.2545"
                    rx="5.49062"
                    stroke="#D6DCE5"
                    strokeWidth="0.224107"
                  />
                  <path
                    d="M33.0221 15.121L30.8479 25.2845H28.2188L30.3933 15.121H33.0221ZM44.0838 21.6836L45.468 17.8669L46.2645 21.6836H44.0838ZM47.0172 25.2845H49.4491L47.327 15.121H45.0823C44.5779 15.121 44.1523 15.4144 43.9628 15.8667L40.0184 25.2845H42.7794L43.3275 23.7668H46.7007L47.0172 25.2845ZM40.1554 21.9661C40.1667 19.2836 36.4458 19.1359 36.4715 17.9376C36.4792 17.5725 36.827 17.1852 37.5865 17.0858C37.9638 17.0366 39.0012 16.999 40.1792 17.541L40.6405 15.3857C40.0078 15.1561 39.1936 14.9351 38.1809 14.9351C35.5824 14.9351 33.7533 16.3167 33.7379 18.295C33.7215 19.758 35.0436 20.5745 36.0398 21.0609C37.0641 21.5591 37.4083 21.8782 37.4038 22.3238C37.397 23.0061 36.5867 23.3065 35.8307 23.3184C34.5086 23.3393 33.7414 22.9617 33.1299 22.6767L32.6535 24.9037C33.2676 25.1858 34.4015 25.4309 35.5779 25.4435C38.3395 25.4435 40.1464 24.0789 40.1554 21.9661ZM29.2652 15.121L25.0055 25.2845H22.2258L20.1298 17.1733C20.0024 16.6738 19.8917 16.491 19.5047 16.2803C18.8733 15.9377 17.8294 15.6157 16.911 15.4163L16.9737 15.121H21.4474C22.0174 15.121 22.5305 15.5006 22.6598 16.1571L23.767 22.0388L26.5029 15.121H29.2652Z"
                    fill="#1434CB"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_dd_20_320"
                    x="0.811593"
                    y="0.293736"
                    width="64.9911"
                    height="48.4071"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="0.448214" />
                    <feGaussianBlur stdDeviation="2.24107" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_20_320"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4.48214" />
                    <feGaussianBlur stdDeviation="4.48214" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_20_320"
                      result="effect2_dropShadow_20_320"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_20_320"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="payment-item">
              <svg
                width="66"
                height="49"
                viewBox="0 0 66 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_dd_20_322)">
                  <rect
                    x="9.61426"
                    y="5"
                    width="46.6143"
                    height="30.0304"
                    rx="5.37857"
                    fill="white"
                  />
                  <rect
                    x="9.5022"
                    y="4.88795"
                    width="46.8384"
                    height="30.2545"
                    rx="5.49062"
                    stroke="#D6DCE5"
                    strokeWidth="0.224107"
                  />
                  <path d="M36.2699 13.8484H29.4066V26.1819H36.2699V13.8484Z" fill="#FF5F00" />
                  <path
                    d="M29.8425 20.0151C29.8414 18.8273 30.1105 17.6548 30.6296 16.5864C31.1486 15.518 31.9039 14.5817 32.8383 13.8484C31.6812 12.9389 30.2915 12.3732 28.8282 12.2162C27.3648 12.0591 25.8867 12.3169 24.563 12.9602C23.2392 13.6034 22.1231 14.6061 21.3423 15.8537C20.5614 17.1013 20.1473 18.5434 20.1473 20.0151C20.1473 21.4869 20.5614 22.929 21.3423 24.1766C22.1231 25.4241 23.2392 26.4269 24.563 27.0701C25.8867 27.7133 27.3648 27.9712 28.8282 27.8141C30.2915 27.657 31.6812 27.0914 32.8383 26.1819C31.9039 25.4485 31.1486 24.5122 30.6296 23.4438C30.1105 22.3754 29.8414 21.2029 29.8425 20.0151Z"
                    fill="#EB001B"
                  />
                  <path
                    d="M45.5289 20.0151C45.5289 21.4869 45.1149 22.929 44.3341 24.1765C43.5533 25.4241 42.4372 26.4268 41.1135 27.0701C39.7897 27.7133 38.3117 27.9712 36.8484 27.8141C35.385 27.657 33.9954 27.0914 32.8383 26.1819C33.7719 25.4478 34.5266 24.5113 35.0455 23.4431C35.5645 22.3749 35.8341 21.2028 35.8341 20.0151C35.8341 18.8275 35.5645 17.6554 35.0455 16.5872C34.5266 15.5189 33.7719 14.5825 32.8383 13.8484C33.9954 12.9389 35.385 12.3732 36.8484 12.2162C38.3117 12.0591 39.7897 12.3169 41.1135 12.9602C42.4372 13.6034 43.5533 14.6062 44.3341 15.8537C45.1149 17.1013 45.5289 18.5434 45.5289 20.0151Z"
                    fill="#F79E1B"
                  />
                  <path
                    d="M44.7805 24.8756V24.6231H44.8824V24.5716H44.6231V24.6231H44.7249V24.8756H44.7805ZM45.284 24.8756V24.5711H45.2045L45.1131 24.7805L45.0216 24.5711H44.9421V24.8756H44.9982V24.6459L45.0839 24.8439H45.1421L45.2279 24.6454V24.8756H45.284Z"
                    fill="#F79E1B"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_dd_20_322"
                    x="0.425851"
                    y="0.293736"
                    width="64.9911"
                    height="48.4071"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="0.448214" />
                    <feGaussianBlur stdDeviation="2.24107" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_20_322"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4.48214" />
                    <feGaussianBlur stdDeviation="4.48214" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_20_322"
                      result="effect2_dropShadow_20_322"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_20_322"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>

            <div className="payment-item">
              <svg
                width="66"
                height="49"
                viewBox="0 0 66 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_dd_20_324)">
                  <rect
                    x="9.22852"
                    y="5"
                    width="46.6143"
                    height="30.0304"
                    rx="5.37857"
                    fill="white"
                  />
                  <rect
                    x="9.11646"
                    y="4.88795"
                    width="46.8384"
                    height="30.2545"
                    rx="5.49062"
                    stroke="#D6DCE5"
                    strokeWidth="0.224107"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.4257 15.646H16.7382C16.5543 15.646 16.3979 15.7796 16.3692 15.9611L15.2822 22.8518C15.2606 22.9879 15.3659 23.1104 15.5039 23.1104H16.7869C16.9708 23.1104 17.1272 22.9768 17.1559 22.7949L17.4491 20.9364C17.4774 20.7544 17.6342 20.6209 17.8177 20.6209H18.6685C20.4388 20.6209 21.4605 19.7643 21.7274 18.0669C21.8476 17.3243 21.7325 16.7408 21.3846 16.332C21.0027 15.8835 20.3251 15.646 19.4257 15.646ZM19.7358 18.1627C19.5888 19.127 18.852 19.127 18.1395 19.127H17.734L18.0185 17.3261C18.0354 17.2174 18.1297 17.1372 18.2397 17.1372H18.4256C18.9109 17.1372 19.3688 17.1372 19.6054 17.4138C19.7463 17.5789 19.7896 17.824 19.7358 18.1627ZM27.4593 18.1318H26.1723C26.0626 18.1318 25.9679 18.212 25.951 18.3209L25.8941 18.6808L25.804 18.5504C25.5254 18.146 24.9042 18.0109 24.2841 18.0109C22.8618 18.0109 21.6472 19.0879 21.4106 20.5988C21.2877 21.3523 21.4625 22.0729 21.89 22.5755C22.2823 23.0375 22.8435 23.2301 23.511 23.2301C24.6569 23.2301 25.2925 22.4933 25.2925 22.4933L25.235 22.8509C25.2134 22.9877 25.3187 23.1102 25.4558 23.1102H26.6151C26.7995 23.1102 26.955 22.9766 26.9841 22.7948L27.6797 18.3904C27.7017 18.2549 27.5968 18.1318 27.4593 18.1318ZM25.6653 20.6364C25.5411 21.3715 24.9575 21.865 24.2134 21.865C23.8397 21.865 23.5409 21.7452 23.3492 21.5181C23.159 21.2926 23.0866 20.9715 23.1472 20.614C23.2632 19.8851 23.8566 19.3756 24.5894 19.3756C24.9548 19.3756 25.2519 19.4968 25.4476 19.726C25.6436 19.9574 25.7215 20.2804 25.6653 20.6364ZM33.0202 18.1317H34.3135C34.4947 18.1317 34.6003 18.3348 34.4974 18.4833L30.196 24.6914C30.1263 24.792 30.0116 24.8518 29.889 24.8518H28.5973C28.4155 24.8518 28.3093 24.6471 28.4146 24.4982L29.7539 22.6078L28.3294 18.4279C28.2802 18.2826 28.3875 18.1317 28.542 18.1317H29.8128C29.978 18.1317 30.1236 18.24 30.1713 18.398L30.9272 20.9226L32.711 18.2955C32.7809 18.1929 32.8969 18.1317 33.0202 18.1317Z"
                    fill="#253B80"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M47.0427 22.8512L48.1457 15.8345C48.1626 15.7256 48.257 15.6454 48.3666 15.645H49.6083C49.7455 15.645 49.8507 15.7679 49.8291 15.9039L48.7414 22.7943C48.7131 22.9762 48.5567 23.1098 48.3725 23.1098H47.2635C47.1264 23.1098 47.0211 22.9872 47.0427 22.8512ZM38.5958 15.6454H35.9078C35.7243 15.6454 35.5679 15.779 35.5392 15.9605L34.4523 22.8512C34.4306 22.9872 34.5359 23.1098 34.6732 23.1098H36.0524C36.1806 23.1098 36.2903 23.0163 36.3103 22.8891L36.6187 20.9358C36.6471 20.7538 36.8038 20.6203 36.9873 20.6203H37.8377C39.6084 20.6203 40.6298 19.7637 40.897 18.0663C41.0176 17.3237 40.9017 16.7402 40.554 16.3314C40.1723 15.8829 39.4953 15.6454 38.5958 15.6454ZM38.9059 18.1621C38.7593 19.1264 38.0224 19.1264 37.3096 19.1264H36.9044L37.1893 17.3255C37.2063 17.2168 37.2997 17.1366 37.4101 17.1366H37.596C38.081 17.1366 38.5393 17.1366 38.7757 17.4132C38.9168 17.5783 38.9597 17.8234 38.9059 18.1621ZM46.6287 18.1312H45.3426C45.232 18.1312 45.1382 18.2114 45.1216 18.3203L45.0647 18.6802L44.9743 18.5498C44.6957 18.1454 44.0749 18.0103 43.4548 18.0103C42.0325 18.0103 40.8182 19.0873 40.5817 20.5981C40.4591 21.3517 40.6331 22.0723 41.0607 22.5748C41.4536 23.0369 42.0141 23.2294 42.6817 23.2294C43.8276 23.2294 44.463 22.4927 44.463 22.4927L44.4057 22.8503C44.384 22.9871 44.4893 23.1096 44.6274 23.1096H45.7861C45.9696 23.1096 46.126 22.976 46.1548 22.7941L46.8507 18.3898C46.872 18.2543 46.7667 18.1312 46.6287 18.1312ZM44.8349 20.6358C44.7114 21.3709 44.1271 21.8644 43.3828 21.8644C43.0098 21.8644 42.7104 21.7446 42.5186 21.5175C42.3284 21.292 42.2569 20.9709 42.3167 20.6134C42.4333 19.8845 43.026 19.375 43.7588 19.375C44.1243 19.375 44.4213 19.4962 44.6172 19.7253C44.8139 19.9568 44.8918 20.2798 44.8349 20.6358Z"
                    fill="#179BD7"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_dd_20_324"
                    x="0.0401087"
                    y="0.293736"
                    width="64.9911"
                    height="48.4071"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="0.448214" />
                    <feGaussianBlur stdDeviation="2.24107" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_20_324"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4.48214" />
                    <feGaussianBlur stdDeviation="4.48214" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_20_324"
                      result="effect2_dropShadow_20_324"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_20_324"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>

            <div className="payment-item">
              <svg
                width="66"
                height="49"
                viewBox="0 0 66 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_dd_20_326)">
                  <rect
                    x="9.8429"
                    y="5"
                    width="46.6143"
                    height="30.0304"
                    rx="5.37857"
                    fill="white"
                  />
                  <rect
                    x="9.73084"
                    y="4.88795"
                    width="46.8384"
                    height="30.2545"
                    rx="5.49062"
                    stroke="#D6DCE5"
                    strokeWidth="0.224107"
                  />
                  <path
                    d="M24.9199 16.0817C25.2309 15.6927 25.4419 15.1704 25.3863 14.6367C24.931 14.6594 24.3755 14.9371 24.0538 15.3264C23.7651 15.6597 23.5095 16.2039 23.5761 16.7152C24.0871 16.7595 24.5977 16.4598 24.9199 16.0817Z"
                    fill="#000008"
                  />
                  <path
                    d="M25.3805 16.8151C24.6383 16.7709 24.0073 17.2363 23.6529 17.2363C23.2983 17.2363 22.7556 16.8373 22.1686 16.8481C21.4045 16.8593 20.6956 17.2913 20.3079 17.9784C19.5105 19.3528 20.0975 21.3916 20.8729 22.511C21.2495 23.0648 21.7034 23.6746 22.3014 23.6527C22.8664 23.6305 23.0879 23.2868 23.7747 23.2868C24.461 23.2868 24.6605 23.6527 25.2587 23.6416C25.8789 23.6305 26.2667 23.0875 26.6433 22.5332C27.0753 21.9019 27.2522 21.2923 27.2633 21.2588C27.2522 21.2477 26.0672 20.7932 26.0562 19.4302C26.0451 18.2889 26.9865 17.746 27.0309 17.7123C26.4992 16.926 25.6685 16.8373 25.3805 16.8151Z"
                    fill="#000008"
                  />
                  <path
                    d="M31.8425 15.2705C33.4556 15.2705 34.5788 16.3824 34.5788 18.0013C34.5788 19.6259 33.4325 20.7435 31.8021 20.7435H30.0161V23.5837H28.7258V15.2705L31.8425 15.2705ZM30.0161 19.6604H31.4967C32.6202 19.6604 33.2596 19.0556 33.2596 18.007C33.2596 16.9586 32.6202 16.3594 31.5025 16.3594H30.0161V19.6604Z"
                    fill="#000008"
                  />
                  <path
                    d="M34.9159 21.8612C34.9159 20.8011 35.7283 20.1501 37.1686 20.0695L38.8277 19.9716V19.505C38.8277 18.8309 38.3725 18.4276 37.6122 18.4276C36.8919 18.4276 36.4426 18.7732 36.3332 19.3148H35.158C35.2271 18.2201 36.1603 17.4136 37.6582 17.4136C39.1273 17.4136 40.0663 18.1914 40.0663 19.4069V23.5837H38.8737V22.5871H38.845C38.4937 23.2611 37.7274 23.6874 36.9324 23.6874C35.7456 23.6874 34.9159 22.95 34.9159 21.8612ZM38.8277 21.3139V20.8358L37.3355 20.9279C36.5923 20.9798 36.1719 21.3081 36.1719 21.8266C36.1719 22.3566 36.6097 22.7023 37.278 22.7023C38.1478 22.7023 38.8277 22.1031 38.8277 21.3139Z"
                    fill="#000008"
                  />
                  <path
                    d="M41.1922 25.8133V24.8051C41.2842 24.8281 41.4915 24.8281 41.5953 24.8281C42.1714 24.8281 42.4825 24.5861 42.6725 23.964C42.6725 23.9524 42.7821 23.5953 42.7821 23.5895L40.593 17.5231H41.9409L43.4735 22.4546H43.4964L45.029 17.5231H46.3425L44.0724 23.9005C43.5542 25.3697 42.955 25.8421 41.6991 25.8421C41.5953 25.8421 41.2842 25.8305 41.1922 25.8133Z"
                    fill="#000008"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_dd_20_326"
                    x="0.654489"
                    y="0.293736"
                    width="64.9911"
                    height="48.4071"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="0.448214" />
                    <feGaussianBlur stdDeviation="2.24107" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_20_326"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4.48214" />
                    <feGaussianBlur stdDeviation="4.48214" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_20_326"
                      result="effect2_dropShadow_20_326"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_20_326"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>

            <div className="payment-item">
              <svg
                width="66"
                height="49"
                viewBox="0 0 66 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_dd_20_328)">
                  <rect
                    x="9.45715"
                    y="5"
                    width="46.6143"
                    height="30.0304"
                    rx="5.37857"
                    fill="white"
                  />
                  <rect
                    x="9.3451"
                    y="4.88795"
                    width="46.8384"
                    height="30.2545"
                    rx="5.49062"
                    stroke="#D6DCE5"
                    strokeWidth="0.224107"
                  />
                  <path
                    d="M31.751 23.6143H30.7025V15.4561H33.482C34.1864 15.4561 34.7871 15.6909 35.2785 16.1605C35.7809 16.6301 36.0321 17.2035 36.0321 17.8806C36.0321 18.5741 35.7809 19.1475 35.2785 19.6116C34.7925 20.0758 34.1919 20.3051 33.482 20.3051H31.751V23.6143ZM31.751 16.4608V19.3058H33.5038C33.9188 19.3058 34.2683 19.1639 34.5414 18.8854C34.8198 18.6069 34.9618 18.2683 34.9618 17.8861C34.9618 17.5093 34.8198 17.1762 34.5414 16.8977C34.2683 16.6083 33.9243 16.4663 33.5038 16.4663H31.751V16.4608Z"
                    fill="#3C4043"
                  />
                  <path
                    d="M38.7732 17.8478C39.5487 17.8478 40.1603 18.0553 40.608 18.4703C41.0558 18.8854 41.2797 19.4533 41.2797 20.1741V23.6143H40.2804V22.8389H40.2367C39.8053 23.4778 39.2265 23.7945 38.5057 23.7945C37.8886 23.7945 37.3753 23.6143 36.9603 23.2484C36.5453 22.8826 36.3378 22.4293 36.3378 21.8833C36.3378 21.3044 36.5562 20.8457 36.9931 20.5072C37.4299 20.1632 38.0142 19.9939 38.7405 19.9939C39.363 19.9939 39.8763 20.1085 40.2749 20.3379V20.0976C40.2749 19.7318 40.1329 19.426 39.8435 19.1693C39.5541 18.9127 39.2156 18.7871 38.8279 18.7871C38.2436 18.7871 37.7794 19.0328 37.4408 19.5297L36.518 18.9509C37.0258 18.2137 37.7794 17.8478 38.7732 17.8478ZM37.419 21.8996C37.419 22.1727 37.5337 22.402 37.7685 22.5822C37.9978 22.7624 38.2709 22.8553 38.5821 22.8553C39.0244 22.8553 39.4176 22.6914 39.7616 22.3638C40.1056 22.0362 40.2804 21.6539 40.2804 21.2116C39.9527 20.955 39.4995 20.8239 38.9152 20.8239C38.4893 20.8239 38.1343 20.9276 37.8504 21.1297C37.561 21.3427 37.419 21.5993 37.419 21.8996Z"
                    fill="#3C4043"
                  />
                  <path
                    d="M46.9807 18.0281L43.4858 26.0662H42.4046L43.7043 23.2539L41.3999 18.0281H42.5412L44.2012 22.0362H44.223L45.8394 18.0281H46.9807Z"
                    fill="#3C4043"
                  />
                  <path
                    d="M27.5806 19.6444C27.5806 19.3026 27.55 18.9755 27.4932 18.6609H23.0985V20.4629L25.6295 20.4635C25.5268 21.0631 25.1965 21.5742 24.6903 21.9149V23.0841H26.1969C27.0766 22.2699 27.5806 21.0664 27.5806 19.6444Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M24.6908 21.915C24.2714 22.1979 23.7314 22.3633 23.0996 22.3633C21.8791 22.3633 20.8438 21.5409 20.473 20.4324H18.9189V21.6381C19.6888 23.166 21.2713 24.2145 23.0996 24.2145C24.3632 24.2145 25.4247 23.7989 26.1974 23.0836L24.6908 21.915Z"
                    fill="#34A853"
                  />
                  <path
                    d="M20.3266 19.5379C20.3266 19.2266 20.3785 18.9258 20.473 18.6429V17.4372H18.9189C18.6005 18.069 18.4214 18.7821 18.4214 19.5379C18.4214 20.2937 18.601 21.0068 18.9189 21.6386L20.473 20.4329C20.3785 20.15 20.3266 19.8492 20.3266 19.5379Z"
                    fill="#FABB05"
                  />
                  <path
                    d="M23.0996 16.712C23.7892 16.712 24.4068 16.9495 24.8945 17.4137L26.2296 16.0797C25.4187 15.3245 24.3615 14.8608 23.0996 14.8608C21.2719 14.8608 19.6888 15.9093 18.9189 17.4372L20.473 18.6429C20.8437 17.5344 21.8791 16.712 23.0996 16.712Z"
                    fill="#E94235"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_dd_20_328"
                    x="0.268746"
                    y="0.293736"
                    width="64.9911"
                    height="48.4071"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="0.448214" />
                    <feGaussianBlur stdDeviation="2.24107" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_20_328"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4.48214" />
                    <feGaussianBlur stdDeviation="4.48214" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_20_328"
                      result="effect2_dropShadow_20_328"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_20_328"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
