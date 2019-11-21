import React, { Component } from 'react';
import { Link} from 'react-router-dom';
//const r = window.location.pathname;
class Menu extends Component<any,any> {
  constructor(props: any){
    super(props);
    this.state={
      route:''
    }
  }
  componentDidMount(){
   this.setState({route:window.location.pathname});
    //const route = window.location.pathname;
    console.log('path',this.state.route);
  }
  render() {
    return (
      <div className="row">
      <div className="col-lg-1 col-sm-1 col-md-1 col-xl-1 ml-3"></div>
      <div className="col-lg-10 col-sm-10 col-md-10 col-xl-10">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon mobileNavBar-link"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center " id="navbarNav">
            <ul className="navbar-nav" >
              <li className={"nav-item active menu-hover" + (this.state.route == "/" ? " menu-hover-active" : "")}>
                <Link className="nav-link mb-1 menu-title" to="/">WELCOME</Link>
              </li>
              <li className={"nav-item active menu-hover" + (this.state.route == "/ourstory" ? " menu-hover-active" : "")}>
                <Link className="nav-link mb-1 menu-title" to="ourstory">OUR STORY</Link>
              </li>
              <li className={"nav-item active menu-hover" + (this.state.route == "/events" ? " menu-hover-active" : "")}>
                <Link className="nav-link mb-1 menu-title" to="events">EVENTS</Link>
              </li>
              <li className={"nav-item active menu-hover" + (this.state.route == "/resort" ? " menu-hover-active" : "")}>
                <Link className="nav-link mb-1 menu-title" to="resort">OUR VENUE</Link>
              </li>
              <li className={"nav-item active menu-hover" + (this.state.route == "/rsvp" ? " menu-hover-active" : "")}>
                <Link className="nav-link mb-1  menu-title" to="rsvp">RSVP & RERESVATION</Link>
              </li>
              <li className={"nav-item active menu-hover" + (this.state.route == "/faq" ? " menu-hover-active" : "")}>
                <Link className="nav-link mb-1 menu-title" to="faq">FAQ</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="col-lg-1 col-sm-1 col-md-1 col-xl-1 mr-3"></div>
      </div>

    );
  }
}

export default Menu;
