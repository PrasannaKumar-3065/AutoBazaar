import { useState } from "react";
import { CartDrawer } from "../CartDrawer";
import { Button } from "@/components/ui/button";
import seatImage from "@assets/stock_images/car_seat_covers_leat_267be475.jpg";
import headlightImage from "@assets/stock_images/car_led_headlights_a_04453d5d.jpg";

export default function CartDrawerExample() {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { id: "1", name: "Premium Leather Seat Covers", price: 4999, quantity: 2, image: seatImage },
    { id: "2", name: "LED Headlight Kit", price: 8999, quantity: 1, image: headlightImage },
  ]);

  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Cart</Button>
      <CartDrawer
        open={open}
        onOpenChange={setOpen}
        items={items}
        onUpdateQuantity={(id, quantity) => {
          setItems(items.map(item => item.id === id ? { ...item, quantity } : item));
        }}
        onRemoveItem={(id) => {
          setItems(items.filter(item => item.id !== id));
        }}
        onCheckout={() => console.log("Checkout clicked")}
      />
    </div>
  );
}
