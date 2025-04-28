import { CalendarComponent } from "@/components/calendar"
import { ChatInterface } from "@/components/chat-interface"
import { CookieSettings } from "@/components/cookie-settings"
import { ExerciseMinutes } from "@/components/exercise-minutes"
import { MainNav } from "@/components/main-nav"
import { MoveGoal } from "@/components/move-goal"
import { RevenueCard } from "@/components/revenue-card"
import { SearchBar } from "@/components/search-bar"
import { SubscriptionsCard } from "@/components/subscriptions-card"
import { TabNav } from "@/components/tab-nav"
import { TeamMembers } from "@/components/team-members"

export function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <SearchBar />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container space-y-6 py-8 md:py-10 lg:py-12">
          <div className="flex flex-col items-start gap-2">
            <h1 className="text-3xl font-bold tracking-tight">Build your component library</h1>
            <p className="text-muted-foreground">
              A set of beautifully-designed, accessible components and a code distribution platform. Works with your
              favorite frameworks. Open Source. Open Code.
            </p>
            <div className="flex gap-2 pt-2">
              <a
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Get Started
              </a>
              <a
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Browse Blocks
              </a>
            </div>
          </div>

          <TabNav />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <RevenueCard />
            <SubscriptionsCard />
            <CalendarComponent />
            <MoveGoal />
            <TeamMembers />
            <ChatInterface />
            <ExerciseMinutes />
            <CookieSettings />
          </div>
        </section>
      </main>
    </div>
  )
}
