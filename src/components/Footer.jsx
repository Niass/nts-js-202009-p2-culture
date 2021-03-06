import React from 'react';
import styled from 'styled-components';
import twitter from './twitter.png';
import instagram from './instagram.png';
import facebook from './facebook.png';

const FOOTER = styled.div`
  .Footer {
    background-color: #000080;
    color: #f5f5f5;
    height: 11vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .Footer img {
    width: 25px;
    margin: 0 1rem;
  }
  .footer-link {
    display: flex;
    justify-content: space-around;
    margin: 0 1rem;
  }
  .footer-logo {
    display: flex;
    justify-content: space-around;
  }

  @media screen and (min-width: 768px) {
    .Footer {
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-end;
    }
    .footer-link {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 85%;
    }
    .footer-logo {
      margin: 10px;
      align-items: center;
    }
    .Footer img {
      margin-right: 10px;
      width: 35px;
    }
  }
`;

const Footer = () => {
  return (
    <div>
      <FOOTER>
        <footer className="Footer">
          <div className="footer-link">
            <span>Contact</span>
            <span>Partenaires</span>
          </div>
          <div className="footer-logo">
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
          </div>
        </footer>
      </FOOTER>
    </div>
  );
};
export default Footer;
