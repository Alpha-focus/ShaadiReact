import React,{Component} from 'react';
import{Link} from 'react-router-dom';
class Menu extends Component {
  render(){
  return (
      <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light ">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon mobileNavBar-link"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-center " id="navbarNav">
    <ul className="navbar-nav" >
      <li className="nav-item active menu-hover ">
        <Link className="nav-link  ml-5 mr-5 mb-1"  to="/">WELCOME</Link>
      </li>
      <li className="nav-item menu-hover">
        <Link className="nav-link  ml-5 mr-5 mb-1" to="ourstory">OUR STORY</Link>
      </li>
      <li className="nav-item menu-hover">
        <Link className="nav-link  ml-5 mr-5 mb-1" to="events">EVENTS</Link>
      </li>
      <li className="nav-item menu-hover">
        <Link className="nav-link  ml-5 mr-5 mb-1" to="resort">OUR VENUE</Link>
      </li>
      <li className="nav-item menu-hover">
        <Link className="nav-link  ml-5 mr-5 mb-1  " to="rsvp">RSVP & RESERVATION</Link>
      </li>
      <li className="nav-item menu-hover">
        <Link className="nav-link  ml-5 mr-5 mb-1" to="faq">FAQ</Link>
      </li>
    </ul>
  </div>
</nav>

</div>

  );
}
}

export default Menu;
