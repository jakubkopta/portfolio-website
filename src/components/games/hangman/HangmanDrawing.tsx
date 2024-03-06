interface Props {
    numberOfGuesses: number;
}

const HangmanDrawing = ({numberOfGuesses} : Props) => {

    return (
        <div className="flex justify-center items-center mt-10">
            <div className="relative h-56 w-56 md:h-80 md:w-96">
                <div className={`${numberOfGuesses > 0 ? "w-1/2" : "w-0"} bg-black absolute bottom-0 h-3 duration-300`}></div>
                <div className={`${numberOfGuesses > 1 ? "h-full" : "h-0"} bg-black absolute bottom-0 left-1/4 w-3 duration-300`}></div>
                <div className={`${numberOfGuesses > 2 ? "w-1/2" : "w-0"} bg-black absolute top-0 left-1/4 h-3 duration-300`}></div>
                <div className={`${numberOfGuesses > 3 ? "h-1/4" : "h-0"} bg-black absolute top-0 right-1/4 w-3 duration-300`}></div>
                <div className={`${numberOfGuesses > 4 ? "opacity-100" : "opacity-0"} border-8 border-black size-10 md:size-14 absolute top-[52px] md:top-[76px] right-[40px] md:right-[72px] rounded-full duration-300`}></div>
                <div className={`${numberOfGuesses > 5 ? "h-16 md:h-24" : "h-0"} rounded-2xl bg-black absolute top-[84px] md:top-[128px] right-1/4 w-2 duration-300`}></div>
                <div className={`${numberOfGuesses > 6 ? "w-16 md:w-24" : "w-0"} rounded-2xl bg-black absolute top-[94px] md:top-[140px]  right-[60px] md:right-[100px] h-2 origin-right -rotate-45 duration-300`}></div>
                <div className={`${numberOfGuesses > 7 ? "w-16 md:w-24" : "w-0"} rounded-2xl bg-black absolute top-[94px] md:top-[140px] right-[60px] md:right-[100px] h-2 origin-right -rotate-[135deg] duration-300`}></div>
                <div className={`${numberOfGuesses > 8 ? "w-16 md:w-24" : "w-0"} rounded-2xl bg-black absolute bottom-[77px] md:bottom-[97px] right-[60px] md:right-[100px] h-2 origin-right -rotate-45 duration-300`}></div>
                <div className={`${numberOfGuesses > 9 ? "w-16 md:w-24" : "w-0"} rounded-2xl bg-black absolute bottom-[77px] md:bottom-[97px] right-[60px] md:right-[100px] h-2 origin-right -rotate-[135deg] duration-300`}></div>
            </div>
        </div>
    )
}

export default HangmanDrawing;