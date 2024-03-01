
const HangmanDrawing = () => {

    const guessedLetter = false;

    return (
        <div className="flex justify-center items-center m-28">
            <div className="relative h-96 w-96 bg-gray-200">
                <div className={`${guessedLetter ? "hidden" : "block"} bg-black absolute bottom-0 h-3 w-64`}></div>
                <div className={`${guessedLetter ? "hidden" : "block"} bg-black absolute bottom-0 left-32 h-96 w-3`}></div>
                <div className={`${guessedLetter ? "hidden" : "block"} bg-black absolute top-0 left-32 h-3 w-48`}></div>
                <div className={`${guessedLetter ? "hidden" : "block"} bg-black absolute top-0 right-16 h-24 w-3`}></div>
                <div className={`${guessedLetter ? "hidden" : "block"} border-8 border-black h-14 w-14 absolute top-24 right-11 rounded-full`}></div>
                <div className={`${guessedLetter ? "hidden" : "block"} bg-black absolute top-36 right-16 h-24 w-2`}></div>
                <div className={`${guessedLetter ? "hidden" : "block"} bg-black absolute top-24 right-7 h-24 w-2 rotate-45`}></div>
                <div className={`${guessedLetter ? "hidden" : "block"} bg-black absolute top-28 right-24 h-24 w-2 -rotate-45`}></div>
                <div className={`${guessedLetter ? "hidden" : "block"} bg-black absolute bottom-16 right-7 h-24 w-2 -rotate-45`}></div>
                <div className={`${guessedLetter ? "hidden" : "block"} bg-black absolute bottom-16 right-24 h-24 w-2 rotate-45`}></div>
            </div>
        </div>
    )
}

export default HangmanDrawing;