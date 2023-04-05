import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import LoginBtn from '@/components/LoginBtn'
import { useSession } from 'next-auth/react'
import Flashcard from '@/components/Flashcard'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className='flex flex-col justify-center gap-12 items-center h-screen'>
    {/* {
      session ? 
      <>
        <h1 className="text-3xl font-bold underline">
          Welcome, {session?.user?.name}
        </h1>
      </>
      :
        <h1 className="text-3xl font-bold underline">
          Please Sign In Below
        </h1>
    } */}
      {/* <LoginBtn></LoginBtn> */}
      <NavBar></NavBar>
      <Flashcard
        question={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar tortor massa, varius auctor ligula sollicitudin sit amet. Donec mollis sollicitudin velit, a rhoncus augue gravida non."}
        answer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar tortor massa, varius auctor ligula sollicitudin sit amet. Donec "}
        flip={false}
        edit={false}
      ></Flashcard>
    </div>
    
  )
}
