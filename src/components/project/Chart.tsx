import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import {EChartsOption} from "echarts";
interface ChartProps {
    option: EChartsOption;
}

const Chart = ({option} : ChartProps) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const myChart = echarts.init(chartRef.current);
        myChart.setOption(option);

        const resizeHandler = () => {
            myChart.resize();
        };

        window.addEventListener('resize', resizeHandler);

        return () => {
            window.removeEventListener('resize', resizeHandler);
            myChart.dispose();
        };

    }, [option]);

    return (
        <div ref={chartRef} className="w-full md:w-2/3 lg:w-1/2 h-[45rem] bg-gray-300 border-gray-400 border-4 m-2 md:pr-10 md:pl-10">
        </div>
    )
};

export default Chart;
