import React, {Component} from 'react';
import echarts from 'echarts';
import $ from 'jquery'
class Chartbar extends Component{
    componentDidMount(){
        var myChartbar = echarts.init(document.getElementById('mainbar'));
        myChartbar.setOption({
            legend: {
                show: true,
            },
            grid: {
                x: 100,
                y: 40,
                x2: 50,
                y2: 40,
            },
            xAxis: {
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: "#666"
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#d8d8d8',
                        width: 2,
                        type: 'solid'
                    }
                }
            },
            yAxis: {
                data: ["已归档（件）", "处置中（件）", "处置总数（件）"],
                type: 'category',
                axisLabel: {
                    textStyle: {
                        color: "#666"
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#d8d8d8',
                        width: 2,
                        type: 'solid'
                    }
                }
            },
            series: [{
                type: 'bar',
                barWidth: 10, //柱图宽度
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: [{
                        value: 70,
                        name: "已归档（件）"
                    },
                    {
                        value: 50,
                        name: "处置中（件）"
                    },
                    {
                        value: 100,
                        name: "处置总数（件）"
                    },

                ],
                // 柱子的颜色
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var colorList = ["#90e094", "#ffad37", "#2bc4f5"];
                            return colorList[params.dataIndex];
                        }
                    }
                }
            }]
        });
        $(window).resize(function () {
            myChartbar.resize();
        });
    }
    render(){
        return(
            <span id="mainbar"></span>
        )
    }
}
export default Chartbar