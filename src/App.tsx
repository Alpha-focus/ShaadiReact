import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { RootEpic } from './epics/index';
import { RootReducer } from './reducers/index';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ErrorBoundary from './utils/ErrorBoundary';
import WelcomePage from './components/Welcome';
import Ourstory from './components/Ourstory';
import Events from './components/Events';
import Faq from './components/Faq';
import Rsvp from './components/Rsvp';
import Resort from './components/Resort';


const epicMiddleware = createEpicMiddleware();
const store = createStore(
    RootReducer,
    applyMiddleware(epicMiddleware)
);
epicMiddleware.run(RootEpic)

class App extends Component<any, any>{

    render() {
        return (
            <Provider store={store}>
                <ErrorBoundary>
                    <div className="container-fluid pr-0 pl-0 " >
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
                                <div >
                                    <Router>
                                        <Switch>
                                            <Route exact path="/" component={WelcomePage} />
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
                </ErrorBoundary>
            </Provider>

        )
    }
}
export default App;
