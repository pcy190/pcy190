import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';

// Blog posts directory path
const blogDirectory = path.join(process.cwd(), 'src/content/blog');

// Define blog post metadata type
export type PostMeta = {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  author: string;
  slug: string;
  readingTime?: string;
};

// Get metadata for all blog posts
export async function getAllPostsMeta(): Promise<PostMeta[]> {
  // Ensure directory exists
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  const files = fs.readdirSync(blogDirectory);
  const markdownFiles = files.filter((file) => file.endsWith('.mdx'));
  
  const posts = markdownFiles.map((fileName) => {
    const slug = fileName.replace('.mdx', '');
    const filePath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    
    // Calculate reading time (simple implementation: assume 200 words per minute)
    const wordCount = fileContents.split(/\s+/g).length;
    const readingTime = Math.ceil(wordCount / 200) + ' min read';
    
    return {
      slug,
      readingTime,
      ...data as Omit<PostMeta, 'slug' | 'readingTime'>,
    };
  });
  
  // Sort by date in descending order (newest posts first)
  return posts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

// Get content and metadata for a single blog post
export async function getPostBySlug(slug: string) {
  const filePath = path.join(blogDirectory, `${slug}.mdx`);
  
  // Check if file exists
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContents);
  
  // Calculate reading time
  const wordCount = content.split(/\s+/g).length;
  const readingTime = Math.ceil(wordCount / 200) + ' min read';
  
  // Compile MDX content
  const mdxSource = await compileMDX({
    source: content,
    options: { parseFrontmatter: true },
  });
  
  return {
    content: mdxSource.content,
    meta: {
      ...data as Omit<PostMeta, 'slug' | 'readingTime'>,
      slug,
      readingTime,
    },
  };
}

// Get list of blog post tags
export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPostsMeta();
  const tagsSet = new Set<string>();
  
  posts.forEach((post) => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach((tag) => tagsSet.add(tag));
    }
  });
  
  return Array.from(tagsSet);
} 