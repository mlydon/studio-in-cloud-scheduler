"use client"

import { useEffect, useRef } from "react"

export function StepsChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with higher resolution for retina displays
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // Data for the week
    const data = [
      { day: "Mon", steps: 10200 },
      { day: "Tue", steps: 11500 },
      { day: "Wed", steps: 12800 },
      { day: "Thu", steps: 9800 },
      { day: "Fri", steps: 10500 },
      { day: "Sat", steps: 14200 },
      { day: "Sun", steps: 11300 },
    ]

    const averageSteps = 12343
    const maxSteps = Math.max(...data.map((d) => d.steps), averageSteps)
    const padding = { top: 20, right: 10, bottom: 30, left: 10 }
    const chartWidth = rect.width - padding.left - padding.right
    const chartHeight = rect.height - padding.top - padding.bottom
    const barWidth = (chartWidth / data.length) * 0.7
    const barSpacing = (chartWidth / data.length) * 0.3

    // Animation
    let animationProgress = 0
    const animationDuration = 1000 // ms
    const startTime = performance.now()

    function drawChart(progress: number) {
      ctx.clearRect(0, 0, rect.width, rect.height)

      // Draw average line
      const averageY = padding.top + chartHeight - (averageSteps / maxSteps) * chartHeight * progress
      ctx.beginPath()
      ctx.moveTo(padding.left, averageY)
      ctx.lineTo(rect.width - padding.right, averageY)
      ctx.setLineDash([5, 5])
      ctx.strokeStyle = "#FF9F9B88"
      ctx.lineWidth = 1
      ctx.stroke()
      ctx.setLineDash([])

      // Draw average text
      ctx.font = "10px Arial"
      ctx.fillStyle = "#888"
      ctx.textAlign = "left"
      ctx.fillText("Average Steps", padding.left, averageY - 5)
      ctx.fillText(averageSteps.toLocaleString(), padding.left, averageY + 15)

      // Draw bars
      data.forEach((item, index) => {
        const x = padding.left + (barWidth + barSpacing) * index + barSpacing / 2
        const barHeight = (item.steps / maxSteps) * chartHeight * progress
        const y = padding.top + chartHeight - barHeight

        // Bar
        ctx.beginPath()
        ctx.roundRect(x, y, barWidth, barHeight, 4)
        ctx.fillStyle = "#FF9F9B"
        ctx.fill()

        // Day label
        ctx.font = "10px Arial"
        ctx.fillStyle = "#888"
        ctx.textAlign = "center"
        ctx.fillText(item.day, x + barWidth / 2, rect.height - 10)
      })
    }

    function animate(timestamp: number) {
      const elapsed = timestamp - startTime
      animationProgress = Math.min(elapsed / animationDuration, 1)

      drawChart(animationProgress)

      if (animationProgress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)

    // Cleanup
    return () => {
      // No cleanup needed for canvas
    }
  }, [])

  return <canvas ref={canvasRef} className="h-32 w-full" style={{ touchAction: "none" }} />
}
