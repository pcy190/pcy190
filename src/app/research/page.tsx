import Link from 'next/link';

export const metadata = {
  title: 'Research & Publications | ret2happy',
  description: 'Computer and blockchain security research, including academic publications, vulnerability discoveries, and security methodologies.',
};

// Define types for our data structure
type Publication = {
  title: string;
  venue: string;
  year: number;
  link: string;
  codeLink?: string; // Optional code repository link
};

// Define types for CVE data structures
type WiresharkCVE = {
  id: string;
};

type ImageMagickCVE = {
  id: string;
};

type AndroidCVE = {
  id: string;
  severity: string;
};

type ChromeCVE = {
  id: string;
  severity: string;
};

export default function Research() {
  const publications: Publication[] = [
    {
      title: 'Toss a Fault to BpfChecker: Revealing Implementation Flaws for eBPF Runtimes via Differential Fuzzing',
      venue: 'ACM Conference on Computer and Communications Security (CCS)',
      year: 2024,
      link: 'https://dl.acm.org/doi/10.1145/3658644.3690237'
    },
  ];

  const wiresharkCVEs: WiresharkCVE[] = [
    { id: 'CVE-2020-26575' },
    { id: 'CVE-2020-28030' },
  ];

  const imageMagickCVEs: ImageMagickCVE[] = [
    { id: 'CVE-2021-20309' },
    { id: 'CVE-2021-20310' },
    { id: 'CVE-2021-20311' },
    { id: 'CVE-2021-20312' },
    { id: 'CVE-2021-20313' },
  ];

  const androidCVEs: AndroidCVE[] = [
    { id: 'A181660091', severity: 'Critical' },
    { id: 'A181584626', severity: 'High' },
    { id: 'A181860042', severity: 'Critical' },
    { id: 'A179162665', severity: 'High' },
    { id: 'A181346550', severity: 'High' },
    { id: 'A181346957', severity: 'Critical' },
    { id: 'A181346545', severity: 'Moderate' },
    { id: 'A180939433', severity: 'Moderate' },
    { id: 'A181253633', severity: 'Moderate' },
    { id: 'A180421437', severity: 'Moderate' },
    { id: 'A180422331', severity: 'High' },
    { id: 'A180418995', severity: 'Moderate' },
    { id: 'A180420059', severity: 'Moderate' },
    { id: 'A180421035', severity: 'Moderate' },
    { id: 'A180421044', severity: 'Moderate' },
    { id: 'A180418662', severity: 'Moderate' },
    { id: 'A180939982', severity: 'High' },
    { id: 'A178013330', severity: 'High' },
    { id: 'A179161711', severity: 'Moderate' },
    { id: 'A179161657', severity: 'Moderate' },
    { id: 'A179162240', severity: 'Moderate' },
    { id: 'A182166925', severity: 'High' },
    { id: 'A181346915', severity: 'Moderate' },
    { id: 'A181347046', severity: 'Moderate' },
  ];

  const chromeCVEs: ChromeCVE[] = [
    { id: 'CVE-2022-0603', severity: 'High' },
    // { id: 'CVE-2022-2163', severity: 'Low' },
    { id: 'CVE-2022-4177', severity: 'High' },
    { id: 'CVE-2023-0134', severity: 'Medium' },
    { id: 'CVE-2023-0135', severity: 'Medium' },
    { id: 'CVE-2022-1484', severity: 'Medium' },
    { id: 'CVE-2021-30578', severity: 'Medium'},
  ];

  const awards: string[] = [
    'Chrome VRP Top 20 Security Researcher (2022, 2024)',
    'Google Top 50 Researcher (2022-2024)',
  ];

  return (
    <section className="py-16 md:py-24 tech-pattern relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Research & Publications</h1>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              My research spans traditional areas like software and operating systems security,
              as well as emerging domains like blockchain security and DeFi vulnerabilities.
            </p>
          </div>

          <div className="space-y-12">
            {/* Publications Section */}
            <div className="bg-card rounded-2xl shadow-xl p-8 border border-card-border">
              <h2 className="text-2xl font-bold mb-6">Publications</h2>
              <div className="space-y-6">
                {publications.map((pub, index) => (
                  <div key={index} className="bg-background/50 p-5 rounded-lg">
                    <h3 className="font-medium mb-2">{pub.title}</h3>
                    <p className="text-muted mb-3">
                      {pub.venue === 'ACM Conference on Computer and Communications Security (CCS)' && pub.year === 2024 ? (
                        <span className="inline-flex items-center">
                          <span className="bg-accent font-semibold px-2 py-0.5 rounded text-white mr-2">CCS 2024</span>
                          <span>{pub.venue}</span>
                        </span>
                      ) : (
                        `${pub.venue}, ${pub.year}`
                      )}
                    </p>
                    <div className="space-y-2">
                      <div>
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary-dark transition-colors underline"
                        >
                          Paper Link
                        </a>
                      </div>
                      {pub.codeLink && (
                        <div>
                          <a
                            href={pub.codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary-dark transition-colors underline"
                          >
                            Code Repository
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards Section */}
            <div className="bg-card rounded-2xl shadow-xl p-8 border border-card-border">
              <h2 className="text-2xl font-bold mb-6">Awards</h2>
              <ul className="list-disc pl-5 space-y-3 text-muted">
                {awards.map((award, index) => (
                  <li key={index}>{award}</li>
                ))}
              </ul>
            </div>

            {/* CVE Section */}
            <div className="bg-card rounded-2xl shadow-xl p-8 border border-card-border">
              <h2 className="text-2xl font-bold mb-6">CVEs / Trophy</h2>
              <p className="text-muted mb-6">Parts of the discovered vulnerabilities.</p>
              <div className="space-y-8">

                {/* Chrome CVEs */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">Chrome</h3>
                  <div className="flex flex-wrap gap-2">
                    {chromeCVEs.map((cve, index) => {
                      let tagStyle = "bg-background/70";
                      let textStyle = "";
                      
                      // Apply subtle styling based on severity while maintaining site aesthetic
                      switch(cve.severity) {
                        case "High":
                          tagStyle = "bg-background/80 border-accent/40";
                          textStyle = "text-accent-dark";
                          break;
                        case "Medium":
                          tagStyle = "bg-background/75 border-primary/40";
                          textStyle = "text-primary-dark";
                          break;
                        case "Low":
                          tagStyle = "bg-background/70 border-card-border/60";
                          textStyle = "text-muted-dark";
                          break;
                        default:
                          tagStyle = "bg-background/70 border-card-border/50";
                          textStyle = "";
                      }
                      
                      return (
                        <span 
                          key={index} 
                          className={`px-3 py-1.5 rounded-lg text-sm inline-flex items-center border ${tagStyle}`}
                        >
                          <span className={textStyle}>{cve.id}</span>
                          <span className="ml-1.5 text-xs px-1.5 py-0.5 rounded bg-background/60 text-muted">
                            {cve.severity}
                          </span>
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Wireshark CVEs */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">Wireshark</h3>
                  <div className="flex flex-wrap gap-2">
                    {wiresharkCVEs.map((cve, index) => (
                      <span 
                        key={index} 
                        className="bg-background/70 px-3 py-1.5 rounded-lg text-sm inline-block border border-card-border/50"
                      >
                        {cve.id}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ImageMagick CVEs */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">ImageMagick</h3>
                  <div className="flex flex-wrap gap-2">
                    {imageMagickCVEs.map((cve, index) => (
                      <span 
                        key={index} 
                        className="bg-background/70 px-3 py-1.5 rounded-lg text-sm inline-block border border-card-border/50"
                      >
                        {cve.id}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Android CVEs */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">Android</h3>
                  <div className="flex flex-wrap gap-2">
                    {androidCVEs.map((cve, index) => {
                      let tagStyle = "bg-background/70";
                      let textStyle = "";
                      
                      // Apply subtle styling based on severity while maintaining site aesthetic
                      switch(cve.severity) {
                        case "Critical":
                          tagStyle = "bg-background/80 border-accent/40";
                          textStyle = "text-accent-dark";
                          break;
                        case "High":
                          tagStyle = "bg-background/75 border-primary/40";
                          textStyle = "text-primary-dark";
                          break;
                        case "Moderate":
                          tagStyle = "bg-background/70 border-card-border/60";
                          textStyle = "text-muted-dark";
                          break;
                        default:
                          tagStyle = "bg-background/70 border-card-border/50";
                          textStyle = "";
                      }
                      
                      return (
                        <span 
                          key={index} 
                          className={`px-3 py-1.5 rounded-lg text-sm inline-flex items-center border ${tagStyle}`}
                        >
                          <span className={textStyle}>{cve.id}</span>
                          <span className="ml-1.5 text-xs px-1.5 py-0.5 rounded bg-background/60 text-muted">
                            {cve.severity}
                          </span>
                        </span>
                      );
                    })}
                  </div>
                </div>                

                
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-6">Additional Research Projects</h2>
            <p className="text-muted mb-8">
              For additional research projects and vulnerability reports, 
              please contact me directly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="button-primary inline-flex items-center">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
} 