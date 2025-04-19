import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { bannerImages } from "@/constants/links";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const BannerMobile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    const element = carouselRef.current;
    if (element) {
      const scrollPosition = element.offsetWidth * index;
      element.scrollTo({ left: scrollPosition, behavior: "smooth" });
      setCurrentIndex(index);
    }
  };

  const goToPrev = () => {
    const newIndex = (currentIndex - 1 + bannerImages.length) % bannerImages.length;
    scrollToIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % bannerImages.length;
    scrollToIndex(newIndex);
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden bg-black sm:hidden">
      {/* Carousel horizontal */}
      <div
        ref={carouselRef}
        className="flex w-full h-full overflow-x-scroll scroll-smooth snap-x snap-mandatory"
      >
        {bannerImages.map((src, i) => (
          <div
            key={i}
            className="w-full h-full flex-shrink-0 bg-cover bg-center snap-center relative"
            style={{ backgroundImage: `url(${src.image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute z-10 bottom-20 left-4 right-4 text-white text-center space-y-4">
              <h2 className="text-2xl font-bold">{src.title}</h2>
              <p className="text-sm">{src.subtitle}</p>
              <Link
                to="/products"
                className="bg-cyan-300 hover:bg-cyan-400 text-gray-900 font-semibold py-2 px-4 rounded-full transition"
              >
                Ver Productos
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Controles */}
      <div className="absolute z-20 bottom-4 left-0 right-0 flex justify-between px-4">
        <button
          onClick={goToPrev}
          className="bg-black/50 p-2 rounded-full text-white"
          aria-label="Anterior"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={goToNext}
          className="bg-black/50 p-2 rounded-full text-white"
          aria-label="Siguiente"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-2 w-full flex justify-center gap-2">
        {bannerImages.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === currentIndex ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerMobile;
