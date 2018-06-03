import { Checkbox } from 'antd';
import React,{ Component } from 'react';
import {Link} from 'react-router-dom'
import $ from 'jquery'
import 'ant-design-pro/dist/ant-design-pro.css';
import DescriptionList from 'ant-design-pro/lib/DescriptionList';
const bendi=['10','11','12','13','14']
// class List extends Component {
//     constructor(){
//         super()
//         this.state={
//             indeterminate: false,
//             checkAll: false,
//             checkbox:bendi,
//             value:[]
//         }
//     }
    
//     // loadlists(){
//     //     $.ajax({
//     //         type: "post",
//     //         dataType: "json",
//     //         url: this.props.url,
//     //         success:function(json){
//     //             var plainOptions=[]
//     //             for(var i=0;i<json.message.length;i++){
//     //                 plainOptions.push(
//     //                     '事件编号'+json.message[i].Number
//     //                 )
//     //             }
//     //             this.setState({
//     //                 checkbox:plainOptions,
//     //             })
//     //             console.log(plainOptions)
//     //         }.bind(this),
//     //         error:function(){
//     //             console.log('事件list数据未获取')
//     //         }
//     //     }
//     // }
//     // componentDidMount(){
//     //     var plainOptions=[]
//     //     for(var i=0;i<bendi.length;i++){
//     //         plainOptions.push(
//     //             '事件编号'+bendi[i].Number
//     //         )
//     //         console.log(plainOptions)
//     //     }
//     //     this.setState({
//     //         checkbox:plainOptions,
//     //     })
//     //     // this.loadlists()
//     // }
//     render() {
//         return (
//           <div>
//             <div className="listtitle">
//               <Checkbox
//                 indeterminate={this.state.indeterminate}
//                 onChange={this.onCheckAllChange}
//                 checked={this.state.checkAll}
//               >
//                 全选
//               </Checkbox>
//             </div>
//                 <CheckboxGroup options={bendi} value={this.state.value} onChange={this.onChange} />
//                 {/* <input type="checkbox" value={this.state.value} onClick={this.onChange}/> */}
//           </div>
//         );
//       }
//       onChange = (value) => {
//           console.log(value)
//         this.setState({
//             value,
//             indeterminate: !!value.length && (value.length < this.state.checkbox.length),
//             checkAll: value.length === this.state.checkbox.length,
//         });
//       }
//       onCheckAllChange = (e,value) => {
//           console.log(this.state.value)
//         this.setState({
//           value: e.target.checked ? this.state.checkbox : [],
//           indeterminate: false,
//           checkAll: e.target.checked,
//         });
//       }
// }


const hh=[]
const { Description } = DescriptionList;
class List extends Component{
    constructor(){
        super()
        this.state={
            data:bendi,
            indeterminate: false,
            checkAll: false,
            checkbox:[],
            value:[],
            checklist:false
        }
    }
    loadlists(){
        var lists =[]
        for(var i=0;i<this.state.data.length;i++){
            lists.push(
                <div className="list_pro" key={i}>
                    <Checkbox onChange={this.onChange} checked={this.state.checklist}></Checkbox>
                    <div className="list_pro_right">
                        <Link to="/main/Details">
                            <DescriptionList size="large" title={'事件编号:'+this.state.data[i]}  >
                                <Description term="事件描述">{this.state.data[i]}</Description>
                                <Description term="归属地">{this.state.data[i]}</Description>
                                <Description term="事件类型">{this.state.data[i]}</Description>
                                <Description term="提交时间">{this.state.data[i]}</Description>
                                <Description term="企业名称">{this.state.data[i]}</Description>
                                <Description term="网站域名">{this.state.data[i]}</Description>
                                <Description term="危害级别">{this.state.data[i]}</Description>
                                <Description term="处置状态">{this.state.data[i]}</Description>
                                <Description term="剩余时间">{this.state.data[i]}</Description>
                                <Description term="标签:">{this.state.data[i]}</Description>
                            </DescriptionList>
                        </Link>
                        <button>下发</button>
                    </div>
                </div>
            )
        }
        this.setState({
            checkbox:lists
        })
    }
    componentDidMount(){
        this.loadlists()
    }
    onChange = (e) => {
        console.log(e.target.checked)
        hh.push(e.target.checked)
        this.setState({
            // checkAll:hh.length===this.state.checkbox.length,
            checklist:e.target.checked
        })
      }
    onCheckAllChange = (e,value) => {
        this.setState({
          value: e.target.checked ? this.state.checkbox : [],
          indeterminate: false,
          checkAll: e.target.checked,
        });
    }
    render(){
        return(
            <div>
                <div className="listtitle">
                    <Checkbox indeterminate={this.state.indeterminate}
                        onChange={this.onCheckAllChange}
                        checked={this.state.checkAll}
                    >
                        全选
                    </Checkbox>
                    <a href="###">批量下发</a>
                    <a href="###">导入Excel</a>
                    <a href="###">导出Excel</a>
                </div>
                
                {this.state.checkbox}
            </div>
        )
    }
}
export default List