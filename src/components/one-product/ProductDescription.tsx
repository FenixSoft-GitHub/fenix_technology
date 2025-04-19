import { Json } from "@/supabase/supabase"
import { EditorContent, JSONContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { Separator } from "../shared/Separator"

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
                class: 'prose prose-sm max-w-none sm:prose-base dark:prose-invert'
            }
        }
      })


  return (
    <div className="px-8 my-12 dark:bg-gray-900 dark:text-gray-100">
        <h2 className="text-2xl font-semibold text-center mb-8 underline">
            Descripción
        </h2>
        <Separator />
        <EditorContent editor={editor} />
    </div>
  )
}

export default ProductDescription