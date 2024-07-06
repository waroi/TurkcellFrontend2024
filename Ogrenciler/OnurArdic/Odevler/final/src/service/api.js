export async function getArrivalItem() {
  const res = await fetch('http://localhost:3000/arrival')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
