import React from 'react';
import { Link } from "react-router-dom";

import './footer.scss';
import './footer-mb.scss';

import footerLogo from "../../assets/footer-logo-img.png"

const Footer = () =>     
  <footer>
    <figure>
    <Link to="/">
      <img src={footerLogo} alt="Vitalicia-logo"/>
    </Link>
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
                <Link to="/sobre-nós">
                  <li>sobre-nós</li>
                </Link>
              </ul>
            </td>
            <td>
              <ul>
                <Link to="/política-de-privacidade">
                  <li>declaração de privacidade</li>
                </Link>
                <Link to="/política-de-privacidade">
                  <li>termos de uso</li>
                </Link>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <svg width="30" height="30" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.9441 6.46808C21.8925 5.29913 21.7035 4.49549 21.4326 3.79912C21.1532 3.05995 20.7234 2.39817 20.1602 1.84802C19.6099 1.28932 18.9437 0.855181 18.2129 0.580193C17.5124 0.309403 16.7128 0.12037 15.5436 0.0688308C14.3657 0.0129267 13.9918 0 11.0043 0C8.01679 0 7.64285 0.0129267 6.46931 0.0644659C5.30014 0.116005 4.49635 0.305206 3.80002 0.575828C3.06053 0.855181 2.39862 1.28495 1.84838 1.84802C1.28956 2.39817 0.855512 3.06431 0.580304 3.79493C0.309462 4.49549 0.120393 5.29477 0.0688439 6.46371C0.0129292 7.64139 0 8.01526 0 11.0022C0 13.9891 0.0129292 14.363 0.0644782 15.5363C0.116027 16.7052 0.305264 17.5089 0.576106 18.2052C0.855512 18.9444 1.28956 19.6062 1.84838 20.1563C2.39862 20.715 3.0649 21.1492 3.79565 21.4242C4.49635 21.695 5.29578 21.884 6.46512 21.9355C7.63849 21.9872 8.01259 22 11.0001 22C13.9876 22 14.3615 21.9872 15.5351 21.9355C16.7042 21.884 17.508 21.695 18.2043 21.4242C19.6832 20.8525 20.8523 19.6836 21.4241 18.2052C21.6947 17.5047 21.884 16.7052 21.9355 15.5363C21.9871 14.363 22 13.9891 22 11.0022C22 8.01526 21.9956 7.64139 21.9441 6.46808ZM19.9626 15.4503C19.9152 16.5248 19.7347 17.105 19.5842 17.4918C19.2145 18.4502 18.4537 19.2108 17.4951 19.5805C17.1082 19.7309 16.5237 19.9114 15.4533 19.9586C14.2927 20.0103 13.9446 20.023 11.0086 20.023C8.07271 20.023 7.72026 20.0103 6.56385 19.9586C5.48921 19.9114 4.90891 19.7309 4.52204 19.5805C4.045 19.4042 3.61078 19.1249 3.25833 18.7596C2.89296 18.4028 2.61355 17.9731 2.43724 17.4961C2.28679 17.1093 2.10629 16.5248 2.05911 15.4547C2.00739 14.2943 1.99463 13.9461 1.99463 11.0107C1.99463 8.07536 2.00739 7.72298 2.05911 6.56696C2.10629 5.49253 2.28679 4.91234 2.43724 4.52554C2.61355 4.04843 2.89296 3.61446 3.2627 3.26191C3.61934 2.8966 4.0492 2.61725 4.5264 2.44114C4.91327 2.29072 5.49794 2.11025 6.56821 2.06291C7.72882 2.01137 8.07707 1.99844 11.0128 1.99844C13.9532 1.99844 14.3012 2.01137 15.4576 2.06291C16.5323 2.11025 17.1126 2.29072 17.4995 2.44114C17.9765 2.61725 18.4107 2.8966 18.7632 3.26191C19.1285 3.61865 19.4079 4.04843 19.5842 4.52554C19.7347 4.91234 19.9152 5.49673 19.9626 6.56696C20.0141 7.72735 20.027 8.07536 20.027 11.0107C20.027 13.9461 20.0141 14.2899 19.9626 15.4503Z" fill="white"/>
                    <path d="M11 5C7.68756 5 5 7.68738 5 11C5 14.3126 7.68756 17 11 17C14.3126 17 17 14.3126 17 11C17 7.68738 14.3126 5 11 5ZM11 14.8921C8.85106 14.8921 7.10795 13.1491 7.10795 11C7.10795 8.85088 8.85106 7.10795 11 7.10795C13.1491 7.10795 14.8921 8.85088 14.8921 11C14.8921 13.1491 13.1491 14.8921 11 14.8921Z" fill="white"/>
                    <path d="M18 5C18 5.55223 17.5523 6 16.9999 6C16.4477 6 16 5.55223 16 5C16 4.44764 16.4477 4 16.9999 4C17.5523 4 18 4.44764 18 5Z" fill="white"/>
                  </svg>
                </li>
                <li>
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                    <path d="M21.9945 22V21.9991H22V13.9306C22 9.98345 21.1503 6.94287 16.5358 6.94287C14.3174 6.94287 12.8288 8.1602 12.221 9.31429H12.1569V7.31137H7.78162V21.9991H12.3374V14.7263C12.3374 12.8114 12.7004 10.9597 15.0719 10.9597C17.4084 10.9597 17.4433 13.145 17.4433 14.8491V22H21.9945Z" fill="white"/>
                    <path d="M0.362976 7.31226H4.92431V22H0.362976V7.31226Z" fill="white"/>
                    <path d="M2.64183 0C1.18342 0 0 1.18342 0 2.64183C0 4.10025 1.18342 5.30842 2.64183 5.30842C4.10025 5.30842 5.28367 4.10025 5.28367 2.64183C5.28275 1.18342 4.09933 0 2.64183 0V0Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="22" height="22" fill="white"/>
                    </clipPath>
                    </defs>
                  </svg>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </footer>

export default Footer;