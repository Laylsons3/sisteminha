import { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useRouter } from 'next/router';

export default function Home() {

  // let router = useRouter();

  // useEffect(() => {
  //   let token = sessionStorage.getItem('Token')
  //   if (!token){
  //       router.push('/cadastrar-usuario')
  //   }
  // }, [router])

  return (
    <div>
      <Header title="Inicio" />
      <main>
        <div className='flex flex-col gap-2 items-center h-44 justify-center'>
          <h1 className='text-2xl font-bold'>Inicio</h1>
        </div>
      </main>

      <footer></footer>
    </div>
  )
}
