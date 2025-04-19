import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import markdownContent from '@/data/Policies.md?raw';

export const Policies = () => {
    if (typeof markdownContent !== 'string') {
        console.error("Error: No se pudo cargar el contenido Markdown.");
        return <p>Error al cargar el contenido.</p>;
      }
    
      return (
        <div className="container mx-auto p-6 prose lg:prose-xl dark:prose-invert"> {/* 'prose' es útil con TailwindCSS Typography */}
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {markdownContent}
          </ReactMarkdown>
        </div>
      );
}
