import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import markdownContent from '@/data/NuestraHistoria.md?raw';

const NuestraHistoriaPage = () => {
  if (typeof markdownContent !== 'string') {
    console.error("Error: No se pudo cargar el contenido Markdown.");
    return <p>Error al cargar el contenido.</p>;
  }

  return (
    <div className="container mx-auto p-6 prose lg:prose-xl dark:prose-invert">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};

export default NuestraHistoriaPage;


