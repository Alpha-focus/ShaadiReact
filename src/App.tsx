import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { RootEpic} from './epics/index';
import { RootReducer } from './reducers/index';
import Login from './components/Login';
import { Provider } from 'react-redux';
import Firstview from './components/Firstview';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom"


const epicMiddleware= createEpicMiddleware();
const store =createStore(
    RootReducer,    
    applyMiddleware(epicMiddleware)
);
epicMiddleware.run(RootEpic)

class App extends Component<any,any>{

    render(){
        return (
            <Provider store={store}>
            <Router>
                 <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/shaadi" component={Firstview} />
                    </Switch>
                </Router>
            </Provider>
        )
    }
}
export default App;
