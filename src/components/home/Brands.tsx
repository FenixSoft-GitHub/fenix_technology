import { brands } from "@/constants/links";

export const Brands = () => {
  return (
    <div className="flex flex-col items-center gap-3 pt-6 pb-8 text-gray-900 dark:text-gray-100 dark:bg-gray-900">
      <h2 className="font-bold text-2xl">Marcas que disponemos</h2>

      <p className="w-2/3 text-center text-sm md:text-base">
        Tenemos lo más moderno en tecnología y los últimos modelos
      </p>

      <div className="grid grid-cols-3 gap-6 mt-6 items-center md:grid-cols-6">
        {brands.map((brand, index) => (
          <div key={index} className="flex justify-center">
            <img src={brand.image} alt={brand.alt} className={brand.size + " drop-shadow-[0_2px_2px_rgba(250,250,250,0.9)]"}/>
          </div>
        ))}
      </div>
    </div>
  );
};
