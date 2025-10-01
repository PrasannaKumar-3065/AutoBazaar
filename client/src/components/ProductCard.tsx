import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Eye } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badge?: "New" | "Sale" | "Low Stock";
  onAddToCart?: (id: string) => void;
  onQuickView?: (id: string) => void;
}

export function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  badge,
  onAddToCart,
  onQuickView,
}: ProductCardProps) {
  return (
    <Card className="group overflow-hidden hover-elevate" data-testid={`card-product-${id}`}>
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          {badge && (
            <Badge
              variant={badge === "Sale" ? "destructive" : "default"}
              className="absolute top-3 left-3"
              data-testid={`badge-${badge.toLowerCase()}-${id}`}
            >
              {badge}
            </Badge>
          )}
          <Button
            size="icon"
            variant="secondary"
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => onQuickView?.(id)}
            data-testid={`button-quickview-${id}`}
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-3 p-4">
        <div className="w-full">
          <p className="text-sm text-muted-foreground">{category}</p>
          <h3 className="font-semibold text-lg mt-1 line-clamp-2" data-testid={`text-name-${id}`}>
            {name}
          </h3>
        </div>
        <div className="flex items-center justify-between w-full gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xl font-accent font-semibold text-primary" data-testid={`text-price-${id}`}>
              ₹{price.toLocaleString()}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          <Button
            size="icon"
            onClick={() => onAddToCart?.(id)}
            data-testid={`button-add-to-cart-${id}`}
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
