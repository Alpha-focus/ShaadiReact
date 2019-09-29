import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { RootEpic} from './epics/index';
import { RootReducer } from './reducers/index';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import { MemoryRouter } from "react-router"


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
            <MemoryRouter>
                {/* <Switch>
                    <Route path="/" compnent={Counter}/>
                    </Switch> */}
                </MemoryRouter>
                <Counter/>
            </Provider>
        )
    }
}
export default App;
