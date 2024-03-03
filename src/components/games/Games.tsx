import {useState} from "react";
import Hangman from "./hangman/Hangman.tsx";
import {gameData} from "./GamesData.tsx";
import Game from "./Game.tsx";


const Games = () => {

    const [isPlayed, setPlayed] = useState(false);
    const handleClick1 = () => {
        setPlayed(!isPlayed);
    }

    return (
        <div className="min-h-screen">
            <h1 className="text-6xl text-center font-bold p-10">Mini Games</h1>
            {isPlayed ? (
                <Hangman isPlayed={isPlayed} handleClick1={handleClick1}/>
            ) : (
                <div className="grid grid-cols-3 gap-10 m-10">
                    {gameData.map((item, index) => (
                        <Game key={index} name={item.name} imagePath={item.imagePath} handleClick1={handleClick1}/>
                    ))

                    }
                </div>
            )}
        </div>
    )
}

export default Games;