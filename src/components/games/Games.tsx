import React, {Suspense, useState} from "react";
import {gameData} from "./GamesData.tsx";
import Game from "./Game.tsx";
import {PacmanLoader} from "react-spinners";

interface Props {
    isDarkMode: boolean;
}

const Hangman = React.lazy(() => import("./hangman/Hangman.tsx"));
const TicTacToe = React.lazy(() => import("./tic-tac-toe/TicTacToe.tsx"));
const Puzzle = React.lazy(() => import("./puzzle/Puzzle.tsx"));
const Memory = React.lazy(() => import("./memory/Memory.tsx"));

const Games = ({isDarkMode}:Props) => {

    const [isPlayed, setPlayed] = useState(false);
    const [gamePlayed, setGamePlayed] = useState("");
    const handlePlayClose = () => {
        setPlayed(!isPlayed);
    }

    return (
        <div id="Games" className="relative min-h-screen">
            <h1 className="text-6xl text-center font-bold p-10">Games</h1>
            <p className="text-center text-2xl m-10 md:mt-10 md:m-28 md:mb-0">
                In my spare time, I also love to develop mini-games for fun. Let's play some of them!
            </p>
            <div className="grid gap-12 m-10 md:m-28 md:mt-10 lg:grid-cols-3">
                {gameData.map((item, index) => (
                    <Game key={index} name={item.name} imagePath={item.imagePath} handlePlayClose={handlePlayClose}
                          setGamePlayed={setGamePlayed}/>
                ))}
            </div>
            <div className={`fixed top-10 md:top-0 ${isPlayed ? "scale-100" : "scale-0"} duration-300 w-full z-[100]`}>
                <Suspense fallback={<div className="flex justify-center items-center h-screen"><PacmanLoader size={50} color="#8A00FF" /></div>}>
                    {gamePlayed === "Hangman" && <Hangman isDarkMode={isDarkMode} isPlayed={isPlayed} handlePlayClose={handlePlayClose}/>}
                    {gamePlayed === "Tic-Tac-Toe" && <TicTacToe isDarkMode={isDarkMode} handlePlayClose={handlePlayClose}/>}
                    {gamePlayed === "Puzzle" && <Puzzle isDarkMode={isDarkMode} handlePlayClose={handlePlayClose}/>}
                    {gamePlayed === "Memory" && <Memory isDarkMode={isDarkMode} handlePlayClose={handlePlayClose}/>}
                </Suspense>
            </div>
        </div>
    )
}

export default Games;