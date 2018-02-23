import React, { Component } from 'react';
import Logo from './components/Logo.js'
import Client from './components/Client.js'
import NavLinks from './components/NavLinks.js'
import Settings from './components/Settings.js'

class NavigationBar extends Component {
    render() {
      return (
        <div>
          <div className="logo" >
            <Logo />
          </div>
          
          <Client />
          <div className="navbar" >
            <NavLinks />
          </div>
          <div className="settings" >
            <Settings />
          </div>
        </div>
      );
    }
  }
  
  export default NavigationBar;
  