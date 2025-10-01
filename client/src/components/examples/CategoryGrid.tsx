import { CategoryGrid } from "../CategoryGrid";
import { Armchair, Zap, Gauge, Lightbulb } from "lucide-react";
import seatImage from "@assets/stock_images/car_seat_covers_leat_267be475.jpg";
import headlightImage from "@assets/stock_images/car_led_headlights_a_04453d5d.jpg";
import interiorImage from "@assets/stock_images/premium_car_interior_200ed1d2.jpg";

export default function CategoryGridExample() {
  const categories = [
    { id: "interior", name: "Interior", icon: Armchair, image: seatImage, count: 45 },
    { id: "exterior", name: "Exterior", icon: Lightbulb, image: headlightImage, count: 38 },
    { id: "electronics", name: "Electronics", icon: Zap, image: interiorImage, count: 52 },
    { id: "performance", name: "Performance", icon: Gauge, image: headlightImage, count: 29 },
  ];

  return (
    <CategoryGrid
      categories={categories}
      onCategoryClick={(id) => console.log("Category clicked:", id)}
    />
  );
}
