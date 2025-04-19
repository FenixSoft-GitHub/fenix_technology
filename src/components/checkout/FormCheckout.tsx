import { useForm } from 'react-hook-form';
import { InputAddress } from '@/components/checkout/InputAddress';
import {
	AddressFormValues,
	addressSchema,
} from '@/lib/validators';
import { zodResolver } from '@hookform/resolvers/zod';
import { ItemsCheckout } from './ItemsCheckout';
import { useCreateOrder } from '@/hooks';
import { useCartStore } from '@/store/cart.store';
import { ImSpinner2 } from 'react-icons/im';
import { Separator } from '../shared/Separator';

export const FormCheckout = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<AddressFormValues>({
		resolver: zodResolver(addressSchema),
	});

	const { mutate: createOrder, isPending } = useCreateOrder();

	const cleanCart = useCartStore(state => state.cleanCart);
	const cartItems = useCartStore(state => state.items);
	const totalAmount = useCartStore(state => state.totalAmount);

	const onSubmit = handleSubmit(data => {
		const orderInput = {
			address: data,
			cartItems: cartItems.map(item => ({
				variantId: item.variantId,
				quantity: item.quantity,
				price: item.price,
			})),
			totalAmount,
		};

		createOrder(orderInput, {
			onSuccess: () => {
				cleanCart();
			},
		});
	});

	if (isPending) {
		return (
			<div className='flex flex-col gap-3 h-screen items-center justify-center'>
				<ImSpinner2 className='animate-spin h-10 w-10' />

				<p className='text-sm font-medium'>
					Estamos procesando tu pedido
				</p>
			</div>
		);
	}

	return (
		<div className='dark:bg-gray-900 dark:text-gray-100'>
			<form className='flex flex-col gap-6' onSubmit={onSubmit}>
				<div className='flex flex-col gap-3'>
					<h3 className='text-lg font-semibold tracking-normal'>
						Entrega
					</h3>

					<InputAddress
						register={register}
						errors={errors}
						name='addressLine1'
						placeholder='Dirección principal'
						className='dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600'
					/>

					<InputAddress
						register={register}
						errors={errors}
						name='addressLine2'
						placeholder='Dirección adicional (Opcional)'
						className='dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600'
					/>

					<InputAddress
						register={register}
						errors={errors}
						name='state'
						placeholder='Estado / Provincia'
						className='dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600'
					/>

					<InputAddress
						register={register}
						errors={errors}
						name='city'
						placeholder='Ciudad'
						className='dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600'
					/>

					<InputAddress
						register={register}
						errors={errors}
						name='postalCode'
						placeholder='Código Postal (Opcional)'
						className='dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600'
					/>

					<select
						className='border border-slate-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 rounded-md p-3'
						{...register('country')}
					>
						<option value='Venezuela'>Venezuela</option>
					</select>
				</div>

				<div className='flex flex-col gap-3'>
					<p className='text-sm font-medium'>Métodos de envío</p>

					<div className='flex justify-between items-center text-sm border border-gray-600 dark:bg-gray-800 dark:text-gray-100 p-4 rounded-md'>
						<span className='font-normal'>Standard</span>
						<span className='font-semibold'>Gratis</span>
					</div>
				</div>

				<div className='flex flex-col'>
					<div className='flex justify-between items-center text-sm border border-gray-600 dark:bg-gray-800 p-4 rounded-ss-md rounded-se-md'>
						<span>Depósito Bancario</span>
					</div>

					<div className='text-[13px] p-5 space-y-0.5 border-t-0 border border-gray-600 dark:bg-gray-800 rounded-es-md rounded-ee-md'>
						<p>Compra a traves de transferencia bancaria</p>
						<p>BANCO VENEZUELA</p>
						<p>Razón Social: Fenix Technology</p>
						<p>Rif: 123456789000</p>
						<p>Tipo de cuenta: Corriente</p>
						<p>Número de cuenta: 1234567890</p>
						<p>
							La información será compartida nuevamente una vez que se
							haya finalizado la compra
						</p>
					</div>
				</div>

				<div className='flex flex-col gap-4'>
					<h3 className='font-semibold text-2xl'>
						Resumen del pedido
					</h3>
					<Separator />

					<ItemsCheckout />
				</div>

				<button
					type='submit'
					className='bg-black text-gray-100 dark:bg-gray-800 dark:text-gray-100 py-3.5 font-bold tracking-wide rounded-full mt-2 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 outline-2 outline-offset-2 outline-gray-600'
				>
					Finalizar Pedido
				</button>
			</form>
		</div>
	);
};