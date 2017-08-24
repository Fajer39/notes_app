import React, { Component } from 'react';
import Note from '../Note/Note.js';
import PropTypes from 'prop-types';
import { loadNotes } from '../../modules/actions.js';
import { connect } from 'react-redux';
import { getAllNotes } from '../../modules/selectors.js';

class NoteList extends Component {
  componentDidMount() {
    this.props.loadNotes();
  }

  render() {
    const { notes } = this.props;
    return (
      <div>
        {notes.map(note =>
          <Note note={note} key={note.id} />
        )}
      </div>
    );
  }
}

NoteList.propTypes = {
  notes: PropTypes.array
};

export default connect(
  state => ({
    notes: getAllNotes(state)
  }),
  { loadNotes }
)(NoteList);
