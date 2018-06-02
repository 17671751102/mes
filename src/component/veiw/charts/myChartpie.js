import React, {
    Component
} from 'react';
import echarts from 'echarts';
import $ from 'jquery'
class Chartpie extends Component {
    constructor() {
        super()
        this.state = {
            result: null,
            title:null
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
                for (var i = 0; i < json.message.length; i++) {
                    jsons.push({
                        value: parseInt(json.message[i].count,10),
                        name: json.message[i].DealStatus
                    })
                    labe.push(json.message[i].DealStatus)
                }
                this.setState({
                    result: jsons,
                    title:labe
                })
                var myChartpie = echarts.init(document.getElementById("mainpie"));
                myChartpie.setOption({
                    legend: {
                        bottom: 10,
                        left: 'center',
                        textStyle: {
                            fontSize: 12
                        },
                        data: this.state.labe,
                        selected: {'已完成':false}
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
                        data: this.state.result
                    }],
                    color: [
                        "#00dbe7",
                        "#ff7491",
                        "#2bc4f5",
                        "#be8bd6",
                        "#ff8686"
                    ]
                });
                $(window).resize(function () {
                    myChartpie.resize();
                });
            }.bind(this),
            error: function () {
                console.log("饼状图数据未获取")
            }

        })
    }
    componentDidMount() {
        this.loadlists()
    }
    componentWillUnmount(){
        //组件卸载前结束异步请求
        this.setState = (state,callback)=>{
            return;
        };
    }
    render() {
        return (<span id="mainpie"> </span>)
    }
}
export default Chartpie