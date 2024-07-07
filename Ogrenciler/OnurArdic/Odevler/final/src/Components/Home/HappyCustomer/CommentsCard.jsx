const renderStars = (rating) => {
  const fullStars = Math.floor(rating)
  const halfStar = rating % 1 >= 0.5 ? 1 : 0
  const emptyStars = 5 - fullStars - halfStar

  return (
    <>
      {[...Array(fullStars)].map((_, index) => (
        <i key={`full-${index}`} className="bi bi-star-fill"></i>
      ))}
      {halfStar === 1 && <i className="bi bi-star-half"></i>}
      {[...Array(emptyStars)].map((_, index) => (
        <i key={`empty-${index}`} className="bi bi-star"></i>
      ))}
    </>
  )
}

const CommentsCard = ({ comment }) => {
  return (
    <div className="comment-card">
      <div className="stars">{renderStars(comment.Star)}</div>

      <div className="comments-content">
        <h5 className="comments-username">
          {comment.name}
          <i class="bi bi-check-circle-fill"></i>
        </h5>
        <p className="comments-text">"{comment.comment}"</p>
      </div>
    </div>
  )
}

export default CommentsCard
