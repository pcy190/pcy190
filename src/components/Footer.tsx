import Link from 'next/link';
import { FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card border-t border-card-border py-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-muted mb-4">
              My research spans traditional ones (software security, operating systems security) and emerging areas (blockchain security, DeFi security).
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ret2happy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/ret2happy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-muted hover:text-primary transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://x.com/BugsAggregator" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted hover:text-primary transition-colors"
                >
                  Bugs Aggregator
                </a>
              </li>
              
            </ul>
          </div>
        </div>
        
        <div className="border-t border-card-border mt-8 pt-8 text-center text-muted">
          <p>© {currentYear} ret2happy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 