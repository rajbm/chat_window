import React, { Component } from 'react';

class UserBlock extends Component {
    render() {
        // console.log(this.props.user)
        return (
            <div className="user-block">
               <table className="table" >
                   <tbody>
                    <tr>
                        <td className="left name_usr" >
                            {this.props.user.name}
                        </td>
                        <td className="right name_time" >
                        {this.props.user.time}
                        </td>
                    </tr>
                    <tr>
                        <td className="name_msg" >{this.props.user.lastMessage}</td>
                    </tr>
                   </tbody>
               </table>
            </div>
        );
    }
}
  
export default UserBlock;
  