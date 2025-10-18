import { ShoppingCart, Search, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "./ThemeToggle";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

interface HeaderProps {
  cartItemCount?: number;
  onCartClick?: () => void;
  onSearchChange?: (value: string) => void;
}

export function Header({ cartItemCount = 0, onCartClick, onSearchChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between gap-4 py-4">
          <div className="flex items-center gap-6">
            <Link href="/">
              <h1 className="text-2xl font-bold text-primary font-accent cursor-pointer" data-testid="link-home">
                AutoParts Pro
              </h1>
            </Link>
            <nav className="hidden md:flex items-center gap-1">
              <Link href="/products">
                <Button variant="ghost" data-testid="link-products">Products</Button>
              </Link>
              <Link href="/consultation">
                <Button variant="ghost" data-testid="link-consultation">Consultation</Button>
              </Link>
              <Link href="/appointments">
                <Button variant="ghost" data-testid="link-appointments">Appointments</Button>
              </Link>
              <Link href="/chat">
                <Button variant="ghost" data-testid="link-chat">Support Chat</Button>
              </Link>
              <Link href="/admin/chat">
                <Button variant="ghost" data-testid="link-admin-chat">Admin</Button>
              </Link>
            </nav>
          </div>

          <div className="hidden lg:flex flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search accessories..."
                className="pl-10"
                onChange={(e) => onSearchChange?.(e.target.value)}
                data-testid="input-search"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="md:hidden" data-testid="button-menu">
              <Menu className="h-5 w-5" />
            </Button>
            <ThemeToggle />
            <Button variant="ghost" size="icon" data-testid="button-account">
              <User className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={onCartClick}
              data-testid="button-cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  data-testid="badge-cart-count"
                >
                  {cartItemCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
