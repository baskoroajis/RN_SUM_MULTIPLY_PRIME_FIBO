import { createStore } from 'redux';

import AppReducer from './reducers/Reducers';

const store = createStore(AppReducer);

export default store;
