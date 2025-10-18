import { LocationBanner } from "@/components/LocationBanner";
import { AppointmentBooking } from "@/components/AppointmentBooking";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Expert advice on accessory selection",
  "Professional installation guidance",
  "Vehicle compatibility check",
  "Quality assurance consultation",
  "Post-installation support",
  "Custom recommendations",
];

export default function ConsultationPage() {
  //todo: remove mock functionality - replace with actual location detection
  const isEligibleLocation = true;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Book a Consultation</h1>
        <LocationBanner isEligible={isEligibleLocation} />
      </div>

      {isEligibleLocation && (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="/stock_images/professional_automot_4ef2006d.jpg"
                  alt="Professional consultation"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Why Book a Consultation?</h2>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-chart-3 shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Our Services</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Free Consultation</h4>
                    <p className="text-sm text-muted-foreground">
                      30-minute session to discuss your requirements and get expert recommendations.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Installation Service</h4>
                    <p className="text-sm text-muted-foreground">
                      Professional installation by certified technicians with warranty support.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Complete Package</h4>
                    <p className="text-sm text-muted-foreground">
                      Consultation + installation + follow-up support for comprehensive service.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <AppointmentBooking />
        </>
      )}
    </div>
  );
}
