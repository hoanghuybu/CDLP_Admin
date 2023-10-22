import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

function GrowChart() {
    let cardColor, headingColor, axisColor, borderColor;

    cardColor = '#fff';
    headingColor = '#566a7f';
    axisColor = '#a1acb8';
    borderColor = '#eceef1';
    const state = {
        series: [78],
        options: {
            labels: ['Growth'],
            chart: {
                height: 240,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    size: 150,
                    offsetY: 10,
                    startAngle: -150,
                    endAngle: 150,
                    hollow: {
                        size: '55%',
                    },
                    track: {
                        background: cardColor,
                        strokeWidth: '100%',
                    },
                    dataLabels: {
                        name: {
                            offsetY: 15,
                            color: headingColor,
                            fontSize: '15px',
                            fontWeight: '600',
                            fontFamily: 'Public Sans',
                        },
                        value: {
                            offsetY: -25,
                            color: headingColor,
                            fontSize: '22px',
                            fontWeight: '500',
                            fontFamily: 'Public Sans',
                        },
                    },
                },
            },
            colors: ['#696cff'],
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    shadeIntensity: 0.5,
                    gradientToColors: ['#696cff'],
                    inverseColors: true,
                    opacityFrom: 1,
                    opacityTo: 0.6,
                    stops: [30, 70, 100],
                },
            },
            stroke: {
                dashArray: 5,
            },
            grid: {
                padding: {
                    top: -35,
                    bottom: -10,
                },
            },
            states: {
                hover: {
                    filter: {
                        type: 'none',
                    },
                },
                active: {
                    filter: {
                        type: 'none',
                    },
                },
            },
        },
    };

    // const state = {
    //     series: [75],
    //     options: {
    //         chart: {
    //             height: 240,
    //             type: 'radialBar',
    //             offsetY: -10,
    //         },
    //         plotOptions: {
    //             radialBar: {
    //                 startAngle: -135,
    //                 endAngle: 135,
    //                 dataLabels: {
    //                     name: {
    //                         fontSize: '16px',
    //                         color: undefined,
    //                         offsetY: 120,
    //                     },
    //                     value: {
    //                         offsetY: 76,
    //                         fontSize: '22px',
    //                         color: undefined,
    //                         formatter: function (val) {
    //                             return val + '%';
    //                         },
    //                     },
    //                 },
    //             },
    //         },
    //         colors: ['#696cff'],
    //         fill: {
    //             type: 'gradient',
    //             gradient: {
    //                 shade: 'dark',
    //                 shadeIntensity: 0.5,
    //                 gradientToColors: ['#696cff'],
    //                 inverseColors: true,
    //                 opacityFrom: 1,
    //                 opacityTo: 0.6,
    //                 stops: [30, 70, 100],
    //             },
    //         },
    //         stroke: {
    //             dashArray: 5,
    //         },
    //         labels: ['Growth'],
    //     },
    // };
    return (
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="radialBar" height={240} />
        </div>
    );
}

export default GrowChart;
