import { LuMinus, LuPlus } from 'react-icons/lu';
import { Separator } from '../components/shared/Separator';
import { formatPrice } from '../helpers';
import { CiDeliveryTruck } from 'react-icons/ci';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ProductDescription from '@/components/one-product/ProductDescription';
import { BsChatLeftText } from 'react-icons/bs';
import GridImages from '@/components/one-product/GridImages';
import { useProduct } from '@/hooks/products/useProduct';
import { useEffect, useMemo, useState } from 'react';
import { VariantProduct } from '@/components/interfaces';
import Tag from '@/components/shared/Tag';
import { Loader } from '@/components/shared/Loader';
import { useCounterStore } from '@/store/counter.store';
import { useCartStore } from '@/store/cart.store';
import toast from 'react-hot-toast';

interface Acc {
  [key: string]: { name: string; storages: string[] };
}

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [currentSlug, setCurrentSlug] = useState(slug);
  const { product, isLoading, isError } = useProduct(currentSlug || '');
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedStorage, setSelectedStorage] = useState<string | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<VariantProduct | null>(null);
  const { count, increment, decrement, reset } = useCounterStore()
  // const count = useCounterStore(state => state.count);
  // const increment = useCounterStore(state => state.increment);
  // const decrement = useCounterStore(state => state.decrement);
  // const reset = useCounterStore(state => state.reset);
  const navigate = useNavigate();
  const addItem = useCartStore(state => state.addItem);

  const colors = useMemo(() => {
    return product?.variants.reduce((acc: Acc, variant: VariantProduct) => {
      const { color, color_name, storage } = variant;
      if (!acc[color]) {
        acc[color] = {
          name: color_name,
          storages: []
        }
      }

      if (!acc[color].storages.includes(storage)) {
        acc[color].storages.push(storage);
      }
      return acc;
    }, {} as Acc) || {}
  }, [product?.variants]);

  const availableColors = Object.keys(colors);

  useEffect(() => {
    if (!selectedColor && availableColors.length > 0) {
      setSelectedColor(availableColors[0]);
    }
  }, [selectedColor, availableColors]);

  useEffect(() => {
    if (selectedColor && !selectedStorage && colors[selectedColor]?.storages.length > 0) {
      setSelectedStorage(colors[selectedColor]?.storages[0]);
    }
  }, [selectedStorage, colors, selectedColor]);

  useEffect(() => {
    if (selectedColor && selectedStorage) {
      const variant = product?.variants.find(
        (variant) =>
          variant.color === selectedColor &&
          variant.storage === selectedStorage
      );
      setSelectedVariant(variant as VariantProduct);
    }
  }, [selectedColor, selectedStorage, product?.variants]);

  const isOutOfStock = selectedVariant?.stock === 0 || false;

  // Función para añadir al carrito
  const addToCart = () => {
    if (selectedVariant) {
      addItem({
        variantId: selectedVariant.id,
        productId: product?.id || '',
        name: product?.name || '',
        image: product?.images[0] || '',
        color: selectedVariant.color_name,
        storage: selectedVariant.storage,
        price: selectedVariant.price,
        quantity: count,
      });
      toast.success('Producto añadido al carrito', {
        position: 'bottom-right',
      });
    }
  };

  // Función para comprar ahora
  const buyNow = () => {
    if (selectedVariant) {
      addItem({
        variantId: selectedVariant.id,
        productId: product?.id || '',
        name: product?.name || '',
        image: product?.images[0] || '',
        color: selectedVariant.color_name,
        storage: selectedVariant.storage,
        price: selectedVariant.price,
        quantity: count,
      });

      navigate('/checkout');
    }
  };

  // Resetear el slug actual cuando cambia en la URL
  useEffect(() => {
    setCurrentSlug(slug);

    // Reiniciar color, almacenamiento y variante seleccionada
    setSelectedColor(null);
    setSelectedStorage(null);
    setSelectedVariant(null);
    reset();
  }, [slug]);


  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error loading product</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className="h-fit flex flex-col md:flex-row gap-16 mt-[52px]">
        <GridImages images={product?.images} />

        <div className="flex-1 space-y-5">
          <h1 className="text-3xl font-bold tracking-tight">
            {product?.name}
          </h1>

          <div className="flex gap-5 items-center">
            <span className="text-lg tracking-wide font-semibold">
              {formatPrice(selectedVariant?.price || product?.variants[0]?.price || 0)}
            </span>
            <div className="relative">
              {isOutOfStock && <Tag contentTag="agotado" />}
            </div>
          </div>

          <Separator />

          <ul className="space-y-2 ml-7 my-10">
            {product?.features.map((feature) => (
              <li key={feature} className="text-sm font-medium flex items-center gap-2 tracking-tight">
                <span className="bg-black w-[5px] h-[5px] rounded-full"></span>
                {feature}
              </li>
            ))}
          </ul>

          <div className="flex gap-3 flex-col">
            <p>
              Color: {selectedColor && colors[selectedColor]?.name}
            </p>
            <div className="flex gap-3">
              {availableColors.map((color) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${selectedColor === color ? 'border border-slate-800' : ''}`}
                  onClick={() => setSelectedColor(color)}
                >
                  <span className="w-[26px] h-[26px] rounded-full" style={{ backgroundColor: color }}></span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium">
              Almacenamiento disponible
            </p>

            <div className="flex gap-3">
              {selectedColor && (
                <select
                  className="border border-gray-300 rounded-lg py-1 px-3"
                  value={selectedStorage || ''}
                  onChange={(e) => setSelectedStorage(e.target.value)}
                >
                  {colors[selectedColor]?.storages.map((storage) => (
                    <option key={storage} value={storage}>
                      {storage}
                    </option>
                  ))}
                </select>
              )}
            </div>

            {/* este bloque no pase a este sitio estaba en el de abajo */}

            <div className="space-y-3">
              <p className="text-xs font-medium">
                Cantidad:
              </p>
              <div className="flex gap-8 px-5 py-3 border border-slate-200 w-fit rounded-full">
                <button onClick={decrement} disabled={count === 1}>
                  <LuMinus size={15} />
                </button>
                <span className="text-sm text-slate-500">{count}</span>
                <button onClick={increment}>
                  <LuPlus size={15} />
                </button>
              </div>
            </div>


          </div>
          {
            isOutOfStock ? (
              <button disabled className="bg-[#f3f3f3] w-full uppercase text-gray-900 font-semibold py-4 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-105 mt-4 outline-2 outline-offset-2 outline-cyan-300">
                Agotado
              </button>

            ) : (
              <>
              {/* Estaba aqui */}

                <div className="flex flex-col gap-3 mt-8">
                  <button onClick={addToCart} className="bg-cyan-600 uppercase text-white font-semibold py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-105 mt-4 outline-2 outline-offset-2 outline-cyan-600 hover:bg-cyan-700">
                    Añadir al carrito
                  </button>
                  <button onClick={buyNow} className="bg-black uppercase text-white font-semibold py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-105 mt-4 outline-2 outline-offset-2 outline-gray-600">
                    Comprar ahora
                  </button>
                </div>
              </>
            )
          }

          <div className="flex pt-2">
            <div className="flex flex-col gap-1 flex-1 items-center">
              <CiDeliveryTruck size={35} />
              <p className="text-xs font-medium">
                Envío gratis
              </p>
            </div>
            <Link to="#" className="flex flex-col gap-1 flex-1 items-center justify-center">
              <BsChatLeftText size={30} />
              <p className="flex flex-col items-center text-xs font-medium">
                <span>
                  ¿Necesitas ayuda?
                </span>
                Contáctanos aquí
              </p>
            </Link>
          </div>
        </div>
      </div>

      <ProductDescription content={product.description} />
    </>
  )
}

export default ProductPage