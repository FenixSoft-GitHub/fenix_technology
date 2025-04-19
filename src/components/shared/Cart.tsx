import { useGlobalStore } from '@/store/global.store';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { CartItem } from './CartItem';
import { useCartStore } from '@/store/cart.store';
import { FiShoppingCart } from 'react-icons/fi';

export const Cart = () => {
	const closeSheet = useGlobalStore(state => state.closeSheet);

	const cartItems = useCartStore(state => state.items);
	const cleanCart = useCartStore(state => state.cleanCart);
	const totalItemsInCart = useCartStore(
		state => state.totalItemsInCart
	);

	return (
		<div className='w-full h-full'>
			<div className='px-7 py-5 flex justify-between items-center border-b border-slate-200 dark:border-gray-700 dark:bg-gray-700/80 dark:text-gray-100'>
				<span className='flex gap-5 items-center font-semibold'>
					<FiShoppingCart className='text-2xl'/>
					{totalItemsInCart} artículos
				</span>
				<button 
					className='bg-gray-200/70 hover:bg-gray-300 dark:bg-gray-700/70 dark:hover:bg-gray-700 rounded-full shadow-lg cursor-pointer'
					onClick={closeSheet}>
					<IoMdClose size={25} className='text-black dark:text-gray-100 p-1' />
				</button>
			</div>

			<div className='p-3 h-full dark:bg-gray-800/90 dark:text-gray-100 overflow-y-auto'>
				{totalItemsInCart > 0 ? (
					<>
						{/* LISTA DE PRODUCTOS AÑADIDOS AL CARRITO */}
						<div className='px-2 py-4 overflow-auto flex-1'>
							<ul className='space-y-7'>
								{cartItems.map(item => (
									<CartItem item={item} key={item.variantId} />
								))}
							</ul>
						</div>

						{/* BOTONES ACCIÓN */}
						<div className='flex flex-col gap-4 mb-20 px-7'>
							<Link
								to='/checkout'
								onClick={closeSheet}
								className='w-full bg-gray-900 text-gray-100 py-3.5 rounded-full flex items-center justify-center gap-3 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 mt-4 outline-2 outline-offset-2 dark:outline-gray-200 outline-gray-600'
							>
								<RiSecurePaymentLine size={24} />
								Continuar con la compra
							</Link>

							<button
								className='w-full text-gray-100 border border-white bg-cyan-600 hover:bg-cyan-700 rounded-full py-3 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 mt-4 outline-2 outline-offset-2 outline-cyan-600'
								onClick={cleanCart}
							>
								Limpiar Carrito
							</button>
						</div>
					</>
				) : (
					<div className='flex flex-col items-center justify-center h-full gap-7'>
						<img src="/img/Cart.avif" alt="Carro Vacío" className='w-1/2 rounded-lg shadow-lg dark:shadow-gray-900'/>
						<p className='text-sm font-medium tracking-tight'>
							Su carro esta vacío
						</p>
						<Link
							to='/products'
							className='bg-gray-900 uppercase text-gray-100 font-semibold py-4 rounded-full  px-7 text-xs shadow-lg transition-all duration-300 ease-in-out hover:scale-105 mt-4 outline-2 outline-offset-2 dark:outline-gray-200 outline-gray-600'
							onClick={closeSheet}
						>
							Empezar a comprar
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};