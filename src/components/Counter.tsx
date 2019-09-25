import React from 'react';
import {connect} from 'react-redux';
import {loginAction} from '../actions/shaadi.action';

class Counter extends React.Component<any,any> {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: (this.state.count + 1)
    });
  };

  decrement = () => {
    this.setState({
      count: (this.state.count - 1)
    });
  };

  render () {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}
const mapDispatchToProps=()=>{
  loginAction:loginAction
}

const mapStateToProps=(state:any)=>{
return {
  submitLoginActionResponse:state.submitLoginActionResponse
}
}
export default connect(mapDispatchToProps,mapStateToProps)(Counter)

