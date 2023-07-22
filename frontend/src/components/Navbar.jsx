import React from 'react';

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="logo">Novel E-Books</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">Authors</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

