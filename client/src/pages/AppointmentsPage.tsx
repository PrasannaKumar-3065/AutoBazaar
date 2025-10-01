import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

//todo: remove mock functionality - appointments list
const appointments = [
  {
    id: "1",
    service: "Expert Consultation",
    date: "2025-10-05",
    time: "10:00 AM",
    status: "upcoming" as const,
    location: "Coimbatore Service Center",
  },
  {
    id: "2",
    service: "Accessory Installation",
    date: "2025-09-28",
    time: "02:00 PM",
    status: "completed" as const,
    location: "Coimbatore Service Center",
  },
];

export default function AppointmentsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Appointments</h1>

      <div className="space-y-4">
        {appointments.map((appointment) => (
          <Card key={appointment.id} data-testid={`card-appointment-${appointment.id}`}>
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <CardTitle className="text-xl">{appointment.service}</CardTitle>
                <Badge
                  variant={appointment.status === "upcoming" ? "default" : "secondary"}
                  data-testid={`badge-status-${appointment.id}`}
                >
                  {appointment.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{new Date(appointment.date).toLocaleDateString("en-IN", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{appointment.time}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{appointment.location}</span>
              </div>
              {appointment.status === "upcoming" && (
                <div className="flex gap-2 pt-4">
                  <Button variant="outline" data-testid={`button-reschedule-${appointment.id}`}>
                    Reschedule
                  </Button>
                  <Button variant="outline" data-testid={`button-cancel-${appointment.id}`}>
                    Cancel
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}

        {appointments.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">No appointments found</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
