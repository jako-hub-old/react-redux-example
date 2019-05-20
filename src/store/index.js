import { createStore } from 'redux';
import getReducers from './reducers';

export default createStore(getReducers());