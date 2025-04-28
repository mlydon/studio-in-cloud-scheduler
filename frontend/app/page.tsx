import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Studio Scheduler</h1>
        <p className="text-gray-500 mt-2">Manage your studio bookings</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Available Studios</CardTitle>
          </CardHeader>
          <CardContent>
            <Button>View All Studios</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="outline">Create Booking</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
