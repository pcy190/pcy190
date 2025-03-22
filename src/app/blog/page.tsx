import { getAllPostsMeta } from '@/lib/mdx';
import Link from 'next/link';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';

export const metadata = {
  title: 'Blog | Computer & Blockchain Security Research',
  description: 'Articles and insights on computer security, blockchain security, vulnerability research, and more.',
};

export default async function BlogPage() {
  const posts = await getAllPostsMeta();

  return (
    <div className="py-12 md:py-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Security Research Blog
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Insights and analysis on computer security, blockchain vulnerabilities, 
              and cutting-edge security research techniques.
            </p>
          </header>

          <div className="space-y-12">
            {posts.length > 0 ? (
              posts.map((post) => (
                <article 
                  key={post.slug}
                  className="border-b border-card-border pb-10 mb-10 last:border-0"
                >
                  <div className="mb-4 flex flex-wrap gap-2">
                    {post.tags?.map((tag) => (
                      <span 
                        key={tag}
                        className="inline-block py-1 px-2 rounded bg-primary/10 text-primary text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <p className="text-muted mb-6">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap items-center text-sm text-muted gap-4">
                    <div className="flex items-center">
                      <FaCalendarAlt className="h-4 w-4 mr-2" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                    </div>
                    
                    {post.readingTime && (
                      <div className="flex items-center">
                        <FaClock className="h-4 w-4 mr-2" />
                        <span>{post.readingTime}</span>
                      </div>
                    )}
                    
                    <div className="flex items-center">
                      <span className="font-medium">By {post.author || 'ret2happy'}</span>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="text-center py-16 bg-card rounded-xl border border-card-border">
                <h3 className="text-xl font-semibold mb-2">No articles yet</h3>
                <p className="text-muted">
                  Stay tuned for upcoming posts on security research and more.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 