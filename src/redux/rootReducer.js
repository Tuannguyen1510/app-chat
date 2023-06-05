import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import app from './slices/app';
// slices


// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  //   whitelist: [],
  //   blacklist: [],
};

const rootReducer = combineReducers({
app:app,
});

export { rootPersistConfig, rootReducer };


