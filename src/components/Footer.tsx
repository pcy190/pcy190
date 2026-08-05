import { links } from '@/lib/profile';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-rule">
      <div className="doc flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 py-8">
        <p className="mono text-[12px] text-ink-3">© {currentYear} ret2happy</p>

        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a className="link-meta" href={links.scholar} target="_blank" rel="noopener noreferrer">
            Scholar
          </a>
          <a className="link-meta" href={links.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a className="link-meta" href={links.x} target="_blank" rel="noopener noreferrer">
            X
          </a>
          <a className="link-meta" href={`mailto:${links.email}`}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
