import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RawNote} from '../types';

const initNotes = {
  byKey: {},
  query: {all: []},
};

export const note = createSlice({
  name: 'noteReducer',
  initialState: initNotes,
  reducers: {
    updateNote: (state, payload: PayloadAction<RawNote>) => {
      let byKey = {...state.byKey, [payload.payload.id]: payload.payload};
      let query = {...state.query, all: Object.keys(byKey)};
      return {byKey, query};
    },
    deleteNote: (state, payload: PayloadAction<{id: string}>) => {
      let byKey = {...state.byKey};
      delete byKey[payload.payload.id];
      let query = {...state.query, all: Object.keys(byKey)};
      return {byKey, query};
    },
  },
});

export const {updateNote, deleteNote} = note.actions;
