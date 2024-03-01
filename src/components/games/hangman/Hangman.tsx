import HangmanDrawing from "./HangmanDrawing.tsx";
import HangmanWord from "./HangmanWord.tsx";
import Keyboard from "./Keyboard.tsx";
import {generate} from "random-words";
import {useCallback, useState} from "react";

const Hangman = () => {

    const [word, setWord] = useState('test');
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

    const addGuessedLetter = (letter: string) => {
        setGuessedLetters(currentLetters => [...currentLetters, letter])
    }

    console.log(word);

    return (
        <div>
            <HangmanDrawing/>
            <HangmanWord word={word} guessedLetters={guessedLetters}/>
            <Keyboard addGuessedLetters={addGuessedLetter}/>
        </div>
    )
}

export default Hangman;