
const Interests = () => {

    return (
        <div id="Interests">
            <div className=" flex flex-col items-center justify-center">
                <h1 className="text-5xl text-gray-800 text-center font-bold p-10">Interests</h1>
                <div className="flex gap-10 pb-40 lg:h-screen w-2/3 flex-col lg:flex-row">
                    <div
                        className="lg:h-full lg:w-1/3 cursor-pointer lg:hover:w-2/3 ease-in duration-500 relative flex flex-col justify-center items-center group">
                        <img className="h-full object-cover opacity-40 group-hover:opacity-100 rounded-xl"
                             src="./images/mtb.jpg" alt="img"/>
                        <span
                            className="mix-blend-screen absolute font-bold text-6xl lg:text-8xl lg:-rotate-90 transform top-1/2 -translate-y-1/2">MTB</span>
                        <p className="absolute inset-x-0 bottom-0 opacity-0 group-hover:opacity-100 lg:delay-500 p-10 text-white font-bold text-center">Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                            officia
                            deserunt mollit anim id est laborum.</p>
                    </div>
                    <div
                        className="lg:h-full lg:w-1/3 cursor-pointer lg:hover:w-2/3 ease-in duration-500 relative flex flex-col justify-center items-center group">
                        <img className="h-full object-cover opacity-40 group-hover:opacity-100 rounded-xl"
                             src="./images/sailing.jpg" alt="img"/>
                        <span
                            className="mix-blend-screen absolute font-bold text-6xl lg:text-8xl lg:-rotate-90 transform top-1/2 -translate-y-1/2">Sailing</span>
                        <p className="absolute inset-x-0 opacity-0 group-hover:opacity-100 lg:delay-500 p-10 text-white font-bold text-center">Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut
                            aliquip
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum
                            dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                            officia
                            deserunt mollit anim id est laborum.</p>
                    </div>
                    <div
                        className="lg:h-full lg:w-1/3 cursor-pointer lg:hover:w-2/3 ease-in duration-500 relative flex flex-col justify-center items-center group">
                        <img className="h-full object-cover opacity-40 group-hover:opacity-100 rounded-xl"
                             src="./images/snowboard.jpg" alt="img"/>
                        <span
                            className="mix-blend-screen absolute font-bold text-6xl lg:text-8xl lg:-rotate-90 transform top-1/2 -translate-y-1/2">Snowboard</span>
                        <p className="absolute inset-x-0 top-0 opacity-0 group-hover:opacity-100 lg:delay-500 p-10 text-white font-bold text-center">Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut
                            aliquip
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum
                            dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                            officia
                            deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Interests;