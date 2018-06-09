import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <Link to='/user'>User</Link>
    <Link to='/todo'>TODO</Link>
    <Link to='/'>HOME</Link>
  </div>
);

export default Header;