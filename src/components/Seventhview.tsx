import React,{Component} from 'react';
import Group from './img/group.png';
import Flower from './img/flower.png';
import Facebook from './img/facebook.png';
import Youtube from './img/youtube.png';
import Insta from './img/insta.png';
class Seventhview extends Component{
    render(){
        return(
            <div className="row footer-div">
                <div className="col-lg-4 col-md-4 col-xl-4 p-5 text-center footer-icon footer-content" > 
                <img src={Group} alt="group" className="img-fluid" /> 
                </div>
                <div className="col-lg-4  col-md-4 col-xl-4 p-5 footer-icon">
                <div className="container footer-text text-center">
                    <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-xl-6  p-3 " >
                        <p >Events	</p>
                        <p>Resort</p>
                        <p>Accommodation</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xl-6  p-3">
                        <p>RSVP</p>
                        <p>Modify</p>
                        <p>FAQ</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-4  col-md-4 col-xl-4 p-5 text-center footer-icon footer-content" >
                <div className="row">
                <div className="col-lg-4 col-md-4 col-xl-4 col-sm-4 footer-icon">
                <img src={Facebook} alt="group" className="img-fluid ml-3 " />
                </div>
                <div className="col-lg-4 col-md-4 col-xl-4 col-sm-4 footer-icon">
                <img src={Insta} alt="group" className="img-fluid ml-3" /> 
                </div>
                <div className="col-lg-4 col-md-4 col-xl-4 col-sm-4 footer-icon">
                <img src={Youtube} alt="group" className="img-fluid ml-3" /> 
                </div>
                </div>
                </div> 
                <img src={Flower} className="img-fluid" alt="shaadi"/>
          </div>
        )
    }
}
export default Seventhview