import { useState } from "react"
import { MdEditNote } from "react-icons/md";

const Flashcard = ({ question, answer, flip, edit }) => {
    const [flipped, setFlipped] = useState(flip ? flip : false);
    const [editable, setEditable] = useState(edit ? edit : false);

    // Need this to stop parent button from also activating
    const handleEdit = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setEditable(!editable);
        // TODO
        console.log("Setting editable...")
    }

  return (
    <button 
        className="h-[500px] w-[900px] shadow-md bg-white flex flex-col justify-start items-center px-16 py-8 gap-6 rounded-md"
        onClick={() => setFlipped(!flipped)}
    >
        <div className="grid grid-cols-3 justify-center items-center w-full">
            <h1 className="font-medium text-4xl col-start-2">{!flipped ? "Question" : "Answer"}</h1>
            <button 
                    className="flex justify-center items-center gap-2 text-blue-600 place-self-end"
                    onClick={ handleEdit }
                ><MdEditNote size={30}/>
            </button>
        </div>
        <div className="font-normal text-4xl">
            { !flipped ? question : answer }
        </div>
    </button>
  )
}

export default Flashcard