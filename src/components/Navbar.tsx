'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaFlask } from 'react-icons/fa';

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Research', path: '/research' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="site-shell mt-8">
      <div className="site-topbar">
        <Link href="/" className="site-logo" aria-label="ret2happy Home">
          <FaFlask className="h-4 w-4" />
        </Link>

        <nav className="site-nav" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`site-nav-item ${pathname === item.path ? 'is-active' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
