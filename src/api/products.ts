import { Product, ProductsResponse } from "../types/product";

const API_URL = "https://dummyjson.com";

export async function fetchProducts(): Promise<ProductsResponse> {
  const response = await fetch(`${API_URL}/products`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export async function fetchCategories(): Promise<string[]> {
  const response = await fetch(`${API_URL}/products/categories`);

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return response.json();
}

export async function fetchProductsByCategory(
  category: string
): Promise<ProductsResponse> {
  const response = await fetch(`${API_URL}/products/category/${category}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch products for category: ${category}`);
  }

  return response.json();
}

export async function fetchFeaturedProducts(): Promise<Product[]> {
  const response = await fetch(`${API_URL}/products?limit=4`);

  if (!response.ok) {
    throw new Error("Failed to fetch featured products");
  }

  const data = await response.json();
  return data.products.sort((a: Product, b: Product) => b.rating - a.rating);
}
