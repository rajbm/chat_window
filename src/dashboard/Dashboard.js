import React, { Component } from 'react';
import NavigationBar from './navigation/NavigationBar.js'
import UserName from './currentuser/UserName.js'
import UserPicture from './currentuser/UserPicture.js'
import Search from './form_components/Search.js'
import Users from './users/Users.js'
import UserInfo from './userinfo/UserInfo.js'
import ChatBox from './chatbox/ChatBox.js'

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state={
            winHeight: window.innerHeight
        }
    }
    render() {
        console.log(this.state.winHeight)
        const css = {
            height: this.state.winHeight
        }
        const fixedHeight= {
            height: window.innerHeight-92
        }
      return (
         <section>
         <div className="dashboard">
            <div className="right-navbar" style={css} ><NavigationBar /> </div>
                <div className="left-panel">
                    <div className="top-panel-bar" >
                        <div className="top-bar-flex">
                            <div className="serch-input" ><Search /></div>
                            <div className="user-bar" >
                                <div className="user-profile-image" ><UserPicture /> </div>
                                <div><UserName /> </div>
                                <div className="icon-down" ><span className="glyphicon glyphicon-menu-down"></span></div>
                            </div>
                        </div>
                        <div className="live-chat" ><span className="glyphicon glyphicon-bullhorn icon-horn"></span> Live Chat <span className="glyphicon glyphicon-menu-down icon-down-two"></span></div>
                    </div>
                    <div className="flex-box" >
                        <div className="user-list" style={fixedHeight}><Users /></div>
                        <div className="chat-block" style={fixedHeight}><ChatBox /></div>
                        <div className="user-info" style={fixedHeight}><UserInfo /></div>
                    </div>
                </div>
            </div>
       </section>
      );
    }
  }
  
  export default Dashboard;
  