import React,{Component} from 'react';
import Round from './img/round.png';
class Fifthview extends Component{
    render(){
        return(
            <div className="row">
            <div className="col-lg-12 col-xl-12 col-sm-12 col-md-12 pl-0 pr-0 ">
              <img src={Round} alt="shaadi" className="fifth-div-round"/>
              <div className="container text-center mb-5" >
                <h1 className="rsvp-color">RSVP & Reserve Travel</h1>
                <input type="text" placeholder="Type your email" className="mt-3 text-left textbox-email" />
              </div>
            </div>
          </div>
        )
    }
}
export default Fifthview