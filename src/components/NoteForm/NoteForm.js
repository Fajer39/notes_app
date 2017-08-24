import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import g from 'lodash/get';
import './styles.css';

const validate = values => {
  const errors = {}
  if (!values.note) {
    errors.note = "noteForm.emptyNote"
  }
  return errors;
}

const renderTextArea = ({ input, meta: { error, touched } }) =>
  <div>
    <textarea className="NoteInput" {...input} />
    {touched && error &&
      <span style={{ color: "red" }}>
        <FormattedMessage id={error} />
      </span>
    }
  </div>;

let NoteForm = props => {
  const { onSubmit, handleSubmit, pristine, submitting, note, onHideForm } = props;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field name="note" component={renderTextArea} />
      <div className="NoteForm__Buttons">
        <Button
          bsStyle="primary"
          type="submit"
          disabled={pristine || submitting}
        >
          {note ?
            <FormattedMessage id="noteForm.edit" />
          : 
            <FormattedMessage id="noteForm.create" />
          }
        </Button>
        {note &&
          <Button onClick={onHideForm}>
            <FormattedMessage id="noteForm.hideForm" />
          </Button>
        }
      </div>
    </form>
  )
}

NoteForm.propTypes = {
  onSubmit: PropTypes.func,
  note: PropTypes.object,
  onHideForm: PropTypes.func,
}

NoteForm = reduxForm({
  form: 'noteForm',
  validate
})(NoteForm)

export default connect(
  (state, props) => ({
    initialValues: { note: g(props, 'note.title') }
  })
)(NoteForm)
