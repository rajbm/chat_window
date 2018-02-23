import React, { Component } from 'react';
import UsrPic from '../../img/user_male.png';

class UserPicture extends Component {
    render() {
      return (
         <img src={UsrPic} alt="user" />
      );
    }
  }
  
  export default UserPicture;
  