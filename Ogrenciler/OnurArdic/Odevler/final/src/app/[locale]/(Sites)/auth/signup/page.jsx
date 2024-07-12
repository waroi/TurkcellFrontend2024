'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { Register } from '@/firebase'
import './sign.scss'
import { useLocale } from 'next-intl'
import { useFormik } from 'formik'
import { signupSchema } from '@/schemas'

const SignUpForm = () => {
  const router = useRouter()
  const locale = useLocale()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signupSchema,
    onSubmit: async (values) => {
      try {
        const userInfo = await Register(values.email, values.password)
        if (userInfo) {
          toast.success('Başarıyla kayıt oldunuz, giriş sayfasına aktarılıyorsunuz.')
          setTimeout(() => {
            router.push(`/${locale}/auth/login`)
          }, 2000)
        }
      } catch (error) {
        toast.error(error.message)
      }
    },
  })

  return (
    <section className="register">
      <div className="register-wrapper">
        <div className="card">
          <h1 className="title">Kayıt Ol</h1>
          <form onSubmit={formik.handleSubmit} className="register-form">
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
              placeholder="Şifre"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
            <button type="submit" disabled={formik.isSubmitting}>
              Kayıt Ol
            </button>

            <p className="sign-text">
              Hesabın var mı? <Link href={`/${locale}/auth/login`}>Giriş Yap</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SignUpForm
