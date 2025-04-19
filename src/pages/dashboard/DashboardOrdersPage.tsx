import { TableOrdersAdmin } from '@/components/dashboard';
import { Loader } from '@/components/shared/Loader';
import { useAllOrders } from '@/hooks';
import { FaFileInvoiceDollar } from 'react-icons/fa6';

export const DashboardOrdersPage = () => {
	const { data, isLoading } = useAllOrders();

	if (isLoading || !data) return <Loader />;

	return (
		<div className='space-y-5 dark:bg-gray-900 dark:text-gray-100'>
			<div className="flex items-center justify-center gap-4">
				<FaFileInvoiceDollar size={32} />
				<h1 className="text-3xl font-bold text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]">
					Órdenes
				</h1>
			</div>
			<TableOrdersAdmin orders={data} />
		</div>
	);
};
