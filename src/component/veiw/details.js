import React, { Component } from 'react';
import $ from 'jquery'
class Ddtails extends Component{
    componentDidMount(){
        $('#event').addClass('active')
    }
    componentWillUnmount(){
        $('#event').removeClass('active')
        console.log(1)
    }
    render(){
        return(
            <h1>详情</h1>
        )
    }
}
export default Ddtails