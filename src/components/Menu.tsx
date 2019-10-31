import React,{Component} from 'react';
import { Link } from "react-router-dom"

class Menu extends Component {
  render(){
    
     const mystyles = {
       tabindex:-1,
       'aria-disabled':'true'
      
    } as React.CSSProperties;
  return (
    
    <div className="container-fluid">
                            <nav className="navbar navbar-expand-lg navbar-light ">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse justify-content-center " id="navbarNav">
                                    <ul className="navbar-nav" >
                                        <li className="nav-item active">
                                            <Link to={'/'} className="nav-link  ml-5 mr-5 mb-1" >Home <span className="sr-only">(current)</span></Link>
                                        </li>
                                         <li className="nav-item">
                                            <Link to={'/welcome'} className="nav-link  ml-5 mr-5 mb-1" >Welcome</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={'/ourstory'} className="nav-link  ml-5 mr-5 mb-1" >Our Story</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={'/events'} className="nav-link  ml-5 mr-5 mb-1" style={mystyles}>Events</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={'/resort'} className="nav-link  ml-5 mr-5 mb-1">Resort</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={'/rsvp'} className="nav-link  ml-5 mr-5 mb-1" >Rsvp & Reservation</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={'/faq'}className="nav-link  ml-5 mr-5 mb-1" >FAQ</Link>
                                        </li> 
                                    </ul>
                                </div>
                            </nav>

                        </div>
  );
}
}

export default Menu;
