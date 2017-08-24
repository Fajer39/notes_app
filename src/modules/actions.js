import axios from 'axios';
import * as actionTypes from './constants.js';
import { noteSchema } from './schemas.js';
import { normalize } from 'normalizr';
import shortid from 'shortid';

const url = 'https://private-anon-21a159d314-note10.apiary-mock.com/notes';

const successAction = (type, data) => ({
  type,
  entities: data.entities,
  ids: data.result
});

export const loadNotes = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(url);
      const normalized = normalize({ notes: res.data }, noteSchema);
      dispatch(
        successAction(actionTypes.LOAD_NOTES_SUCCESS, normalized)
      );
    } catch (e) {
      console.log('loadNotes error', e);
    }
  }
};

export const createNote = ({ title }) => {
  return async (dispatch) => {
    try {
      // eslint-disable-next-line
      const res = await axios.post(url, { title });
      // we don't use that same res but generate a fake proper response here
      const data = {
        id: shortid.generate(),
        title
      };
      const normalized = normalize({ notes: [ data ]}, noteSchema);
      dispatch(
        successAction(actionTypes.CREATE_NOTE_SUCCESS, normalized)
      );
    } catch (e) {
      console.log('createNote error', e);
    }
  }
};

export const loadNote = ({ note }) => {
  return async (dispatch) => {
    try {
      // eslint-disable-next-line
      const res = await axios.get(`${url}/${note.id}`);
      // we don't use that same res but generate a fake proper response here
      const data = {
        id: note.id,
        title: note.title
      };
      const normalized = normalize({ notes: [ data ]}, noteSchema);
      dispatch(
        successAction(actionTypes.LOAD_NOTE_SUCCESS, normalized)
      );
    } catch (e) {
      console.log('loadNote error', e);
    }
  }
};

export const updateNote = ({ note }) => {
  return async (dispatch) => {
    try {
      // eslint-disable-next-line
      const res = await axios.put(`${url}/${note.id}`);
      // we don't use that same res but generate a fake proper response here
      const data = {
        id: note.id,
        title: note.title
      };
      const normalized = normalize({ notes: [ data ]}, noteSchema);
      dispatch(
        successAction(actionTypes.UPDATE_NOTE_SUCCESS, normalized)
      );
    } catch (e) {
      console.log('updateNote error', e);
    }
  }
};

export const deleteNote = ({ note }) => {
  return async (dispatch) => {
    try {
      // eslint-disable-next-line
      const res = await axios.delete(`${url}/${note.id}`);
      // we don't use that same res but generate a fake proper response here
      const data = {
        id: note.id,
        title: note.title
      };
      const normalized = normalize({ notes: [ data ]}, noteSchema);
      dispatch(
        successAction(actionTypes.DELETE_NOTE_SUCCESS, normalized)
      );
    } catch (e) {
      console.log('delete error', e);
    }
  }
};

export const selectedLocale = (locale) => {
  return {
    type: actionTypes.LOCALE_SELECTED,
    locale,
  };
}
