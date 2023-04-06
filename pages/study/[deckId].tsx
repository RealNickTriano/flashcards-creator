import Flashcard from '@/components/Flashcard'
import StudyBar from '@/components/StudyBar'
import { useRouter } from 'next/router'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'
import { HiOutlineArrowLongLeft} from 'react-icons/hi2'

const Study = () => {
  const router = useRouter()
  const { deckId } = router.query

  return (
    <div className='flex flex-col justify-center gap-12 items-center h-screen'>
      <div className='w-[900px] flex flex-col justify-center gap-12 items-center'>
        <h1 className='text-3xl font-medium'>Java Chapter 1: Variables and Data Types</h1>
        <StudyBar></StudyBar>
        <div className='flex flex-col justify-center items-center gap-2'>
          <Flashcard
            question={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar tortor massa, varius auctor ligula sollicitudin sit amet. Donec mollis sollicitudin velit, a rhoncus augue gravida non."}
            answer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar tortor massa, varius auctor ligula sollicitudin sit amet. Donec "}
            flip={false}
            edit={false}
          ></Flashcard>
          <div className='flex justify-between items-center w-full'>
            <button>
              <HiOutlineArrowLongLeft size={60}   
                className='text-blue-600'
                onClick={() => console.log("Left")}
              />
            </button>
            <button>
              <HiOutlineArrowLongRight size={60} 
                className='text-blue-600'
                onClick={() => console.log("Right")}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Study