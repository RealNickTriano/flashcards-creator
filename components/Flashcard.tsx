import { FunctionComponent, useEffect, useState } from "react"
import { MdEditNote } from "react-icons/md";

type Props = {
    question: string,
    answer: string,
    flip: boolean,
    edit: boolean,
}

const Flashcard: FunctionComponent<Props> = ({ question, answer, flip, edit }) => {
    const [flipped, setFlipped] = useState(flip ? flip : false);
    const [editable, setEditable] = useState(edit ? edit : false);

    // Need this to stop parent button from also activating
    const handleEdit = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        e.preventDefault();
        setEditable(!editable);
        // TODO
        console.log("Setting editable...")
    }

  return (
    <div 
        className="h-[500px] w-[900px] shadow-md bg-white flex flex-col justify-start items-center px-16 py-8 gap-6 rounded-md hover:cursor-pointer text-center"
        onClick={() => setFlipped(!flipped)}
    >
        <div className="grid grid-cols-3 justify-center items-center w-full">
            <h1 className="font-medium text-4xl col-start-2 text-center">       
                {!flipped ? "Question" : "Answer"}
            </h1>
            <button 
                className="flex justify-center items-center gap-2 text-blue-600 place-self-end"
                onClick={ handleEdit }
            ><MdEditNote size={30}/>
            </button>
        </div>
        <div className="font-normal text-4xl">
            { !flipped ? question : answer }
        </div>
    </div>
  )
}

export default Flashcard