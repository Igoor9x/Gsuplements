import React from 'react';
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMagnifyingGlass, faPhone, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons'


function Header() {
  return (
    <header>
      <nav className='maxWidthHeader'>
        <div className='responsiveHeader'>
          <span className='barsMenu'><FontAwesomeIcon icon={faBars} /></span>
          <img src="https://www.gsuplementos.com.br/tema/growth/img/site/logo.png" />
          <span className='cartIconMobile'><FontAwesomeIcon icon={faCartShopping} /></span>
        </div>
        <img className='logoImage' src="https://www.gsuplementos.com.br/tema/growth/img/site/logo.png" />
        <div className='inputSearch'>
          <input type='text' placeholder='Encontre Suplementos '/>
          <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
        </div>
        <div className='userLogin'>
          <span><FontAwesomeIcon icon={faUser}/></span>
          <h2>Bem vindo visitante, <a>Cadastre-se</a> ou <a>faça seu login</a></h2>
        </div>
        <div className='contato'>
          <span><FontAwesomeIcon icon={faPhone} /></span>
          <div className='contatoText'>
            <span>Fale Conosco</span>
            <a>Clique aqui</a>
          </div>
        </div>
        <div className='cartShoppingIcon'>
          <span><FontAwesomeIcon icon={faCartShopping} /></span>
        </div>
      </nav>
    </header>
  )
};

export default Header
