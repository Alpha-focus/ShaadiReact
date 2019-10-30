import React,{Component} from 'react';
import Menu from './Menu';
import Username from './Usernames';
class WelcomePage extends Component{
  render(){
    const mystyles = {
      float:'right',
      width:'15vw'
   } as React.CSSProperties;
    return(
      <div className="container-fluid">
        <Username/>
        <Menu/>
          <div className="container p-3">
            <div className="row" >
              <div className="col-lg-6  col-xl-6 col-md-6 w-100 pl-0 pr-0">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="d-block w-100"src={'./img/welcome.png'} alt="shaadi"/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src={'./img/welcome.png'} alt="Second slide"/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src={'./img/welcome.png'} alt="Third slide"/>
                </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
                </a>
                </div>
              </div>
                <div className="col-lg-6  col-xl-6 col-md-6 w-100 pl-0 pr-0 ">
                <div className="text-center mt-5 welcome-text">
                <h1>Welcome you all</h1>
                <h6 >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.</h6>
                </div>
                <img src={'./img/welcome-leaf.png'} alt="shaadi" style={mystyles} />
                </div>
            </div> 
          </div>
      </div>
    )
  }
}
export default WelcomePage