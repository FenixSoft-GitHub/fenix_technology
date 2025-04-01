import { supabase } from "@/supabase/client";

export const getProducts = async () => {
  try {
    const { data: products, error } = await supabase
      .from("products")
      .select("*, variants(*)")
      .order("created_at", { ascending: false });

    if (error) {
      console.log(error.message);
      throw new Error(`Error fetching products: ${error.message}`);
    }

    return products;
    
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
      .limit(4);

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
      .limit(20);

    if (error) {
      console.log(error.message);
      throw new Error(error.message);
    }

    const randomProducts = products
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);

    return randomProducts;
  } catch (error) {
    console.error("Error fetching random product:", error);
    throw error;
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
