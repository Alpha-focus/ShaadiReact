import React, { Component } from 'react';
import Menu from './Menu';
import Username from './Usernames';
import { connect } from 'react-redux';
import { loginAction } from '../actions/shaadi.action';


class WelcomePage extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLogin: {}
    };

  }

  // static getDerivedStateFromProps(props:any) {
  //   console.log('Entered into')
  //     if(props.loginActionResponse)
  //     {
  //       return {          
  //         isLogin: props.loginActionResponse.login,
  //       };
  //     }

  //     return null;
  // }

  // componentDidUpdate(prevProps:any, prevState:any) {
  //   console.log("isLoginValue",this.state.isLogin)
  //   console.log(prevProps,prevState)
  // }


  // componentDidMount(){
  //   // let payload={a:'sample'}
  //   // this.props.loginAction(payload),()=>{
  //   //   console.log('returned to call back ')
  //   // };

  // }
  render() {
    return (
      <div className="right-flower">
        <div className="container-fluid">
          <Username eventDate={this.props.eventDate} hashTag={this.props.hashTag} />
          <Menu />
        </div>
        <div className="container pl-5 animate">
          <div className="row">
            <div className="col-lg-6  col-xl-6 col-md-6 w-50 pl-0 pr-0">
              <img src="../../img/flower.png" alt="shaadi" className="welcome-flower" />
              <div id="carouselExampleIndicators" className="carousel slide pl-5 pr-5 pt-3" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-70 pl-4" src="../../img/pair-img.png" alt="shaadi" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-70 pl-4" src="../../img/pair-img.png" alt="Second slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-70 pl-4" src="../../img/pair-img.png" alt="Third slide" />
                  </div>
                </div>
                {/* <a href="#carouselExampleIndicators" className="carousel-control-prev"  role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
            </a>
            <a href="#carouselExampleIndicators" className="carousel-control-next"  role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
            </a> */}
              </div>
            </div>
            <div className="col-lg-6  col-xl-6 col-md-6 w-100" >
              <div className=" container w-75 p-3 welcome-border">
                <h2 className="welcome-box-title">Welcome</h2>
                {this.props && this.props.isLoginRes &&
                  <h5 dangerouslySetInnerHTML={{ __html: this.props.isLoginRes }}></h5>
                }
                <button className="btn w-100 rsvp-button">RSVP AND RESERVATIONS  ></button>
              </div>
            </div>
          </div>
        </div>
      </div>


    )
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
export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage)