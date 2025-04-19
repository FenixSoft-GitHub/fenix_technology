import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { generateSlug } from "@/helpers";
import { ProductFormValues, productSchema } from "@/lib/validators";
import { SectionFormProduct } from "./SectionFormProduct";
import { InputForm } from "./InputForm";
import { FeaturesInput } from "./FeaturesInput";
import { VariantsInput } from "./VariantsInput";
import { UploaderImages } from "./UploaderImages";
import { Editor } from "./Editor";
import { MdOutlineCancel, MdOutlineSaveAlt } from "react-icons/md";
import { useCreateProduct, useProduct, useUpdateProduct } from "@/hooks";
import { Loader } from "@/components/shared/Loader";
import { JSONContent } from "@tiptap/react";

interface Props {
	titleForm: string;
}

export const FormProduct = ({ titleForm }: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		watch,
		control,
	} = useForm<ProductFormValues>({
		resolver: zodResolver(productSchema),
	});

	const { slug } = useParams<{ slug: string }>();

	const { product, isLoading } = useProduct(slug || '');
	const { mutate: createProduct, isPending } = useCreateProduct();
	const { mutate: updateProduct, isPending: isUpdatePending } =
		useUpdateProduct(product?.id || '');

	const navigate = useNavigate();

	useEffect(() => {
		if (product && !isLoading) {
			setValue('name', product.name);
			setValue('slug', product.slug);
			setValue('brand', product.brand);
			setValue(
				'features',
				product.features.map((f: string) => ({ value: f }))
			);
			setValue('description', product.description as JSONContent);
			setValue('images', product.images);
			setValue(
				'variants',
				product.variants.map(v => ({
					id: v.id,
					stock: v.stock,
					price: v.price,
					storage: v.storage,
					color: v.color || '',
					colorName: v.color_name || '',
				}))
			);
		}
	}, [product, isLoading, setValue]);

	const onSubmit = handleSubmit(data => {
		const features = data.features.map(feature => feature.value);

		if (slug) {
			updateProduct({
				name: data.name,
				brand: data.brand,
				slug: data.slug,
				variants: data.variants,
				images: data.images,
				description: data.description,
				features,
			});
		} else {
			createProduct({
				name: data.name,
				brand: data.brand,
				slug: data.slug,
				variants: data.variants,
				images: data.images,
				description: data.description,
				features,
			});
		}
	});

	const watchName = watch('name');

	useEffect(() => {
		if (!watchName) return;

		const generatedSlug = generateSlug(watchName);
		setValue('slug', generatedSlug, { shouldValidate: true });
	}, [watchName, setValue]);

	if (isPending || isUpdatePending || isLoading) return <Loader />;

	return (
		<section className='flex flex-col gap-6 relative dark:bg-gray-900 dark:text-gray-100'>
			<header className='flex justify-between items-center'>
				<div className='flex items-center gap-3'>
					<h2 className='text-2xl font-bold text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)] tracking-tight capitalize'>
						{titleForm}
					</h2>
				</div>
			</header>

			<form
				className='grid grid-cols-1 lg:grid-cols-3 gap-8 auto-rows-max flex-1'
				onSubmit={onSubmit}
			>
				<SectionFormProduct
					titleSection='Detalles del Producto'
					className='lg:col-span-2 lg:row-span-2 dark:bg-gray-900 dark:text-gray-100'
				>
					<InputForm
						type='text'
						placeholder='Ejemplo: iPhone 13 Pro Max'
						label='nombre'
						name='name'
						register={register}
						errors={errors}
						className='dark:bg-gray-900 dark:text-gray-100'
						required
					/>
					<FeaturesInput control={control} errors={errors} />
				</SectionFormProduct>

				<SectionFormProduct className='dark:bg-gray-900 dark:text-gray-100'>
					<InputForm
						type='text'
						label='Slug'
						name='slug'
						placeholder='iphone-13-pro-max'
						register={register}
						errors={errors}
						className='dark:bg-gray-900 dark:text-gray-100'
					/>

					<InputForm
						type='text'
						label='Marca'
						name='brand'
						placeholder='Apple'
						register={register}
						errors={errors}
						required
						className='dark:bg-gray-900 dark:text-gray-100'
					/>
				</SectionFormProduct>

				<SectionFormProduct
					titleSection='Variantes del Producto'
					className='lg:col-span-2 h-fit dark:bg-gray-900 dark:text-gray-100'
				>
					<VariantsInput
						control={control}
						errors={errors}
						register={register}
					/>
				</SectionFormProduct>

				<SectionFormProduct titleSection='Imágenes del producto' className='dark:bg-gray-900 dark:text-gray-100'>
					<UploaderImages
						errors={errors}
						setValue={setValue}
						watch={watch}
					/>
				</SectionFormProduct>

				<SectionFormProduct
					titleSection='Descripción del producto'
					className='col-span-full dark:bg-gray-900 dark:text-gray-100'
				>
					<Editor
						setValue={setValue}
						errors={errors}
						initialContent={product?.description as JSONContent}
					/>
				</SectionFormProduct>

				<div className='flex gap-5 absolute top-0 right-0'>
					<button
						className="btn-primary"
						type='button'
						onClick={() => navigate(-1)}
					>
						<MdOutlineCancel size={19} />
						Cancelar
					</button>
					<button
						type='submit'
						className="btn-primary"
					>
						<MdOutlineSaveAlt size={19} />
						Guardar Producto
					</button>
				</div>
			</form>
		</section>
	);
};