// src/app/[locale]/ClientWrapper.js
'use client'
import { useSelector } from 'react-redux'
import { selectTheme } from '../lib/features/themeslice'
import './globals.scss'

const ClientWrapper = ({ children }) => {
  const theme = useSelector(selectTheme)

  return <div className={theme}>{children}</div>
}

export default ClientWrapper
