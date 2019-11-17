import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import WelcomePage from './components/Welcome';
import Ourstory from './components/Ourstory';
import Events from './components/Events';
import Faq from './components/Faq';
import Rsvp from './components/Rsvp';
import Resort from './components/Resort';
import { connect } from 'react-redux';
import { loginAction } from './actions/shaadi.action';

class AppLoad extends Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state = {
          isLogin:{}
        };
        
      }

    static getDerivedStateFromProps(props:any) {
        console.log('Entered into')
          if(props.loginActionResponse)
          {
            return {          
              isLogin: props.loginActionResponse.login,
            };
          }
    
          return null;
      }
    
      componentDidUpdate(prevProps:any, prevState:any) {
        console.log("isLoginValue",this.state.isLogin)
        console.log(prevProps,prevState)
      }

      
  componentDidMount(){
    let payload={a:'sample'}
    this.props.loginAction(payload),()=>{
      console.log('returned to call back ')
    };

  }
    

    render() {
        return (
                    <div className="container-fluid pr-0 pl-0 " >
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
                                <div >
                                    <Router>
                                        <Switch>
                                        {this.state && this.state.isLogin && this.state.isLogin.eventDetails &&
                                            <Route exact path="/" component={() => <WelcomePage isLoginRes={this.state.isLogin.eventDetails.eventStories[0].copy}/>} />
                                        }
                                            <Route exact path="/ourstory" component={Ourstory} />
                                            <Route exact path='/events' component={Events} />
                                            <Route exact path='/resort' component={Resort} />
                                            <Route exact path='/faq' component={Faq} />
                                            <Route exact path='/rsvp' component={Rsvp} />
                                        </Switch>
                                    </Router>
                                </div>
                            </div>
                        </div>
                    </div>
                
        )
    }
}
const mapDispatchToProps = {
    loginAction:loginAction
  }
  const mapStateToProps = (state: any) => {
    return {
      loginActionResponse: state.loginActionResponse
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(AppLoad);  

