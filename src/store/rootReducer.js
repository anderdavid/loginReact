import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import { rootReducer as peliculas } from './peliculas';

export default combineReducers({
  form,
  peliculas
});
