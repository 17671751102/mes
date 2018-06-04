import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import { Modal, Button } from 'antd';
import $ from 'jquery';
class Truemodal extends React.Component {
    constructor(){
        super()
        this.state={
            visible: false
        }
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
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}
export default Truemodal
