import React, { Component } from 'react';
import UserBlock from './UserBlock.js'
class Users extends Component {
    constructor(props) {
        super(props);

        this.state={
            users:[
                {
                    name:"Abhay",
                    lastMessage:"I want order some book.",
                    time:"3s"
                },
                {
                    name:"Vinod",
                    lastMessage:"Hello",
                    time:"35s"
                },
                {
                    name:"Srenik",
                    lastMessage:"Thank you.",
                    time:"2m"
                },
                {
                    name:"Srinidhi",
                    lastMessage:"What are the offers available with you.",
                    time:"3m"
                },
                {
                    name:"Vinod",
                    lastMessage:"Hello",
                    time:"35s"
                },
                {
                    name:"Srenik",
                    lastMessage:"Thank you.",
                    time:"2m"
                },
                {
                    name:"Srinidhi",
                    lastMessage:"What are the offers available with you.",
                    time:"3m"
                }
            ]
        }
    }
    render() {
        // console.log(this.state)
        const User = this.state.users && this.state.users.map((usr,i)=>{
            // console.log(usr)
            return(
                <UserBlock user={usr} key={i} />
            )
        });
      return (
        <div>
            <div className="user-tab-header" >
                <table className="table " >
                    <tbody>
                    <tr>
                        <td className="left" >Open(3) <span class="glyphicon glyphicon-menu-down icon-small"></span></td>
                        <td className="right">Newest <span class="glyphicon glyphicon-menu-down icon-small"></span></td>
                    </tr>
                    </tbody>
                </table>
            </div>
          {User}
        </div>
      );
    }
  }
  
  export default Users;
  