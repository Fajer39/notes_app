import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import NoteForm from '../NoteForm/NoteForm';
import PropTypes from 'prop-types';
import { createNote } from '../../modules/actions';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

const NewNoteModal = ({ createNote, onHide, show }) => {
  const onSubmit = (data) => {
    createNote({ title: data.note });
    onHide();
  }

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>
          <FormattedMessage id="newNoteModal.newNote" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <NoteForm onSubmit={onSubmit} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>
          <FormattedMessage id="newNoteModal.close" />
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

NewNoteModal.propTypes = {
  createNote: PropTypes.func,
  onHide: PropTypes.func,
  show: PropTypes.bool
};

export default connect(
  null,
  { createNote }
)(NewNoteModal);
