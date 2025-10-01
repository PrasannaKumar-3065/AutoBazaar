import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { Link } from "wouter";

interface HeroProps {
  backgroundImage: string;
}

export function Hero({ backgroundImage }: HeroProps) {
  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
      
      <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Premium Car Accessories & Expert Installation
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-6">
            Transform your vehicle with quality accessories and professional consultation services
          </p>
          <div className="flex items-center gap-2 mb-8">
            <MapPin className="h-5 w-5 text-sidebar-primary" />
            <span className="text-white/90">Serving Coimbatore, Tamil Nadu</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/products">
              <Button size="lg" className="bg-sidebar-primary text-sidebar-primary-foreground hover-elevate active-elevate-2" data-testid="button-shop-now">
                Shop Now
              </Button>
            </Link>
            <Link href="/consultation">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white/30 bg-white/10 backdrop-blur-sm hover-elevate active-elevate-2"
                data-testid="button-book-consultation"
              >
                Book Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
