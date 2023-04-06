import Flashcard from '@/components/Flashcard'
import NavBar from '@/components/NavBar'
import { useRouter } from 'next/router'

const Study = () => {
  const router = useRouter()
  const { deckId } = router.query
  return (
    <div className='flex flex-col justify-center gap-12 items-center h-screen'>
      Deck Id: {deckId}
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

export default Study