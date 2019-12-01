import React,{Component} from 'react';
import Menu from './Menu';
import Username from './Usernames';

class Resort extends Component<any,any> {
render(){
  return(
    <div className="right-flower">
      <div className="left-flower">
      <div className="container-fluid">
      <Username eventDate={this.props.eventDate} hashTag={this.props.hashTag}/>
      <Menu/>
        <div className="container p-4 animate">
        <div className="p-4 resort">
          <div className="row">
          <div className="col-lg-8 col-xl-8 col-sm-8 col-md-8">
          Room reservations must be made using our group block of rooms in order to attend in order to attend wedding events
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xl-4">
          <button className="btn w-75 rsvp-button">RSVP AND RESERVATIONS  ></button>
          </div>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-lg-3 col-md-3 col-xl-3 col-sm-3 " >
            <div className="resort-nav">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical" >
            <a href="#v-pills-home" className="nav-link active resort-nav-bottom p-3" id="v-pills-home-tab" data-toggle="pill"  role="tab" aria-controls="v-pills-home" aria-selected="true">Our Venue</a>
            <a href="#v-pills-profile" className="nav-link p-3" id="v-pills-profile-tab" data-toggle="pill"  role="tab" aria-controls="v-pills-profile" aria-selected="false">Room Types</a>
            </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-xl-4 col-sm-4">
            <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"> <h3>Three amazing towers</h3>
            <h5>{this.props.property.propertyName}</h5>
            <p>{this.props.property.propertyDescription}</p>
            <h5>Room choices at pyramid tower:</h5>
            <ul>
            <li>
            Lorem Ipsum is simply dummy text of the printing 
            and typesetting industry.
            </li>
            <li>
            Lorem Ipsum is simply dummy text of the printing 
            and typesetting industry.
            </li>
            <li>
            Lorem Ipsum is simply dummy text of the printing 
            and typesetting industry.
            </li>
            </ul>
          </div>
            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"> 
            <h3>Three amazing towers</h3>
            <h5>{this.props.property.propertyName}</h5>
            <p>{this.props.property.propertyDescription}</p>
            <h5>Occupancy Rules</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s.</p>
            <button className="btn stay-btn">Stays at $ 150 / Adult / Night</button>
            </div>
            </div>
            </div>
            <div className="col-lg-5col-md-5 col-xl-5 col-sm-5">
            <img src='../../img/beach.png' alt="shaadi" className=" img-fluid"/>
            </div>
        </div>
        </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Resort;
