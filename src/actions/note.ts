import {store} from "../store";
import {deleteNote, updateNote} from "../reducers";
import {RawNote} from "../types";

export const updateNoteAction = (note: RawNote) => {
  return store.dispatch(updateNote(note))
};

export const deleteNoteAction = (id: string) => {
    return store.dispatch(deleteNote({id}))
}
