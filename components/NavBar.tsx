import { BiShuffle } from "react-icons/bi";
import { MdEditNote } from "react-icons/md";
import { TbCards } from "react-icons/tb";

const NavBar = () => {

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
        <li>
            <button 
                className="flex justify-center items-center gap-2"
                onClick={() => viewDecks()}
            >Decks<TbCards/></button>
        </li>
    </ul>
  )
}

export default NavBar