"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { name: "Completed", value: 540 },
  { name: "In Progress", value: 260 },
  { name: "Pending", value: 180 },
  { name: "Cancelled", value: 120 },
]

const COLORS = ["#10b981", "#f59e0b", "#6366f1", "#f43f5e"]

export function RadialChartDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Task Status</CardTitle>
        <CardDescription>Current project task completion status.</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={0}
              outerRadius={100}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => [value, "Tasks"]}
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                borderColor: "hsl(var(--border))",
                borderRadius: "var(--radius)",
                boxShadow: "var(--shadow)",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
