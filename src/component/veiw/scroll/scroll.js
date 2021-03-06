import React, {Component} from 'react';
import $ from 'jquery'
import { Carousel } from 'antd';
import {Link} from 'react-router-dom'
import src from '../../../img/trotting.png'
class Scroll extends Component{
    constructor(){
        super()
        this.state={
            result:null
        }
    }
    loadlists(){
        $.ajax({
            type: "post",
            dataType: "json",
            url: this.props.url,
            success:function(json){
                var div=[]
                for(var i=0;i<json.message.length;i++){
                    div.push(
                        <div key={i}>
                            <Link to="/main/event|leak" key={i+1}>{json.message[i].Desc}</Link>
                        </div>
                    )
                }
                this.setState({
                    result:div
                })
            }.bind(this),
            error:function(){
                console.log("滚动数据未获取")
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
            <div className="k_trotting">
                <img src={src} alt=""/>
                <div className="k_trotting_span">
                    <span>代办事件</span>
                    <span>|</span>
                </div>
                <Carousel vertical autoplay={true} className="sysscorll">
                    {this.state.result}
                            {/* <div>
                                <Link to="">广东省广州市1公司，需要处理广东省广州市XX公司发生XXX事件，需要处理</Link>
                            </div>
                            <div>
                                <Link to="">广东省广州市2公司，需要处理广东省广州市XX公司发生XXX事件，需要处理</Link>
                            </div>
                            <div>
                                <Link to="">广东省广州市3公司，需要处理广东省广州市XX公司发生XXX事件，需要处理</Link>
                            </div> */}
                </Carousel>              
            </div>
        )
    }
} 
export default Scroll