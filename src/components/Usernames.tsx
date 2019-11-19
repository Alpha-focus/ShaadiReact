import React, { Component } from 'react';
import { loginAction } from '../actions/shaadi.action';
import { connect } from 'react-redux';
import { format } from 'date-fns';

class Username extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  // static getDerivedStateFromProps(props:any) {
  //   console.log('Entered into')
  //     if(props.loginActionResponse)
  //     {
  //       return {          
  //         details: props.loginActionResponse.login,
  //       };
  //     }

  //     return null;
  // }
  render() {
    return (
      <div className="container-fluid p-4">
        <div className="row flex-column-reverse flex-sm-row">
          <div className="col-lg-4 col-sm-4 col-md-4 col-xl-4">
            <h6 className="top-usernames pl-5"><b>{format(new Date(this.props.eventDate),'MMMM MM, yyyy')}<br></br> {this.props.hashTag}</b></h6>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4 col-xl-4">
            <h1 className="text-center font-weight-bold">Aparna & Gurbinder</h1>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4 col-xl-4">
            <img src='../../img/logo.png' alt="shaadi" className="logo pr-5" />
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = {
  loginAction: loginAction
}
const mapStateToProps = (state: any) => {
  return {
    loginActionResponse: state.loginActionResponse
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Username);
