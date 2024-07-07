'use client'
import { getComments } from '@/service/api'
import CommentsCard from './CommentsCard'
import './HappyCustomer.scss'
import { useTranslations } from 'next-intl'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useEffect, useState } from 'react'

//Merhaba hocam, slider için client tarafında kullanmam gerekti, nextjs fetchin işlemlerini client tarafında yapamıyoruz bu yüzden mecburen böyle yaptım :(

const HappyCustomer = () => {
  const [data, setData] = useState([])
  const t = useTranslations('HomePageText')
  useEffect(() => {
    getComments()
      .then((result) => {
        setData(result)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '40px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  }

  return (
    <section className="happy-customers container">
      <div className="happy-customer-wrapper">
        <div className="happy-customer-content">
          <div className="happy-customer-title">
            <h4>{t('HappyCustomersText')}</h4>
          </div>
          <div className="slider-button">
            <button className="prev-btn">
              <i className="bi bi-arrow-left"></i>
            </button>
            <button className="next-btn">
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
        <Slider {...settings} className="carousel">
          {data.map((comment) => (
            <div key={comment.id} className="comment-slide">
              <CommentsCard comment={comment} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default HappyCustomer
