import { MainNav } from "@/components/main-nav"
import { SearchBar } from "@/components/search-bar"
import { BarChartDemo } from "@/components/bar-chart-demo"
import { PieChartDemo } from "@/components/pie-chart-demo"
import { LineChartDemo } from "@/components/line-chart-demo"
import { AreaChartDemo } from "@/components/area-chart-demo"
import { MixedChartDemo } from "@/components/mixed-chart-demo"
import { RadialChartDemo } from "@/components/radial-chart-demo"
import { StackedBarChartDemo } from "@/components/stacked-bar-chart-demo"
import { MetricsCards } from "@/components/metrics-cards"

export function ChartDashboard() {
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
            <h1 className="text-3xl font-bold tracking-tight">Data Visualization Dashboard</h1>
            <p className="text-muted-foreground">
              Interactive charts and graphs with custom colors, gradients, and styling.
            </p>
          </div>

          <MetricsCards />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-2">
              <BarChartDemo />
            </div>
            <div>
              <PieChartDemo />
            </div>
            <div>
              <RadialChartDemo />
            </div>
            <div className="col-span-2">
              <LineChartDemo />
            </div>
            <div className="col-span-3">
              <AreaChartDemo />
            </div>
            <div className="col-span-2">
              <StackedBarChartDemo />
            </div>
            <div>
              <MixedChartDemo />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
