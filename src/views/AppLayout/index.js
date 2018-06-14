import React, { Component } from 'react';
import { Container } from 'reactstrap';

import Header from './Header';

class AppLayout extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Header />
          { this.props.children? this.props.children : 'Please specify children' }
        </Container>
      </div>
    );
  }
}

export default AppLayout;
