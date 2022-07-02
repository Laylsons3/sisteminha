import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { app } from '../firebaseConfig';
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
 } from 'firebase/auth';
import { useRouter } from 'next/router';

export default function CadastrarUsuario() {

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const router = useRouter();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
        console.log(res.user)
        sessionStorage.setItem('Token', res.user.accessToken)
        router.push('/')
    })
  }

  const signUpWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
    .then((res) => {
        sessionStorage.setItem('Token', res.user.accessToken)
        console.log(res.user)
        router.push('/')
    })
  }

  useEffect(() => {
    let token = sessionStorage.getItem('Token')
    if (token){
        router.push('/')
    }
  }, [router])

  return (
    <div>
      <Header title="Cadastrar Usuário" />

      <main>
        <div className='flex flex-col gap-2 items-center mt-20 justify-center'>
          <h1 className='text-2xl font-bold'>Cadastrar</h1>
          <input className='p-1 rounded text-zinc-800' type="email" placeholder='E-mail' onChange={e => setEmail(e.target.value)} value={email} />
          <input className='p-1 rounded text-zinc-800' type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} value={password} />
        <button
        onClick={signUp}
        className='bg-zinc-600 text-zinc-200 px-6 py-1 rounded hover:bg-zinc-700 transition-colors'
        type="submit">Cadastrar</button>
        <button
        onClick={signUpWithGoogle}
        className='bg-zinc-600 text-zinc-200 px-6 py-1 rounded hover:bg-zinc-700 transition-colors'
        type="submit">Entrar com Google</button>


        </div>

      </main>

      <footer>

      </footer>
    </div>
  )
}
