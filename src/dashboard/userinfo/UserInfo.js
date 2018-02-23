import React, { Component } from 'react';
import Escalates from './Escalates.js';
import UserDetail from './UserDetail.js';
class UserInfo extends Component {
    render() {
        return (
            <div>
               <div className="user-tab-header" >
                    <table className="table " >
                        <tbody>
                        <tr>
                            <td className="left" >User Information:</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
              <UserDetail />
              <div><Escalates /></div>
              <div>Tracking ID's</div>
              <div>Tickets</div>
            </div>
        );
    }
}
  
export default UserInfo;
  