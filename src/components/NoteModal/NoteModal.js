import React, { Component } from 'react';
import { Modal, Button, Glyphicon } from 'react-bootstrap';
import NoteForm from '../NoteForm/NoteForm';
import { FormattedMessage } from 'react-intl';
import { updateNote, deleteNote } from '../../modules/actions';
import { getNoteById } from '../../modules/selectors';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles.css';

class NoteModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEdit: false,
      showConfirm: false
    };
  }

  showEditForm = () => {
    this.setState({ showEdit: true });
  }

  hideEditForm = () => {
    this.setState({ showEdit: false });
  }

  showConfirmModal = () => {
    this.setState({ showConfirm: true });
  }

  hideConfirmModal = () => {
    this.setState({ showConfirm: false });
  }

  onSubmit = (data) => {
    const note = {
      id: this.props.noteId,
      title: data.note
    }

    this.props.updateNote({ note });
    this.hideEditForm();
  }

  handleDeleteNote = () => {
    this.props.deleteNote({ note: this.props.note });
  }

  render() {
    const { onHide, show, note, noteId } = this.props;
    const { showEdit, showConfirm } = this.state;
    return (
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{`#${noteId}`}</Modal.Title>
          <div className="NoteModal__Buttons">
            <Button onClick={this.showEditForm}>
              <Glyphicon glyph="pencil" />
            </Button>
            <Button onClick={this.showConfirmModal}>
              <Glyphicon glyph="trash" />
            </Button>
          </div>
        </Modal.Header>
        <Modal.Body>
          {showEdit ?
            <NoteForm
              note={note}
              onSubmit={this.onSubmit}
              onHideForm={this.hideEditForm}
            />
          :
            note.title
          }
          {showConfirm &&
            <ConfirmationModal
              title={<FormattedMessage id="noteModal.deleteMessage" />}
              onConfirm={this.handleDeleteNote}
              show={showConfirm}
              onHide={this.hideConfirmModal}
            />
          }
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => {
            this.hideEditForm();
            onHide();
          }}>
            <FormattedMessage id="noteModal.close" />
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

NoteModal.propTypes = {
  note: PropTypes.object,
  updateNote: PropTypes.func,
  deleteNote: PropTypes.func,
  noteId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onHide: PropTypes.func,
  show: PropTypes.bool,
};

export default connect(
  (state, props) => ({
    note: getNoteById(state, props.noteId)
  }),
  { updateNote, deleteNote }
)(NoteModal);
