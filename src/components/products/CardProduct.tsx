import { useState } from "react";
import { Link } from "react-router-dom";
import { VariantProduct } from "@/components/interfaces";
import { formatPrice } from "@/helpers";
import Tag from "../shared/Tag";
import { useCartStore } from "@/store/cart.store";
import toast from "react-hot-toast";
import { FaCartPlus } from "react-icons/fa6";

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
  const [activeColor, setActiveColor] = useState(colors[0]);

  const addItem = useCartStore((state) => state.addItem);

  const selectedVariant = variants.find(
    (variant) => variant.color === activeColor.color
  );

  const stock = selectedVariant?.stock || 0;

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
      toast.success("Producto añadido al carrito", {
        position: "bottom-right",
      });
    } else {
      toast.error("Producto agotado", {
        position: "bottom-right",
      });
    }
  };

  return (
    <div className="group h-full flex flex-col justify-between border border-gray-200 dark:border-gray-600 rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 text-gray-900 dark:text-gray-100 dark:bg-gray-900">
      <Link to={`/products/${slug}`} className="block relative w-full aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      
      <div className="flex flex-col gap-2 px-4 pb-4 pt-2 text-gray-900 dark:text-gray-100 dark:bg-gray-900">
        <h3 className="text-base font-semibold line-clamp-2 min-h-[2.5rem]">
          {name}
        </h3>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-cyan-600">
            {formatPrice(price)}
          </span>
          {variants.length > 1 && (
            <span className="text-xs text-gray-500 dark:text-gray-300 ">{variants.length} variantes</span>
          )}
        </div>

        <div className="flex items-center justify-between">
          {colors.length > 0 && (
            <div className="flex gap-2 mt-1">
              {colors.map((color) => (
                <button
                  key={color.color}
                  onClick={() => setActiveColor(color)}
                  className={`w-5 h-5 rounded-full border border-gray-400 transition 
                    ${activeColor.color === color.color
                      ? "ring-1 ring-cyan-600 ring-offset-2"
                      : "hover:ring-1 hover:ring-gray-300"
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
            disabled={stock === 0}
            className={`w-fit flex items-center justify-center  rounded-full transition-all
              ${stock === 0
                ? "bg-gray-200 text-gray-500 cursor-not-allowed p-2"
                : "bg-cyan-600 text-gray-100 hover:bg-cyan-700 hover:scale-105 active:scale-95 p-3"
              }`}
          >
            {stock === 0 ? (
              <Tag contentTag="agotado" />
            ) : (
              <>
                <FaCartPlus className="w-5 h-5" />
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};