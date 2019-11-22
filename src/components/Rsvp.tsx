import React,{Component} from 'react';
import Menu from './Menu';
import Username from './Usernames';


  class Rsvp extends Component<any,any> {
  render(){
    return (
    <div className="right-flower">
      <div>
          <div className="container-fluid">
          <Username eventDate={this.props.eventDate} hashTag={this.props.hashTag} />
          <Menu/>
            <div className="container animate">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
                  <div className="text-center mt-5">
                  <h2 className="text-center rsvp-text">Please enter your email</h2>
                  <h2 className="text-center rsvp-text">to RSVP Reserve your room </h2>
                  <div>
                  <input type="email" placeholder="Enter Your email" className="mt-5 rsvp-textbox"/>
                  <a href="welcome" className="arrow" ><img src="../../img/arrow.png" alt="shaadi"/></a>
                  </div>
                  </div>
                </div>
              </div>
              <img src="../../img/left-flower.png" className="left-flr" />
              <img src="../../img/right-flower.png" className="right-flr"/>
            </div>
          </div>
      </div>
    </div>
    );
  }
}

export default Rsvp;
