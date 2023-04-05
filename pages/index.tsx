import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import LoginBtn from '@/components/LoginBtn'
import { useSession } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
    {
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
    }
      <LoginBtn></LoginBtn>
    </>
    
  )
}
