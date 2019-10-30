import React,{Component} from 'react';
import Menu from './Menu';

import Username from './Usernames';

  class Home extends Component {
  render(){
    return (
      <div className="container-fluid menu-page">
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-md-12 col-xl-12 "> 
              <Username/>
              <Menu/>
              <div  className="text-center mt-5 home-text" >
              <div>
              <h1>Wendi</h1>
              {/* <h1 Style={"color: #ffb200;"}>&</h1> */}
              <h1>&</h1>
              <h1>Henrik</h1>
              <img src={'./img/group-7.png'} alt="shaadi" className="mt-5"/>
              <h5 className="details-div-date mt-5">10 - Nov -2019</h5><br></br>
              </div>
              <a href="welcome" className="arrow" ><img src={'./img/arrow.png'} alt="shaadi" className="arrow-height"/></a>
              </div>
          </div>
        </div>
      </div>
    );
  }
  }

export default Home;
