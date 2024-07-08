import { useState, useEffect } from 'react'

const SortOption = ({ initialComments, setSortedComments }) => {
  const [sortOrder, setSortOrder] = useState('latest')

  const sortCommentsByDate = (comments, order) => {
    return comments.sort((a, b) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)
      return order === 'latest' ? dateB - dateA : dateA - dateB
    })
  }

  useEffect(() => {
    setSortedComments(sortCommentsByDate([...initialComments], sortOrder))
  }, [sortOrder, initialComments, setSortedComments])

  return (
    <select id="sort" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
      <option value="latest">Latest</option>
      <option value="oldest">Oldest</option>
    </select>
  )
}

export default SortOption
