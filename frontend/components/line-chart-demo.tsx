"use client"

import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  {
    name: "Jan",
    mobile: 4000,
    desktop: 2400,
    tablet: 2400,
  },
  {
    name: "Feb",
    mobile: 3000,
    desktop: 1398,
    tablet: 2210,
  },
  {
    name: "Mar",
    mobile: 2000,
    desktop: 9800,
    tablet: 2290,
  },
  {
    name: "Apr",
    mobile: 2780,
    desktop: 3908,
    tablet: 2000,
  },
  {
    name: "May",
    mobile: 1890,
    desktop: 4800,
    tablet: 2181,
  },
  {
    name: "Jun",
    mobile: 2390,
    desktop: 3800,
    tablet: 2500,
  },
  {
    name: "Jul",
    mobile: 3490,
    desktop: 4300,
    tablet: 2100,
  },
]

export function LineChartDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Website Traffic by Device</CardTitle>
        <CardDescription>Daily unique visitors by device type.</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                borderColor: "hsl(var(--border))",
                borderRadius: "var(--radius)",
                boxShadow: "var(--shadow)",
              }}
            />
            <Line
              type="monotone"
              dataKey="desktop"
              stroke="#4f46e5"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="mobile"
              stroke="#f43f5e"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="tablet"
              stroke="#f97316"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
