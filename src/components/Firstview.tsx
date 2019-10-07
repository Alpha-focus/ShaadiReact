import React from 'react';
import { connect } from 'react-redux';

  class Firstview extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
      this.state = {
        
      };
      
    }
  

    render(){
        return(
    <div className="row">
      <div className="col-lg-6 col-sm-6 col-xl-6 col-md-6 w-100 pl-0 pr-0">
        <img src={'./img/welcome.png'} className="img-fluid user-img w-100" alt="welcome"/>
      </div>
      <div className="col-lg-6 col-sm-6 col-xl-6 col-md-6 w-100 pl-0 pr-0 ">
        <div className="details-div">
          <div className="details-div-border">
          <img src={'./img/flowertop.png'} alt="shaddi" className="flower-top"/>
            <div  className="text-center details-div-inner" >
            <img src={'./img/stroke-1.png'} alt="shaadi"></img>
              <div className="details-div-user">
                <h1>Maria</h1>
                <h3>&</h3>
                <h1>James</h1>
                <br></br>
                <br></br>
                <h4 className="details-div-date">10 - Nov -2019</h4><br></br>
                <p>Costa Mujeres, mexico</p><br></br>
                <h5>24 : 56 : 04 | 6 Days Away</h5><br></br>
              </div>
            <img src={'./img/stroke-1.png'} alt="shaadi"></img>
            </div>
          </div>
        </div>
      </div>
    </div> 
        )
    }
}

const mapDispatchToProps = {

}


const mapStateToProps = (state: any) => {
  return {
    loginActionResponse: state.loginActionResponse
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Firstview)

