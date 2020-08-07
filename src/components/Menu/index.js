import React from 'react';
import logo from '../../assets/img/logo.png';
import './Menu.css';
import Button from '../Button';


function Menu() {
            return (
            <nav className="Menu">
               <a href="/"> 
                    <img className="Logo" src={logo}  alt="CamilaFlix logo"/>
                </a>
            
                <Button  className="ButtonLink" href="/"> 
                    Novo Video
                </Button>
            </nav>
    )
}

export default Menu; 

