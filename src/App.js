import React, { Component } from 'react';
import {HashRouter,Route} from 'react-router-dom'
import './App.css';
import Ingo from './component/login'
import Main from './component/main'
import createHistory from 'history/createHashHistory'
const history = createHistory();
class App extends Component {
  render(){
    return(
      <HashRouter history={history}>
      {/*basename 用于给路径添加一个基础路径*/}
        <div>
          <Route exact path='/' component={Ingo} />
          <Route path='/main/' component={Main}/>
        </div>
      </HashRouter>
    )
  }
}

export default App;
