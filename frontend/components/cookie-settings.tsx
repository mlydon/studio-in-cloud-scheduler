"use client"

import { useState } from "react"
import { Switch } from "@/components/ui/switch"

export function CookieSettings() {
  const [strictlyNecessary, setStrictlyNecessary] = useState(true)

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6">
        <h3 className="font-medium">Cookie Settings</h3>
        <p className="text-sm text-muted-foreground">Manage your cookie settings here.</p>
        <div className="mt-4 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Strictly Necessary</p>
              <p className="text-xs text-muted-foreground">
                These cookies are essential in order to use the website and use its features.
              </p>
            </div>
            <Switch checked={strictlyNecessary} onCheckedChange={setStrictlyNecessary} />
          </div>
        </div>
      </div>
    </div>
  )
}
