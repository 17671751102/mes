import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";
import '../css/Ingo.css'
import log from '../img/log.png'
    class Ingo extends Component{
        render(){
            return(
                <div className="ingobg">
                    <img src={log} alt=""/>
                    <h1>广东省关键信息基础设备设施保护系统</h1>
                    <div className="box">
                        <div className="group">
                            <span>账号:</span>
                            <input type="text"/>
                        </div>
                        <div className="group">
                            <span>密码:</span>
                            <input type="password"/>
                        </div>
                        <div className="group">
                            <span>验证码:</span>
                            <input type="text"/>
                        </div>
                        <Link to="/main/">登录</Link>
                    </div>
                </div>
            )
        }
    }
    export default Ingo;
