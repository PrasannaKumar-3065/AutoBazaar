import { useState } from "react";
import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { ProductCard } from "@/components/ProductCard";
import { Armchair, Zap, Gauge, Lightbulb } from "lucide-react";

//todo: remove mock functionality - categories
const categories = [
  { id: "interior", name: "Interior", icon: Armchair, image: "/stock_images/car_seat_covers_leat_267be475.jpg", count: 45 },
  { id: "exterior", name: "Exterior", icon: Lightbulb, image: "/stock_images/car_led_headlights_a_04453d5d.jpg", count: 38 },
  { id: "electronics", name: "Electronics", icon: Zap, image: "/stock_images/premium_car_interior_200ed1d2.jpg", count: 52 },
  { id: "performance", name: "Performance", icon: Gauge, image: "/stock_images/car_led_headlights_a_04453d5d.jpg", count: 29 },
];

//todo: remove mock functionality - products
const featuredProducts = [
  { id: "1", name: "Premium Leather Seat Covers", price: 4999, originalPrice: 6999, image: "/stock_images/car_seat_covers_leat_267be475.jpg", category: "Interior", badge: "Sale" as const },
  { id: "2", name: "LED Headlight Kit - Ultra Bright", price: 8999, image: "/stock_images/car_led_headlights_a_04453d5d.jpg", category: "Exterior", badge: "New" as const },
  { id: "3", name: "Dashboard Phone Mount", price: 799, image: "/stock_images/premium_car_interior_200ed1d2.jpg", category: "Electronics" },
  { id: "4", name: "Performance Air Filter", price: 2499, image: "/stock_images/car_led_headlights_a_04453d5d.jpg", category: "Performance", badge: "Low Stock" as const },
];

export default function HomePage() {
  const [, setCartItems] = useState<string[]>([]);

  const handleAddToCart = (id: string) => {
    setCartItems(prev => [...prev, id]);
    console.log("Added to cart:", id);
  };

  return (
    <div>
      <Hero backgroundImage="/stock_images/premium_car_interior_200ed1d2.jpg" />
      
      <CategoryGrid
        categories={categories}
        onCategoryClick={(id) => console.log("Category:", id)}
      />

      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Featured Products</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={handleAddToCart}
              onQuickView={(id) => console.log("Quick view:", id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
