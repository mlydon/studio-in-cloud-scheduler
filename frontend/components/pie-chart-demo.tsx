"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { name: "Chrome", value: 68.85 },
  { name: "Firefox", value: 7.91 },
  { name: "Edge", value: 6.85 },
  { name: "Safari", value: 14.22 },
  { name: "Other", value: 2.17 },
]

const COLORS = ["#4f46e5", "#8b5cf6", "#ec4899", "#f43f5e", "#f97316"]

export function PieChartDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Browser Market Share</CardTitle>
        <CardDescription>Global browser usage statistics for 2023.</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => [`${value}%`, "Market Share"]}
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
