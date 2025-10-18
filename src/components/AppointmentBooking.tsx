import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Clock, Wrench, Settings, Package } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface Service {
  id: string;
  name: string;
  duration: string;
  price: number;
  icon: any;
}

const services: Service[] = [
  { id: "installation", name: "Accessory Installation", duration: "1 hour", price: 500, icon: Wrench },
  { id: "consultation", name: "Expert Consultation", duration: "30 mins", price: 0, icon: Settings },
  { id: "package", name: "Complete Package Setup", duration: "2 hours", price: 1500, icon: Package },
];

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
];

export function AppointmentBooking() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleBooking = () => {
    console.log("Booking:", { selectedDate, selectedService, selectedTime });
    alert("Appointment booking functionality will be implemented in the backend phase");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Select Service</CardTitle>
            <CardDescription>Choose the service you need</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.id}
                  className={`cursor-pointer hover-elevate ${
                    selectedService === service.id ? "border-primary" : ""
                  }`}
                  onClick={() => setSelectedService(service.id)}
                  data-testid={`card-service-${service.id}`}
                >
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{service.name}</h4>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Clock className="h-3 w-3" />
                        {service.duration}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-accent font-semibold text-lg">
                        {service.price === 0 ? "Free" : `₹${service.price}`}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Select Date & Time</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border w-fit"
              disabled={(date) => date < new Date()}
            />
            
            <div>
              <h4 className="font-semibold mb-3">Available Time Slots</h4>
              <div className="grid grid-cols-4 gap-2">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    onClick={() => setSelectedTime(time)}
                    data-testid={`button-time-${time.replace(/[:\s]/g, "-")}`}
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card className="sticky top-24">
          <CardHeader>
            <CardTitle>Appointment Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {selectedService ? (
              <>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Service</p>
                  <p className="font-semibold">
                    {services.find(s => s.id === selectedService)?.name}
                  </p>
                </div>
                {selectedDate && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Date</p>
                    <p className="font-semibold">{selectedDate.toLocaleDateString()}</p>
                  </div>
                )}
                {selectedTime && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Time</p>
                    <p className="font-semibold">{selectedTime}</p>
                  </div>
                )}
                <Separator />
                <div className="flex items-center justify-between">
                  <p className="font-semibold">Total</p>
                  <p className="text-xl font-accent font-semibold text-primary">
                    {services.find(s => s.id === selectedService)?.price === 0
                      ? "Free"
                      : `₹${services.find(s => s.id === selectedService)?.price}`}
                  </p>
                </div>
                <Button 
                  className="w-full" 
                  disabled={!selectedDate || !selectedTime}
                  onClick={handleBooking}
                  data-testid="button-confirm-booking"
                >
                  Confirm Booking
                </Button>
              </>
            ) : (
              <p className="text-muted-foreground text-center py-8">
                Please select a service to continue
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
