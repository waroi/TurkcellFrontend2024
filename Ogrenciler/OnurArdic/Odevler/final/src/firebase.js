import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import toast from 'react-hot-toast'

const firebaseConfig = {
  apiKey: 'AIzaSyAfuh-0eA_B2SLZEWemUqnn1azAu7BZd90',
  authDomain: 'e-commerce-9ee17.firebaseapp.com',
  projectId: 'e-commerce-9ee17',
  storageBucket: 'e-commerce-9ee17.appspot.com',
  messagingSenderId: '315124560952',
  appId: '1:315124560952:web:d331819ee891a1cc4a62cd',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth()

export const Register = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    return user
  } catch {
    toast.error(error.message)
  }
}
export const Login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    return user
  } catch (error) {
    console.error(error)
    error && toast.error('Giriş Sırasında Hata Oluştu Bilgileri Kontrol Ediniz ve Tekrar Deneyiniz')
  }
}

export const Logout = async () => {
  try {
    await signOut(auth)
    return true
  } catch (error) {
    toast.error(error)
  }
}
