import { IoChevronBack } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';
import { useOrderAdmin } from '@/hooks';
import { Loader } from '@/components/shared/Loader';
import { formatDateLong, formatPrice } from '@/helpers';

const tableHeaders = [
	{label: 'Producto', position: 'left'}, 
	{label: 'Precio', position: 'center'}, 
	{label: 'Cantidad', position: 'center'}, 
	{label: 'Total', position: 'right'}
];

export const DashboardOrderPage = () => {
	const navigate = useNavigate();
	const { id } = useParams<{ id: string }>();
	const { data: order, isLoading } = useOrderAdmin(Number(id));

	if (isLoading || !order) return <Loader />;

	return (
		<section className="flex flex-col gap-8 dark:bg-gray-900 dark:text-gray-100">
			{/* Encabezado */}
			<header className="flex justify-between items-center">
				<button
					onClick={() => navigate(-1)}
					className="flex items-center gap-1 text-cyan-600 hover:text-cyan-800 dark:text-cyan-400 dark:hover:text-cyan-600 font-medium text-sm transition-colors bg-transparent rounded-full px-4 py-2 shadow-sm"
					aria-label="Volver al listado"
				>
					<IoChevronBack size={18} />
					Volver
				</button>

				<div className="text-center flex flex-col gap-1">
					<h1 className="text-2xl font-bold">
						Pedido # {id}
					</h1>
					<p className="text-sm text-gray-500 dark:text-gray-400">
						{formatDateLong(order.created_at)}
					</p>
				</div>

				<div className="w-6" />
			</header>

			{/* Tabla de productos */}
			<div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm dark:border-gray-500 dark:bg-gray-800 dark:text-gray-100">
				<table className="w-full text-sm">
					<thead className="bg-gray-50 text-gray-700 font-semibold dark:bg-gray-700 dark:text-gray-100">
						<tr>
							{tableHeaders.map((header, idx) => (
								<th key={idx} className={`px-4 py-3 ${header.position === 'center' ? 'text-center' : header.position === 'right' ? 'text-right' : 'text-left'}`}>
									{header.label}
								</th>
							))}
						</tr>
					</thead>
					<tbody className="dark:bg-gray-900 dark:text-gray-100">
						{order.orderItems.map((item, idx) => (
							<tr key={idx} className="border-t border-gray-200 dark:border-gray-500">
								<td className="px-4 py-3 flex items-center gap-4">
									<img
										src={item.productImage}
										alt={item.productName}
										className="h-16 w-16 rounded-md object-contain border"
									/>
									<div>
										<p className="font-medium text-gray-800 dark:text-gray-100">
											{item.productName}
										</p>
										<p className="text-xs text-gray-500 dark:text-gray-400">
											{item.color_name} / {item.storage}
										</p>
										{/* <p className="text-sm text-gray-700 dark:text-gray-100">
											{formatPrice(item.price)}
										</p> */}
									</div>
								</td>
								<td className="px-4 py-3 text-right font-medium text-gray-700 dark:text-gray-100">
									{formatPrice(item.price)}
								</td>
								<td className="px-4 py-3 text-center font-medium text-gray-700 dark:text-gray-100">
									{item.quantity}
								</td>
								<td className="px-4 py-3 text-right font-medium text-gray-700 dark:text-gray-100">
									{formatPrice(item.price * item.quantity)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Totales */}
			<div className="w-full sm:w-1/4 self-end px-4">
				<div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
					<div className="flex justify-between">
						<span>Subtotal</span>
						<span>{formatPrice(order.totalAmount)}</span>
					</div>
					<div className="flex justify-between">
						<span>Envío (Standard)</span>
						<span>{formatPrice(0)}</span>
					</div>
					<div className="flex justify-between font-semibold text-gray-900 dark:text-gray-100">
						<span>Total</span>
						<span>{formatPrice(order.totalAmount)}</span>
					</div>
				</div>
			</div>

			{/* Dirección */}
			<div className="space-y-4">
				<h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
					Dirección
				</h2>
				<div className="border border-gray-200 rounded-lg p-3 space-y-4 bg-white shadow-sm dark:border-gray-500 dark:bg-gray-900 dark:text-gray-100">
					<div className="space-y-1 dark:bg-gray-700 p-3 rounded-lg">
						<h3 className="font-medium text-gray-700 dark:text-gray-100">
							Cliente:
						</h3>
						<p className="text-sm text-gray-900 dark:text-gray-100">
							{order.customer.full_name}
						</p>
					</div>
					<div>
						<h3 className="font-medium text-gray-700 mb-1 dark:text-gray-100">
							Envío:
						</h3>
						<div className="text-sm text-gray-800 dark:text-gray-100 space-y-0.5">
							<p>{order.address.addressLine1}</p>
							{order.address.addressLine2 && (
								<p>{order.address.addressLine2}</p>
							)}
							<p>{order.address.city}</p>
							<p>{order.address.state}</p>
							<p>{order.address.postalCode}</p>
							<p>{order.address.country}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};