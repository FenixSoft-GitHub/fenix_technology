import { Brands } from "@/components/home/Brands"
import { FeatureGrid } from "@/components/home/FeatureGrid"
import { ProductGrid } from "@/components/home/ProductGrid"
import { ProductGridSkeleton } from "@/components/skeletons/ProductGridSkeleton";
import { useHomeProducts } from "@/hooks";
import { prepareProducts } from "@/helpers";
import SponsorCarousel from "@/components/home/SponsorCarousel";

const HomePage = () => {
  const { recentProducts, popularProducts, isLoading } = useHomeProducts();
  const preparedRecentProducts = prepareProducts(recentProducts);
  const preparedPopularProducts = prepareProducts(popularProducts);
  return (
    <main className="text-gray-900 dark:text-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-2">
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

        <FeatureGrid />

        {/* <Brands /> */}
        <SponsorCarousel />
      </div>
    </main>
  )
}

export default HomePage
