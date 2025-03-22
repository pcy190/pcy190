import Link from 'next/link';
import { FaShieldAlt, FaChrome } from 'react-icons/fa';

const ResearchHighlights = () => {
  const highlights = [
    {
      id: 1,
      title: 'eBPF Runtime Security',
      description: 'Toss a Fault to BpfChecker: Revealing Implementation Flaws for eBPF runtimes with Differential Fuzzing [ACM CCS 2024]',
      icon: <FaShieldAlt className="h-6 w-6 text-primary" />,
      link: '/research'
    },
    {
      id: 2,
      title: 'Chrome Security',
      description: 'Chrome Top 20 researcher in 2022/2024.',
      icon: <FaChrome className="h-6 w-6 text-primary" />,
      link: '/research'
    }
  ];

  return (
    <section className="py-16 bg-card">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Research Highlights</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((highlight) => (
            <Link 
              key={highlight.id} 
              href={highlight.link}
              className="bg-background rounded-xl p-6 border border-card-border hover:shadow-md transition-shadow group"
            >
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-primary/10 p-3 rounded-full">
                  {highlight.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-muted">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/research" className="button-primary inline-flex items-center">
            View All Research
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResearchHighlights; 