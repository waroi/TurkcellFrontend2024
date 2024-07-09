import { formatDate } from '@/app/Hooks/formatDate'
import { renderStars } from '@/app/Hooks/renderStar'

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
        <p className="comments-date">{formatDate(comment.date)}</p>
      </div>
    </div>
  )
}

export default CommentsCard
