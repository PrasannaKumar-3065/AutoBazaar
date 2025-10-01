import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
  image: string;
  count: number;
}

interface CategoryGridProps {
  categories: Category[];
  onCategoryClick?: (categoryId: string) => void;
}

export function CategoryGrid({ categories, onCategoryClick }: CategoryGridProps) {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.id}
                className="hover-elevate cursor-pointer overflow-hidden"
                onClick={() => onCategoryClick?.(category.id)}
                data-testid={`card-category-${category.id}`}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-square bg-muted">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <Icon className="h-6 w-6 mb-2" />
                      <h3 className="font-semibold text-lg">{category.name}</h3>
                      <p className="text-sm text-white/80">{category.count} Products</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
