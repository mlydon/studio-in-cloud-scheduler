"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function CalendarComponent() {
  const [currentMonth, setCurrentMonth] = useState("June 2023")

  // Days of the week
  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

  // Calendar days for June 2023
  const days = [
    { day: 28, isCurrentMonth: false },
    { day: 29, isCurrentMonth: false },
    { day: 30, isCurrentMonth: false },
    { day: 31, isCurrentMonth: false },
    { day: 1, isCurrentMonth: true },
    { day: 2, isCurrentMonth: true },
    { day: 3, isCurrentMonth: true },
    { day: 4, isCurrentMonth: true },
    { day: 5, isCurrentMonth: true, isSelected: true },
    { day: 6, isCurrentMonth: true },
    { day: 7, isCurrentMonth: true },
    { day: 8, isCurrentMonth: true },
    { day: 9, isCurrentMonth: true },
    { day: 10, isCurrentMonth: true },
    { day: 11, isCurrentMonth: true },
    { day: 12, isCurrentMonth: true },
    { day: 13, isCurrentMonth: true, isToday: true },
    { day: 14, isCurrentMonth: true },
    { day: 15, isCurrentMonth: true },
    { day: 16, isCurrentMonth: true },
    { day: 17, isCurrentMonth: true },
    { day: 18, isCurrentMonth: true },
    { day: 19, isCurrentMonth: true },
    { day: 20, isCurrentMonth: true },
    { day: 21, isCurrentMonth: true },
    { day: 22, isCurrentMonth: true },
    { day: 23, isCurrentMonth: true },
    { day: 24, isCurrentMonth: true },
    { day: 25, isCurrentMonth: true },
    { day: 26, isCurrentMonth: true },
    { day: 27, isCurrentMonth: true },
    { day: 28, isCurrentMonth: true },
    { day: 29, isCurrentMonth: true },
    { day: 30, isCurrentMonth: true },
    { day: 1, isCurrentMonth: false },
  ]

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-7 w-7">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous month</span>
          </button>
          <h2 className="text-sm font-medium">{currentMonth}</h2>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-7 w-7">
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next month</span>
          </button>
        </div>
      </div>
      <div className="p-3">
        <div className="grid grid-cols-7 text-center text-xs leading-6 text-muted-foreground">
          {daysOfWeek.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>
        <div className="mt-2 grid grid-cols-7 text-center text-sm">
          {days.map((day, i) => (
            <div
              key={i}
              className={`aspect-square p-0 flex items-center justify-center ${
                !day.isCurrentMonth ? "text-muted-foreground" : ""
              } ${day.isSelected ? "bg-primary text-primary-foreground rounded-md" : ""} ${
                day.isToday && !day.isSelected ? "bg-accent text-accent-foreground rounded-md" : ""
              }`}
            >
              {day.day}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
