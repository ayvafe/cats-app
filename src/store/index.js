import { createStore, combineReducers } from 'redux'
import * as reducers from './reducers';

const storeFactory = ( initialState = {} ) => {
    const store = createStore(
        combineReducers(reducers),
        initialState,
    );

    return store;
}


export default storeFactory
