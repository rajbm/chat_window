import React, { Component } from 'react';

class ChatForm extends Component {

    constructor(props) {
        super(props);

        this.submitForm = this.submitForm.bind(this);
    }
    submitForm (event) {
        event.preventDefault();
        var input = event.target.querySelector('input');
        var value = input.value;
        input.value="";
        this.props.addMessage(value)
    }
    render() {
        return (
            <div>
              <form onSubmit={this.submitForm} className="chat-form" >
                  <input type="text" placeholder="Enter reply..." />
                  <button type="submit">Send</button>
              </form>
            </div>
        );
    }
}
  
export default ChatForm;
  