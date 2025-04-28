"use client"

import { useState } from "react"

export function TabNav() {
  const [activeTab, setActiveTab] = useState("examples")

  const tabs = [
    { id: "examples", label: "Examples" },
    { id: "mail", label: "Mail" },
    { id: "dashboard", label: "Dashboard" },
    { id: "tasks", label: "Tasks" },
    { id: "playground", label: "Playground" },
    { id: "forms", label: "Forms" },
    { id: "music", label: "Music" },
    { id: "authentication", label: "Authentication" },
  ]

  return (
    <div className="border-b">
      <div className="flex h-10 items-center space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
              activeTab === tab.id
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  )
}
