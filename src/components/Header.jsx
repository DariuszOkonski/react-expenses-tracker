import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

const Header = () => {
  return (
    <section id="header" className="p-1">
      <Logo />
      <Navigation />
    </section>
  );
}

export default Header;