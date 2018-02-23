import React, { Component } from 'react';

class NavLinks extends Component {
    render() {
      return (

        <ul className="navbar-links" >
            <li>
                <a href="#">Overview</a>                   
            </li>
            <li>
                <a href="#">Broadcasts</a>                   
            </li>
            <li>
                <a href="#">Messages</a>                   
            </li>
            <li>
                <a href="#">Live Chat</a>                   
            </li>
            <li>
                <a href="#">Social Tools</a>                   
            </li>
        </ul>
      );
    }
  }
  
  export default NavLinks;
  