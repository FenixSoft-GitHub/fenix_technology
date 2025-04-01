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
            <div className="bg-[#F2F2F2] h-[500px] p-4">
                <img
                    src={activeImage}
                    alt="Imagen del producto"
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="flex gap-2 mt-1">
                {images.map((image, index) => (
                    <button
                        key={image}
                        onClick={() => handleImageClick(image)}
                        className={`w-16 h-16 border ${activeImage === image ? 'border-black' : 'border-transparent'} rounded-lg hover:border-black focus:outline-none`}
                    >
                        <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full rounded-lg object-cover" />
                    </button>
                ))}
            </div>
        </div>
    )
}

export default GridImages