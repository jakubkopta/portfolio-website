
interface Props {
    addGuessedLetter: (letter: string) => void
    guessedLetters: string[];
}

const keys = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M"
];


const Keyboard = ({addGuessedLetter, guessedLetters} : Props) => {

    return (
        <div className="grid grid-cols-10">
            {keys.map((key, index) => {
                const isActive = guessedLetters.includes(key)
                return (
                    <button
                        key={index}
                        className={`${isActive ? "bg-gray-500" : "bg-gray-200 hover:bg-gray-400 active:bg-gray-500"} rounded-2xl m-3 p-2`}
                        onClick={() => addGuessedLetter(key)}
                        disabled = {isActive}
                    >
                        {key}
                    </button>
                )
            })}
        </div>
    )
}

export default Keyboard;