// {
//     notes: [],
//     active: null | {id: 'askd', title: '', body: '', img: '', date: 123456}
// }

import { types } from "../types/types";

const initialStae = {
  notes: [],
  active: null,
};

export const notesReducer = (state = initialStae, action) => {
  switch (action.type) {
    case types.notesActive:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };
    case types.notesLoad:
      return {
        ...state,
        notes: [...action.payload],
      };

    case types.notesUpdated:
      return {
        ...state,
        notes: state.notes.map(note => note.id === action.payload.id ? action.payload.note : note)
      }

    default:
      return state;
  }
};
