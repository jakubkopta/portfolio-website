import HangmanDrawing from "./HangmanDrawing.tsx";
import HangmanWord from "./HangmanWord.tsx";
import Keyboard from "./Keyboard.tsx";
import {generate} from "random-words";
import {useCallback, useEffect, useState} from "react";
import {VscDebugRestart} from "react-icons/vsc";

const Hangman = () => {

    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [word, setWord] = useState(generate() as string);

    console.log(word)
    console.log(guessedLetters)
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
            if (guessedLetters.includes(letter) || isLoser || isWinner) return

            setGuessedLetters(currentLetters => [...currentLetters, letter])
        },
        [guessedLetters, isLoser, isWinner]
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
    }, [addGuessedLetter])

    const handleClick = () => {
        setWord(generate() as string);
        setGuessedLetters([]);
    }


    return (
        <div className="relative">
            <div className={`${isWinner || isLoser ? "block" : "hidden"} bg-white/90 flex flex-col justify-center items-center absolute inset-0 z-[100]`}>
                <div className="font-bold text-6xl mr-3">
                    {isWinner && "Winner!"}
                    {isLoser && "Game Over"}
                </div>
                <button onClick={handleClick} className="m-5"><VscDebugRestart size={30}/></button>
            </div>
            <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
            <HangmanWord word={word.toUpperCase()} guessedLetters={guessedLetters}/>
            <Keyboard addGuessedLetter={addGuessedLetter} guessedLetters={guessedLetters}/>
        </div>
    )
}

export default Hangman;