import React, {Component} from 'react';
import echarts from 'echarts';
import $ from 'jquery'
class Chartscatter extends Component{
    constructor(){
        super(),
        this.state={
            result:null
        }
    }
    componentDidMount(){
         //散点图
         var plantCap = [{
            name: '木马',
            position: 'bottom',
            color: '#ff8686',
            fontSize: 14
        }, {
            name: '重要系统存在安全隐患',
            position: 'bottom',
            color: '#9ae59e',
            fontSize: 14
        }, {
            name: '信息仿冒事件和钓鱼攻击事件',
            position: 'top',
            color: '#ffd42b',
            fontSize: 14
        }, {
            name: '信息篡改事件',
            position: 'inside',
            color: '#fff',
            fontSize: 25
        }, {
            name: 'DDOS',
            position: 'bottom',
            color: '#7485ea',
            fontSize: 14
        }];
 
        var datalist = [{
            offset: [83, 30],
            symbolSize: 90,
            opacity: 1,                
            color: '#ff8686'
        }, {
            offset: [75, 80],
            symbolSize: 95,
            opacity: 1,
            color: '#9ae59e'
        }, {
            offset: [20, 43],
            symbolSize: 90,
            opacity: 1,
            color: '#ffd42b'
        }, {
            offset: [50,50],
            symbolSize: 160,
            opacity: 1,
            color: '#97cdf9'
        }, {
            offset: [36, 20],
            symbolSize: 65,
            opacity: 1,
            color: '#7485ea'
        }];
        $.ajax({
            type: "post",
            dataType: "json",
            url: this.props.url,
            success:function(json){
                var datas=[]
                for(var i=0;i<json.message.length;i++){
                    datas.push({
                        name:  json.message[i].count+"\n"+json.message[i].Type,
                        value: datalist[i].offset,
                        symbolSize: datalist[i].symbolSize,
                        label: {
                            normal: {
                                textStyle: {
                                    fontSize: plantCap[i].fontSize
                                },
                                position: plantCap[i].position,
                                color: plantCap[i].color,
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: datalist[i].color,
                                opacity: datalist[i].opacity,
                                shadowColor: 'rgba(0, 0, 0, 0.5)',
                                shadowBlur: 10
                            }
                        },
                    })
                }
                var myChartscatter = echarts.init(document.getElementById('mainscatter'));
                myChartscatter.setOption({
                    grid: {
                        show: false,
                        top: 10,
                        bottom: 10
                    },
                    xAxis: [{
                        gridIndex: 0,
                        type: 'value',
                        show: false,
                        min: 0,
                        max: 100,
                        nameLocation: 'middle',
                        nameGap: 5
                    }],
                    yAxis: [{
                        gridIndex: 0,
                        min: 0,
                        show: false,
                        max: 100,
                        nameLocation: 'middle',
                        nameGap: 30
                    }],
                    series: [{
                        type: 'scatter',
                        symbol: 'circle',
                        symbolSize: 120,
                        label: {
                            normal: {
                                show: true,
                                formatter: '{b}',
                                color: '#000'
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#00acea',
                            }
                        },
                        data: datas
                    }]
                });
                $(window).resize(function () {
                    myChartscatter.resize();
                });
            }.bind(this),
            error:function(){
                console.log("气泡图数据未获取")
            }
        })
    }
    render(){
        return(
            <span id="mainscatter"></span>
        )
    }
}
export default Chartscatter