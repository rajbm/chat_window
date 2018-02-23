import React, { Component } from 'react';
import ChatForm from './ChatForm.js'
class Chatter extends Component {
    constructor(props) {
        super(props);
        this.state={
            messages : ["Hello","are you there?"],
            winHeight: window.innerHeight
        }
        this.addMessage = this.addMessage.bind(this);
    }

    addMessage(text){
        var messageList = this.state.messages;
        messageList.push(text);
        this.setState({messages: messageList});
    }
    render() {
        const fixedHeight= {
            height: window.innerHeight-189-105
        }
        const messages = this.state.messages.map((m,i)=>{
            return(
                <div key={i} className="chat" >
                    <span className="reply">{m}</span>
                </div>
            )
        })
        return (
            <div className="chatter">
                <div style={fixedHeight} className="collection" >
                    {messages}
                </div>
              <ChatForm addMessage={this.addMessage} />
            </div>
        );
    }
}
  
export default Chatter;
  