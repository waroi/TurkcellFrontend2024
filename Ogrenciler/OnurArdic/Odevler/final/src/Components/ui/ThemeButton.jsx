import React from 'react'
import './ui.scss'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme, selectTheme } from '../../app/lib/features/themeslice'

const ThemeButton = () => {
  const dispatch = useDispatch()
  const theme = useSelector(selectTheme)

  const handleToggleTheme = () => {
    dispatch(toggleTheme())
  }

  return (
    <button className="theme-btn" onClick={handleToggleTheme}>
      {theme === 'light' ? '🌞' : '🌑'}
    </button>
  )
}

export default ThemeButton
