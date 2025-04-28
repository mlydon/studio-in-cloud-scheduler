"use client"

import { useEffect, useRef } from "react"

export function ActiveEnergy() {
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

    // Generate random data for the last 30 days
    const data = Array.from({ length: 30 }, () => Math.floor(Math.random() * 600) + 600)

    const maxValue = Math.max(...data) * 1.2 // Add some headroom
    const barWidth = (rect.width / data.length) * 0.8
    const barSpacing = (rect.width / data.length) * 0.2
    const chartHeight = rect.height - 40

    // Animation
    let animationProgress = 0
    const animationDuration = 1000 // ms
    const startTime = performance.now()

  function drawChart(progress: number) {
  if (!ctx) return; // Add this null check
  ctx.clearRect(0, 0, rect.width, rect.height)  
   

      // Draw average text
      ctx.font = "bold 24px Arial"
      ctx.fillStyle = "#333"
      ctx.textAlign = "left"
      ctx.fillText("1,254", 10, 25)

      ctx.font = "12px Arial"
      ctx.fillStyle = "#888"
      ctx.fillText("kcal/day", 90, 25)

      // Draw bars
      data.forEach((value, index) => {
        const x = barSpacing / 2 + (barWidth + barSpacing) * index
        const barHeight = (value / maxValue) * chartHeight * progress
        const y = rect.height - barHeight

        // Create gradient
        const gradient = ctx.createLinearGradient(x, y, x, rect.height)
        gradient.addColorStop(0, "#FF9F9B")
        gradient.addColorStop(1, "#FF7B6B")

        // Bar
        ctx.beginPath()
        ctx.roundRect(x, y, barWidth, barHeight, 2)
        ctx.fillStyle = gradient
        ctx.fill()
      })

      // Highlight last bar
      const lastIndex = data.length - 1
      const x = barSpacing / 2 + (barWidth + barSpacing) * lastIndex
      const barHeight = (data[lastIndex] / maxValue) * chartHeight * progress
      const y = rect.height - barHeight

      ctx.beginPath()
      ctx.roundRect(x, y, barWidth, barHeight, 2)
      ctx.fillStyle = "#FF5E50"
      ctx.fill()
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

  return <canvas ref={canvasRef} className="h-40 w-full" style={{ touchAction: "none" }} />
}
