import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { SlidersHorizontal } from "lucide-react";

//todo: remove mock functionality - all products
const allProducts = [
  { id: "1", name: "Premium Leather Seat Covers", price: 4999, originalPrice: 6999, image: "/stock_images/car_seat_covers_leat_267be475.jpg", category: "Interior", badge: "Sale" as const },
  { id: "2", name: "LED Headlight Kit - Ultra Bright", price: 8999, image: "/stock_images/car_led_headlights_a_04453d5d.jpg", category: "Exterior", badge: "New" as const },
  { id: "3", name: "Dashboard Phone Mount", price: 799, image: "/stock_images/premium_car_interior_200ed1d2.jpg", category: "Electronics" },
  { id: "4", name: "Performance Air Filter", price: 2499, image: "/stock_images/car_led_headlights_a_04453d5d.jpg", category: "Performance" },
  { id: "5", name: "Car Floor Mats - Waterproof", price: 1999, image: "/stock_images/car_seat_covers_leat_267be475.jpg", category: "Interior" },
  { id: "6", name: "Rear View Camera System", price: 5999, image: "/stock_images/car_led_headlights_a_04453d5d.jpg", category: "Electronics", badge: "New" as const },
  { id: "7", name: "Sports Steering Wheel Cover", price: 899, image: "/stock_images/premium_car_interior_200ed1d2.jpg", category: "Interior" },
  { id: "8", name: "Fog Light Assembly", price: 3499, image: "/stock_images/car_led_headlights_a_04453d5d.jpg", category: "Exterior" },
];

export default function ProductsPage() {
  const [showFilters, setShowFilters] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const filteredProducts = selectedCategories.length > 0
    ? allProducts.filter(p => selectedCategories.includes(p.category))
    : allProducts;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">All Products</h1>
        <div className="flex items-center gap-4">
          <Select defaultValue="popular">
            <SelectTrigger className="w-[180px]" data-testid="select-sort">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden"
            data-testid="button-toggle-filters"
          >
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {showFilters && (
          <Card className="lg:col-span-1 h-fit sticky top-24">
            <CardContent className="p-6 space-y-6">
              <div>
                <h3 className="font-semibold mb-4">Categories</h3>
                <div className="space-y-3">
                  {["Interior", "Exterior", "Electronics", "Performance"].map((category) => (
                    <div key={category} className="flex items-center gap-2">
                      <Checkbox
                        id={category}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => handleCategoryToggle(category)}
                        data-testid={`checkbox-${category.toLowerCase()}`}
                      />
                      <Label htmlFor={category} className="cursor-pointer">
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Price Range</h3>
                <div className="flex items-center gap-2">
                  <Input placeholder="Min" type="number" data-testid="input-price-min" />
                  <span>-</span>
                  <Input placeholder="Max" type="number" data-testid="input-price-max" />
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className={showFilters ? "lg:col-span-3" : "lg:col-span-4"}>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAddToCart={(id) => console.log("Add to cart:", id)}
                onQuickView={(id) => console.log("Quick view:", id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
