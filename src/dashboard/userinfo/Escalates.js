import React, { Component } from 'react';

class Escalates extends Component {
    constructor(props) {
        super(props);

        this.state={
            escalates: ["call user","delayed order","cashback","delayed refund","retutn not picked","retutn not picked","Measurement done"]
        }
    }
    render() {
        const escalate = this.state.escalates && this.state.escalates.map((esc,i)=>{
            return(
                <div key={i} className="single-escalate" >{esc.toUpperCase()}</div>
            )
        });
        return (
            <div className="escalates" >
              <p>Escalates</p>
              {escalate}
            </div>
        );
    }
}
  
export default Escalates;
  