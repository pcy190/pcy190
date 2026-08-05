import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="site-shell panel-surface panel-grid min-h-[calc(100vh-98px)] overflow-hidden pb-28">
      <div className="mx-auto max-w-[760px] px-10 pt-20 text-center">
        <div className="inline-flex items-center rounded-sm border border-[#d8d3c8] bg-[#f5f2ea] text-[12px] leading-none text-[#737066]">
          <span className="px-3 py-2">Introducing ret2happy</span>
          <Link
            href="/research"
            className="inline-flex items-center gap-1 border-l border-[#d8d3c8] bg-[#262626] px-3 py-2 text-[#f5f2ea]"
          >
            Explore
            <FaArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <h1 className="mt-6 text-[64px] font-semibold leading-[0.98] tracking-[-0.03em] text-[#1f1f1f]">
          Security research
          <br />
          with practical impact.
        </h1>

        <p className="mx-auto mt-6 max-w-[680px] text-[15px] leading-relaxed text-[#6f6a60]">
          My research spans traditional ones (software security, operating systems security) and emerging areas (blockchain security, DeFi security).
        </p>

        <div className="mx-auto mt-10 w-full max-w-[580px] rounded-[2px] border border-[#3e3e3e] bg-[#1f1f1f] p-4 text-left shadow-[0_10px_20px_rgba(0,0,0,0.12)]">
          <p className="text-[13px] text-[#cbc7be]">
            Revealing Implementation Flaws for eBPF Runtime via Differential Fuzzing.
          </p>
          <div className="mt-5 flex items-center justify-between text-[12px] text-[#8d897f]">
            <span className="inline-block rounded border border-[#55534e] px-2 py-1">ACM CCS 2024</span>
            <Link href="/research" className="inline-flex h-6 w-6 items-center justify-center rounded border border-[#55534e] hover:bg-[#2b2b2b]">
              <FaArrowRight className="h-3 w-3 text-[#d6d2ca]" />
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-[760px] flex-wrap items-center justify-center gap-3 text-[12px] text-[#5f5b52]">
          <Link href="/research" className="hero-chip">eBPF Runtime Security</Link>
          <Link href="/research" className="hero-chip">Chrome Security</Link>
          <Link href="/blog" className="hero-chip">Recent Blog Posts</Link>
          <Link href="/about" className="hero-chip">About Me</Link>
          <Link href="/contact" className="hero-chip">Contact</Link>
        </div>

        <div className="mt-28">
          <h2 className="text-[46px] font-semibold leading-[1.02] tracking-[-0.02em] text-[#272727]">
            Trusted by the teams
            <br />
            redefining productivity
          </h2>

          <div className="mx-auto mt-10 grid max-w-[720px] grid-cols-4 gap-x-8 gap-y-5 text-[28px] font-medium tracking-[0.01em] text-[#7f7a70]">
            <span>twilio</span>
            <span>SUPERHUMAN</span>
            <span>Vercel</span>
            <span>reδl</span>
            <span>pilothouse</span>
            <span>THREAT TEC</span>
            <span>BLACKBIRD</span>
            <span>Ripple</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
