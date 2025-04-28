"use client"

import { Minus, Plus } from "lucide-react"
import { useState } from "react"

export function MoveGoal() {
  const [calories, setCalories] = useState(350)

  const decreaseCalories = () => {
    if (calories > 0) {
      setCalories(calories - 50)
    }
  }

  const increaseCalories = () => {
    setCalories(calories + 50)
  }

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6">
        <h3 className="font-medium">Move Goal</h3>
        <p className="text-sm text-muted-foreground">Set your daily activity goal.</p>
        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={decreaseCalories}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 w-8"
          >
            <Minus className="h-4 w-4" />
            <span className="sr-only">Decrease</span>
          </button>
          <div className="text-center">
            <span className="text-5xl font-bold">{calories}</span>
            <p className="text-xs uppercase text-muted-foreground tracking-widest">CALORIES/DAY</p>
          </div>
          <button
            onClick={increaseCalories}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 w-8"
          >
            <Plus className="h-4 w-4" />
            <span className="sr-only">Increase</span>
          </button>
        </div>
        <button className="mt-4 w-full inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
          Set Goal
        </button>
      </div>
    </div>
  )
}
