import React, { useState, useEffect } from 'react';
import Pie from './Pie';

function Chart(props) {

    const [data, setData] = useState([]);

    const getMarketValue = (quant, price) => {
        return parseFloat(quant * price).toFixed(2);
    }

    useEffect(() => {
        let chartData = [
            {
                value: props.data.filter((el, index) => index < 3).map(el => getMarketValue(el.quantity, el.price)).reduce((accumulator, currentValue) => parseFloat(accumulator) + parseFloat(currentValue)).toFixed(2),
                color: '#ac953f',
                label: "ETF's"
            },
            {
                value: props.data.filter((el, index) => index < 4).map(el => getMarketValue(el.quantity, el.price)).reduce((accumulator, currentValue) => parseFloat(accumulator) + parseFloat(currentValue)).toFixed(2),
                color: '#5abbe3',
                label: 'Mutual Funds'
            }
        ];
        setData(chartData);
    }, [props.data]);

    return (
        <div className='w-100 chart_container'>
            <h4 className="mb-3">Portfolio</h4>
            <Pie
                data={data}
                width={250}
                height={250}
                innerRadius={90}
                outerRadius={120}
            />
            <div className="mt-3">
                {data.map((el, index) => {
                    return (
                        <div key={index} className="labels">
                            <div className="chart_label" style={{ backgroundColor: el.color }}></div>&nbsp;&nbsp;<span className="font_sm">{el.label}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Chart;