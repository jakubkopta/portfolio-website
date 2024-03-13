import {interestData} from "./InterestData.tsx";
import React, {Suspense} from "react";

const Interest = React.lazy(() => import("./Interest.tsx"));

const Interests = () => {


    return (
        <div id="Interests" className="min-h-screen">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-6xl text-center font-bold p-10">Interests</h1>
                <Suspense fallback={<div>Loading...</div>}>
                    <div className="flex flex-col gap-10 pb-40 p-10 md:w-2/3 lg:flex-row lg:min-h-[50rem] lg:h-screen">
                        {interestData.map((item, idx) => (
                            <Interest key={idx} name={item.name} imagePath={item.imagePath} description={item.description} position={item.position}/>
                        ))}
                    </div>
                </Suspense>
            </div>
        </div>
    )
}

export default Interests;