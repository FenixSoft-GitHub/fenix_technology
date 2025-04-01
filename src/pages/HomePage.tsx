import { Brands } from "@/components/home/Brands"
import { FeatureGrid } from "@/components/home/FeatureGrid"
import { ProductGrid } from "@/components/home/ProductGrid"
import { ProductGridSkeleton } from "@/components/skeletons/ProductGridSkeleton";
import { useHomeProducts } from "@/hooks";
import { prepareProducts } from "@/helpers";

const HomePage = () => {
  const { recentProducts, popularProducts, isLoading } = useHomeProducts();
  const preparedRecentProducts = prepareProducts(recentProducts);
  const preparedPopularProducts = prepareProducts(popularProducts);
  return (
    <main className="container mx-auto px-4 py-2">
      <FeatureGrid />
      {
        isLoading ? (
        <ProductGridSkeleton numberOfProducts={4} />
        ) : (
          <ProductGrid
            title="Nuevos Productos"
            products={preparedRecentProducts}
          />
        )
      }
      
      {
        isLoading ? (
        <ProductGridSkeleton numberOfProducts={4} />
        ) : (
          <ProductGrid
            title="Productos Destacados"
            products={preparedPopularProducts}
          />
        )
      }

      <Brands />
    </main>
  )
}

export default HomePage
