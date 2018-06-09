import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Header from './Header';

class AppLayout extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          { this.props.children? this.props.children : 'Please specify children' }
          </div>
      </Router>
    );
  }
}

export default AppLayout;
