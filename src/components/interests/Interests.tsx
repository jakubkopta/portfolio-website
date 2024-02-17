import Interest from "./Interest.tsx";

const Interests = () => {

    const data = [
        {
            name: "MTB",
            imagePath: "./images/mtb.jpg",
            description: "In the middle school i was missing some adrenaline during summer. That's when I discovered mountain biking. " +
                "This is a little bit dangerous sport but it's the thrill of pushing boundaries that makes it so exciting",
            position: "lg:inset-x-0 lg:bottom-0"
        },
        {
            name: "Sailing",
            imagePath: "./images/sailing.jpg",
            description: "In my first job I met amazing people who shared their love for sailing with me. " +
                "Now, I believe it's the best way to spend summer surrounded by nature",
            position: "lg:inset-x-0 lg:bottom-0"
        },
        {
            name: "Snowboard",
            imagePath: "./images/snowboard.jpg",
            description: "My dad learned me skiing when i was 3 years old. Science then every winter I am on the slopes shredding. " +
                "At 10, I swapped skis for a snowboard and never looked back. Learning new tricks and going off-road," +
                " each winter is a thrilling adventure in the mountains.",
            position: "lg:inset-x-0 lg:top-[10%]"
        }
    ]

    return (
        <div id="Interests" className="min-h-screen">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-6xl text-center font-bold p-10">Interests</h1>
                <div className="flex gap-10 pb-40 lg:h-screen flex-col lg:flex-row md:w-2/3 p-10">
                    {data.map((item, idx) => (
                        <Interest key={idx} name={item.name} imagePath={item.imagePath} description={item.description} position={item.position}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Interests;