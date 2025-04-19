import { useNavigate } from 'react-router-dom';
import { formatDateLong, formatPrice } from '@/helpers';
import { OrderWithCustomer } from '@/components/interfaces';
import { useChangeStatusOrder } from '@/hooks';
import { GoMail } from 'react-icons/go';

const headers = ['Cliente', 'Fecha', 'Estado', 'Total'];

const statusOptions = [
  { value: 'Pending', label: 'Pendiente' },
  { value: 'Paid', label: 'Pagado' },
  { value: 'Shipped', label: 'Enviado' },
  { value: 'Delivered', label: 'Entregado' },
];

interface Props {
  orders: OrderWithCustomer[];
}

export const TableOrdersAdmin = ({ orders }: Props) => {
  const navigate = useNavigate();
  const { mutate } = useChangeStatusOrder();

  const handleStatusChange = (id: number, status: string) => {
    mutate({ id, status });
  };

  return (
    <div className="w-full overflow-x-auto bg-white dark:bg-gray-900 rounded-xl shadow-md p-4">
      <table className="w-full text-sm text-left border-collapse">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-3 font-semibold text-sm tracking-wide"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              onClick={() => navigate(`/dashboard/ordenes/${order.id}`)}
              onKeyDown={(e) => e.key === 'Enter' && navigate(`/dashboard/ordenes/${order.id}`)}
              role="button"
              tabIndex={0}
              aria-label={`Ver detalles del pedido de ${order.customers?.full_name}`}
              className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer border-b border-gray-200 dark:border-gray-700"
            >
              <td className="px-4 py-3">
                <div className="flex flex-col gap-1">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {order.customers?.full_name}
                  </span>
                  <span className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <GoMail className="w-4 h-4" /> {order.customers?.email}
                  </span>
                </div>
              </td>
              <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                {formatDateLong(order.created_at)}
              </td>
              <td className="px-4 py-3">
                <select
                  value={order.status}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                  className="w-full bg-white dark:bg-gray-800 text-sm border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1.5 focus:ring-2 focus:ring-cyan-500 focus:outline-none dark:text-white"
                >
                  {statusOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </td>
              <td className="px-4 py-3 text-right font-semibold text-gray-900 dark:text-white">
                {formatPrice(order.total_amount)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};