import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import NoteList from '../NoteList/NoteList';
import g from 'lodash/get';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import CreateNote from '../CreateNote/CreateNote';
import { selectedLocale } from '../../modules/actions';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    const { selectedLocale, lang } = this.props;
    return (
      <Grid>
        <Row>
          <Col md={6} mdOffset={3}>
            <Row>
              <Col md={6} mdOffset={3}>
                <div className="ButtonGroup">
                  <Button 
                    disabled={lang === 'cs'} 
                    onClick={() => selectedLocale('cs')}
                  >
                    Czech
                  </Button>
                  <Button
                    disabled={lang === 'en'}  
                    onClick={() => selectedLocale('en')}
                  >
                    English
                  </Button>
                </div>
              </Col>
            </Row>
            <h1>
              <FormattedMessage id="app.title" />
            </h1>
            <CreateNote />
            <NoteList />
          </Col>
        </Row>
      </Grid>
    );
  }
}

App.propTypes = {
  selectedLocale: PropTypes.func,
  lang: PropTypes.string
};

export default connect(
  state => ({
    lang: g(state, 'locales.lang')
  }),
  { selectedLocale }
)(App);
