import React, { Component } from 'react';
import {HashRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom';

//组件：UI组件 components（展示数据）和容器组件containers（请求数据，写逻辑）
//或者叫木偶组件和只能组件
import 'antd/dist/antd.css'
import {Layout, Menu, Breadcrumb, Icon} from 'antd';

import Gailan from './containers/Gailan';
import Tubiao from './containers/Tubiao';
import Liaotian from './containers/Liaotian';
import Bianji from './containers/Bianji';
import Home from './containers/Home'
import url from 'url';
import Login from './containers/Login';
import Lang from './containers/Lang';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1"><Link to="/home">首页</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/lang">设计语言</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/login">登录</Link></Menu.Item>
            </Menu>
          </Header>
          <Route path="/home" component={Home}></Route>
          <Route path="/lang" component={Lang}></Route>
          <Route path="/login" component={Login}></Route>
          <Route exact path='/' render={()=><Redirect to="/home/gailan" />}></Route>
          <Route exact path='/home' render={()=><Redirect to="/home/gailan" />}></Route>
        </Layout>
      </Router>
    )
  }
}

export default App;
