import { getPostBySlug, getAllPostsMeta } from '@/lib/mdx';
import { FaCalendarAlt, FaClock, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }
  
  return {
    title: `${post.meta.title} | Security Research Blog`,
    description: post.meta.excerpt,
    keywords: post.meta.tags,
    authors: [{ name: post.meta.author || 'ret2happy' }],
  };
}

// Generate static page paths
export async function generateStaticParams() {
  const posts = await getAllPostsMeta();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Define Props type for page component
interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <div className="py-12 md:py-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-muted hover:text-primary mb-8 transition-colors"
          >
            <FaArrowLeft className="mr-2 h-4 w-4" />
            Back to all posts
          </Link>
          
          <article>
            <header className="mb-10">
              <div className="mb-4 flex flex-wrap gap-2">
                {post.meta.tags?.map((tag) => (
                  <span 
                    key={tag}
                    className="inline-block py-1 px-2 rounded bg-primary/10 text-primary text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                {post.meta.title}
              </h1>
              
              <div className="flex flex-wrap items-center text-sm text-muted gap-4 mb-6">
                <div className="flex items-center">
                  <FaCalendarAlt className="h-4 w-4 mr-2" />
                  <span>{new Date(post.meta.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
                
                {post.meta.readingTime && (
                  <div className="flex items-center">
                    <FaClock className="h-4 w-4 mr-2" />
                    <span>{post.meta.readingTime}</span>
                  </div>
                )}
                
                <div className="flex items-center">
                  <span className="font-medium">By {post.meta.author || 'ret2happy'}</span>
                </div>
              </div>
            </header>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {post.content}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
} 