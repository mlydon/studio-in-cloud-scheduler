"use client"

import { Bar, CartesianGrid, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  {
    name: "Jan",
    revenue: 4000,
    profit: 2400,
    growth: 24,
  },
  {
    name: "Feb",
    revenue: 3000,
    profit: 1398,
    growth: 18,
  },
  {
    name: "Mar",
    revenue: 2000,
    profit: 9800,
    growth: 22,
  },
  {
    name: "Apr",
    revenue: 2780,
    profit: 3908,
    growth: 30,
  },
  {
    name: "May",
    revenue: 1890,
    profit: 4800,
    growth: 20,
  },
  {
    name: "Jun",
    revenue: 2390,
    profit: 3800,
    growth: 25,
  },
]

export function MixedChartDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue & Growth</CardTitle>
        <CardDescription>Monthly revenue with growth rate trend.</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis
              yAxisId="left"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                borderColor: "hsl(var(--border))",
                borderRadius: "var(--radius)",
                boxShadow: "var(--shadow)",
              }}
            />
            <Bar yAxisId="left" dataKey="revenue" fill="url(#colorRevenue)" radius={[4, 4, 0, 0]} barSize={30} />
            <Bar yAxisId="left" dataKey="profit" fill="url(#colorProfit)" radius={[4, 4, 0, 0]} barSize={30} />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="growth"
              stroke="#10b981"
              strokeWidth={3}
              dot={{ r: 4, fill: "#10b981" }}
              activeDot={{ r: 6 }}
            />
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4f46e5" stopOpacity={1} />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.8} />
              </linearGradient>
              <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f43f5e" stopOpacity={1} />
                <stop offset="100%" stopColor="#fb7185" stopOpacity={0.8} />
              </linearGradient>
            </defs>
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
