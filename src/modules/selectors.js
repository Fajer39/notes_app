export const getAllNotes = (state) => state.notesByIds.map(id => state.notes[id]);
export const getNoteById = (state, id) => state.notes[id];
