import React,{Component} from 'react';
import Round from './img/round.png';
import Beach from './img/beach.png';
import Night from './img/night.png';
import Cusine from './img/cusine.png';
import Cottage from './img/cottage.png';
import Eventspace from './img/eventspace.png';
class Fourthview extends Component{
    render(){
        return(
            <div className="row">
            <div className="col-lg-12 col-xl-12 col-sm-12 col-md-12 pl-0 pr-0 ">
              <div className="second-div">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                      <div className="container p-5 mb-5">
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-xl-4">
                            <img src={Round} alt="shaadi" className="about-round"/>
                            <div className="font-weight-bold about-resort" >
                            <h2 >About </h2>
                            <h2>Resort</h2>
                            </div>
                          </div>
                          <div className="col-lg-7 col-md-7 col-xl-7  pl-5 mt-5">
                            <h6 className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h6>
                            <button className="btn btn-outline-light readmorebtn mt-3 h3">Know More</button>
                          </div>
                        </div>
                      <div className="row mt-5">
                        <div className="col-lg-8 col-md-8 col-sm-8 col-xl-8">
                          <img src={Beach} alt="shaadi" className="img-fluid "/>
                          <h5 class="bottom-left" >Massage Parlour</h5>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xl-4">
                          <img src={Cusine} alt="shaadi" className="img-fluid img-space"/>
                          <h5 class="bottom-left">Cuisine</h5>
                        </div>
                      </div>
                      <div className="row mt-5">
                          <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4">
                            <img src={Night} alt="shaadi" className="img-fluid"/> 
                            <h5 class="bottom-left">Night on Beach</h5> 
                          </div>
                          <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4">
                            <img src={Cottage} alt="shaadi" className="img-fluid img-space"/> 
                            <h5 class="bottom-left">Beach View</h5>
                          </div>
                          <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4">
                            <img src={Eventspace} alt="shaadi" className="img-fluid  img-space"/> 
                            <h5 class="bottom-left">Event Space</h5>
                          </div>
                      </div>
                      </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
export default Fourthview