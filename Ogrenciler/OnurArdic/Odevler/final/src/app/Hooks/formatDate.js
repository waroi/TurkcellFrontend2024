export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const date = new Date(dateString)
  return `Posted On ${date.toLocaleDateString('en-US', options)}`
}
