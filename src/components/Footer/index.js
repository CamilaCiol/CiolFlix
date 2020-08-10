import React from 'react';
import { FooterBase } from './styles';
import camila from '../../assets/img/camila.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        
        <img className="Logo" src={camila}  alt="CamilaFlix logo"/>
      </a>
      <p>
        Proudly presents Netflix clone
        
      </p>
    </FooterBase>
  );
}

export default Footer;
