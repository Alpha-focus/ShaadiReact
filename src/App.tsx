import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { RootEpic } from './epics/index';
import { RootReducer } from './reducers/index';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ErrorBoundary from './utils/ErrorBoundary';
import Home from './components/Home';
import WelcomePage from './components/Welcome';
import Ourstory from './components/Ourstory';
import Events from './components/Events';
import Faq from './components/Faq';
import Rsvp from './components/Rsvp';


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
                    <Router>
                        
                        <Switch>
                            <Route exact path ="/" component={Home} />
                            <Route exact path ="/welcome" component={WelcomePage} />
                            <Route exact path ="/ourstory" component={Ourstory} />
                            <Route  exact path = '/events' component ={Events} />
                            <Route  exact path = '/faq' component ={Faq} />
                            <Route  exact path = '/rsvp' component ={Rsvp} />
                        </Switch>
                    </Router>
                </ErrorBoundary>
            </Provider>

        )
    }
}
export default App;
