import {TypeAnimation} from "react-type-animation";

const Main = () => {

    return (
        <div id="Home" className="w-full h-screen bg-gradient-to-t from-gray-50 to-gray-200 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center w-[90%] h-[70%] md:w-[70%] md:h-[60%] lg:w-1/2 lg:h-1/2 rounded-3xl border-2 border-gray-200 relative">
                    <img className="rounded-3xl absolute -top-40 w-60 h-72" src="./images/me1.jpg" alt="profile pic"/>
                <div className="absolute top-40">
                    <h1 className="text-5xl text-gray-800 text-center">I am <span className="font-bold text-black">Jakub Kopta</span>
                    </h1>
                    <h2 className="text-sm text-gray-800 m-4 text-center">
                        <TypeAnimation
                            sequence={[
                                '<h1>Hello World<h1>',
                                1000,
                                'console.log("Hello World");',
                                1000,
                                'print("Hello World")',
                                1000,
                                'System.out.println("Hello World");',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{fontSize: '2em', display: 'inline-block'}}
                            repeat={Infinity}
                        />
                    </h2>
                </div>
                <div className="flex justify-center items-center absolute bottom-3">
                    <p className="m-10 p-4 text-center border-2 border-gray-200 rounded-lg shadow-lg">
                        I am a third-year student of Automatics and Robotics at AGH University of Science and Technology in Cracow. I am open to new experience and enjoy learning new things. As someone taking their first steps in the IT industry, I would like to develop my skills in this area.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main;