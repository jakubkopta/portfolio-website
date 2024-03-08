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

        return () => {
            myChart.dispose();
        };
    }, [option]);

    return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
};

export default Chart;
