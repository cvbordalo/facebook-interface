import React from 'react';
import Logo from '../assets/fb.png';

function Header() {
  return (
    <header>
      <nav>
        <img src={Logo} />
        <div>
          <span>Meu Perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  );
}

export default Header;