import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import LoginBtn from '@/components/LoginBtn'
import { useSession } from 'next-auth/react'
import Flashcard from '@/components/Flashcard'
import NavBar from '@/components/StudyBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className='flex flex-col justify-center gap-12 items-center h-screen'>
      Show deck list, create deck, etc.
    </div>
    
  )
}
