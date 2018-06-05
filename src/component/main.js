import React, { Component } from 'react';
import {Route , NavLink, Link} from 'react-router-dom'
import Index from './veiw/index'
import Event from './veiw/event'
import Harve from './veiw/harve'
import Data from './veiw/data'
import Details from './veiw/details'
import {Icon} from 'antd'
import '../css/main.css'
class Main extends Component{
    // constructor(){
    //     super()
    //     //初始化权重。判断用户是否登录已经用户权限
    //     this.state={
    //         weight:1
    //     }
    // }
    // componentDidMount(){
    //     //ajax获取权重。显示不同模块
    //     if(this.state.weight===1){
    //         this.props.history.push('/main')
    //     }
    // }
    handle(){  
        return (<Details url="http://1.2.3.20/index.php/Index/index/event_detail"/>)
      }  
    render(){
        return(
            <div>
                <div className="sysheader">
                    <div className="k_left">业务管理中心</div>
                    <div className="k_right">
                        <span>
                            <Link to="">超级管理员</Link>
                        </span>
                        <span>|</span>
                        <span>
                            <Link to="/">退出</Link>
                        </span>
                    </div>
                </div>
                <div className="syscontent">
                    <div className="sysleft">
                        <NavLink to="/main/" exact><Icon type="home" />首页</NavLink>
                        <NavLink to="/main/event|leak" id="event"><Icon type="exception"/>事件/漏洞</NavLink>
                        <NavLink to="/main/harve"><Icon type="calendar" />重保任务</NavLink>
                        <NavLink to="/main/Data"><Icon type="cloud-o" />数据管理</NavLink>
                    </div>
                    <div className="sysright">
                        <Route exact path="/main/" component={Index}/>
                        <Route path="/main/event|leak" component={Event}/>
                        <Route path="/main/harve" component={Harve}/>
                        <Route path="/main/Data" component={Data}/>
                        <Route path="/main/Details" render={this.handle}/>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Main;