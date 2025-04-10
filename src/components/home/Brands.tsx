const brands = [
  {
    image: "/img/brands/Apple-Logo.webp",
    alt: "Apple",
  },
  {
    image: "/img/brands/Samsung-Logo.webp",
    alt: "Samsung",
  },
  {
    image: "/img/brands/xiaomi-logo.webp",
    alt: "Xiaomi",
  },
  {
    image: "/img/brands/realme-logo.webp",
    alt: "Realme",
  },
  {
    image: "/img/brands/huawei-logo.webp",
    alt: "Huawei",
  },

  {
    image: "/img/brands/honor-logo.webp",
    alt: "Honor",
  },
];

export const Brands = () => {
  return (
    <div className="flex flex-col items-center gap-3 pt-6 pb-8">
      <h2 className="font-bold text-2xl">Marcas que disponemos</h2>

      <p className="w-2/3 text-center text-sm md:text-base">
        Tenemos lo más moderno en tecnología y los últimos modelos
      </p>

      <div className="grid grid-cols-3 gap-6 mt-6 items-center md:grid-cols-6">
        {brands.map((brand, index) => (
          <div key={index}>
            <img src={brand.image} alt={brand.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};
