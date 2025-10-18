import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AuthProvider } from "@/hooks/use-auth";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { useState } from "react";
import HomePage from "@/pages/HomePage";
import ProductsPage from "@/pages/ProductsPage";
import ConsultationPage from "@/pages/ConsultationPage";
import AppointmentsPage from "@/pages/AppointmentsPage";
import AuthPage from "@/pages/AuthPage";
import AdminChatPage from "@/pages/AdminChatPage";
import CustomerChatPage from "@/pages/CustomerChatPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/auth" component={AuthPage} />
      <Route path="/consultation" component={ConsultationPage} />
      <Route path="/appointments" component={AppointmentsPage} />
      <Route path="/admin/chat" component={AdminChatPage} />
      <Route path="/chat" component={CustomerChatPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const currentPath = window.location.pathname;
  
  const isChatPage = currentPath.includes('/chat') || currentPath.includes('/admin/chat');
  
  //todo: remove mock functionality - cart items
  const [cartItems, setCartItems] = useState([
    { id: "1", name: "Premium Leather Seat Covers", price: 4999, quantity: 2, image: "/stock_images/car_seat_covers_leat_267be475.jpg" },
    { id: "2", name: "LED Headlight Kit", price: 8999, quantity: 1, image: "/stock_images/car_led_headlights_a_04453d5d.jpg" },
  ]);

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems(items =>
      items.map(item => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    console.log("Proceeding to checkout");
    alert("Checkout functionality will be implemented in the backend phase");
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <TooltipProvider>
            {isChatPage ? (
              <Router />
            ) : (
              <div className="min-h-screen flex flex-col">
                <Header
                  cartItemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                  onCartClick={() => setCartOpen(true)}
                  onSearchChange={(value) => console.log("Search:", value)}
                />
                <main className="flex-1">
                  <Router />
                </main>
                <Footer />
              </div>
            )}
            {!isChatPage && (
              <CartDrawer
                open={cartOpen}
                onOpenChange={setCartOpen}
                items={cartItems}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveItem={handleRemoveItem}
                onCheckout={handleCheckout}
              />
            )}
            <Toaster />
          </TooltipProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;