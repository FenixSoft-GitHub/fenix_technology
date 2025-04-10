import { Json } from "@/supabase/supabase"
import { EditorContent, JSONContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

interface Props {
    content: JSONContent | Json
}

const ProductDescription = ({content}: Props) => {

    const editor = useEditor({
        extensions: [StarterKit],
        content: content as JSONContent,
        editable: false,
        editorProps: {
            attributes: {
                class: 'prose prose-sm max-w-none sm:prose-base'
            }
        }
      })


  return (
    <div className="px-8 mt-12">
        <h2 className="text-2xl font-semibold text-center mb-8 underline">
            Descripción
        </h2>
        <EditorContent editor={editor} />
    </div>
  )
}

export default ProductDescription