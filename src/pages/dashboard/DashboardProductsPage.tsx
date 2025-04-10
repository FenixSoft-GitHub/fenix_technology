import { TableProduct } from '@/components/dashboard';
import { IoAddCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';


const DashboardProductsPage = () => {
	return (
		<div className='h-full flex flex-col gap-3'>
			<Link
				to='/dashboard/products/new'
				className='bg-black text-white flex items-center self-end py-[6px] px-3 rounded-full text-xs gap-2 font-semibold shadow-lg transition-all duration-300 ease-in-out hover:scale-105 outline-2 outline-offset-2 outline-gray-600'
			>
				<IoAddCircleOutline size={20} className='inline-block' />
				Nuevo Producto
			</Link>

            <TableProduct />
		</div>
	);
};

export default DashboardProductsPage