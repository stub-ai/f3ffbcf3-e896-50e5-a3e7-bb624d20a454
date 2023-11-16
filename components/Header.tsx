import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-500 flex items-center justify-between p-6 text-white">
      <h1 className="text-2xl">Product Manager</h1>
      <nav>
        <Link href="/">
          <a className="mr-6">Home</a>
        </Link>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;