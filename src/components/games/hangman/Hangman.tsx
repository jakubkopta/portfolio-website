import HangmanDrawing from "./HangmanDrawing.tsx";
import HangmanWord from "./HangmanWord.tsx";
import Keyboard from "./Keyboard.tsx";
import {generate} from "random-words";
import {useCallback, useEffect, useState} from "react";
import {VscDebugRestart} from "react-icons/vsc";
import {IoCloseSharp} from "react-icons/io5";

interface Props {
    isPlayed: boolean;
    handlePlayClose: () => void;
    isDarkMode: boolean;
}

const Hangman = ({isPlayed, handlePlayClose, isDarkMode} : Props) => {

    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [word, setWord] = useState(generate() as string);

    const incorrectLetters = guessedLetters.filter(
        letter => !word.toUpperCase().includes(letter)
    )

    const isLoser = incorrectLetters.length >= 10;
    const isWinner = word
        .toUpperCase()
        .split("")
        .every(letter => guessedLetters.includes(letter))

    const addGuessedLetter = useCallback(
        (letter: string) => {
            if (guessedLetters.includes(letter) || isLoser || isWinner || !isPlayed) return

            setGuessedLetters(currentLetters => [...currentLetters, letter])
        },
        [guessedLetters, isLoser, isWinner, isPlayed]
    )

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key
            if (!key.match(/^[a-z]$/)) return

            addGuessedLetter(key.toUpperCase())
        }

        document.addEventListener("keypress", handler)

        return () => {
            document.removeEventListener("keypress", handler)
        }
    }, [addGuessedLetter]);

    const handleClick = () => {
        setWord(generate() as string);
        setGuessedLetters([]);
    }
    return (
            <div className={`${isDarkMode ? "bg-dark-mode" : "bg-gray-200"} shadow-2xl rounded-3xl m-5 md:ml-28 md:mr-28 p-3 relative group`}>
                <div
                    className={`${isWinner || isLoser ? "scale-100 opacity-100" : "scale-0 opacity-0"} duration-500 ${isDarkMode ? "bg-dark-mode/90" : "bg-gray-200/90"} rounded-3xl flex flex-col justify-center items-center absolute inset-0 z-[100]`}>
                    <div className="font-bold text-6xl">
                        {isWinner && "Winner!"}
                        {isLoser && "Game Over"}
                    </div>
                    <div className="text-xl mt-3">
                        The word was: <span className="font-bold">{word.toUpperCase()}</span>
                    </div>
                    <div className="flex justify-center items-center">
                        <button onClick={handleClick} className="m-5 bg-gray-400 rounded-lg p-2"><VscDebugRestart size={30}/></button>
                        <button onClick={handlePlayClose} className="font-bold text-3xl bg-gray-400 rounded-lg p-2">Exit</button>
                    </div>
                </div>
                <div>
                    <a className="flex justify-center items-center">
                        <p onClick={handleClick}
                           className="cursor-pointer absolute top-3 right-10 hover:-rotate-90 duration-300">
                            <VscDebugRestart size={23}/>
                        </p>
                        <p onClick={handlePlayClose}
                           className="cursor-pointer absolute top-2 right-2 hover:rotate-90 duration-300">
                            <IoCloseSharp size={30}/>
                        </p>
                    </a>
                    <h1 className="text-4xl font-bold text-center m-5">Hangman</h1>
                    <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
                    <HangmanWord word={word.toUpperCase()} guessedLetters={guessedLetters}/>
                    <Keyboard addGuessedLetter={addGuessedLetter} guessedLetters={guessedLetters}/>
                </div>
            </div>
    )
}

export default Hangman;