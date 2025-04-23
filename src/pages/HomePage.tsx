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
              key="recent"
              title="Nuevos Productos"
              products={preparedRecentProducts}
              showNavigation={true}
            />
          )
        }

        {
          isLoading ? (
            <ProductGridSkeleton numberOfProducts={4} />
          ) : (
            <ProductGrid
              key={preparedPopularProducts.map(p => p.id).join("-")}
              title="Productos Destacados"
              products={preparedPopularProducts}
              showNavigation={true}

            />
          )
        }

        <FeatureGrid />

        <SponsorCarousel />
      </div>
    </main>
  )
}

export default HomePage
