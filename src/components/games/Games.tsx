import {useState} from "react";
import Hangman from "./hangman/Hangman.tsx";
import {gameData} from "./GamesData.tsx";
import Game from "./Game.tsx";
import TicTacToe from "./tic-tac-toe/TicTacToe.tsx";
import Puzzle from "./puzzle/Puzzle.tsx";


const Games = () => {

    const [isPlayed, setPlayed] = useState(false);
    const [gamePlayed, setGamePlayed] = useState("");
    const handleClick1 = () => {
        setPlayed(!isPlayed);
    }

    return (
        <div id="Games" className="relative min-h-screen">
            <h1 className="text-6xl text-center font-bold p-10">Games</h1>
            <p className="text-center text-2xl m-10 md:mt-10 md:m-28 md:mb-0">
                In my spare time, I also love to develop mini-games for fun. Let's play some of them!
            </p>
            <div className="grid gap-12 m-10 md:m-28 md:mt-10 lg:grid-cols-3 slide-left">
                {gameData.map((item, index) => (
                    <Game key={index} name={item.name} imagePath={item.imagePath} handleClick1={handleClick1}
                          setGamePlayed={setGamePlayed}/>
                ))}
            </div>
            <div className={`fixed top-10 md:top-0 ${isPlayed ? "scale-100" : "scale-0"} duration-300 w-full z-[100]`}>
                {gamePlayed === "Hangman" && <Hangman isPlayed={isPlayed} handleClick1={handleClick1}/>}
                {gamePlayed === "Tic-Tac-Toe" && <TicTacToe handleClick1={handleClick1}/>}
                {gamePlayed === "Puzzle" && <Puzzle handleClick1={handleClick1}/>}
            </div>
        </div>
    )
}

export default Games;