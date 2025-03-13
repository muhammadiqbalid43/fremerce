import { Product } from "../../types/product";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-shadow hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="object-cover w-full h-full"
        />
        {product.discountPercentage > 0 && (
          <Badge className="absolute bg-red-500 top-2 right-2">
            {Math.round(product.discountPercentage)}% OFF
          </Badge>
        )}
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold truncate">{product.title}</h3>
          <span className="px-2 py-1 text-sm text-yellow-800 bg-yellow-100 rounded">
            ★ {product.rating.toFixed(1)}
          </span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
      </CardHeader>
      <CardContent className="pt-0 pb-2">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="capitalize">
            {product.category.replace("-", " ")}
          </Badge>
          <Badge variant="outline">{product.brand}</Badge>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between mt-auto">
        <div className="flex flex-col">
          {product.discountPercentage > 0 ? (
            <>
              <span className="text-xl font-bold">
                $
                {(
                  product.price *
                  (1 - product.discountPercentage / 100)
                ).toFixed(2)}
              </span>
              <span className="text-sm line-through text-muted-foreground">
                ${product.price}
              </span>
            </>
          ) : (
            <span className="text-xl font-bold">${product.price}</span>
          )}
        </div>
        <Badge variant={product.stock > 0 ? "secondary" : "destructive"}>
          {product.stock > 0 ? `Stock: ${product.stock}` : "Out of Stock"}
        </Badge>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
