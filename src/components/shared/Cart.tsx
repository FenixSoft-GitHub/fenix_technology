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
		<div className='flex flex-col h-full'>
			<div className='px-5 py-7 flex justify-between items-center border-b border-slate-200'>
				<span className='flex gap-3 items-center font-semibold'>
					<FiShoppingCart size={20} />
					{totalItemsInCart} artículos
				</span>
				<button className='bg-gray-200/70 hover:bg-gray-300 rounded-full shadow-lg cursor-pointer' onClick={closeSheet}>
					<IoMdClose size={25} className='text-black p-1' />
				</button>
			</div>

			{totalItemsInCart > 0 ? (
				<>
					{/* LISTA DE PRODUCTOS AÑADIDOS AL CARRITO */}
					<div className='p-7 overflow-auto flex-1'>
						<ul className='space-y-9'>
							{cartItems.map(item => (
								<CartItem item={item} key={item.variantId} />
							))}
						</ul>
					</div>

					{/* BOTONES ACCIÓN */}
					<div className='mt-4 p-7'>
						<Link
							to='/checkout'
							className='w-full bg-black text-white py-3.5 rounded-full flex items-center justify-center gap-3 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 mt-4 outline-2 outline-offset-2 outline-gray-600'
						>
							<RiSecurePaymentLine size={24} />
							Continuar con la compra
						</Link>

						<button
							className='w-full text-black border border-black rounded-full py-3 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 mt-4 outline-2 outline-offset-2 outline-gray-600'
							onClick={cleanCart}
						>
							Limpiar Carrito
						</button>
					</div>
				</>
			) : (
				<div className='flex flex-col items-center justify-center h-full gap-7'>
					<img src="/img/Cart.avif" alt="Carro Vacío" className='w-1/2' />
					<p className='text-sm font-medium tracking-tight'>
						Su carro esta vacío
					</p>
					<Link
						to='/products'
						className='bg-black uppercase text-white font-semibold py-4 rounded-full  px-7 text-xs shadow-lg transition-all duration-300 ease-in-out hover:scale-105 mt-4 outline-2 outline-offset-2 outline-gray-600'
						onClick={closeSheet}
					>
						Empezar a comprar
					</Link>
				</div>
			)}
		</div>
	);
};