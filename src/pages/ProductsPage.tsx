import { useState } from "react";
import { CardProduct } from "@/components/products/CardProduct";
import { Loader } from "@/components/shared/Loader";
import { Pagination } from "@/components/shared/Pagination";
import { prepareProducts } from "@/helpers";
import { useFilteredProducts, useProductsBrands } from "@/hooks";
import BrandFilter from "@/components/products/BrandFilter";

const ProductsPage = () => {
  const [page, setPage] = useState(1);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const { brands: brandsSelect, isLoading: isLoadingBrands, isError: isErrorBrands } = useProductsBrands();
  const {
    data: products = [],
    isLoading,
    totalProducts,
  } = useFilteredProducts({ page, brands: selectedBrand ? [selectedBrand] : [] });

  const handleBrandChange = (brand: string | null) => {
    setSelectedBrand(brand);
    setPage(1); // Reset page when filter changes
  };

  const handleResetFilter = () => {
    setSelectedBrand(null);
    setPage(1);
  };

  if (isLoading || isLoadingBrands || isErrorBrands) return <Loader />;

  const preparedProducts = prepareProducts(products);

  return (
    <main className="max-w-screen-xl mx-auto px-4 py-6 dark:bg-gray-900 dark:text-gray-100">
      {/* Header y filtro */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 dark:bg-gray-900 dark:text-gray-100">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 md:text-left drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]">
          Artículos
        </h1>

        {/* Usa el componente BrandFilter */}
        <BrandFilter
          brands={brandsSelect}
          onBrandChange={handleBrandChange}
          onResetFilter={handleResetFilter}
          initialBrand={selectedBrand}
        />
      </div>

      {/* Grid de productos */}
      <div>
        {preparedProducts.length === 0 ? (
          <div className="text-center text-gray-500 py-20 dark:text-gray-100">
            No se encontraron productos para la marca seleccionada.
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 dark:bg-gray-900 dark:text-gray-100">
            {preparedProducts.map((product) => (
              <CardProduct
                key={product.id}
                name={product.name}
                price={product.price}
                colors={product.colors}
                img={product.images[0]}
                slug={product.slug}
                variants={product.variants}
              />
            ))}
          </div>
        )}
      </div>

      {/* Paginación */}
      <div className="mt-10">
        <Pagination
          page={page}
          totalItems={totalProducts}
          setPage={setPage}
        />
      </div>
    </main>
  );
};

export default ProductsPage;