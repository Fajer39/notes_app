import { schema } from 'normalizr';

const note = new schema.Entity('notes');

export const noteSchema = {
  notes: [ note ]
};
