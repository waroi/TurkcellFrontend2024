import { useTranslations } from 'next-intl'
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

  const t = useTranslations('DetailPage')
  return (
    <select id="sort" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
      <option value="latest">{t('New')}</option>
      <option value="oldest">{t('Oldest')}</option>
    </select>
  )
}

export default SortOption
