import { useNavigate } from 'react-router-dom';
import { formatDateLong, formatPrice, getStatus } from '@/helpers';
import { OrderItemSingle } from '@/components/interfaces';

interface Props {
	orders: OrderItemSingle[];
}

const tableHeaders = ['ID', 'Fecha', 'Estado', 'Total'];

export const TableOrders = ({ orders }: Props) => {
	const navigate = useNavigate();

	return (
		<div className='w-full overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-600 shadow-sm'>
			<table className='min-w-full text-sm text-left text-gray-900 dark:text-gray-100'>
				<thead className='bg-gray-100 dark:bg-gray-700 text-xs uppercase text-gray-700 dark:text-gray-100 tracking-wide border-b border-gray-200 dark:border-gray-600'>
					<tr>
						{tableHeaders.map((header, index) => (
							<th key={index} className='px-6 py-4'>
								{header}
							</th>
						))}
					</tr>
				</thead>

				<tbody>
					{orders.length === 0 ? (
						<tr>
							<td colSpan={4} className="px-6 py-6 text-center text-gray-400 dark:text-gray-100">
								No hay pedidos registrados.
							</td>
						</tr>
					) : (
						orders.map(order => ( 
							<tr
								key={order.id}
								className="hover:bg-gray-50 dark:hover:bg-gray-800  transition-colors cursor-pointer"
								onClick={() => navigate(`/account/pedidos/${order.id}`)}
							>
								<td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">
									{order.id}
								</td>
								<td className="px-6 py-4">{formatDateLong(order.created_at)}</td>
								<td className="px-6 py-4">{getStatus(order.status)}</td>
								<td className="px-6 py-4">{formatPrice(order.total_amount)}</td>
							</tr>
						))
					)}
				</tbody>

			</table>
		</div>
	);
};