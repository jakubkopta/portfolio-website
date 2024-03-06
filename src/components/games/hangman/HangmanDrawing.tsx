interface Props {
    numberOfGuesses: number;
}

const HangmanDrawing = ({numberOfGuesses} : Props) => {

    return (
        <div className="flex justify-center items-center mt-10">
            <div className="relative h-56 w-56 md:h-80 md:w-96">
                <div className={`${numberOfGuesses > 0 ? "w-48 md:w-64" : "w-0"} bg-black absolute bottom-0 h-3 duration-300`}></div>
                <div className={`${numberOfGuesses > 1 ? "h-56 md:h-80" : "h-0"} bg-black absolute bottom-0 left-24 md:left-32 w-3 duration-300`}></div>
                <div className={`${numberOfGuesses > 2 ? "w-32 md:w-48" : "w-0"} bg-black absolute top-0 left-24 md:left-32 h-3 duration-300`}></div>
                <div className={`${numberOfGuesses > 3 ? "h-16 md:h-24" : "h-0"} bg-black absolute top-0 right-0 md:right-16 w-3 duration-300`}></div>
                <div className={`${numberOfGuesses > 4 ? "opacity-100" : "opacity-0"} border-8 border-black size-10 md:size-14 absolute top-16 md:top-24 -right-3 md:right-11 rounded-full duration-300`}></div>
                <div className={`${numberOfGuesses > 5 ? "h-16 md:h-24" : "h-0"} bg-black absolute top-24 md:top-36 right-0 md:right-16 w-2 duration-300`}></div>
                <div className={`${numberOfGuesses > 6 ? "h-16 md:h-24" : "h-0"} bg-black absolute top-20 md:top-24 -right-5 md:right-7 w-2 rotate-45 duration-300`}></div>
                <div className={`${numberOfGuesses > 7 ? "h-16 md:h-24" : "h-0"} bg-black absolute top-20 md:top-28 right-5 md:right-24 w-2 -rotate-45 duration-300`}></div>
                <div className={`${numberOfGuesses > 8 ? "h-16 md:h-24" : "h-0"} bg-black absolute bottom-4 md:bottom-16 -right-5 md:right-7 w-2 -rotate-45 duration-300`}></div>
                <div className={`${numberOfGuesses > 9 ? "h-16 md:h-24" : "h-0"} bg-black absolute bottom-4 md:bottom-16 right-5 md:right-24 w-2 rotate-45 duration-300`}></div>
            </div>
        </div>
    )
}

export default HangmanDrawing;