import React,{Component} from 'react';
class Thirdview extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-lg-12 col-xl-12 col-sm-12 col-md-12 pl-0 pr-0 ">
                <div className="third">
                <img src='./img/round.png' alt="shaadi" className="third-round-img"/>
                    <div className="event-schedule">
                    <h1 >Event</h1>
                    <h1>Schedule</h1>
                    <img src='./img/arrow.png' alt="shaadi" className="arrow"/>
                    </div>
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-xl-3  ml-5 mb-5">
                        <div className="card">
                            <div className="text-center card-month" >
                            <h6 >Nov 10 2019</h6>
                            </div>
                            <div className="card-body mt-4">
                            <h5 className="card-title">Holi Party 
                            </h5>
                            <h6 className="card-subtitle mb-2 text-muted">Beach Club</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the.</p>
                            </div>
                        </div>
                        </div>
                    <div className="col-lg-3 col-md-3 col-xl-3  ml-5 mb-5">
                        <div className="card">
                        <div className="text-center card-month">
                        <h6 >Nov 10 2019</h6>
                        </div>
                        <div className="card-body mt-4">
                        <h5 className="card-title">Mehandi 
                        </h5>
                        <h6 className="card-subtitle mb-2 text-muted">Resident Beach Club</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-xl-3  ml-5 mb-5">
                        <div className="card"  >
                        <div className="text-center card-month">
                        <h6 >Nov 10 2019</h6>
                        </div>
                        <div className="card-body mt-4">
                        <h5 className="card-title">Night Party 
                        </h5>
                        <h6 className="card-subtitle mb-2 text-muted">Beach Club</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the.</p>
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
export default Thirdview