import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";
import '../css/login.css'
import log from '../img/log.png'
    class Ingo extends Component{
        render(){
            return(
                <div className="ingobg">
                    <img src={log} alt=""/>
                    <h1>广东省关键信息基础设备设施保护系统</h1>
                    <div className="logform">
                        <div className="loggroup">
                            <label>
                            账号
                                <input type="text"/>
                            </label>
                        </div>
                        <div className="loggroup">
                            <label>
                            密码
                                <input type="password"/>
                            </label>
                        </div>
                        <div className="loggroup">
                            <label>
                            验证码
                                <input type="text"/>
                            </label>
                        </div>
                        <Link to="/main">登录</Link>
                    </div>
                </div>
            )
        }
    }
    export default Ingo;
