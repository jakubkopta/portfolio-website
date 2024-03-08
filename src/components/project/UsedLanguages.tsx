import {useEffect, useState} from "react";
import {EChartsOption} from "echarts";
import Chart from "./Chart.tsx";

type LanguageData = {
    [key: string]: number;
};

const UsedLanguages = () => {

    const [languagesData, setLanguagesData] = useState<LanguageData | null>(null);
    const [option, setOption] = useState<EChartsOption>({
        xAxis: {
            type: 'category',
            data: []
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [],
                type: 'bar'
            }
        ]
    });

    useEffect(() => {
        if (languagesData) {
            setOption(prevOption => ({
                ...prevOption,
                xAxis: {
                    ...prevOption.xAxis,
                    data: Object.keys(languagesData)
                },
                series: [
                    {
                        data: Object.values(languagesData),
                        type: 'bar'
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
                                Authorization: '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',
                            },
                        }
                    );
                    const data = await response.json();
                    Object.keys(data).forEach(language => {
                        // If the language exists in the aggregated data, add the count
                        if (aggregatedData[language]) {
                            aggregatedData[language] += data[language];
                        } else {
                            // Otherwise, initialize the count
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


    return (
        <div className="flex justify-center items-center">
            <Chart option={option}/>
        </div>
    )
}

export default UsedLanguages;