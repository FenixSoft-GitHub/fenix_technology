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
            <div className="bg-[#F2F2F2] h-[500px] p-4 rounded-lg dark:bg-gray-700 dark:text-gray-100 ">
                <img
                    src={activeImage}
                    alt="Imagen del producto"
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>
            <div className="flex gap-2 mt-1">
                {images.map((image, index) => (
                    <button
                        key={image}
                        onClick={() => handleImageClick(image)}
                        className={`w-16 h-16 border ${activeImage === image ? 'border-gray-900 dark:border-gray-100' : 'border-transparent'} rounded-lg hover:border-gray-900 hover:dark:border-gray-100 focus:outline-none`}
                    >
                        <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full rounded-lg object-cover" />
                    </button>
                ))}
            </div>
        </div>
    )
}

export default GridImages