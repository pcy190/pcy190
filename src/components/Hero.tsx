import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden tech-pattern">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {/* <span className="block">Computer & Blockchain</span> */}
              <span className="academic-gradient text-transparent bg-clip-text">ret2happy</span>
            </h1>
            
            <p className="text-lg text-muted mb-8 max-w-xl">
              My research spans traditional ones (software security, operating systems security) and emerging areas (blockchain security, DeFi security).
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/research" className="button-primary inline-flex items-center">
                My Research
                <FaArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-card shadow-xl rounded-xl p-6 border border-card-border relative z-10">
              <div className="academic-gradient h-2 w-24 rounded mb-6"></div>
              <h2 className="text-xl font-semibold mb-4">Latest Research</h2>
              <p className="text-muted mb-6">
                Revealing Implementation Flaws for eBPF Runtime via Differential Fuzzing
              </p>
              <div className="flex items-center text-sm text-muted">
                <span className="inline-block py-1 px-2 rounded bg-primary/10 text-primary text-xs font-medium mr-3">
                  ACM CCS 2024
                </span>
                {/* <span>Published in 2024</span> */}
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[90%] max-h-[90%] rounded-xl border border-card-border -z-10 -rotate-3"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[90%] max-h-[90%] rounded-xl border border-card-border -z-20 rotate-6"></div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Hero;