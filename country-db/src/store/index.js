import reducers from '../reducers/index';

// ===== devTools =====
import { createStore, combineReducers } from 'redux';
import DevTools from '../DevTools';

const store = createStore(
  reducers,
  DevTools.instrument()
);
// ===== devTools =====

export default store;
