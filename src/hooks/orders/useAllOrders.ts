import { useQuery } from '@tanstack/react-query';
import { getAllOrders } from '@/components/actions';

export const useAllOrders = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['orders', 'admin'],
		queryFn: getAllOrders,
	});

	return {
		data,
		isLoading,
	};
};