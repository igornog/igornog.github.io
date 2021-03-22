import React from 'react';
import logo from '../../logo.svg';
import Button from '../../atoms/Button/Button'
import { Link } from "react-router-dom";

import './header.scss';
import './header-mb.scss';

const scrollIntoView = () => {
  document.getElementById('form').scrollIntoView({behavior: "smooth"}) 
}

const Header = () =>     
  <header className="App-header">
    <Link to="/">
      <img src={logo} className="vitalicia-logo" alt="logo" />
    </Link>
    <nav>
      <ul>
        <li><Link onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} to="/sobre-nós">Sobre nós</Link></li>
        <li><Button onClick={scrollIntoView}>teste agora</Button></li>
      </ul>
    </nav>
  </header>

export default Header;