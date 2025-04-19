import { useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { useGlobalStore } from '@/store/global.store';
import { formatPrice } from '@/helpers';
import { searchProducts } from '@/components/actions';
import { Product } from '@/components/interfaces';
import { useNavigate } from 'react-router-dom';

export const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<Product[]>([]);

    const closeSheet = useGlobalStore(state => state.closeSheet);

    const navigate = useNavigate();

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();

        if (searchTerm.trim()) {
            const products = await searchProducts(searchTerm);
            setSearchResults(products);
        }
    };

    return (
        <>
            <div className='py-5 px-7 flex gap-10 items-center border-b border-slate-200 dark:border-gray-700 dark:bg-gray-700/80 dark:text-gray-100'>
                <form
                    className='flex gap-3 items-center flex-1 shadow-lg bg-gray-200/70 rounded-full px-4 py-1.5 dark:bg-gray-700/70 dark:text-gray-100'
                    onSubmit={handleSearch}
                >
                    <HiOutlineSearch size={22} />
                    <input
                        type='text'
                        placeholder='¿Qué busca?'
                        className='outline-none w-full text-sm '
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </form>
                <button
                    className='bg-gray-200/70 hover:bg-gray-300 dark:bg-gray-700/70 dark:hover:bg-gray-700 rounded-full shadow-lg cursor-pointer'
                    onClick={closeSheet}
                >
                    <IoMdClose size={25} className='text-black dark:text-gray-100 p-1' />
                </button>
            </div>

            {/* RESULTADOS DE Busqueda */}
            <div className='p-5 h-full dark:bg-gray-800/90 dark:text-gray-100 overflow-y-auto'>
                {searchResults.length > 0 ? (
                    <ul>
                        {searchResults.map(product => (
                            <li className='p-2 rounded-lg group hover:bg-gray-200/70 dark:hover:bg-gray-600/70' key={product.id}>
                                <button
                                    className='flex items-center gap-4'
                                    onClick={() => {
                                        navigate(`/products/${product.slug}`);
                                        closeSheet();
                                    }}
                                >
                                    <img
                                        src={product.images[0]}
                                        alt={product.name}
                                        className='h-16 w-16 object-contain rounded-lg'
                                    />

                                    <div className='flex flex-col gap-1 text-left'>
                                        <p className='text-sm font-semibold group-hover:underline'>
                                            {product.name}
                                        </p>

                                        <p className='text-[13px] text-gray-600 dark:text-gray-300'>
                                            {product.variants[0].storage} /{' '}
                                            {product.variants[0].color_name}
                                        </p>

                                        <p className='text-sm font-medium text-gray-600 dark:text-gray-300'>
                                            {formatPrice(product.variants[0].price)}
                                        </p>
                                    </div>
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className='flex flex-col items-center justify-center gap-7'>
                        <img
                            src="/img/NoResult.avif" alt="No se encontraron resultados"
                            className='w-1/2 border border-gray-300 dark:border-gray-700 shadow-lg rounded-full p-2'
                        />
                        <p className='text-sm text-gray-600 dark:text-gray-100 text-center'>
                            No se encontraron resultados
                        </p>
                    </div>
                )}
            </div>
        </>
    );
};