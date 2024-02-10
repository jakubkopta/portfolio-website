import {TypeAnimation} from "react-type-animation";

const Main = () => {
    return (
        <div className="w-full h-screen bg-gradient-to-t from-gray-50 to-gray-500">
            {/*<img className="w-full h-screen object-cover" src="src/images/bg.jpg" alt="background"/>*/}
            <div className="w-full h-screen absolute top-0 left-0 bg-white/85">
                {/*<img className="w-100 rounded-full" src="src/images/Profile1.jpg"/>*/}
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
                    <h1 className="text-5xl text-gray-800 text-center">I am <span className="font-bold text-black">Jakub Kopta</span></h1>
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
                    <p className="w-1/3 m-10 p-4 text-center border-2 border-gray-200 rounded-lg shadow-lg">
                        I am a third-year student of Automatics and Robotics at AGH University of Science and Technology in
                        Cracow. I am open to new experience and enjoy learning new things.
                        As someone taking their first steps in the IT industry, I would like to
                        develop my skills in this area.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main;