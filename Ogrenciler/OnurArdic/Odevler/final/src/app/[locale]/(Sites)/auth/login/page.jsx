'use client'

import { Login } from '@/firebase'
import { login as LoginHandle } from '../../../../lib/features/authslice'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import toast from 'react-hot-toast'
import './login.scss'
import { useLocale } from 'next-intl'
import { useFormik } from 'formik'
import { basicSchema } from '@/schemas'

const LoginForm = () => {
  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()
  const router = useRouter()
  const locale = useLocale()

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: basicSchema,
    onSubmit: async (values) => {
      try {
        const userInfo = await Login(values.email, values.password)

        if (userInfo) {
          dispatch(LoginHandle(true))
          toast.success('Başarıyla Giriş Yapıldı Yönlendirilme Yapılıyor')
          setTimeout(() => {
            router.push('/')
          }, 2000)
        }
      } catch (error) {
        if (error.code === 'auth/invalid-credential') {
          toast.error('Hatalı Giriş Bilgileri')
        }
      }
    },
  })

  return (
    <section className="login">
      <div className="login-wrapper ">
        <div className="card">
          <h1 className="title">Login</h1>
          <form onSubmit={formik.handleSubmit} className="login-form">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />

            <button type="submit" disabled={formik.isSubmitting}>
              Giriş Yap
            </button>

            <p className="sign-text">
              Hesabın yok mu ? <Link href={`/${locale}/auth/signup`}>Kayıt Ol</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default LoginForm
