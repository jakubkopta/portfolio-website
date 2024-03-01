
interface Props {
    addGuessedLetter: (letter: string) => void
}

const keys = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
]

const Keyboard = ({addGuessedLetter} : Props) => {

    // const word = "test";
    // const guessedLetter = ["t","e"]



    return (
        <div className="grid grid-cols-9">
            {keys.map((key, index) => {
                return <button key={index} className=" bg-gray-200 rounded-2xl m-3 p-2" onClick={() => addGuessedLetter(key)}>{key}</button>
            })}
        </div>
    )
}

export default Keyboard;