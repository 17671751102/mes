import React from 'react';
import { Modal, Button } from 'antd';
import src from '../../../img/success.png'
import '../../../css/veiw/modal.css'
import $ from 'jquery';
class Truemodal extends React.Component {
    constructor(){
        super()
        this.state={
            visible: false,
            src:null,
            data:null
        }
    }
    load(){
      $.ajax({
        type: "post",
        dataType: "json",
        url: this.props.url,
        success:function(json){
          this.setState({
            src:src,
            data:json.message
          })
        }.bind(this),
        error(){
          console.log("未获取数据")
        }
      })
    }
    showModal = () => {
        this.setState({
          visible: true,
        });
    }
    handleCancel = (e) => {
        this.setState({
          visible: false,
        });
    }
    handleOk = (e) => {
        this.setState({
          visible: false,
        });
    }
    componentDidMount(){
      this.load()
    }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>下发</Button>
        <Modal
            wrapClassName="vertical-center-modal"
            visible={this.state.visible}
            footer={null}
            onCancel={this.handleCancel}
            onOk={this.handleOk}
        >
          <img src={this.state.src} alt=""/>
          <br/>
          {this.state.data}
        </Modal>
      </div>
    );
  }
}
export default Truemodal
