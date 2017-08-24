import * as actionTypes from './constants.js';
import { localeReducer } from './localeReducer';
import { combineReducers } from 'redux';
import uniq from 'lodash/uniq';
import { reducer as formReducer } from 'redux-form';

const notes = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.LOAD_NOTES_SUCCESS:
      return {
        ...state,
        ...action.entities.notes
      }
    case actionTypes.CREATE_NOTE_SUCCESS:
    case actionTypes.LOAD_NOTE_SUCCESS:
    case actionTypes.UPDATE_NOTE_SUCCESS:
      return {
        ...state,
        ...action.entities.notes
      };
    default:
      return state;
  }
}

const notesByIds = (state = [], action) => {
  switch (action.type) {
    case actionTypes.LOAD_NOTES_SUCCESS:
      return uniq([ ...state, ...action.ids.notes ]);
    case actionTypes.CREATE_NOTE_SUCCESS: {
      return [...state, ...action.ids.notes]
    }
    case actionTypes.DELETE_NOTE_SUCCESS:
      return state.filter(id => id !== action.ids.notes[0])
    default:
      return state;
  }
}

export default combineReducers({
  notes,
  notesByIds,
  form: formReducer,
  locales: localeReducer,
});
