import { Alert, AlertDescription } from "@/components/ui/alert";
import { MapPin, CheckCircle2 } from "lucide-react";

interface LocationBannerProps {
  isEligible?: boolean;
}

export function LocationBanner({ isEligible = true }: LocationBannerProps) {
  if (!isEligible) {
    return (
      <Alert className="border-destructive/50 bg-destructive/10">
        <MapPin className="h-5 w-5 text-destructive" />
        <AlertDescription className="text-destructive-foreground">
          Consultation and appointment services are currently available only in Coimbatore, Tamil Nadu. 
          Continue shopping for accessories with nationwide delivery.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Alert className="border-chart-3/50 bg-chart-3/10">
      <CheckCircle2 className="h-5 w-5 text-chart-3" />
      <AlertDescription className="text-foreground">
        Great news! Consultation and appointment booking services are available in your area (Coimbatore, Tamil Nadu).
      </AlertDescription>
    </Alert>
  );
}
