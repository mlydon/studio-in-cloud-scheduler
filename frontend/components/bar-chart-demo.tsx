"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  {
    name: "Jan",
    total: 4000,
    sales: 2400,
    returns: 1600,
  },
  {
    name: "Feb",
    total: 3000,
    sales: 1398,
    returns: 1000,
  },
  {
    name: "Mar",
    total: 2000,
    sales: 9800,
    returns: 1200,
  },
  {
    name: "Apr",
    total: 2780,
    sales: 3908,
    returns: 1400,
  },
  {
    name: "May",
    total: 1890,
    sales: 4800,
    returns: 1000,
  },
  {
    name: "Jun",
    total: 2390,
    sales: 3800,
    returns: 1700,
  },
  {
    name: "Jul",
    total: 3490,
    sales: 4300,
    returns: 1100,
  },
  {
    name: "Aug",
    total: 4000,
    sales: 2400,
    returns: 1600,
  },
  {
    name: "Sep",
    total: 3000,
    sales: 1398,
    returns: 1000,
  },
  {
    name: "Oct",
    total: 2000,
    sales: 9800,
    returns: 1200,
  },
  {
    name: "Nov",
    total: 2780,
    sales: 3908,
    returns: 1400,
  },
  {
    name: "Dec",
    total: 1890,
    sales: 4800,
    returns: 1000,
  },
]

export function BarChartDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Revenue</CardTitle>
        <CardDescription>A comparison of sales and returns by month.</CardDescription>
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
            <Bar dataKey="sales" fill="url(#colorSales)" radius={[4, 4, 0, 0]} barSize={30} />
            <Bar dataKey="returns" fill="url(#colorReturns)" radius={[4, 4, 0, 0]} barSize={30} />
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4f46e5" stopOpacity={1} />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.8} />
              </linearGradient>
              <linearGradient id="colorReturns" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f43f5e" stopOpacity={1} />
                <stop offset="100%" stopColor="#fb7185" stopOpacity={0.8} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
