import { supabase } from "@/supabase/client";
import { ProductInput } from "@/components/interfaces";
import { extractFilePath } from "@/helpers";

//Desde aqui la prueba
export const getProductsAll = async () => {
  try { 
    const { data: products, error, count } = await supabase
      .from("products")
      .select("*, variants(*)", { count: "exact" })
      .order("created_at", { ascending: false })

    if (error) {
      console.log(error.message);
      throw new Error(`Error fetching products: ${error.message}`);
    }

    return {products, count};
    
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductsBrands = async () => {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("brand");

    if (error) {
      console.log(error.message);
      throw new Error(`Error fetching product brands: ${error.message}`);
    }

 // data ahora será un array de objetos como { brand: 'Nike' }, { brand: 'Adidas' }, etc.
    // Vamos a extraer todos los valores de 'brand' y luego obtener los únicos usando Set.
    const allBrands = data.map((item) => item.brand).filter(Boolean);
    const uniqueBrands = [...new Set(allBrands)]; // Usamos Set para obtener valores únicos y luego lo convertimos a un array

    return uniqueBrands;
		
  } catch (error) {
    console.error("Error fetching product brands:", error);
    throw error;
  }
};

//Versión Original
export const getProducts = async (page: number) => {
  try { 
    const itemsPerPage = 8;
    const from = (page - 1) * itemsPerPage;
    const to = from + itemsPerPage - 1;

    const { data: products, error, count } = await supabase
      .from("products")
      .select("*, variants(*)", { count: "exact" })
      .order("created_at", { ascending: false })
      .range(from, to);

    if (error) {
      console.log(error.message);
      throw new Error(`Error fetching products: ${error.message}`);
    }

    return {products, count};
    
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getFilteredProducts = async ({
  page = 1,
  brands = [],
}: {
  page: number;
  brands: string[];
}) => {
  try {
    const itemsPerPage = 8;
    const from = (page - 1) * itemsPerPage;
    const to = from + itemsPerPage - 1;

    let query = supabase
      .from("products")
      .select("*, variants(*)", { count: "exact" })
      .order("created_at", { ascending: false })
      .range(from, to);

    if (brands.length > 0) {
      query = query.in("brand", brands);
    }

    const { data, error, count } = await query;

    if (error) {
      console.log(error.message);
      throw new Error(error.message);
    }

    return { data, count };
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getRecentProducts = async () => {
  try {
    const { data: products, error } = await supabase
      .from("products")
      .select("*, variants(*)")
      .order("created_at", { ascending: false })
      .limit(10);

    if (error) {
      console.log(error.message);
      throw new Error(error.message);
    }

		return products;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

export const getRandomProducts = async () => {
  try {
    const { data: products, error } = await supabase
      .from("products")
      .select("*, variants(*)")
			.order("created_at", { ascending: false })
      .limit(24); // obtén más para tener margen

    if (error) throw new Error(error.message);
    if (!products) return [];

    // Filtrar productos válidos
    const filtered = products.filter(
      (p) => p?.images?.length > 0 && p?.name && p?.variants?.length > 0
    );
		
    // Mezclar aleatoriamente en el cliente
    const randomProducts = filtered
      .sort(() => 0.5 - Math.random())
      .slice(0, 12); // devolver 12 aleatorios

    return randomProducts;
  } catch (error) {
    console.error("Error fetching random products:", error);
    return [];
  }
};

export const getProductBySlug = async (slug: string) => {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*, variants(*)")
      .eq("slug", slug)
      .single();

    if (error) {
      console.log(error.message);
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error("Error fetching random product:", error);
    throw error;
  }
};

export const searchProducts = async (searchTerm: string) => {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*, variants(*)")
      .ilike("name", `%${searchTerm}%`);

    if (error) {
      console.log(error.message);
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error("Error fetching random product:", error);
    throw error;
  }
};

/* ********************************** */
/*            ADMINISTRADOR           */
/* ********************************** */
export const createProduct = async (productInput: ProductInput) => {
	try {
		// 1. Crear el producto para obtener el ID
		const { data: product, error: productError } = await supabase
			.from('products')
			.insert({
				name: productInput.name,
				brand: productInput.brand,
				slug: productInput.slug,
				features: productInput.features,
				description: productInput.description,
				images: [],
			})
			.select()
			.single();

		if (productError) throw new Error(productError.message);

		// 2. Subir las imágenes al bucket dentro de una carpeta que se creará a partir del producto
		const folderName = product.id;

		const uploadedImages = await Promise.all(
			productInput.images.map(async image => {
				const { data, error } = await supabase.storage
					.from('product-images')
					.upload(`${folderName}/${product.id}-${image.name}`, image);

				if (error) throw new Error(error.message);

				const imageUrl = `${
					supabase.storage
						.from('product-images')
						.getPublicUrl(data.path).data.publicUrl
				}`;

				return imageUrl;
			})
		);

		// 3. Actualizar el producto con las imágenes subidas
		const { error: updatedError } = await supabase
			.from('products')
			.update({
				images: uploadedImages,
			})
			.eq('id', product.id);

		if (updatedError) throw new Error(updatedError.message);

		// 4. Crear las variantes del producto
		const variants = productInput.variants.map(variant => ({
			product_id: product.id,
			stock: variant.stock,
			price: variant.price,
			storage: variant.storage,
			color: variant.color,
			color_name: variant.colorName,
		}));

		const { error: variantsError } = await supabase
			.from('variants')
			.insert(variants);

		if (variantsError) throw new Error(variantsError.message);

		return product;
	} catch (error) {
		console.log(error);
		throw new Error('Error inesperado, Vuelva a intentarlo');
	}
};

export const deleteProduct = async (productId: string) => {
	// 1. Eliminar las variantes del producto
	const { error: variantsError } = await supabase
		.from('variants')
		.delete()
		.eq('product_id', productId);

	if (variantsError) throw new Error(variantsError.message);

	// 2. Obtener las imágenes del producto antes de eliminarlo
	const { data: productImages, error: productImagesError } =
		await supabase
			.from('products')
			.select('images')
			.eq('id', productId)
			.single();

	if (productImagesError) throw new Error(productImagesError.message);

	// 3. Eliminar el producto
	const { error: productDeleteError } = await supabase
		.from('products')
		.delete()
		.eq('id', productId);

	if (productDeleteError) throw new Error(productDeleteError.message);

	// 4. Eliminar las imágenes del bucket
	if (productImages.images.length > 0) {
		const folderName = productId;

		const paths = productImages.images.map(image => {
			const fileName = image.split('/').pop();
			return `${folderName}/${fileName}`;
		});

		const { error: storageError } = await supabase.storage
			.from('product-images')
			.remove(paths);

		if (storageError) throw new Error(storageError.message);
	}

	return true;
};

export const updateProduct = async (
	productId: string,
	productInput: ProductInput
) => {
	// 1. Obtener las imágenes actuales del producto
	const { data: currentProduct, error: currentProductError } =
		await supabase
			.from('products')
			.select('images')
			.eq('id', productId)
			.single();

	if (currentProductError)
		throw new Error(currentProductError.message);

	const existingImages = currentProduct.images || [];

	// 2. Actualizar la información individual del producto
	const { data: updatedProduct, error: productError } = await supabase
		.from('products')
		.update({
			name: productInput.name,
			brand: productInput.brand,
			slug: productInput.slug,
			features: productInput.features,
			description: productInput.description,
		})
		.eq('id', productId)
		.select()
		.single();

	if (productError) throw new Error(productError.message);

	// 3. Manejo de imágenes (SUBIR NUEVAS y ELIMINAR ANTIGUAS SI ES NECESARIO)
	const folderName = productId;

	const validImages = productInput.images.filter(image => image) as [File | string];

	// 3.1 Identificar las imágenes que han sido eliminadas
	const imagesToDelete = existingImages.filter(
		image => !validImages.includes(image)
	);

	// 3.2 Obtener los paths de los archivos a eliminar
	const filesToDelete = imagesToDelete.map(extractFilePath);

	// 3.3 Eliminar las imágenes del bucket
	if (filesToDelete.length > 0) {
		const { error: deleteImagesError } = await supabase.storage
			.from('product-images')
			.remove(filesToDelete);

		if (deleteImagesError) {
			console.log(deleteImagesError);
			throw new Error(deleteImagesError.message);
		} else {
			console.log(`Imagenes eliminadas: ${filesToDelete.join(', ')}`);
		}
	}

	// 3.4 Subir las nuevas imágenes y construir el array de imágenes actualizado
	const uploadedImages = await Promise.all(
		validImages.map(async image => {
			if (image instanceof File) {
				// Si la imagen no es una URL (es un archivo), entonces subela al bucket
				const { data, error } = await supabase.storage
					.from('product-images')
					.upload(`${folderName}/${productId}-${image.name}`, image);

				if (error) throw new Error(error.message);

				const imageUrl = supabase.storage
					.from('product-images')
					.getPublicUrl(data.path).data.publicUrl;

				return imageUrl;
			} else if (typeof image === 'string') {
				return image;
			} else {
				throw new Error('Tipo de imagen no soportado');
			}
		})
	);

	// 4. Actualizar el productos con las imagenes actualizadas
	const { error: updateImagesError } = await supabase
		.from('products')
		.update({ images: uploadedImages })
		.eq('id', productId);

	if (updateImagesError) throw new Error(updateImagesError.message);

	// 5. Actualizar las variantes del producto
	const existingVariants = productInput.variants.filter(v => v.id);
	const newVariants = productInput.variants.filter(v => !v.id);

	// 5.1 Modificar las variantes existentes
	if (existingVariants.length > 0) {
		const { error: updateVariantsError } = await supabase
			.from('variants')
			.upsert(
				existingVariants.map(variant => ({
					id: variant.id,
					product_id: productId,
					stock: variant.stock,
					price: variant.price,
					storage: variant.storage,
					color: variant.color,
					color_name: variant.colorName,
				})),
				{
					onConflict: 'id',
				}
			);

		if (updateVariantsError)
			throw new Error(updateVariantsError.message);
	}

	// 5.2 Crear y guardar las nuevas variantes
	let newVariantIds: string[] = [];

	if (newVariants.length > 0) {
		const { data, error: insertVariantsError } = await supabase
			.from('variants')
			.insert(
				newVariants.map(variant => ({
					product_id: productId,
					stock: variant.stock,
					price: variant.price,
					storage: variant.storage,
					color: variant.color,
					color_name: variant.colorName,
				}))
			)
			.select();

		if (insertVariantsError)
			throw new Error(insertVariantsError.message);

		newVariantIds = data.map(variant => variant.id);
	}

	// 5.3 Combinar los IDs de las variantes existentes y las nuevas
	const currentVariantIds = [
		...existingVariants.map(v => v.id),
		...newVariantIds,
	];

	// 5.4 Eliminar las variantes que no están en la lista de IDs
	const { error: deleteVariantsError } = await supabase
		.from('variants')
		.delete()
		.eq('product_id', productId)
		.not(
			'id',
			'in',
			`(${currentVariantIds ? currentVariantIds.join(',') : 0})` // (UIWE2030230-2230000, UIWE2030230-2230001, ...)
		);

	if (deleteVariantsError)
		throw new Error(deleteVariantsError.message);

	return updatedProduct;
};