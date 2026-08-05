import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getPostBySlug, getAllPostsMeta } from '@/lib/mdx';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: 'Post not found' };
  }

  return {
    title: post.meta.title,
    description: post.meta.excerpt,
    keywords: post.meta.tags,
    authors: [{ name: post.meta.author || 'ret2happy' }],
  };
}

export async function generateStaticParams() {
  const posts = await getAllPostsMeta();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const date = new Date(post.meta.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="doc pt-14 pb-24">
      <div className="doc-row">
        <div>
          <Link href="/#writing" className="link-meta">
            ← All writing
          </Link>
        </div>

        <article>
          <header>
            <h1 className="serif text-[30px] font-semibold leading-[1.24] tracking-[-0.014em] doc-measure">
              {post.meta.title}
            </h1>
            <p className="mono mt-4 text-[12px] text-ink-3">
              {date}
              {post.meta.readingTime ? ` · ${post.meta.readingTime}` : ''}
              {post.meta.author ? ` · ${post.meta.author}` : ''}
            </p>
            {post.meta.tags?.length ? (
              <p className="mono mt-2 text-[11px] uppercase tracking-[0.09em] text-ink-3">
                {post.meta.tags.join(' · ')}
              </p>
            ) : null}
          </header>

          <hr className="doc-divider mt-8" />

          <div className="article mt-8">{post.content}</div>
        </article>
      </div>
    </div>
  );
}
