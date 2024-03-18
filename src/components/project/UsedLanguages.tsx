import {useEffect, useState} from "react";
import {EChartsOption} from "echarts";
import Chart from "./Chart.tsx";
import {FaArrowDown, FaArrowUp} from "react-icons/fa";

type LanguageData = {
    [key: string]: number;
};

const UsedLanguages = () => {

    const [languagesData, setLanguagesData] = useState<LanguageData | null>(null);
    const [isClicked, setIsClicked] = useState(false);
    const [option, setOption] = useState<EChartsOption>({
        title: {
            text: 'Languages I use',
            subtext: 'Data from GitHub',
            left: 'center',
            top: '5%'
        },
        legend: {
            top: '5%',
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                data: []
            }
        ]
    });

    useEffect(() => {
        if (languagesData) {
            const newData = Object.entries(languagesData).map(([name, value]) => ({
                value,
                name
            }));

            let screenWidth = window.innerWidth;
            if (screenWidth > 768 && screenWidth <= 1024) {
                screenWidth = screenWidth * 2 / 3;
            } else if (screenWidth > 1024) {
                screenWidth = screenWidth / 2.5;
            }

            setOption(prevOption => ({
                ...prevOption,
                series: [
                    {
                        type: 'pie',
                        left: 'center',
                        radius: [screenWidth/6, screenWidth/3],
                        avoidLabelOverlap: false,
                        padAngle: 3,
                        itemStyle: {
                            borderRadius: 10
                        },
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 40,
                                fontWeight: 'bold'
                            }
                        },
                        data: [...newData]
                    }
                ]
            }));

        }
    }, [languagesData]);

    useEffect(() => {

        const projectsNames = [
            "portfolio-website",
            "valentines",
            "CalculatorJavaFX",
            "fleet-manager-springboot",
            "InStoreFulfillment",
            "Snake",
            "toDo"
        ];

        const fetchData = async () => {
            const aggregatedData: LanguageData = {};
            for (const projectName of projectsNames) {
                try {
                    const response = await fetch(
                        `https://api.github.com/repos/jakubkopta/${projectName}/languages`,
                        {
                            headers: {
                                Authorization: import.meta.env.REACT_APP_GITHUB_TOKEN
                            },
                        }
                    );
                    const data = await response.json();
                    Object.keys(data).forEach(language => {
                        if (aggregatedData[language]) {
                            aggregatedData[language] += data[language];
                        } else {
                            aggregatedData[language] = data[language];
                        }
                    });
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
            setLanguagesData(aggregatedData)
        };

        fetchData().then(() => {
        }).catch(error => {
            console.error(error);
        });
    }, []);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <div>
            <div className="relative h-10">
                <div onClick={handleClick} className="flex justify-center items-center cursor-pointer mt-5 group">
                    <div className="bg-gray-400 p-3 m-5 rounded-3xl absolute -top-4 z-[99]">Languages chart</div>
                    <div className="h-6 w-10 bg-gray-400 rounded-b-2xl absolute top-10 z-[99] flex justify-center items-center group-hover:scale-110 duration-300">
                        {isClicked ? <FaArrowUp size={20}/> : <FaArrowDown size={20}/>}
                    </div>
                </div>
            </div>
            <div className={`flex justify-center items-center ${isClicked ? "h-[700px]" : "h-0"} ease-in-out duration-500`}>
                {isClicked && <Chart option={option}/>}
            </div>
        </div>
    )
}

export default UsedLanguages;