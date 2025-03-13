import { useCategories } from "../../queries/query-products";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

interface CategoryListProps {
  onSelectCategory: (category: string | null) => void;
  selectedCategory: string | null;
}

const CategoryList = ({
  onSelectCategory,
  selectedCategory,
}: CategoryListProps) => {
  const { data: categories, isLoading, error } = useCategories();

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-4">
          <h2 className="mb-4 text-xl font-bold">Kategori</h2>
          <div className="space-y-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="w-full h-10" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardContent className="p-4">
          <h2 className="mb-4 text-xl font">Kategori</h2>
          <div className="p-3 text-red-800 bg-red-100 rounded-md">
            Gagal memuat kategori
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-4">
        <h2 className="mb-4 text-xl font-bold">Kategori</h2>
        <div className="space-y-2">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            className="justify-start w-full"
            onClick={() => onSelectCategory(null)}
          >
            Semua Produk
          </Button>
          {categories?.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="justify-start w-full capitalize"
              onClick={() => onSelectCategory(category)}
            >
              {category.replace("-", " ")}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryList;
