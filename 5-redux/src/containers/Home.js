import React, { Component } from 'react';
import {HashRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom';
import 'antd/dist/antd.css'
import {Layout, Menu, Breadcrumb, Icon} from 'antd';

import Gailan from './Gailan';
import Tubiao from './Tubiao';
import Liaotian from './Liaotian';
import Bianji from './Bianji';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Home extends React.Component {
    render() {
        const {url}=this.props.match;
        return (
            <Router>
                <Layout>
                  {/* <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                    <Menu.Item key="1"><Link to="/"></Link>首页</Menu.Item>
                    <Menu.Item key="2"><Link to="/lang"></Link>设计语言</Menu.Item>
                    <Menu.Item key="3"><Link to="/component"></Link>组件</Menu.Item>
                    </Menu>
                  </Header> */}
                  <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                      <Menu
                      theme="dark"
                      mode="inline"
                      defaultSelectedKeys={['1']}
                      defaultOpenKeys={['sub1']}
                      style={{ height: '100%', borderRight: 0 }}
                      >
                       <SubMenu key="sub1" title={<span><Icon type="user" />工作台</span>}>
                       {/* <Menu.Item key="1"><Link to=`${url}/gailan`>概览</Link></Menu.Item> 或者用模板字符串 */}
                        <Menu.Item key="1"><Link to={url+'/gailan'}>概览</Link></Menu.Item>
                        <Menu.Item key="2"><Link to={url+'/tubiao'}>图表</Link></Menu.Item>
                        <Menu.Item key="3"><Link to={url+'/bianji'}>编辑器</Link></Menu.Item>
                        <Menu.Item key="4"><Link to={url+'/liaotian'}>聊天室</Link></Menu.Item>
                      </SubMenu>
                      <SubMenu key="sub2" title={<span><Icon type="laptop" />设置中心</span>}>
                       <Menu.Item key="5">用户管理</Menu.Item>
                       <Menu.Item key="6">角色管理</Menu.Item>
                       <Menu.Item key="7">权限管理</Menu.Item>
                       <Menu.Item key="8">option8</Menu.Item>
                      </SubMenu>
                      <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                       <Menu.Item key="9">option9</Menu.Item>
                       <Menu.Item key="10">option10</Menu.Item>
                       <Menu.Item key="11">option11</Menu.Item>
                       <Menu.Item key="12">option12</Menu.Item>
                      </SubMenu>
                     </Menu>
                    </Sider>
                      <Layout style={{ padding: '0 24px 24px' }}>
                      {/* <Breadcrumb style={{ margin: '16px 0' }}>
                       <Breadcrumb.Item>Home</Breadcrumb.Item>
                       <Breadcrumb.Item>List</Breadcrumb.Item>
                       <Breadcrumb.Item>App</Breadcrumb.Item>
                       </Breadcrumb> */}
                        <Content style={{
                           background: '#fff', padding: 24, margin: 0, minHeight: 280,
                        }}>
                          <Route path={url+'/gailan'} component={Gailan} />
                          <Route path={url+'/tubiao'} component={Tubiao} />
                          <Route path={url+'/bianji'} component={Bianji} />
                          <Route path={url+'/liaotian'} component={Liaotian} />
                        </Content>
                      </Layout>
                  </Layout>
                </Layout>
            </Router> 
        );
    }
}

export default Home;
