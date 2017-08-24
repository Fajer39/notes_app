import React, { Component } from 'react';
import NoteModal from '../NoteModal/NoteModal';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadNote } from '../../modules/actions';
import './styles.css';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  open = () => {
    const { note, loadNote } = this.props;
    loadNote({ note });
    this.setState({ showModal: true });
  }

  close = () => {
    this.setState({ showModal: false });
  }

  render() {
    const { note } = this.props;
    const { showModal } = this.state;
    return (
      <div className="Note" onClick={this.open}>
        {note.title}
        <NoteModal noteId={note.id} onHide={this.close} show={showModal} />
      </div>
    );
  }
}

Note.propTypes = {
  note: PropTypes.object
};

export default connect(
  null,
  { loadNote }
)(Note);
