import { useNavigate, useParams } from 'react-router-dom';
import { useOrder } from '../hooks';
import { Loader } from '../components/shared/Loader';
import { IoChevronBack } from 'react-icons/io5';
import { formatDateLong, formatPrice } from '../helpers';

const tableHeaders = ['Producto', 'Cantidad', 'Precio Unit.', 'Total'];

const OrderUserPage = () => {
	const { id } = useParams<{ id: string }>();

	const { data: order, isLoading } = useOrder(Number(id!));

	const navigate = useNavigate();

	if (isLoading || !order) return <Loader />;

	return (
		<div className='dark:bg-gray-900 dark:text-gray-100'>
			<div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
				{/* Botón Volver */}
				<button
					className="flex items-center gap-2 text-sm border border-slate-200 dark:border-gray-500 rounded-full bg-slate-100 dark:bg-slate-800 shadow-gray-400 shadow-md hover:bg-slate-200 dark:hover:bg-slate-600 px-6 py-1.5"
					onClick={() => navigate(-1)}
				>
					<IoChevronBack size={16} />
					Volver
				</button>

				{/* Título centrado */}
				<div className="flex flex-col items-center gap-1.5 text-center">
					<h1 className="text-3xl font-bold">Pedido # {id}</h1>
					<p className="text-sm">
						{formatDateLong(order.created_at)}
					</p>
				</div>

				{/* Div vacío para alinear visualmente el centro */}
				<div className="w-[112px] hidden md:block" /> {/* Aproximadamente el ancho del botón */}
			</div>



			<div className='flex flex-col mt-10 mb-5 gap-5'>
				<table className='text-sm w-full caption-bottom overflow-auto'>
					<thead className='border-b border-gray-200 dark:border-gray-600 '>
						<tr>
							{tableHeaders.map((header, index) => (
								<th
									key={index}
									className='h-12 text-center uppercase tracking-wide text-stone-600 dark:text-gray-100 font-semibold'
								>
									{header}
								</th>
							))}
						</tr>
					</thead>

					<tbody>
						{order.orderItems.map((product, index) => (
							<tr key={index} className='border-b border-gray-200 dark:border-gray-600 '>
								<td className='p-4 font-medium tracking-tighter flex gap-3 items-center'>
									<img
										src={product.productImage}
										alt={product.productName}
										className='h-20 w-20 object-contain rounded-lg'
									/>
									<div className='space-y-2'>
										<h3>{product.productName}</h3>
										<p className='text-xs'>
											{product.color_name} / {product.storage}
										</p>
									</div>
								</td>
								<td className='p-4 font-medium tracking-tighter text-center'>
									{product.quantity}
								</td>
								<td className='p-4 font-medium tracking-tighter text-center'>
									{formatPrice(product.price)}
								</td>
								<td className='p-4 font-medium tracking-tighter text-center'>
									{formatPrice(product.price * product.quantity)}
								</td>
							</tr>
						))}
					</tbody>
				</table>

				<div className='flex flex-col gap-1.5 text-slate-600 dark:text-gray-100 text-sm self-end w-1/3'>
					<div className='flex justify-between'>
						<p>Subtotal</p>
						<p>{formatPrice(order.totalAmount)}</p>
					</div>
					<div className='flex justify-between'>
						<p>Envío (Standard)</p>
						<p>{formatPrice(0)}</p>
					</div>
					<div className='flex justify-between text-black dark:text-gray-100 font-semibold'>
						<p>Total</p>
						<p>{formatPrice(order.totalAmount)}</p>
					</div>
				</div>

				<div className='flex flex-col gap-3'>
					<h2 className='text-lg font-bold'>Dirección</h2>

					<div className='border border-stone-300 dark:border-gray-600 p-5 flex flex-col gap-5 rounded-md'>
						<div className='space-y-1 dark:bg-gray-600 bg-gray-200 p-3 rounded-md'>
							<h3 className='font-medium'>Cliente:</h3>
							<p>{order.customer.full_name}</p>
						</div>

						<div className='flex flex-col gap-1 text-sm'>
							<h3 className='font-medium text-base'>Envío:</h3>
							<p>{order.address.addressLine1}</p>
							<p>
								{order.address.addressLine2 &&
									order.address.addressLine2}
							</p>
							<p>{order.address.city}</p>
							<p>{order.address.state}</p>
							<p>{order.address.postalCode}</p>
							<p>{order.address.country}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderUserPage