import { Checkbox } from 'antd';
import React,{ Component } from 'react';
import $ from 'jquery'
const CheckboxGroup = Checkbox.Group;
class List extends Component {
    constructor(){
        super()
        this.state={
            indeterminate: false,
            checkAll: false,
            checkbox:[],
            value:[]
        }
    }
    
    loadlists(){
        $.ajax({
            type: "post",
            dataType: "json",
            url: this.props.url,
            success:function(json){
                var plainOptions=[]
                for(var i=0;i<json.message.length;i++){
                    plainOptions.push(
                        '事件编号'+json.message[i].Number
                    )
                }
                this.setState({
                    checkbox:plainOptions,
                })
                console.log(plainOptions)
            }.bind(this),
            error:function(){
                console.log('事件list数据未获取')
            }
        })
    }
    componentDidMount(){
        this.loadlists()
    }
    render() {
        return (
          <div>
            <div className="listtitle">
              <Checkbox
                indeterminate={this.state.indeterminate}
                onChange={this.onCheckAllChange}
                checked={this.state.checkAll}
              >
                全选
              </Checkbox>
            </div>
                <CheckboxGroup options={this.state.checkbox} value={this.state.value} onChange={this.onChange} />
                {/* <input type="checkbox" value={this.state.value} onClick={this.onChange}/> */}
          </div>
        );
      }
      onChange = (value) => {
        this.setState({
            indeterminate: !!value.length && (value.length < this.state.checkbox.length),
            checkAll: value.length === this.state.checkbox.length,
            value
        });
      }
      onCheckAllChange = (e,value) => {
        this.setState({
          value: e.target.checked ? this.state.checkbox : [],
          indeterminate: false,
          checkAll: e.target.checked,
        });
      }
}
export default List