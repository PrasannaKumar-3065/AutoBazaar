import { ProductCard } from "../ProductCard";
import seatCoverImage from "@assets/stock_images/car_seat_covers_leat_267be475.jpg";

export default function ProductCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ProductCard
        id="1"
        name="Premium Leather Seat Covers - Universal Fit"
        price={4999}
        originalPrice={6999}
        image={seatCoverImage}
        category="Interior Accessories"
        badge="Sale"
        onAddToCart={(id) => console.log("Add to cart:", id)}
        onQuickView={(id) => console.log("Quick view:", id)}
      />
    </div>
  );
}
