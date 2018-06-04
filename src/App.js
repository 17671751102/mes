import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import './App.css';
import Ingo from './component/login'
import Main from './component/main'
const getConfirmation = (message, callback) => {
  const allowTransition = window.confirm(message)
  callback(allowTransition)
}
class App extends Component {
  render(){
    return(
      <BrowserRouter getUserConfirmation={getConfirmation}>
      {/*basename 用于给路径添加一个基础路径*/}
        <div>
          <Route exact path='/' component={Ingo} />
          <Route path='/main/' component={Main}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
