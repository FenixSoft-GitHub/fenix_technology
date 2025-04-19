import { useState } from 'react';
import { FaEllipsis } from 'react-icons/fa6';
import { HiOutlineExternalLink, HiOutlineSearch } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useDeleteProduct, useProducts, useProductsAll } from '@/hooks';
import { Loader } from '@/components/shared/Loader';
import { formatDate, formatPrice } from '@/helpers';
import { Pagination } from '@/components/shared/Pagination';
import { CellTableProduct } from '@/components/dashboard';
import { MdAddCircleOutline } from 'react-icons/md';

const tableHeaders = ['', 'Nombre', 'Variante', 'Precio', 'Stock', 'Fecha de creación', ''];

export const TableProduct = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const [selectedVariants, setSelectedVariants] = useState<{ [key: string]: number }>({});
  const [page, setPage] = useState(1);
  const { products, isLoading, totalProducts } = useProducts({ page });
  const { productsAll, isLoading: isLoadingAll } = useProductsAll();
  const { mutate: deleteProduct, isPending } = useDeleteProduct();

  const filteredProducts = (searchTerm ? productsAll : products).filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleMenuToggle = (index: number) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  const handleVariantChange = (productId: string, variantIndex: number) => {
    setSelectedVariants({ ...selectedVariants, [productId]: variantIndex });
  };

  const handleDeleteProduct = (id: string) => {
    deleteProduct(id);
    setOpenMenuIndex(null);
  };

  if (!products || isLoading || !totalProducts || isPending || isLoadingAll) return <Loader />;

  return (
    <div className='flex flex-col flex-1 border border-gray-200 dark:border-gray-600 rounded-lg p-3 bg-white gap-3 dark:bg-gray-900 dark:text-gray-100'>
      <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3'>
        <div className='flex flex-col'>
          <h1 className='text-2xl font-bold text-gray-800 dark:text-gray-100 drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]'>Productos</h1>
          <p className='text-sm mb-1 font-regular text-gray-500 dark:text-gray-300'>Gestiona tus productos y mira las estadísticas de tus ventas</p>
        </div>

        <div className='w-full sm:max-w-sm relative'>
          <HiOutlineSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-400' size={20} />
          <input
            type='text'
            placeholder='Buscar por nombre o marca...'
            className='w-full border border-gray-300 dark:border-gray-600 rounded-md pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>

        <Link to='/dashboard/products/new' className='btn-primary self-start sm:self-auto'>
          <MdAddCircleOutline size={20} className='inline-block mr-1' />
          Nuevo Producto
        </Link>
      </div>

      {/* Tabla */}
      <div className='relative w-full overflow-x-auto'>
        <table className='min-w-[600px] text-sm w-full caption-bottom'>
          <thead>
            <tr className='bg-gray-100 dark:bg-gray-700 text-left text-gray-600 dark:text-gray-100 rounded-md'>
              {tableHeaders.map((header, index) => (
                <th
                  key={index}
                  className={`px-2 sm:px-4 py-2 font-semibold text-center ${index === 0 ? 'rounded-l-md' : ''} ${index === tableHeaders.length - 1 ? 'rounded-r-md' : ''}`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          {filteredProducts.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan={tableHeaders.length} className='text-center py-10 text-gray-500 dark:text-gray-400'>
                  No se encontraron productos con ese término.
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {filteredProducts.map((product, index) => {
                const selectedVariantIndex = selectedVariants[product.id] ?? 0;
                const selectedVariant = product.variants[selectedVariantIndex] || {};

                return (
                  <tr key={index}>
                    <td className='px-2 py-1 flex items-center gap-1'>
                      <img
                        src={product.images[0] || 'https://ui.shadcn.com/placeholder.svg'}
                        alt={product.name}
                        loading='lazy'
                        decoding='async'
                        className='h-14 w-14 rounded-md object-contain border border-gray-400 dark:border-gray-600'
                      />
                    </td>
                    <CellTableProduct content={product.name} className='text-left' />
                    <td className='px-2 sm:px-4 py-2 font-medium tracking-tighter'>
                      <select
                        className='border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 rounded-md p-1 w-full'
                        onChange={e => handleVariantChange(product.id, Number(e.target.value))}
                        value={selectedVariantIndex}
                      >
                        {product.variants.map((variant, variantIndex) => (
                          <option key={variant.id} value={variantIndex}>
                            {variant.color_name} - {variant.storage}
                          </option>
                        ))}
                      </select>
                    </td>
                    <CellTableProduct className='text-right' content={formatPrice(selectedVariant?.price)} />
                    <CellTableProduct className='text-right' content={(selectedVariant.stock || 0).toString()} />
                    <CellTableProduct className='text-center' content={formatDate(product.created_at)} />
                    <td className='relative'>
                      <button
                        className='text-slate-900 dark:text-gray-100'
                        onClick={() => handleMenuToggle(index)}
                        onBlur={() => setOpenMenuIndex(null)}
                      >
                        <FaEllipsis />
                      </button>
                      {openMenuIndex === index && (
                        <div className='absolute right-0 mt-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-md shadow-xl z-10 w-[120px]' role='menu'>
                          <Link
                            to={`/dashboard/products/editar/${product.slug}`}
                            className='flex items-center gap-1 w-full text-left px-4 py-2 text-xs font-medium text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600'
                          >
                            Editar <HiOutlineExternalLink size={13} className='inline-block' />
                          </Link>
                          <button
                            className='block w-full text-left px-4 py-2 text-xs font-medium text-red-500 hover:bg-gray-100 dark:hover:bg-gray-600'
                            onClick={() => handleDeleteProduct(product.id)}
                          >
                            Eliminar
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      </div>

      {/* Controles de paginación */}
      {!searchTerm && (
        <Pagination page={page} setPage={setPage} totalItems={totalProducts} />
      )}
    </div>
  );
};