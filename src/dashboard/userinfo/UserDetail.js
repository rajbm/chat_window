import React, { Component } from 'react';
import UserPicture from '../currentuser/UserPicture.js'
import UserName from '../currentuser/UserName.js'
import UserEmail from '../currentuser/UserEmail.js'
import UserPhoneNumber from '../currentuser/UserPhoneNumber.js'
import UserLang from '../currentuser/UserLang.js'
import UserGender from '../currentuser/UserGender.js'
class UserDetail extends Component {
    render() {
      return (
        <div className="UsrBlock">
          <div className="usrPic" >
            <UserPicture />
          </div>
          <div className="usrdetails">
            <h3><UserName /></h3>
            <table className="table">
              <tbody>
                <tr>
                  <td><UserGender /></td>
                  <td><UserPhoneNumber /></td>
                </tr>
                <tr>
                  <td><UserLang/></td>
                  <td><UserEmail /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }
  
  export default UserDetail;
  