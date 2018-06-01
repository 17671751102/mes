import React, { Component } from 'react';
import {Tabs,Select } from 'antd';
import '../../css/tab/eventtab.css';
const TabPane = Tabs.TabPane;
class Event extends Component{
    render(){
        return(
            <div>
                <div class="righttab eventtab">
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="安全事件" key="1">
                            
                        </TabPane>
                        <TabPane tab="安全漏洞" key="2">
                            
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }
}
export default Event