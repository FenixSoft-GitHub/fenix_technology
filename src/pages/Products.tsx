import { CardProduct } from "@/components/products/CardProduct"
import { ContainerFilter } from "@/components/products/ContainerFilter"
import { Loader } from "@/components/shared/Loader"
import { Pagination } from "@/components/shared/Pagination"
import { prepareProducts } from "@/helpers"
import { useFilteredProducts } from "@/hooks"
import { useState } from "react"

const Products = () => {

  const [page, setPage] = useState(1);
  const [selectedBrans, setSelectedBrans] = useState<string[]>([]);

  const {
    data: products = [],
    isLoading,
    totalProducts,
  } = useFilteredProducts({ page, brands: selectedBrans });

  if (isLoading || !products) {
    return <Loader />
  }

  const preparedProducts = prepareProducts(products)

  return (
    <main className="container mx-auto p-4 mt-[52px]">
      <h1 className="text-4xl text-center font-bold text-gray-900 mb-6 drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)]">
        Artículos
      </h1>
      <section className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-between ">
        {/* FILTROS */}
        <ContainerFilter
          selectedBrands={selectedBrans}
          setSelectedBrands={setSelectedBrans}
        />

        {isLoading ? (
          <div className="h-screen flex items-center justify-center">
            <div className="spinner-border text-avocado-500" role="status">
              <Loader />
            </div>
          </div> 
        ) : (
          <div className="col-span-2 lg:col-span-2 xl:col-span-4 flex flex-col gap-12">
            <div className="grid grid-cols-2 gap-3 gap-y-6 xl:grid-cols-4">
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

            <Pagination
              page={page}
              totalItems={totalProducts}
              setPage={setPage}
            />
          </div>
        )}
      </section>
    </main>
  )
}

export default Products