export function ExerciseMinutes() {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6">
        <h3 className="font-medium">Exercise Minutes</h3>
        <p className="text-sm text-muted-foreground">Your exercise minutes are ahead of where you normally are.</p>
        <div className="mt-4">
          <div className="h-2 w-full rounded-full bg-muted">
            <div className="h-2 rounded-full bg-primary" style={{ width: "75%" }}></div>
          </div>
          <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
            <span>0 min</span>
            <span>Goal: 30 min</span>
          </div>
        </div>
      </div>
    </div>
  )
}
