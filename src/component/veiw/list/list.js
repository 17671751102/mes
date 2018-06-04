import { Pagination} from 'antd';
import React,{ Component } from 'react';
import {Link} from 'react-router-dom'
import $ from 'jquery'
import 'ant-design-pro/dist/ant-design-pro.css';
import DescriptionList from 'ant-design-pro/lib/DescriptionList';
import Ellipsis from 'ant-design-pro/lib/Ellipsis';
import Truemodal from '../modal/truemodal'
const { Description } = DescriptionList;
class List extends Component{
    constructor(){
        super()
        this.state={
            indeterminate: false,
            checkAll: false,
            checkbox:[],
            checkedList:false
        }
    }
    loadlists(){
        $.ajax({
            type: "post",
            dataType: "json",
            url: this.props.url,
            success:function(json){
                var lists =[]
                for(var i=0;i<json.message.length;i++){
                    lists.push(
                        <div className="list_pro" key={i}>
                            <input type="checkbox" onClick={this.onChange} className="checklist" key={i}/>
                            <div className="list_pro_right">
                                <Link to="/main/Details">
                                    <DescriptionList size="large" title={'事件编号：'+json.message[i].Number} col={4} >
                                        <Description term="事件描述"><Ellipsis length={15}>{json.message[i].Description}</Ellipsis></Description>
                                        <Description term="归属地"><Ellipsis length={8}>{json.message[i].city_name}</Ellipsis></Description>
                                        <Description term="事件类型"><Ellipsis length={8}>{json.message[i].Type}</Ellipsis></Description>
                                        <Description term="提交时间"><Ellipsis length={20}>{json.message[i].CreateTime}</Ellipsis></Description>
                                        <Description term="企业名称"><Ellipsis length={8}>{json.message[i].CompanyName}</Ellipsis></Description>
                                        <Description term="危害级别"><Ellipsis length={8}>{json.message[i].Level}</Ellipsis></Description>
                                        <Description term="处置状态"><Ellipsis length={8}>{json.message[i].DealStatus}</Ellipsis></Description>
                                    </DescriptionList>
                                </Link>
                                <Truemodal url="http://192.168.40.180/index.php/Index/index/handle"/>
                            </div>
                        </div>
                    )
                }
                this.setState({
                    checkbox:lists
                })

            }.bind(this),
            error:function(){
                console.log('没能获取list数据')
            }
        })
        
    }
    componentDidMount(){
        this.loadlists()
    }
    onChange = (e) => {
        var checklist= $('.checklist:checked')
        if(checklist.length===this.state.checkbox.length){
            console.log(1)
            $('.checkall').prop("checked",true)
        }else{
            console.log(2)
            $('.checkall').prop("checked",false)
        }
    }
    onCheckAllChange = (e) => {
        if($(".checkall").prop('checked')){
            console.log(3)
            $('.checklist').prop("checked",true)
        }else{
            console.log(4)
            $('.checklist').prop("checked",false)
        }
    }
    render(){
        return(
            <div className="right_list">
                <div className="listtitle">
                    <input type="checkbox" value="全选" className="checkall" onClick={this.onCheckAllChange}/>
                    <a href="###">批量下发</a>
                    <a href="###">导入Excel</a>
                    <a href="###">导出Excel</a>
                </div>
                <div className="list_body" >
                    {this.state.checkbox}
                </div>
                <div className="list_page">
                    <Pagination size="small" total={50} showSizeChanger showQuickJumper />
                </div>
            </div>
        )
    }
}
export default List