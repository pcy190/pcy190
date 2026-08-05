import Link from 'next/link';
import { avatar } from '@/lib/profile';

const sections = [
  { name: 'Profile', href: '/#profile' },
  { name: 'Publications', href: '/#publications' },
  { name: 'Findings', href: '/#findings' },
  { name: 'Writing', href: '/#writing' },
  { name: 'Contact', href: '/#contact' },
];

const Navbar = () => {
  return (
    <header className="masthead">
      <div className="doc masthead-inner">
        <Link href="/" className="masthead-brand" aria-label="ret2happy, home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={avatar} alt="" width={24} height={24} referrerPolicy="no-referrer" className="masthead-mark" />
          <span className="masthead-name">ret2happy</span>
        </Link>

        <nav className="masthead-nav" aria-label="Sections">
          {sections.map((section) => (
            <Link key={section.name} href={section.href} className="masthead-link">
              {section.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
