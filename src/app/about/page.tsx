import Link from 'next/link';
import { FaGraduationCap} from 'react-icons/fa';

export const metadata = {
  title: 'About Me | ret2happy',
  description: '',
};

export default function About() {
  
  // Define professional experience
  const experience = [
    {
      position: 'Security Research Intern',
      company: 'BlockSec',
      period: '',
      description: 'Blockchain Security Research',
    },
    {
      position: 'Security Research Intern',
      company: 'Ant Group',
      period: '',
      description: 'TEE Security Research',
    },
    {
      position: 'Security Research Intern',
      company: 'GOSSIP, Shanghai Jiao Tong University',
      period: '',
      description: 'Android Security Research',
    }
  ];

  // Define education background
  const education = [
    {
      degree: 'Ph.D.',
      institution: 'Zhejiang University',
      period: 'currently',
    },
    // {
    //   degree: 'BSc.',
    //   institution: '',
    //   period: '', // 2014-2018
    // },
  ];

  return (
    <section className="py-16 md:py-24 tech-pattern relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          </div>

          <div className="space-y-12">
            {/* Professional Profile */}
            <div className="bg-card rounded-2xl shadow-xl p-8 border border-card-border">
              <h2 className="text-2xl font-bold mb-6">Profile</h2>
              <p className="text-muted mb-4">
                I am a dedicated security researcher with a focus on identifying and addressing vulnerabilities 
                in complex systems. I am currently pursuing my Ph.D. at Zhejiang University.
              </p>
              <p className="text-muted">
                I am passionate about improving the security posture of critical software systems and contributing 
                to the advancement of security research methodologies in both traditional and emerging domains.
              </p>
            </div>

            {/* Professional Experience */}
            <div className="bg-card rounded-2xl shadow-xl p-8 border border-card-border">
              <h2 className="text-2xl font-bold mb-6">
                <span className="inline-flex items-center">
                  
                Experience
                </span>
              </h2>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="bg-background/50 p-5 rounded-lg">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="font-medium">{exp.position}</h3>
                      <span className="text-muted text-sm">{exp.period}</span>
                    </div>
                    <p className="text-primary mb-3">{exp.company}</p>
                    <p className="text-muted mb-3 text-sm">{exp.description}</p>
                    
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-card rounded-2xl shadow-xl p-8 border border-card-border">
              <h2 className="text-2xl font-bold mb-6">
                <span className="inline-flex items-center">
                  <FaGraduationCap className="mr-2" />
                  Academic Background
                </span>
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-background/50 p-5 rounded-lg">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="font-medium">{edu.degree}</h3>
                      <span className="text-muted text-sm">{edu.period}</span>
                    </div>
                    {edu.institution && <p className="text-primary mb-1">{edu.institution}</p>}
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="mt-16 text-center">
            <p className="text-muted mb-8">
              Interested in learning more about my research or discussing potential collaborations?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="button-secondary inline-flex items-center">
                Get in Touch
              </Link>
              <Link href="/research" className="button-primary inline-flex items-center">
                View Research
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