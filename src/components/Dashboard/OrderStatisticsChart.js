import React from 'react';
import ReactApexChart from 'react-apexcharts';

function OrderStatisticsChart() {
    let cardColor, headingColor, axisColor, borderColor;

    cardColor = '#fff';
    headingColor = '#566a7f';
    axisColor = '#a1acb8';
    borderColor = '#eceef1';
    const state = {
        series: [85, 15, 50, 50],
        options: {
            chart: {
                height: 165,
                width: 130,
                type: 'donut',
            },
            labels: ['Electronic', 'Sports', 'Decor', 'Fashion'],

            colors: ['#696cff', '#8592a3', '#03c3ec', '#71dd37'],
            stroke: {
                width: 5,
                colors: cardColor,
            },
            dataLabels: {
                enabled: false,
                formatter: function (val, opt) {
                    return parseInt(val) + '%';
                },
            },
            legend: {
                show: false,
            },
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    right: 15,
                },
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '75%',
                        labels: {
                            show: true,
                            value: {
                                fontSize: '1.5rem',
                                fontFamily: 'Public Sans',
                                color: headingColor,
                                offsetY: -15,
                                formatter: function (val) {
                                    return parseInt(val) + '%';
                                },
                            },
                            name: {
                                offsetY: 20,
                                fontFamily: 'Public Sans',
                            },
                            total: {
                                show: true,
                                fontSize: '0.8125rem',
                                color: axisColor,
                                label: 'Weekly',
                                formatter: function (w) {
                                    return '38%';
                                },
                            },
                        },
                    },
                },
            },
        },
    };
    return (
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="donut" height={165} width={130} />
        </div>
    );
}

export default OrderStatisticsChart;
