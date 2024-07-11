'use client'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLocale } from '../../../app/lib/features/localeslice'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import './Navbar.scss'
import ThemeButton from '@/Components/ui/ThemeButton'
import Cart from './Cart'
import { logout } from '@/app/lib/features/authslice'
import toast from 'react-hot-toast'

const Header = () => {
  const user = useSelector((state) => state.auth.user)
  const router = useRouter()
  const pathname = usePathname()
  const dispatch = useDispatch()
  const [locale, setOnLocale] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const logoutHandle = async () => {
    dispatch(logout(false))
    toast.success('Logout successful')
  }
  const t = useTranslations('Navbar')
  return (
    <nav className="navbar">
      <div className="navbar-top">
        <h6>
          {t('NavbarTopTitle')}{' '}
          <Link href={createLocalizedLink('/auth/login')} className="login-btn">
            {t('Sign')}
          </Link>
        </h6>
      </div>
      <div className="navbar-wrapper container">
        <div className="menu-toggle" onClick={toggleMenu}>
          <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
        </div>
        <div className="logo">
          <Link href={createLocalizedLink('/')}>{t('NavbarLogo')}</Link>
        </div>

        <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <Link href={createLocalizedLink('/shop')}>{t('LinkShop')}</Link>{' '}
          <Link href={createLocalizedLink('/shop')}>{t('LinkOnSale')}</Link>
          <Link href={createLocalizedLink('/shop')}>{t('LinkArrivals')}</Link>
          <Link href={createLocalizedLink('/shop')}>{t('Brands')}</Link>
          <div className="navbar-search">
            <i className="bi bi-search"></i>
            <input type="text" placeholder={t('Search')} />
          </div>
          <div className="buttons-wrapper">
            <select id="country" onChange={handleChangeCountry} value={locale}>
              <option value="tr">TR</option>
              <option value="en">EN</option>
            </select>
            <ThemeButton />
          </div>
        </div>

        <div className="user-buttons">
          <button className="search">
            <i className="bi bi-search"></i>
          </button>

          {user ? (
            <button className="cart-btn" onClick={toggleSidebar}>
              <i className="bi bi-cart-plus"></i>
            </button>
          ) : (
            ''
          )}

          {user ? (
            <button className="cart-btn" onClick={logoutHandle}>
              <i className="bi bi-box-arrow-left"></i>
            </button>
          ) : (
            <Link href={createLocalizedLink('/auth/login')} className="login-btn">
              <i className="bi bi-person-circle"></i>
            </Link>
          )}
        </div>
      </div>
      <Cart isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </nav>
  )
}

export default Header
