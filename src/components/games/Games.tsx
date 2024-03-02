import {useState} from "react";
import Hangman from "./hangman/Hangman.tsx";
import {gameData} from "./hangman/GamesData.tsx";
import Game from "./Game.tsx";


const Games = () => {

    const [isPlayed, setPlayed] = useState(false);
    const handleClick1 = () => {
        setPlayed(!isPlayed);
    }

    return (
        <div className="transition-all duration-300">
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