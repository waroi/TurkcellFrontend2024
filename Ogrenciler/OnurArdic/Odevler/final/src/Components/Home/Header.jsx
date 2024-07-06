'use client'

import { useRouter } from 'next/navigation'
import { usePathname, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setLocale } from '../../app/lib/features/localeslice'
import Link from 'next/link'

const Header = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const dispatch = useDispatch()
  const [locale, setOnLocale] = useState('')

  useEffect(() => {
    const localeFromPath = pathname.split('/')[1]
    setOnLocale(localeFromPath || 'en')
  }, [pathname])

  const handleChangeCountry = (e) => {
    const selectedLocale = e.target.value
    dispatch(setLocale(selectedLocale))
    setOnLocale(selectedLocale)

    const pathWithoutLocale = pathname.split('/').slice(2).join('/')
    const newPath = `/${selectedLocale}/${pathWithoutLocale ? pathWithoutLocale : ''}`
    router.push(newPath)
  }

  const createLocalizedLink = (path) => {
    const currentLocale = locale || 'en'
    return `/${currentLocale}${path}`
  }

  return (
    <>
      <Link href={createLocalizedLink('/deneme')}>Sayfaya git</Link>
      <Link href={createLocalizedLink('/')}>Anasayfaya git</Link>
      <select id="country" onChange={handleChangeCountry} value={locale}>
        <option value="tr">TR</option>
        <option value="en">EN</option>
      </select>
    </>
  )
}

export default Header
