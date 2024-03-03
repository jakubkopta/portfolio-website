interface Props {
    numberOfGuesses: number;
}

const HangmanDrawing = ({numberOfGuesses} : Props) => {

    return (
        <div className="flex justify-center items-center mt-10">
            <div className="relative h-96 w-96">
                <div className={`${numberOfGuesses > 0 ? "w-64" : "w-0"} bg-black absolute bottom-0 h-3 duration-300`}></div>
                <div className={`${numberOfGuesses > 1 ? "h-96" : "h-0"} bg-black absolute bottom-0 left-32 w-3 duration-300`}></div>
                <div className={`${numberOfGuesses > 2 ? "w-48" : "w-0"} bg-black absolute top-0 left-32 h-3 duration-300`}></div>
                <div className={`${numberOfGuesses > 3 ? "h-24" : "h-0"} bg-black absolute top-0 right-16 w-3 duration-300`}></div>
                <div className={`${numberOfGuesses > 4 ? "block" : "hidden"} border-8 border-black h-14 w-14 absolute top-24 right-11 rounded-full`}></div>
                <div className={`${numberOfGuesses > 5 ? "h-24" : "h-0"} bg-black absolute top-36 right-16 w-2 duration-300`}></div>
                <div className={`${numberOfGuesses > 6 ? "h-24" : "h-0"} bg-black absolute top-24 right-7 w-2 rotate-45 duration-300`}></div>
                <div className={`${numberOfGuesses > 7 ? "h-24" : "h-0"} bg-black absolute top-28 right-24 w-2 -rotate-45 duration-300`}></div>
                <div className={`${numberOfGuesses > 8 ? "h-24" : "h-0"} bg-black absolute bottom-16 right-7 w-2 -rotate-45 duration-300`}></div>
                <div className={`${numberOfGuesses > 9 ? "h-24" : "h-0"} bg-black absolute bottom-16 right-24 w-2 rotate-45 duration-300`}></div>
            </div>
        </div>
    )
}

export default HangmanDrawing;