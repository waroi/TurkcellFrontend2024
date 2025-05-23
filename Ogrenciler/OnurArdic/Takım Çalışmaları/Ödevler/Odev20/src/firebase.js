import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

import { toast } from 'react-hot-toast'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth()

export const Register = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    return user
  } catch (error) {
    toast.error(error.message)
  }
}

export const Login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    return user
  } catch (error) {
    toast.error(error.message)
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
