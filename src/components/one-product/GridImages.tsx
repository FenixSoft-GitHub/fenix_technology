import { useState } from "react"

interface Props {
  images: string[]
}

const GridImages = ({ images }: Props) => {
  const [activeImage, setActiveImage] = useState(images[0])

  const handleImageClick = (image: string) => {
    setActiveImage(image)
  }

  return (
    <div className="flex flex-1 flex-col relative gap-3">
      <div className="bg-gray-200 h-[500px] w-fit mx-auto flex items-center justify-center p-4 rounded-lg dark:bg-gray-800 dark:text-gray-100">
        <img
          src={activeImage}
          alt="Imagen del producto"
          className="h-full w-auto max-w-full object-contain rounded-lg"
        />
      </div>
      <div className="flex justify-center gap-3 mt-1">
        {images.map((image, index) => (
          <button
            key={image}
            onClick={() => handleImageClick(image)}
            className={`w-16 h-16 border ${activeImage === image ? 'border-gray-900 dark:border-gray-100' : 'border-transparent'} rounded-lg hover:border-gray-900 hover:dark:border-gray-100 focus:outline-none`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full rounded-lg object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default GridImages