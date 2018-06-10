import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { Container } from 'reactstrap';

import Header from './Header';

class AppLayout extends Component {
  render() {
    return (
      <Router>
        <Container fluid>
          <Header />
          { this.props.children? this.props.children : 'Please specify children' }
          </Container>
      </Router>
    );
  }
}

export default AppLayout;
