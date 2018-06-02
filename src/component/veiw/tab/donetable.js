import React, {Component} from 'react';
import {Table} from 'antd';
import {Link} from 'react-router-dom';
import $ from 'jquery'
class Donetable extends Component{
    constructor(){
        super();
        const theader =
        [{
          title: '地址',
          dataIndex: 'city_name',
          key: 'city_name',
          align:"center",
        }, {
          title: '事件总量',
          dataIndex: 'sum',
          key: 'sum',
          align:"center",
          sorter: (a, b) => a.sum - b.sum,
          defaultSortOrder: 'descend',
        },
        {
          title: '已完成事件数量',
          dataIndex: 'row',
          key: 'row',
          align:"center",
          sorter: (a, b) => a.row - b.row,
        },
        {
          title: '已完成率',
          dataIndex: 'cpl',
          key: 'cpl',
          align:"center",
          sorter: (a, b) => a.cpl - b.cpl,
        }];
        {/*unshift() 往数组头部添加元素*/}
      theader.unshift({
        title: '序号',
        dataIndex: 'ID',
        // key: 'ID',
        align:"center",
        render:(text, record, index)=>{
          return(
            <span>{index+1}{/*三个参数*/}</span>
          )
        }
      })
      {/*push() 往数组尾部添加元素*/}
      theader.push({
        title: '操作',
        dataIndex: 'action',
        align:"center",
        render: (text, record) => {
          return (
              <span>
                  <Link to=''>查看</Link>
              </span>
          );
        },
      })
      this.columns = theader
      this.state={
            dataSource:null,
            loading:true
      }
    }
    componentDidMount(){
        $.ajax({
            type: "post",
            dataType: "json",
            url: this.props.url,
            success: function (json) {
                var jsons =[]
                for(var i=0;i<json.message.length;i++){
                    jsons.push({
                        key:i+1,
                        city_name:json.message[i].city_name,
                        sum:json.message[i].sum,
                        row:json.message[i].row,
                        cpl:json.message[i].cpl,
                    })
                }
                this.setState({
                    dataSource:jsons,
                    loading:false
                })
            }.bind(this),
            error: function (json) {
                console.log("已完成数据未获取");
            }
        });
    }
    render(){
        const columns = this.columns;
        return(<Table dataSource={this.state.dataSource} columns={columns} loading={this.state.loading} />)
    }
} 
export default Donetable