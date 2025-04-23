import React, { useState, useEffect } from "react";
import { GrPowerReset } from "react-icons/gr";

interface BrandFilterProps {
  brands: string[] | undefined;
  onBrandChange: (brand: string | null) => void;
  onResetFilter: () => void;
  initialBrand?: string | null;
}

const BrandFilter: React.FC<BrandFilterProps> = ({ brands, onBrandChange, onResetFilter, initialBrand }) => {
  const [selectedBrandLocal, setSelectedBrandLocal] = useState<string | null>(initialBrand || null);

  useEffect(() => {
    setSelectedBrandLocal(initialBrand || null);
  }, [initialBrand]);

  const handleBrandChangeLocal = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedBrandLocal(selectedValue || null);
    onBrandChange(selectedValue || null);
  };

  return (
    <div className="flex items-center gap-2 w-full md:w-auto dark:bg-gray-900 dark:text-gray-100">
      <label htmlFor="brand-filter" className="text-sm font-medium text-gray-700 dark:text-gray-100">
        Filtrar por marca:
      </label>
      <select
        id="brand-filter"
        value={selectedBrandLocal || ''}
        onChange={handleBrandChangeLocal}
        className="px-4 py-2 border border-gray-400 shadow-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 capitalize dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 w-full md:w-56"
      >
        <option value="">Todas las marcas</option>
        {brands?.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>

      {selectedBrandLocal && (
        <button
          onClick={onResetFilter}
          className="text-cyan-600 dark:text-cyan-400 hover:scale-110 transition-all duration-300 flex items-center gap-2 cursor-pointer rounded-full bg-gray-200 p-2 dark:bg-gray-700"
        >
          <GrPowerReset className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default BrandFilter;