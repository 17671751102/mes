import React, { Component } from 'react';
import {Route , NavLink, Link} from 'react-router-dom'
import Index from './veiw/index'
import Event from './veiw/event'
import Harve from './veiw/harve'
import Data from './veiw/data'
import '../css/main.css'
class Main extends Component{
    render(){
        return(
            <div>
                <div className="mainleft">
                    <ul>
                        <li><Link to="/main/">首页</Link></li>
                        <li><Link to="/main/event">事件/漏洞</Link></li>
                        <li><Link to="/main/harve">重保任务</Link></li>
                        <li><Link to="/main/data">数据管理</Link></li>
                    </ul>
                </div>
                <div className="mainright">
                    <Route path="/main/" exact component={Index}/>
                    <Route path="/main/event" component={Event}/>
                    <Route path="/main/harve" component={Harve}/>
                    <Route path="/main/data" component={Data}/>
                </div>
            </div>
        )
    }
}
export default Main;