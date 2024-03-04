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
        <div className="min-h-screen relative">
            <div className="grid gap-12 ml-10 mr-10 md:ml-28 md:mr-28 lg:grid-cols-3 slide-left">
                {gameData.map((item, index) => (
                    <Game key={index} name={item.name} imagePath={item.imagePath} handleClick1={handleClick1} setGamePlayed={setGamePlayed}/>
                ))}
            </div>
            <div className={`absolute -top-[27rem] ${isPlayed ? "scale-100" : "scale-0"} duration-300 w-full `}>
                {gamePlayed === "Hangman" && <Hangman isPlayed={isPlayed} handleClick1={handleClick1}/>}
                {gamePlayed === "Tic-Tac-Toe" && <TicTacToe handleClick1={handleClick1}/>}
                {gamePlayed === "Puzzle" && <Puzzle handleClick1={handleClick1}/>}
            </div>
        </div>
    )
}

export default Games;