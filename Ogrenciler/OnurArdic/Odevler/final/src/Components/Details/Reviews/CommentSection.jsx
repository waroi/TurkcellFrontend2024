'use client'
import '../ProductDetails.scss'
import { useState } from 'react'
import CommentModal from '@/Components/ui/CommentModal'
import SortOption from './SortOption'
import CommentsCard from '@/Components/Home/HappyCustomer/CommentsCard'
import CustomButton from '@/Components/ui/CustomButton'

const CommentSection = ({ initialComments }) => {
  const [sortedComments, setSortedComments] = useState(initialComments)

  return (
    <div>
      <div className="sort-btn">
        <SortOption initialComments={initialComments} setSortedComments={setSortedComments} />
        <CommentModal />
      </div>
      <div className="reviews">
        {sortedComments.map((comment) => (
          <CommentsCard key={comment.id} comment={comment} />
        ))}
      </div>
      <div className="button-wrapper">
        <CustomButton text={'Load More Views'} />
      </div>
    </div>
  )
}

export default CommentSection
