import React from 'react';

import './footer.scss';
import './footer-mb.scss';

import footerLogo from "../../assets/footer-logo-img.png"

const Footer = () =>     
  <footer>
    <figure>
      <img src={footerLogo} alt="Vitalicia-logo"/>
    </figure>
    <div>
      <table>
        <thead>
          <tr>
            <th>empresa</th>
            <th>jurídico</th>
            <th>social</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ul>
                <li>
                  sobre-nós
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>declaração de privacidade</li>
                <li>termos de uso</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>facebook</li>
                <li>instagram</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </footer>

export default Footer;