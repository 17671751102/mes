import React, { Component } from 'react';
import { Tabs } from 'antd';
import Eventseek from './tab/eventseek'
import Leakseek from './tab/leakseek'
import List from './list/list'
import '../../css/tab/eventtab.css';
const TabPane = Tabs.TabPane;
class Event extends Component{
    render(){
        return(
            <div>
                <div className="righttab eventtab">
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="安全事件" key="1">
                            <Eventseek/>
                            <List url="http://192.168.40.180/index.php/Index/index/event_list"/>
                        </TabPane>
                        <TabPane tab="安全漏洞" key="2">
                            <Leakseek/>
                            <List ur="http://192.168.40.180/index.php/Index/index/leak_list"/>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }
}
export default Event