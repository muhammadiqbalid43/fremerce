import { Product } from "../../types/product";
import { Skeleton } from "../ui/skeleton";
import ProductCard from "./product-card";

interface ProductGridProps {
  products: Product[] | undefined;
  isLoading: boolean;
  error: Error | null;
}

const ProductGrid = ({ products, isLoading, error }: ProductGridProps) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-[400px]">
            <Skeleton className="w-full h-full" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full p-6 text-center text-red-800 bg-red-100 rounded-md">
        <h3 className="mb-2 text-lg font-semibold">Gagal memuat produk</h3>
        <p>{error.message}</p>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="w-full p-6 text-center text-yellow-800 bg-yellow-100 rounded-md">
        <h3 className="text-lg font-semibold">Tidak ada produk ditemukan</h3>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
