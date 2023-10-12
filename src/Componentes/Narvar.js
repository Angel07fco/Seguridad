import React from 'react';
import logo from '../Images/logo.png'; // Reemplaza 'logo.png' con la ruta correcta de tu logotipo.

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" width="50" height="50" />
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#inicio">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#acerca-de">
                Acerca de
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#politicas-de-privacidad">
                Políticas de Privacidad
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
