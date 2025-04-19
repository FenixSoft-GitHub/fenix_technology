// src/utils/markdownUtils.ts
import { parseMarkdown } from '@/components/actions/markdownParser';

interface ParsedBlogPost {
  metadata: {
    title: string;
    date: string;
    author: string;
    slug: string;
    tags?: string[];
    imageUrl?: string;
    excerpt?: string;
  };
  html: string;
}

export const importMarkdownFiles = async (): Promise<ParsedBlogPost[]> => {
  try {
    // Obtener todas las rutas de los archivos Markdown
    const files = import.meta.glob('/src/content/**/*.md', { query: '?raw', import: 'default' });

    // Convertir las rutas en un array
    const fileNames = Object.keys(files);

    // Leer y procesar cada archivo
    const posts = await Promise.all(
      fileNames.map(async (fileName) => {
        try {
          // Importar el contenido del archivo
          const markdownContent = await files[fileName](); // ya es string
          
          // Procesar el Markdown
          const parsed = await parseMarkdown(markdownContent as string);

          // Extraer el slug del nombre del archivo
          const slug = fileName.split('/').pop()?.replace('.md', '') || '';

          return {
            ...parsed,
            metadata: {
              ...parsed.metadata,
              slug
            }
          };
        } catch (error) {
          console.error(`Error processing file ${fileName}:`, error);
          return null;
        }
      })
    );

    // Filtrar los archivos que no son Markdown
    const validPosts = posts.filter(post => post !== null) as ParsedBlogPost[];

    return validPosts;
  } catch (error) {
    console.error('Error importing Markdown files:', error);
    throw error;
  }
};