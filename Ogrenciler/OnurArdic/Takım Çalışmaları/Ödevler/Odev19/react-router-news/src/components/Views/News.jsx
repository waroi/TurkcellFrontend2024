import { Outlet } from 'react-router-dom'
import { Card, CardWrapper } from './styled'

const News = ({ onData }) => {
  console.log(onData)
  return (
    <>
      <section className="news">
        <div className="news-wrapper container mt-5">
          <h3 className="text-center">Tüm Haberler</h3>

          <CardWrapper className="card-wrapper d-flex">
            {onData?.map((item) => {
              return (
                <Card className="card" key={item.url}>
                  <img src={item.urlToImage ? item.urlToImage : 'bg.png'} alt={item.title} />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <a href={item.url} className="btn btn-primary">
                      Habere Git
                    </a>
                  </div>
                </Card>
              )
            })}
          </CardWrapper>
        </div>
      </section>
      <Outlet />
    </>
  )
}

export default News
