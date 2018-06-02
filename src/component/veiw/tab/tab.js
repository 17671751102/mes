import React, {Component} from 'react';
import {Tabs,Select} from 'antd';
import Doingtable from './doingtabel'
import Donetable from './donetable'
import '../../../css/tab/tab.css'
import $ from 'jquery'
const TabPane = Tabs.TabPane;
const Option = Select.Option;
class Tab extends Component{
    constructor(){
        super()
        this.state={
            doingdataSource:null,
            donedataSource:null,
            loading:true
        }
    }
    loadlists(){
        $.ajax({
            type: "post",
            dataType: "json",
            url: 'http://192.168.40.180/index.php/Index/index/nofinish_data',
            success: function (json) {
                var jsons =[]
                for(var i=0;i<json.message.length;i++){
                    jsons.push({
                        key:i+1,
                        city_name:json.message[i].city_name,
                        sum:json.message[i].sum,
                        row:json.message[i].row,
                        cpl:json.message[i].cpl,
                    })
                }
            this.setState({
                doingdataSource:jsons,
                loading:false
            })
            }.bind(this),
            error: function (json) {
                console.log("正在下发的数据未获取");
            }
        });
        $.ajax({
            type: "post",
            dataType: "json",
            url: 'http://192.168.40.180/index.php/Index/index/finish_data',
            success: function (json) {
                var jsons =[]
                for(var i=0;i<json.message.length;i++){
                    jsons.push({
                        key:i+1,
                        city_name:json.message[i].city_name,
                        sum:json.message[i].sum,
                        row:json.message[i].row,
                        cpl:json.message[i].cpl,
                    })
                }
            this.setState({
                donedataSource:jsons,
                loading:false
            })
            }.bind(this),
            error: function (json) {
                console.log("正在下发的数据未获取");
            }
        });
    }
    handleselect=(value)=>{
        $.ajax({
            type: "post",
            dataType: "json",
            url: 'http://192.168.40.180/index.php/Index/index/nofinish_data',
            data:{value:value},
            success:function(json){
                var jsons =[]
                for(var i=0;i<json.message.length;i++){
                    jsons.push({
                        key:i+1,
                        city_name:json.message[i].city_name,
                        sum:json.message[i].sum,
                        row:json.message[i].row,
                        cpl:json.message[i].cpl,
                    })
                }
                console.log("doing"+jsons)
                this.setState({
                    doingdataSource:jsons,
                    loading:false
                })
                return jsons
            }.bind(this),
            error:function(json){
                console.log('未获取doingtable数据')
            }
        })
        $.ajax({
            type: "post",
            dataType: "json",
            url: 'http://192.168.40.180/index.php/Index/index/finish_data',
            data:{value:value},
            success:function(json){
                var jsons =[]
                for(var i=0;i<json.message.length;i++){
                    jsons.push({
                        key:i+1,
                        city_name:json.message[i].city_name,
                        sum:json.message[i].sum,
                        row:json.message[i].row,
                        cpl:json.message[i].cpl,
                    })
                }
                console.log("done"+jsons)
                this.setState({
                    donedataSource:jsons,
                    loading:false
                })
                return jsons
            }.bind(this),
            error:function(json){
                console.log('未获取donetable数据')
            }
        })
        console.log(value)
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
            <div className="mytab">
                <Select defaultValue="1" style={{ width: 200 }} className="myselect" onChange={this.handleselect.bind(this)}>
                    <Option value="1">近一个月</Option>
                    <Option value="3">近三个月</Option>
                    <Option value="6">近半年</Option>
                    <Option value="12">近一年</Option>
                </Select>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="地势处置未反馈统计" key="1">
                        <Doingtable url={this.state.doingdataSource} loading={this.state.loading} pagination={false}  />
                    </TabPane>
                    <TabPane tab="地势处置已完成统计" key="2">
                        <Donetable url={this.state.donedataSource} loading={this.state.loading} pagination={false} />
                    </TabPane>
                </Tabs>
            </div>
            
        )
    }
} 
export default Tab
