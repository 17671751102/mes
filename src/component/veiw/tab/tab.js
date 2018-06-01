import React, {Component} from 'react';
import {Tabs,Select} from 'antd';
import Doingtable from './doingtabel'
import Donetable from './donetable'
import '../../../css/tab/tab.css'
const TabPane = Tabs.TabPane;
const Option = Select.Option;
class Tab extends Component{
    render(){
        const columns = this.columns;
        return(
            <div className="mytab">
                <Select defaultValue="近一个月" style={{ width: 200 }} className="myselect">
                    <Option value="1">近一个月</Option>
                    <Option value="3">近三个月</Option>
                    <Option value="6">近半年</Option>
                    <Option value="12">近一年</Option>
                </Select>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="地势处置未反馈统计" key="1">
                        <Doingtable url="http://192.168.40.180/index.php/Index/index/nofinish_data" pagination={false}  />
                    </TabPane>
                    <TabPane tab="地势处置已完成统计" key="2">
                        <Donetable url="http://192.168.40.180/index.php/Index/index/finish_data"/>
                    </TabPane>
                </Tabs>
            </div>
            
        )
    }
} 
export default Tab
