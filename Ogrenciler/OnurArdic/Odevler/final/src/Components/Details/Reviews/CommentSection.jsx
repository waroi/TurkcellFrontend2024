'use client'
import '../ProductDetails.scss'
import { useState } from 'react'
import CommentModal from '@/Components/ui/CommentModal'
import SortOption from './SortOption'
import CommentsCard from '@/Components/Home/HappyCustomer/CommentsCard'

const CommentSection = ({ initialComments }) => {
  const [sortedComments, setSortedComments] = useState(initialComments)
  const [visibleComments, setVisibleComments] = useState(4) // başlangıçta görünen yorum sayısı

  const handleNewComment = (newComment) => {
    setSortedComments((prevComments) => [newComment, ...prevComments])
  }

  const handleLoadMore = () => {
    setVisibleComments((prevVisibleComments) => prevVisibleComments + 4)
  }

  return (
    <>
      <div className="sort-btn">
        <SortOption initialComments={initialComments} setSortedComments={setSortedComments} />
        <CommentModal onCommentSubmit={handleNewComment} />
      </div>
      <div className="reviews">
        {sortedComments.slice(0, visibleComments).map((comment) => (
          <CommentsCard key={comment.id} comment={comment} />
        ))}
      </div>
      {visibleComments < sortedComments.length && (
        <div className="button-wrapper">
          <button className="load-more-reviews" onClick={handleLoadMore}>
            Load More Reviews
          </button>
        </div>
      )}
    </>
  )
}

export default CommentSection
