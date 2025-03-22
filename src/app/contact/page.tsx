import { FaTwitter, FaEnvelope } from 'react-icons/fa';

export const metadata = {
  title: 'Contact | ret2happy',
  description: 'Get in touch with ret2happy via Twitter or email for research collaborations, security discussions, or other inquiries.',
};

export default function Contact() {
  return (
    <section className="py-16 md:py-24 tech-pattern relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact</h1>
          </div>

          <div className="bg-card rounded-2xl shadow-xl p-8 md:p-12 border border-card-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Twitter Contact */}
              <div className="bg-background/50 rounded-xl p-6 text-center flex flex-col items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <FaTwitter className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Twitter</h2>
                <a 
                  href="https://x.com/ret2happy" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-primary inline-flex items-center"
                >
                  <span>@ret2happy</span>
                </a>
              </div>

              {/* Email Contact */}
              <div className="bg-background/50 rounded-xl p-6 text-center flex flex-col items-center">
                <div className="bg-accent/10 p-4 rounded-full mb-4">
                  <FaEnvelope className="h-8 w-8 text-accent" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Email</h2>
                <a 
                  href="mailto:ret2happy@gmail.com"
                  className="button-primary inline-flex items-center"
                >
                  <span>ret2happy@gmail.com</span>
                </a>
              </div>
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