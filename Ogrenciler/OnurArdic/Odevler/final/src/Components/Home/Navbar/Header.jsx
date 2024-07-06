'use client'

import { useRouter } from 'next/navigation'
import { usePathname, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setLocale } from '../../../app/lib/features/localeslice'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import '../Home.scss'
import ThemeButton from '@/Components/ui/ThemeButton'

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
  const t = useTranslations('Navbar')
  return (
    <nav className="navbar ">
      <div className="navbar-top">
        <h6>
          {t('NavbarTopTitle')} {''}
          <Link href={createLocalizedLink('/login')} className="login-btn">
            {t('Sign')}
          </Link>
        </h6>
      </div>
      <div className="navbar-wrapper container">
        <div className="logo">
          <Link href={createLocalizedLink('/')}> {t('NavbarLogo')}</Link>
        </div>

        <div className="navbar-links">
          <Link href={createLocalizedLink('/shop')}>{t('LinkShop')}</Link>{' '}
          {/* //TODO arrow koyulacak */}
          <Link href={createLocalizedLink('/onsale')}> {t('LinkOnSale')}</Link>
          <Link href={createLocalizedLink('/arrivals')}> {t('LinkArrivals')}</Link>
          <Link href={createLocalizedLink('/brands')}> {t('Brands')}</Link>
        </div>

        <div className="navbar-search">
          <i className="bi bi-search"></i>
          <input type="text" placeholder={t('Search')} />
        </div>
        <div className="buttons-wrapper">
          <Link href={createLocalizedLink('/cart')} className="cart-btn">
            <i className="bi bi-cart-plus"></i>
          </Link>
          <Link href={createLocalizedLink('/login')} className="login-btn">
            <i class="bi bi-person-circle"></i>
          </Link>
          <select id="country" onChange={handleChangeCountry} value={locale}>
            <option value="tr">TR</option>
            <option value="en">EN</option>
          </select>

          <ThemeButton />
        </div>
      </div>
    </nav>
  )
}

export default Header
