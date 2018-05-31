
import React, {Component} from 'react';
import echarts from 'echarts';
import $ from 'jquery'
class Chartpie extends Component{
    componentDidMount(){
        var result = [{
            value: 70,
            name: "待下发"
        },
        {
            value: 50,
            name: "待处置"
        },
        {
            value: 100,
            name: "处置中"
        },
        {
            value: 200,
            name: "已完成"
        }]

        var myChartpie = echarts.init(document.getElementById("mainpie"));
        myChartpie.setOption({
            legend: {
                bottom: 10,
                left: 'center',
                textStyle: {
                    fontSize: 12
                },
                data: ["待下发", "待处置", "处置中", "已完成"]
            },
            series: [{
                name: '访问来源',
                type: 'pie',
                radius: ['35%', '55%'],
                center: ['50%', '40%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        formatter: ' {b|{b}} \n{c} {per|{d}%}  ',
                        backgroundColor: '#eee',
                        borderColor: '#aaa',
                        borderRadius: 4,
                        rich: {
                            color: '#999',
                            c: {
                                color: '#999',

                            },
                            hr: {
                                borderColor: '#999',
                                width: '100%',
                                borderWidth: 0.5,
                                height: 0
                            },
                            b: {
                                align: 'left',
                                fontSize: 14,
                                lineHeight: 15,
                                color: '#999',
                            },
                            per: {
                                color: '#999',
                                padding: [2, 1],
                                borderRadius: 2
                            }
                        }
                    },
                },
                labelLine: {
                    normal: {
                        show: true
                    }
                },
                data: result
            }],
            color: [
                "#00dbe7",
                "#ff7491",
                "#2bc4f5",
                "#be8bd6"
            ]
        });
        var myChartbar = echarts.init(document.getElementById('mainbar'));
        $(window).resize(function () {
            myChartpie.resize();
        });
    }
    render(){
        return(
            <span id="mainpie"></span>
        )
    }
}
export default Chartpie
