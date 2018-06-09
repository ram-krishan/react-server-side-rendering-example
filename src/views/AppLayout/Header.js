import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <Link to='/hello'>Hello</Link>
    <Link to='/'>HOME</Link>
  </div>
);

export default Header;