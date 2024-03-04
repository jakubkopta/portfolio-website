interface wordProps {
    word: string;
    guessedLetters: string[];
}
const HangmanWord = ({word, guessedLetters} : wordProps) => {


    return (
        <div className="flex justify-center items-center m-5 mt-0">
            {word.split("").map((letter, index) => (
                <span className="h-16 md:h-24 w-10 md:w-14 m-3 relative" key={index}>
                    <span className={`${guessedLetters.includes(letter) ? "block" : "hidden"} font-bold text-3xl md:text-6xl p-2 md:p-3`}>
                        {letter}
                    </span>
                    <span className="h-2 w-full absolute inset-x-0 bottom-0 bg-black"></span>
                </span>
            ))}
        </div>
    )
}

export default HangmanWord;