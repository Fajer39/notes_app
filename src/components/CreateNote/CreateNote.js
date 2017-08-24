import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import NewNoteModal from '../NewNoteModal/NewNoteModal';
import { FormattedMessage } from 'react-intl';
import { Row, Col } from 'react-bootstrap';
import './styles.css';

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  close = () => {
    this.setState({ showModal: false });
  }

  open = () => {
    this.setState({ showModal: true });
  }

  render() {
    const { showModal } = this.state;
    return (
      <div className="CreateNote">
        <Row>
          <Col md={6} mdOffset={3}>
            <Button
              bsStyle="primary"
              onClick={this.open}
              block
            >
              <FormattedMessage id="createNote.button" />
            </Button>
            <NewNoteModal show={showModal} onHide={this.close} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default CreateNote;
