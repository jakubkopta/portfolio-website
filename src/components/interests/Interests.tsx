import Interest from "./Interest.tsx";

const Interests = () => {

    const data = [
        {
            name: "MTB",
            imagePath: "./images/mtb.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n" +
                "                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n" +
                "                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n" +
                "                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia\n" +
                "                deserunt mollit anim id est laborum.",
            position: "lg:inset-x-0 lg:bottom-0"
        },
        {
            name: "Sailing",
            imagePath: "./images/sailing.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n" +
                "                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n" +
                "                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n" +
                "                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia\n" +
                "                deserunt mollit anim id est laborum.",
            position: "lg:inset-x-0 lg:bottom-1/2"
        },
        {
            name: "Snowboard",
            imagePath: "./images/snowboard.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n" +
                "                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n" +
                "                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n" +
                "                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia\n" +
                "                deserunt mollit anim id est laborum.",
            position: "lg:inset-x-0 lg:bottom-1/2"
        }
    ]

    return (
        <div id="Interests">
            <div className=" flex flex-col items-center justify-center">
                <h1 className="text-5xl text-gray-800 text-center font-bold p-10">Interests</h1>
                <div className="flex gap-10 pb-40 lg:h-screen w-2/3 flex-col lg:flex-row">
                    {data.map((item, idx) => (
                        <Interest key={idx} name={item.name} imagePath={item.imagePath} description={item.description} position={item.position}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Interests;