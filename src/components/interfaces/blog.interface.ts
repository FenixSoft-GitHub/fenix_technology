// src/components/interfaces/blog.interface.ts
export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    imageUrl: string;
    date: string;
    author: {
      name: string;
      avatar?: string;
    };
    categories: string[];
    readingTime: number;
    views: number;
    likes: number;
    comments: number;
    isFeatured: boolean;
    isSticky: boolean;
    language: 'es' | 'en';
    meta: {
      title?: string;
      description?: string;
      keywords?: string[];
      ogImage?: string;
      ogDescription?: string;
      twitterImage?: string;
      twitterDescription?: string;
    };
    relatedPosts: string[];
    tags: string[];
    draft: boolean;
    draftContent?: string;
    draftAuthor?: {
      name: string;
      avatar?: string;
    };
    draftMessage?: string;
    version: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    deletedAt?: string;
  }
  
  // Tipos auxiliares
  export interface BlogPostCardProps {
    post: BlogPost;
    className?: string;
    onClick?: () => void;
  }
  
  export interface BlogPostBentoProps {
    post: BlogPost;
    className?: string;
    onClick?: () => void;
    layout: 'large' | 'medium' | 'small';
  }
  
  export interface BlogPostsListProps {
    posts: BlogPost[];
    className?: string;
    columns?: number;
    gap?: string;
    layout?: 'grid' | 'masonry';
  }
  
  // Constantes para el patrón Bento
  export const BENTO_PATTERN: ('large' | 'medium' | 'small')[] = [
    'large',
    'medium',
    'small',
    'medium',
    'large',
    'small',
    'medium',
    'small',
    'medium',
    'large'
  ];
  
  // Funciones utilitarias
  export const getPostSize = (index: number): { width: string; height: string } => {
    if (index === 0) {
      return { width: 'col-span-2', height: 'h-[600px]' };
    } else if (index === 1) {
      return { width: 'col-span-1', height: 'h-[400px]' };
    } else if (index === 2) {
      return { width: 'col-span-1', height: 'h-[300px]' };
    } else if (index === 3) {
      return { width: 'col-span-1', height: 'h-[400px]' };
    } else if (index === 4) {
      return { width: 'col-span-2', height: 'h-[500px]' };
    } else {
      return { width: 'col-span-1', height: 'h-[300px]' };
    }
  };
  
  export const getLayoutClasses = (layout: 'large' | 'medium' | 'small'): string => {
    switch (layout) {
      case 'large':
        return 'col-span-2 h-[600px]';
      case 'medium':
        return 'col-span-1 h-[400px]';
      case 'small':
        return 'col-span-1 h-[300px]';
      default:
        return 'col-span-1 h-[400px]';
    }
  };