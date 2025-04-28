"use client"

import { useState } from "react"
import {
  Bell,
  Calendar,
  Download,
  Footprints,
  Home,
  LayoutDashboard,
  Menu,
  Search,
  Settings,
  Users,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ActivityRings } from "@/components/activity-rings"
import { StepsChart } from "@/components/steps-chart"
import { YearlyProgress } from "@/components/yearly-progress"
import { ActiveEnergy } from "@/components/active-energy"

export function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-50">
      <div className="flex flex-1">
        {/* Sidebar for desktop */}
        <aside className="hidden w-64 flex-col border-r bg-white md:flex">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <span className="flex items-center gap-2 font-semibold">
              <LayoutDashboard className="h-6 w-6" />
              <span>Health Dashboard</span>
            </span>
          </div>
          <nav className="grid gap-2 p-4 text-sm font-medium lg:p-6">
            <Button variant="ghost" className="justify-start gap-2">
              <Home className="h-4 w-4" />
              Dashboard
            </Button>
            <Button variant="ghost" className="justify-start gap-2 text-muted-foreground">
              <Footprints className="h-4 w-4" />
              Activity
            </Button>
            <Button variant="ghost" className="justify-start gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              History
            </Button>
            <Button variant="ghost" className="justify-start gap-2 text-muted-foreground">
              <Users className="h-4 w-4" />
              Challenges
            </Button>
            <Button variant="ghost" className="justify-start gap-2 text-muted-foreground">
              <Settings className="h-4 w-4" />
              Settings
            </Button>
          </nav>
        </aside>

        {/* Mobile sidebar */}
        <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <SheetContent side="left" className="w-64 p-0">
            <div className="flex h-14 items-center border-b px-4">
              <span className="flex items-center gap-2 font-semibold">
                <LayoutDashboard className="h-6 w-6" />
                <span>Health Dashboard</span>
              </span>
            </div>
            <nav className="grid gap-2 p-4 text-sm font-medium">
              <Button variant="ghost" className="justify-start gap-2" onClick={() => setIsSidebarOpen(false)}>
                <Home className="h-4 w-4" />
                Dashboard
              </Button>
              <Button
                variant="ghost"
                className="justify-start gap-2 text-muted-foreground"
                onClick={() => setIsSidebarOpen(false)}
              >
                <Footprints className="h-4 w-4" />
                Activity
              </Button>
              <Button
                variant="ghost"
                className="justify-start gap-2 text-muted-foreground"
                onClick={() => setIsSidebarOpen(false)}
              >
                <Calendar className="h-4 w-4" />
                History
              </Button>
              <Button
                variant="ghost"
                className="justify-start gap-2 text-muted-foreground"
                onClick={() => setIsSidebarOpen(false)}
              >
                <Users className="h-4 w-4" />
                Challenges
              </Button>
              <Button
                variant="ghost"
                className="justify-start gap-2 text-muted-foreground"
                onClick={() => setIsSidebarOpen(false)}
              >
                <Settings className="h-4 w-4" />
                Settings
              </Button>
            </nav>
          </SheetContent>
        </Sheet>

        <main className="flex flex-1 flex-col">
          {/* Header */}
          <header className="flex h-14 items-center gap-4 border-b bg-white px-4 lg:h-[60px] lg:px-6">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsSidebarOpen(true)}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle sidebar</span>
            </Button>
            <div className="w-full flex-1">
              <form>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                  />
                </div>
              </form>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
            </div>
          </header>

          {/* Dashboard content */}
          <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tight">Activity Dashboard</h2>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <Download className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Export Data</span>
                </Button>
              </div>
            </div>

            <Tabs defaultValue="today" className="space-y-4">
              <TabsList>
                <TabsTrigger value="today">Today</TabsTrigger>
                <TabsTrigger value="week">This Week</TabsTrigger>
                <TabsTrigger value="month">This Month</TabsTrigger>
                <TabsTrigger value="year">This Year</TabsTrigger>
              </TabsList>

              <TabsContent value="today" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {/* Steps Card */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">Today</CardTitle>
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold">12,584</span>
                        <span className="ml-2 text-muted-foreground">steps</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <StepsChart />
                      <div className="mt-4 text-sm text-muted-foreground">
                        <p>Over the past 7 days, you have walked 53,305 steps.</p>
                        <p className="mt-1">You need 12,584 more steps to reach your goal.</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Progress Card */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Progress</CardTitle>
                      <CardDescription>You're averaging more steps a day this year than last year.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <YearlyProgress />
                    </CardContent>
                  </Card>

                  {/* Activity Rings Card */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Activity</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center">
                      <div className="mb-4 h-48 w-48">
                        <ActivityRings />
                      </div>
                      <div className="grid w-full grid-cols-3 gap-2 text-center">
                        <div>
                          <p className="text-sm font-medium text-red-400">Move</p>
                          <p className="text-lg font-bold">562/600</p>
                          <p className="text-xs text-muted-foreground">kcal</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-green-500">Exercise</p>
                          <p className="text-lg font-bold">73/120</p>
                          <p className="text-xs text-muted-foreground">min</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-cyan-500">Stand</p>
                          <p className="text-lg font-bold">8/12</p>
                          <p className="text-xs text-muted-foreground">hr</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {/* Active Energy Card */}
                  <Card className="col-span-2">
                    <CardHeader>
                      <CardTitle>Active Energy</CardTitle>
                      <CardDescription>You're burning an average of 754 calories per day. Good job!</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ActiveEnergy />
                    </CardContent>
                  </Card>

                  {/* Walking Distance Card */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Walking Distance</CardTitle>
                      <CardDescription>
                        Over the last 7 days, your distance walked and run was 12.5 miles.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-baseline justify-center py-8">
                        <span className="text-5xl font-bold">12.5</span>
                        <span className="ml-2 text-muted-foreground">miles</span>
                      </div>
                      <div className="mt-2 rounded-full bg-slate-100 p-1">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-orange-400 to-red-400"
                          style={{ width: "78%" }}
                        ></div>
                      </div>
                      <div className="mt-2 text-right text-sm text-muted-foreground">78% of weekly goal</div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
