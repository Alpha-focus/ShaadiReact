import React,{Component} from 'react';

class Username extends Component {
  render(){
  return (
    <div className="container-fluid p-4">
      <div className="row flex-column-reverse flex-sm-row">
        <div className="col-lg-4 col-sm-4 col-md-4 col-xl-4">
        <h6 className="top-usernames">October 27, 2014<br></br> #partylikerockstar</h6>
          </div>
        <div className="col-lg-4 col-sm-4 col-md-4 col-xl-4">
          <h3 className="text-center font-weight-bold">Aparna & Gurbinder</h3>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4 col-xl-4">
         <img src='../../img/logo.png' alt="shaadi"  className="logo"/>
        </div>
      </div>
    </div>
  );
}
}

export default Username;
