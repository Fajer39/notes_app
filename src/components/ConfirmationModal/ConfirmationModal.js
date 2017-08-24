import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import './styles.css';

const ConfirmationModal = ({ show, onHide, title, onConfirm }) => {
  return (
    <Modal show={show} onHide={onHide} bsSize="small">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="ConfirmationModal__Buttons">
          <Button bsStyle="danger" onClick={onConfirm}>
            <FormattedMessage id="confirmationModal.confirm" />
          </Button>
          <Button onClick={onHide}>
            <FormattedMessage id="confirmationModal.close" />
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

ConfirmationModal.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
  title: PropTypes.object,
  onConfirm: PropTypes.func,
};

export default ConfirmationModal;
