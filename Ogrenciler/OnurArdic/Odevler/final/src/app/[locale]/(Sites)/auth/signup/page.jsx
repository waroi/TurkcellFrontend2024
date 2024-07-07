'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { Register } from '@/firebase'
import { useLocale } from 'next-intl'

const SignUpForm = () => {
  const [onMail, setOnMail] = useState('')
  const [onPassword, setPassword] = useState('')
  const router = useRouter()
  const locale = useLocale()
  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const userInfo = await Register(onMail, onPassword)
      if (userInfo) {
        toast.success('Başarıyla Kayıt Oldunuz Giriş Sayfasına Aktarılıyorsunuz')
        router.push(`/${locale}/auth/login `)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <section className="register">
      <div className="register-wrapper">
        <div className="register-card">
          <h1 className="register-title">Kayıt Ol</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input type="email" placeholder="Email" onChange={(e) => setOnMail(e.target.value)} />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Kayıt Ol</button>

            <p className="text-center text-white text-sm">
              Hesabın var mı ? <Link href="/Login">Giriş Yap</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SignUpForm
