// src/components/actions/markdownParser.ts
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface BlogPostMetadata {
  title: string;
  date: string;
  author: string;
  slug: string;
  tags?: string[];
  featuredImage?: string;
  excerpt?: string;
  classCol: string;
  classMax: string;
}

export interface ParsedBlogPost {
  metadata: BlogPostMetadata;
  html: string;
}

export async function parseMarkdown(content: string): Promise<ParsedBlogPost> {
  const { data, content: markdownContent } = matter(content);
  const processedContent = await remark()
    .use(html)
    .process(markdownContent);
    
  return {
    metadata: data as BlogPostMetadata,
    html: processedContent.toString()
  };
}


