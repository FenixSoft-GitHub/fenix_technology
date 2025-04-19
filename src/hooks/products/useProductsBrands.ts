import { useQuery } from "@tanstack/react-query";
import { getProductsBrands } from "@/components/actions";

export const useProductsBrands = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['product-brands'],
        queryFn: () => getProductsBrands(),
        retry: false,
    });

    return {
        brands: data,
        isLoading,
        isError,
    };
};
