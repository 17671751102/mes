import React, {Component} from 'react';
import {Table} from 'antd';
import {Link} from 'react-router-dom';
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
          sorter: (a, b) => parseInt(a.cpl,10)-parseInt(b.cpl,10),
        }];
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
            current:1,
            loading:true
      }
    }
    
    render(){
        const columns = this.columns;
        return(<Table dataSource={this.props.url} columns={columns} loading={this.props.loading} 
            pagination={{
                current:this.state.current,
                size:"small",
                position:"bottom",
                pageSize:4,
                onChange: (page, pageSize) => {
                    console.log('current page: ', page)
                    this.setState({
                        current: page
                    })
                }}}/>)
    }
} 
export default Donetable