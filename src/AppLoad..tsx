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
      isLogin: {},
      ourstory: {},
      subEvents: {},
      eventDate: ''
    };

  }

  static getDerivedStateFromProps(props: any) {
    console.log('Entered into')
    if (props.loginActionResponse) {
      if (props.loginActionResponse.login) {
        return {
          isLogin: props.loginActionResponse.login,
          ourStory: props.loginActionResponse.login.eventDetails.eventStories,
          subEvents: props.loginActionResponse.login.eventDetails.subEvents,
          eventDate: props.loginActionResponse.login.eventDetails.startDateTime,
          property:props.loginActionResponse.login.eventDetails.property,
          faq: props.loginActionResponse.login.eventDetails.faq || 'empty',
          hashTag: props.loginActionResponse.login.eventDetails.hasTag || '#empty',
          groomName: '',
          brideName: ''
        };
      }

    }

    return null;
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    console.log("calling componentdidmount")
    console.log(prevProps, prevState)
  }


  componentDidMount() {
    let payload = { a: 'sample' }
    this.props.loginAction(payload), () => {
      console.log('returned to call back ')
    };

  }


  render() {
    return (
      <div className="container-fluid pr-0 pl-0 " >
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
            <div>
              <Router>
                <Switch>
                  {this.state && this.state.isLogin && this.state.isLogin.eventDetails &&
                    <Route exact path="/" component={() => <WelcomePage eventDate={this.state.eventDate} hashTag={this.state.hashTag} isLoginRes={this.state.isLogin.eventDetails.eventStories[0].copy} />} />
                  }
                  {
                    this.state && this.state.ourStory && <Route exact path="/ourstory" component={() => <Ourstory eventDate={this.state.eventDate} hashTag={this.state.hashTag} details={this.state.ourStory} />} />
                  }
                  {
                    this.state && this.state.subEvents && <Route exact path="/events" component={() => <Events eventDate={this.state.eventDate} hashTag={this.state.hashTag} events={this.state.subEvents} />} />
                  }
                  {
                    this.state && this.state.eventDate && <Route exact path='/resort' component={() => <Resort eventDate={this.state.eventDate} hashTag={this.state.hashTag} property={this.state.property}/>} />
                  }
                  {
                    this.state && this.state.eventDate && <Route exact path='/rsvp' component={() => <Rsvp eventDate={this.state.eventDate} hashTag={this.state.hashTag} />} />
                  }
                  {
                    this.state && this.state.eventDate && <Route exact path='/faq' component={() => <Faq faqs={this.state.faq} eventDate={this.state.eventDate} hashTag={this.state.hashTag} />} />
                  }
                 
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
  loginAction: loginAction
}
const mapStateToProps = (state: any) => {
  return {
    loginActionResponse: state.loginActionResponse
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AppLoad);

