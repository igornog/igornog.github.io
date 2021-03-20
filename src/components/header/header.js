import React from 'react';
import logo from '../../logo.svg';
import Button from '../../atoms/Button/Button'

import './header.scss';
import './header-mb.scss';

const Header = () =>     
  <header className="App-header">
    <img src={logo} className="vitalicia-logo" alt="logo" />
    <nav>
      <ul>
        <li><a href="/sobre-nós">Sobre nós</a></li>
        <li><Button>teste agora</Button></li>
      </ul>
    </nav>
  </header>

export default Header;