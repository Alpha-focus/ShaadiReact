import React from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../actions/shaadi.action';

class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
      isLogin:''
    };
    this.onSubmit = this.onSubmit.bind(this)
  }


  onSubmit() {
    this.setState({count:10})
    let payload={a:'sample'}
    this.props.loginAction(payload),()=>{
      console.log('returned to call back ')
    };
  }

  static getDerivedStateFromProps(props:any) {
    console.log('Entered into')
      if(props.loginActionResponse.login==='Login')
      {
        return {
          isLogin: props.loginActionResponse.login,
        };
      }

      return null;
  }

  componentDidUpdate(prevProps:any, prevState:any) {
    console.log("isLoginValue",this.state.isLogin)
    console.log(prevProps,prevState)
  }

 


  render() {
    return (
      <div>
        <div id="LoginForm">
          <div className="container">
            <div className="centered" >
              <h1 >Welcome To Shaadi.com</h1>
            </div>
            <h1 className="form-heading">login Form</h1>
            <div className="login-form">
              <div className="main-div">
                <div className="panel">
                  <p>Please enter your email and password</p>
                </div>
                {/* <form id="Login"> */}
                  <div className="form-group">
                    <input type="email" className="form-control" id="inputEmail" placeholder="Email Address" />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                  </div>
                  <div className="forgot">
                    <a href="reset.html">Forgot password?</a>
                  </div>
                  <input type="submit" className="btn btn-primary" name='Login' onClick={this.onSubmit}/>
                {/* </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>



    );
  }
}
const mapDispatchToProps = {
  loginAction:loginAction
}


const mapStateToProps = (state: any) => {
  return {
    loginActionResponse: state.loginActionResponse
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)

