import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#history" data-i18n="history_link">Historia</a></li>
        <li><a href="#features" data-i18n="features_link">Características</a></li>
        <li><a href="#gallery" data-i18n="gallery_link">Galería</a></li>
        <li><a href="#contact" data-i18n="contact">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;