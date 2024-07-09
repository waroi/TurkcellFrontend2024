import toast from 'react-hot-toast'

export async function getArrivalItem() {
  const res = await fetch('http://localhost:3000/arrival')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export async function getTopSellingItems() {
  const res = await fetch('http://localhost:3000/topSelling')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export async function getAlsoLike() {
  const res = await fetch('http://localhost:3000/alsolike')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export async function getComments() {
  const res = await fetch('http://localhost:3000/Comments', {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export async function getAllProducts() {
  const res = await fetch('http://localhost:3000/Comments')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export async function getAllData() {
  try {
    const arrivalResponse = await fetch('http://localhost:3000/arrival')
    const topSellingResponse = await fetch('http://localhost:3000/topSelling')
    const alsolikeResponse = await fetch('http://localhost:3000/alsolike')

    if (!arrivalResponse.ok || !topSellingResponse.ok || !alsolikeResponse.ok) {
      throw new Error('Failed to fetch data')
    }

    const arrivalData = await arrivalResponse.json()
    const topSellingData = await topSellingResponse.json()
    const alsolikeData = await alsolikeResponse.json()

    const combinedData = {
      arrival: arrivalData,
      topSelling: topSellingData,
      alsolike: alsolikeData,
    }

    return combinedData
  } catch (error) {
    toast.error('Error fetching data:', error)
    throw error
  }
}
