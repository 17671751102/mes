import React, {Component} from 'react';
import echarts from 'echarts';
import $ from 'jquery'
class Chartscatter extends Component{
    componentDidMount(){
        
        //散点图
        var plantCap = [{
           name: '木马',
           position: 'inside',
           color: '#fff',
           fontSize: 25
       }, {
           name: '重要系统存在安全隐患',
           position: 'top',
           color: '#9ae59e',
           fontSize: 14
       }, {
           name: '信息仿冒事件和钓鱼攻击事件',
           position: 'top',
           color: '#ffd42b',
           fontSize: 14
       }, {
           name: '信息篡改事件',
           position: 'bottom',
           color: '#ff8686',
           fontSize: 14
       }, {
           name: 'DDOS',
           position: 'bottom',
           color: '#90caf9',
           fontSize: 14
       }, {
           name: '通用漏洞事件',
           position: 'top',
           color: '#7485ea',
           fontSize: 14
       }, {
           name: '挂马',
           position: 'top',
           color: '#64d86a',
           fontSize: 14
       }, {
           name: '重要应用存在漏洞事件',
           position: 'bottom',
           color: '#ffc571',
           fontSize: 14
       },{
           name:'后门',
           position: 'bottom',
           color: '#d8a9e0',
           fontSize: 14
       }];

       var datalist = [{
           offset: [50, 50],
           symbolSize: 160,
           opacity: 1,                
           color: '#97cdf9'
       }, {
           offset: [35, 80],
           symbolSize: 95,
           opacity: 1,
           color: '#9ae59e'
       }, {
           offset: [20, 43],
           symbolSize: 90,
           opacity: 1,
           color: '#ffd42b'
       }, {
           offset: [83, 30],
           symbolSize: 90,
           opacity: 1,
           color: '#ff8686'
       }, {
           offset: [36, 20],
           symbolSize: 65,
           opacity: 1,
           color: '#90caf9'
       }, {
           offset: [64, 10],
           symbolSize: 70,
           opacity: 1,
           color: '#7485ea'
       }, {
           offset: [75, 75],
           symbolSize: 60,
           opacity: 1,
           color: '#64d86a'
       }, {
           offset: [88, 62],
           symbolSize: 50,
           opacity: 1,
           color: '#ffc571'
       },{
           offset: [20,20],
           symbolSize: 20,
           opacity: 1,                
           color: '#d8a9e0'
       }];
       var datas = [];
       for (var i = 0; i < plantCap.length; i++) {
           var item = plantCap[i];
           var itemToStyle = datalist[i];
           var itemposition = plantCap[i];
           datas.push({
               name:  item.name,
               value: itemToStyle.offset,
               symbolSize: itemToStyle.symbolSize,
               label: {
                   normal: {
                       textStyle: {
                           fontSize: itemposition.fontSize
                       },
                       position: itemposition.position,
                       color: itemposition.color,
                   }
               },
               itemStyle: {
                   normal: {
                       color: itemToStyle.color,
                       opacity: itemToStyle.opacity,
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
       // 使用刚指定的配置项和数据显示图表。
       $(window).resize(function () {
           myChartscatter.resize();
       });
   }
    render(){
        return(
            <span id="mainscatter"></span>
        )
    }
}
export default Chartscatter