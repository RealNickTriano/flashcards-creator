import dynamic from "next/dynamic";
import { BiShuffle } from "react-icons/bi";
import { MdEditNote } from "react-icons/md";
import { TbCards } from "react-icons/tb";
import { VscDebugRestart } from "react-icons/vsc";

const CountdownTimer = dynamic(() => import("./CountdownTimer"), {
    ssr: false
})

const StudyBar = () => {

    function shuffleCards() {
        // TODO
        console.log("Shuffling...")
    }

    function viewDecks() {
        // TODO
        console.log("Going to Decks")
    }

    function editCurrentCard() {
        // TODO
        console.log("Editing...")
    }

  return (
    <ul className='text-blue-500 font-medium text-xl flex justify-around items-center w-full'>
        <li>
            <button 
                className="flex justify-center items-center gap-2"
                onClick={() => shuffleCards()}
            >Shuffle<BiShuffle/></button>
        </li>
        <li className="text-4xl font-bold bg-blue-200 shadow-md px-2 rounded-sm">
            <CountdownTimer
                startTime={new Date().getTime() + (1 * 60 * 1001)}
            />
        </li>
        <li>
            <button 
                className="flex justify-center items-center gap-2"
                onClick={() => viewDecks()}
            >Restart<VscDebugRestart/></button>
        </li>
    </ul>
  )
}

export default StudyBar