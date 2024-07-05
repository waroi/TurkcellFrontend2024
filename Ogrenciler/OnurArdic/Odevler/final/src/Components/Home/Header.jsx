'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const Header = () => {
  const router = useRouter()
  const [country, setCountry] = useState(router.locale || 'tr')

  const handleChangeCountry = (e) => {
    const selectedCountry = e.target.value
    setCountry(selectedCountry)
    router.push({ locale: selectedCountry })
  }

  return (
    <>
      <Link href={`${country}/deneme`} locale="en">
        Sayfaya git
      </Link>
      <select id="country" onChange={handleChangeCountry} value={country}>
        <option value="tr">TR</option>
        <option value="en">EN</option>
      </select>
    </>
  )
}

export default Header
