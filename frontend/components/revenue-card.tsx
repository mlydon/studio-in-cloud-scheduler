export function RevenueCard() {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6">
        <div className="text-sm font-medium text-muted-foreground">Total Revenue</div>
        <div className="mt-2 text-3xl font-bold">$15,231.89</div>
        <div className="text-xs text-muted-foreground">+20.1% from last month</div>
      </div>
    </div>
  )
}
