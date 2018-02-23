import React, { Component } from 'react';
import Chatter from './Chatter.js'
class ChatBox extends Component {
    render() {
        return (
            <div>
                <div className="user-tab-header" >
                    <table className="table " >
                        <tbody>
                        <tr>
                            <td className="left icon-star" ><span className="glyphicon glyphicon-star-empty"></span></td>
                            <td className="right icon-info"><span className="glyphicon glyphicon-info-sign"></span> </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

              <Chatter />
              <div className="product-detail">
                  <div>PRODUCT-KURTAS</div>
                  <div>STORE-BANGALORE</div>
                  <div>WHITELIST-FOLLOWUP</div>
              </div>
            </div>
        );
    }
}
  
export default ChatBox;
  