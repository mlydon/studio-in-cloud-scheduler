"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  {
    name: "Q1",
    marketing: 4000,
    sales: 2400,
    development: 2400,
    research: 1500,
  },
  {
    name: "Q2",
    marketing: 3000,
    sales: 1398,
    development: 2210,
    research: 1800,
  },
  {
    name: "Q3",
    marketing: 2000,
    sales: 9800,
    development: 2290,
    research: 2100,
  },
  {
    name: "Q4",
    marketing: 2780,
    sales: 3908,
    development: 2000,
    research: 2500,
  },
]

export function StackedBarChartDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Department Expenses</CardTitle>
        <CardDescription>Quarterly expenses by department.</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip
              formatter={(value) => [`$${value}`, ""]}
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                borderColor: "hsl(var(--border))",
                borderRadius: "var(--radius)",
                boxShadow: "var(--shadow)",
              }}
            />
            <Legend />
            <Bar dataKey="marketing" stackId="a" fill="#8b5cf6" radius={[0, 0, 0, 0]} />
            <Bar dataKey="sales" stackId="a" fill="#f43f5e" radius={[0, 0, 0, 0]} />
            <Bar dataKey="development" stackId="a" fill="#10b981" radius={[0, 0, 0, 0]} />
            <Bar dataKey="research" stackId="a" fill="#f59e0b" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
