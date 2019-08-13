import { createStore } from 'redux';
import rootReducer from './reducers'

const initialState = {
    elements: []
}

export default createStore(rootReducer, initialState);