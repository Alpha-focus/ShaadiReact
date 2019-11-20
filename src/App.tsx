import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { RootEpic } from './epics/index';
import { RootReducer } from './reducers/index';
import { Provider } from 'react-redux';
import ErrorBoundary from './utils/ErrorBoundary';
import AppLoad from './AppLoad.';



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
                   <AppLoad/>
                </ErrorBoundary>
            </Provider>

        )
    }
}

export default App  

