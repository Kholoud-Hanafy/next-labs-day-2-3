import React from 'react';
import Link from 'next/link';
import "./globals.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2> Mysite</h2>
      </div>
      <ul className="navLinks">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>

        <li>
          <Link href="/users">Users</Link>
        </li>

        <li>
          <Link href="/contact">Contact</Link>
        </li>
         
        <li>
          <Link href="/form">Add Product</Link>
        </li>

        <li>
          <Link href="/upload">upload</Link>
        </li>


      </ul>
    </nav>
  );
};

export default Navbar;
