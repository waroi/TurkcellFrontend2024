import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme, selectTheme } from '../../app/lib/features/themeslice'

const ThemeButton = () => {
  const dispatch = useDispatch()
  const theme = useSelector(selectTheme)

  const handleToggleTheme = () => {
    dispatch(toggleTheme())
  }

  return (
    <button onClick={handleToggleTheme}>
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  )
}

export default ThemeButton
