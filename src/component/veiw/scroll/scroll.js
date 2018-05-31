import React, {Component} from 'react';
import $ from 'jquery'
import { Carousel } from 'antd';
import {Link} from 'react-router-dom'
class Scroll extends Component{
    render(){
        return(
            <div className="k_trotting">
                <img src="" alt=""/>
                <div className="k_trotting_span">
                    <span>代办事件</span>
                    <span>|</span>
                </div>
                <Carousel vertical autoplay className="sysscorll">
                            <div>
                                <Link to="">广东省广州市1公司，需要处理广东省广州市XX公司发生XXX事件，需要处理</Link>
                            </div>
                            <div>
                                <Link to="">广东省广州市2公司，需要处理广东省广州市XX公司发生XXX事件，需要处理</Link>
                            </div>
                            <div>
                                <Link to="">广东省广州市3公司，需要处理广东省广州市XX公司发生XXX事件，需要处理</Link>
                            </div>
                </Carousel>              
            </div>
        )
    }
} 
export default Scroll