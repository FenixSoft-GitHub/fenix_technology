import { useQuery } from '@tanstack/react-query';
import { getProducts, getProductsAll } from '@/components/actions';

export const useProducts = ({page = 1}: {page?: number}) => {
	const { data, isLoading } = useQuery({
		queryKey: ['products', page],
		queryFn: () => getProducts(page),
		staleTime: 1000 * 60 * 5, // 1 hora
	});

	return {
		products: data?.products ?? [],
		isLoading,
		totalProducts: data?.count ?? 0, 
	};
};

export const useProductsAll = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['products'],
		queryFn: () => getProductsAll(),
		staleTime: 1000 * 60 * 5, // 1 hora
	});

	return {
		productsAll: data?.products ?? [],
		isLoading,
		totalProductsAll: data?.count ?? 0, 
	};
};