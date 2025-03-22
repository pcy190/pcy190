import Link from 'next/link';
import { FaCalendarAlt } from 'react-icons/fa';

// Using static data as an example, in a real project this would be fetched from the file system or database
const LatestPosts = () => {
  const posts = [
    {
      id: 1,
      title: 'Uncovering Implementation Flaws in eBPF Runtime',
      excerpt: 'An analysis of the vulnerabilities discovered through differential fuzzing in the eBPF runtime environment.',
      date: 'March 15, 2024',
      category: 'Security Research',
      slug: 'ebpf-runtime-flaws',
    },
    {
      id: 2,
      title: 'Securing Smart Contracts: Common Pitfalls and Best Practices',
      excerpt: 'A comprehensive guide to avoiding security vulnerabilities in blockchain smart contracts.',
      date: 'February 28, 2024',
      category: 'Blockchain Security',
      slug: 'securing-smart-contracts',
    },
    {
      id: 3,
      title: 'Chrome Browser Security: An Insider\'s Perspective',
      excerpt: 'Insights from years of discovering and reporting vulnerabilities in the Chrome browser.',
      date: 'January 20, 2024',
      category: 'Browser Security',
      slug: 'chrome-security-perspective',
    },
  ];

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Latest Posts</h2>
          <Link href="/blog" className="text-primary hover:text-primary-dark transition-colors">
            View all posts →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.slug}`}
              className="flex flex-col h-full bg-card rounded-xl border border-card-border overflow-hidden hover:shadow-md transition-all hover:-translate-y-1 group"
            >
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-3">
                  <span className="inline-block py-1 px-2 rounded bg-primary/10 text-primary text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted mb-4 flex-grow">{post.excerpt}</p>
                <div className="flex items-center text-sm text-muted mt-auto">
                  <FaCalendarAlt className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog" className="button-secondary inline-flex items-center">
            View All Blog Posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestPosts; 