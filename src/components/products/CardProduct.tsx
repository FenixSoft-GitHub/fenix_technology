import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { VariantProduct } from "@/components/interfaces";
import { formatPrice } from "@/helpers";
import Tag from "../shared/Tag";
import { useCartStore } from "@/store/cart.store";
import toast from "react-hot-toast";

interface Props {
  img: string;
  name: string;
  price: number;
  slug: string;
  colors: { name: string; color: string }[];
  variants: VariantProduct[];
}

export const CardProduct = ({
  img,
  name,
  price,
  slug,
  colors,
  variants,
}: Props) => {
  const [activeColor, setActiveColor] = useState<{
    name: string;
    color: string;
  }>(colors[0]);

  const addItem = useCartStore(state => state.addItem);
  
  const handleAddClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		if (selectedVariant && selectedVariant.stock > 0) {
			addItem({
				variantId: selectedVariant.id,
				productId: slug,
				name,
				image: img,
				color: activeColor.name,
				storage: selectedVariant.storage,
				price: selectedVariant.price,
				quantity: 1,
			});
			toast.success('Producto añadido al carrito', {
				position: 'bottom-right',
			});
		} else {
			toast.error('Producto agotado', {
				position: 'bottom-right',
			});
		}
	};

  const selectedVariant = variants.find(
    (variant) => variant.color === activeColor.color
  );

  const stock = selectedVariant?.stock || 0;

  return (
    <div className="group relative flex flex-col gap-3 rounded-lg bg-slate-100 border border-slate-300 p-4 shadow-sm transition-all duration-300 hover:shadow-md">
      <Link
        to={`/products/${slug}`}
        className="relative flex overflow-hidden aspect-square"
      >
        <img 
          src={img} 
          alt={name} 
          className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105 rounded-lg"
        />

        {/* {stock === 0 && (
          <Tag contentTag="agotado"/>
        )} */}
      </Link>

      <div className="flex flex-col items-start gap-2">
        <h3 className="font-medium text-gray-900 line-clamp-2 min-h-[2.5rem]">
          {name}
        </h3>

        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold text-cyan-600">
            {formatPrice(price)}
          </p>
          {variants.length > 1 && (
            <span className="text-xs text-gray-500">
              {variants.length} variantes
            </span>
          )}
        </div>

        {colors.length > 0 && (
          <div className="flex gap-1.5">
            {colors.map((color) => (
              <button
                key={color.color}
                onClick={() => setActiveColor(color)}
                className={`relative w-6 h-6 rounded-full p-0.5 transition-all duration-200
                  ${activeColor.color === color.color 
                    ? 'ring-2 ring-cyan-600 ring-offset-2'
                    : 'hover:ring-2 hover:ring-gray-300 hover:ring-offset-2'
                  }`}
                title={color.name}
              >
                <span
                  className="block w-full h-full rounded-full"
                  style={{ backgroundColor: color.color }}
                />
              </button>
            ))}
          </div>
        )}

        <button 
          onClick={handleAddClick}
          className={`w-full flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-medium text-sm mt-2
            ${stock === 0 
              ? 'cursor-not-allowed'
              : 'bg-cyan-600 text-white hover:bg-cyan-700 active:scale-95'
            } transition-all duration-300 transform opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0`}
          disabled={stock === 0}
        >
          {stock === 0 ? (
            <Tag contentTag="agotado"/>
          ) : (
            <>
              <FiShoppingCart className="w-4 h-4" />
              Añadir al carrito
            </>
          )}
        </button>
      </div>
    </div>
  );
};
