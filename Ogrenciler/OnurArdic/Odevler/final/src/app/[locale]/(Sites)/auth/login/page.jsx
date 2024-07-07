'use client'

import { Login } from '@/firebase'
import { login as LoginHandle } from '../../../../lib/features/authslice'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import toast from 'react-hot-toast'
const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState(null)
  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()
  const router = useRouter()

  const handleLogin = async (e) => {
    try {
      e.preventDefault()
      let userInfo = await Login(email, password)

      if (userInfo) {
        dispatch(LoginHandle(true))
        setTimeout(() => {
          router.push('/')
        }, 2000)
      }
    } catch (error) {
      if (error.code == 'auth/invalid-credential') {
        toast.error('Hatalı Giriş Bilgileri')
      }
    }
  }

  if (user) {
    toast.success('Başarıyla Giriş Yapıldı Yönlendirilme Yapılıyor')
  }
  return (
    <section className="login">
      <div className="login-wrapper ">
        <div className="login-card">
          <h1 className="login-title">Login</h1>
          <form onSubmit={handleLogin} className="login-form">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value.trim())}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value.trim())}
            />
            <button type="submit">Giriş Yap</button>

            <p className="sign-text">
              Hesabın yok mu ? <Link href="/Signup">Kayıt Ol</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default LoginForm
