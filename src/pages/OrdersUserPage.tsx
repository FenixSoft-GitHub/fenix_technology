import { Loader } from '@/components/shared/Loader';
import { useOrders } from '@/hooks';
import { Link } from 'react-router-dom';
import { TableOrders } from '@/components/orders/TableOrders';

const OrdersUserPage = () => {
    const { data: orders, isLoading } = useOrders();

    if (isLoading || !orders) return <Loader />;

	return (
		<div className='flex flex-col gap-6 items-center'>
			<div className='flex gap-2'>
				<h1 className='text-3xl font-bold'>Pedidos</h1>
				<span className='w-5 h-5 rounded-full bg-black text-white text-[11px] flex justify-center items-center mt-1'>
					{orders.length}
				</span>
			</div>

			{orders.length === 0 ? (
				<>
					<p className='text-slate-600 text-[13px]'>
						Todavía no has hecho ningún pedido
					</p>
					<Link
						to='/products/'
						className='bg-black text-white uppercase font-semibold tracking-widest text-xs py-4 rounded-full px-8 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 mt-4 outline-2 outline-offset-2 outline-gray-600'
					>
						Empezar a comprar
					</Link>
				</>
			) : (
				<TableOrders orders={orders} />
			)}
		</div>
	);
};

export default OrdersUserPage;
