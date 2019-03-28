import React, { Component } from 'react';
import fakeAuth from './fakeAuth'
import {Redirect} from 'react-router-dom';

class Login extends Component {
    state = { 
        redirectToReferrer: false //设置此属性是为了能够重新渲染页面
    };
    login=()=>{
        fakeAuth.authenticate(()=>{
            this.setState({
                redirectToReferrer:true
            })
        });
    }
    render() {
        if(this.state.redirectToReferrer){
            return <Redirect to="/protected"/>
        }
        return (
            <div>
                <p>You must log in to view the page at Protected</p>
                <button onClick={this.login}>Log in</button>
            </div>
        );
    }
}

export default Login;
