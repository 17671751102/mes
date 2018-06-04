import React, {Component} from 'react';
import echarts from 'echarts';
import $ from 'jquery'
class Chartbar extends Component{
    constructor(){
        super()
        this.state={
            result:null,
            title:null,
            number:null
        }
    }
    loadlists(){
        $.ajax({
            type: "post",
            dataType: "json",
            url: this.props.url,
            success: function (json) {
                //图表数据
                var jsons = []
                //图表种类
                var labe =[]
                var number=(json.message[2].count/json.message[0].count)*100
                for (var i = 0; i < json.message.length; i++) {
                    jsons.push({
                        value: parseInt(json.message[i].count,10),
                        // name: json.message[i].DealStatus
                    })
                    labe.push(json.message[i].DealStatus)
                }
                this.setState({
                    result: jsons,
                    title:labe,
                    number:number
                })
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
                            data: this.state.title,
                            axisTick : {show: false},
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
                            data: this.state.result,
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
            }.bind(this),
            error:function(json){
                console.log('柱状图数据未获取')
            }
        })
    }
    componentDidMount(){
        this.loadlists()
    }
    componentWillUnmount(){
        //组件卸载前结束异步请求
        this.setState = (state,callback)=>{
            return;
        };
    }
    render(){
        return(
        <div>
            <div className="k_datapercentage">{this.state.number}%</div>
            <div className="k_percentage">归档完成率</div>
            <span id="mainbar"></span>
        </div>
        )
    }
}
export default Chartbar