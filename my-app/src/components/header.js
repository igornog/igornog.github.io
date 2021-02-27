import React from 'react';
import logo from '../logo.svg';
import Button from '../atoms/Button/Button'

import './header.scss';
import './header-mb.scss';

class Header extends React.Component {
  render() {
    return  (
    <header className="App-header">
        <img src={logo} className="netflix-logo" alt="logo" />
        <Button>Sign In</Button>
    </header>
    )
  }
}

export default Header;