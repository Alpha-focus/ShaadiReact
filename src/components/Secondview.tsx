import React from 'react';
import { connect } from 'react-redux';

class Secondview extends React.Component<any, any> {
        constructor(props: any) {
          super(props);
          this.state = {
            
          };
          
        }
      
    render(){
        return(
            <div className="row second-div">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xl-4">
                        <img src='./img/flower-second.png' alt="shaadi" className="img-fluid mt-5 flower-second"/>
                        <h1 className="ourstory-text">Our<h1> Story</h1></h1>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xl-6">
                        <div className="story-details">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type.</p>
                            <p>but also the leap into electronic typesetting, 
                            remaining essentially unchanged. 
                            It was popularised in the 1960s with the release of Letraset 
                            sheets containing Lorem Ipsum passages.</p>
                            <button className="btn btn-outline-light readmorebtn">Read More</button>
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
export default connect(mapStateToProps,mapDispatchToProps)(Secondview)

