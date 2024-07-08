'use client'
import { useState } from 'react'
import './ui.scss'

const CommentModal = ({ onCommentSubmit }) => {
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const [Star, setStar] = useState(1)
  const [showModal, setShowModal] = useState(false)

  const handleCommentSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3000/Comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          comment,
          Star,
          date: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit comment')
      }

      const newComment = await response.json()

      onCommentSubmit(newComment)

      setName('')
      setComment('')
      setStar(1)
      setShowModal(false)
    } catch (error) {
      console.error('Error submitting comment:', error)
    }
  }

  return (
    <div>
      <button className="write-review-modal" onClick={() => setShowModal(true)}>
        Write a Review
      </button>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Write a Review</h2>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input"
            />
            <textarea
              placeholder="Your Comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="textarea"
            />
            <select value={Star} onChange={(e) => setStar(e.target.value)} className="select">
              <option value={1}>1 Star</option>
              <option value={2}>2 Stars</option>
              <option value={3}>3 Stars</option>
              <option value={4}>4 Stars</option>
              <option value={5}>5 Stars</option>
            </select>
            <div className="button-container">
              <button onClick={handleCommentSubmit} className="submit-button">
                Submit
              </button>
              <button onClick={() => setShowModal(false)} className="close-button">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CommentModal
