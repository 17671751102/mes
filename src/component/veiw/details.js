import React, { Component } from 'react';
import $ from 'jquery';
import { Timeline, Button } from 'antd';
import Truemodal from './modal/truemodal'
import src from '../../img/watch.png'
import '../../css/veiw/details.css'
class Ddtails extends Component{
    constructor(){
        super()
        this.state={
            data:null,
            divs:null,
        }
    }
    getdatas(){
        $.ajax({
            type: "post",
            dataType: "json",
            url: this.props.url,
            success:function(json){
                var jsons = json.message
                var op =[]
                var time =[]
                var Description=[]
                op.push(
                    <div className="circumstantiality" key={1}>
                        <div className="messagetitle">
                            事件编号：{jsons.Number}
                        </div>
                        <div className="messagecontent">
                            <p>
                                <label>事件描述：
                                    <span>{jsons.Description}</span>
                                </label>
                            </p>
                            <label>归属地：
                                <span>{jsons.city_name}</span>
                            </label>
                            <label>事件类型：
                                <span>{jsons.Type}</span>
                            </label>
                            <label>提交时间：
                                <span>{jsons.CreateTime}</span>
                            </label>
                            <label>企业名称：
                                <span>{jsons.CompanyName}</span>
                            </label>
                            <label>联系电话：
                                <span>{jsons.Phone}</span>
                            </label>
                            <label>危害级别：
                                <span>{jsons.Level}</span>
                            </label>
                            <label>处置状态：
                                <span>{jsons.DealStatus}</span>
                            </label>
                            <label>处理人：
                                <span>{jsons.UserName}</span>
                            </label>
                        </div>
                    </div>
                )
                for(var i=0;i<jsons.Log.length;i++){
                    Description.push(
                        <Timeline.Item key={i}>{jsons.Log[i].Description}</Timeline.Item>
                    )
                    time.push(
                        <Timeline.Item key={i}>{jsons.Log[i].CreateTime}</Timeline.Item>
                    )
                }
                this.setState({
                    data:time,
                    datas:Description,
                    divs:op
                })
            }.bind(this),
            error:function(){
                console.log("事件详情数据未获取")
            }
        })
    }
    componentDidMount(){
        this.getdatas()
        $('#event').addClass('active')
    }
    componentWillUnmount(){
        $('#event').removeClass('active')
        this.setState = (state,callback)=>{
            return;
        };
    }
    back(){
        window.location.href="/main/event|leak"
    }
    render(){
        return(
            <div className="rightdetail">
                <div className="righttab">
                    <img src={src} alt=""/>
                    <span>事件详情</span>
                </div>
                <div className="syslist">
                   {this.state.divs}
                    <div className="circumstantiality">
                        <div className="messagetitle">
                            历史记录
                        </div>
                        <div className="messagecontent">
                            <Timeline pending=" " className="detailtime">
                                {this.state.data}
                            </Timeline>
                            <Timeline pending="Recording..." >
                                {this.state.datas}
                            </Timeline>
                        </div>
                    </div>
                    <div className="k_button">
                        <Truemodal url="http://192.168.40.180/index.php/Index/index/handle"/>
                        <Button type="primary" onClick={this.back}>返回</Button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Ddtails