import Link from 'next/link';
import { getAllPostsMeta } from '@/lib/mdx';

export const metadata = {
  title: 'Writing',
  description: 'Notes on fuzzing, kernel and browser internals, and blockchain security.',
};

export default async function BlogPage() {
  const posts = await getAllPostsMeta();

  return (
    <div className="doc pt-14 pb-24">
      <div className="doc-row">
        <p className="doc-label">Writing</p>

        <div>
          <p className="prose-note doc-measure">
            Notes on fuzzing, kernel and browser internals, and blockchain security. The longer
            results become papers. These are the rest.
          </p>

          {posts.length > 0 ? (
            <ul className="mt-10 space-y-8">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <h2 className="section-title doc-measure group-hover:text-primary">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="mono mt-2 text-[12px] text-ink-3">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                    {post.readingTime ? ` · ${post.readingTime}` : ''}
                  </p>
                  <p className="prose-note mt-2 doc-measure">{post.excerpt}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="prose-note mt-10">No posts yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
