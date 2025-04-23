import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import markdownContent from '@/data/NuestraHistoria.md?raw';
import { Link } from 'react-router';
import { IoReturnUpBack } from 'react-icons/io5';

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
      <div className="flex items-center gap-2 group justify-end">
        <Link
          to={'/about'}
          className="inline-flex items-center gap-2 text-base text-cyan-600 dark:text-cyan-400 hover:underline font-medium group"
        >
          Regresar
          <IoReturnUpBack className="w-6 h-6 group-hover:translate-x-1 transition-all" />
        </Link>
      </div>
    </div>
  );
};

export default NuestraHistoriaPage;


