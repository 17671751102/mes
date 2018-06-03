import React,{ Component } from 'react';
import { Form, Icon, Input, Button,Select,DatePicker } from 'antd';
import $ from 'jquery'
const FormItem = Form.Item;
const Option = Select.Option;
class HorizontalLoginForm extends Component {
    constructor(){
        super()
        this.state={
            reslut:null,
            conditions:null
        }
    }
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
            this.setState({
                conditions:values
            })
          console.log('Received values of form: ', values);
        }
      });
    }
    loadoption(){
        $.ajax({
            type: "post",
            dataType: "json",
            data:{conditions:this.state.conditions},
            url: 'http://192.168.40.180/index.php/Index/index/city_data',
            success:function(json){
                var op=[]
                for(var i=0;i<json.message.length;i++){
                    op.push(
                        <Option value={json.message[i].city_code} key={i}>{json.message[i].city_name}</Option>
                    )
                }
                this.setState({
                    reslut:op
                })
            }.bind(this),
            error:function(){
                console.log('没有获取地市名称')
            }
        })
    }
    componentDidMount(){
        this.loadoption()
    }
    componentWillUnmount(){
        //组件卸载前结束异步请求
        this.setState = (state,callback)=>{
            return;
        };
    }
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
          <div>
              <Form layout="inline" onSubmit={this.handleSubmit}>
                <FormItem>
                    {getFieldDecorator('输入搜索内容')(<Input placeholder="输入搜索内容" autoComplete="off" suffix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)',fontSize:26 }} />}/>)}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit">搜索</Button>
                </FormItem>
                <div className="advanced">
                    <div className="advancedleft">
                        <FormItem label="企业名称">
                            {getFieldDecorator('企业名称')(<Input autoComplete="off"/>)}
                        </FormItem>
                        <FormItem label="危害级别">
                            {getFieldDecorator('危害级别')(
                                <Select placeholder="全部">
                                    <Option value="0">全部</Option>
                                    <Option value="1">低危漏洞</Option>
                                    <Option value="2">中危漏洞</Option>
                                    <Option value="3">高危漏洞</Option>
                                </Select>
                            )}
                        </FormItem>
                        <FormItem label="事件类型">
                            {getFieldDecorator('事件类型')(
                                <Select placeholder="全部">
                                    <Option value="1">全部</Option>
                                    <Option value="2">病毒</Option>
                                    <Option value="3">服务器遭入侵</Option>
                                    <Option value="4">网站篡改</Option>
                                    <Option value="5">DDOC</Option>
                                    <Option value="6">其他</Option>
                                </Select>
                            )}
                        </FormItem>
                        <FormItem label="处置状态">
                            {getFieldDecorator('处置状态')(
                                <Select placeholder="全部">
                                    <Option value="0">全部</Option>
                                    <Option value="2">待审核</Option>
                                    <Option value="3">待处理</Option>
                                    <Option value="4">待核查</Option>
                                    <Option value="5">已完成</Option>
                                    <Option value="6">已关闭</Option>
                                </Select>
                            )}
                        </FormItem>
                        <FormItem label="事件来源">
                            {getFieldDecorator('事件来源')(
                                <Select placeholder="全部">
                                    <Option value="0">全部</Option>
                                    <Option value="3">电话提交</Option>
                                    <Option value="4">邮件提交</Option>
                                    <Option value="7">上级通报</Option>
                                </Select>
                            )}
                        </FormItem>
                        <FormItem label="标签">
                            {getFieldDecorator('标签')(
                                <Select placeholder="全部">
                                    <Option value="0">全部</Option>
                                    <Option value="2">督办</Option>
                                    <Option value="3">正常</Option>
                                </Select>
                            )}
                        </FormItem>
                        <FormItem label="地市">
                            {getFieldDecorator('地市')(
                                <Select placeholder="全部">
                                    {this.state.reslut}
                                </Select>
                            )}
                        </FormItem>
                        <FormItem label="提交时间">
                            {getFieldDecorator('提交时间')(<DatePicker />)}
                        </FormItem>
                    </div>
                    <FormItem>
                        <Button type="primary" htmlType="submit">查询</Button>
                    </FormItem>
                </div>
            </Form>
          </div>
        
      );
    }
  }
const Eventseek = Form.create()(HorizontalLoginForm);
export default Eventseek