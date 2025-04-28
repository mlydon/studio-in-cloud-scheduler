"use client"

import { useEffect, useRef } from "react"

export function YearlyProgress() {
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

    // Data
    const data = [
      { year: "2024", steps: 12453, color: "#FF9F9B" },
      { year: "2023", steps: 10103, color: "#E0E0E0" },
    ]

    // Animation
    let animationProgress = 0
    const animationDuration = 1000 // ms
    const startTime = performance.now()

    function drawBars(progress: number) {
      ctx.clearRect(0, 0, rect.width, rect.height)

      const barHeight = 30
      const barSpacing = 40
      const maxWidth = rect.width - 100
      const maxSteps = Math.max(...data.map((d) => d.steps))

      data.forEach((item, index) => {
        const y = 30 + index * barSpacing

        // Year and steps text
        ctx.font = "bold 14px Arial"
        ctx.fillStyle = "#333"
        ctx.textAlign = "left"
        ctx.fillText(item.steps.toLocaleString() + " steps/day", 10, y - 10)

        ctx.font = "12px Arial"
        ctx.fillStyle = "#888"
        ctx.fillText(item.year, 10, y + barHeight + 15)

        // Bar background
        ctx.beginPath()
        ctx.roundRect(10, y, maxWidth, barHeight, 4)
        ctx.fillStyle = "#F5F5F5"
        ctx.fill()

        // Bar progress
        const barWidth = (item.steps / maxSteps) * maxWidth * progress
        ctx.beginPath()
        ctx.roundRect(10, y, barWidth, barHeight, 4)
        ctx.fillStyle = item.color
        ctx.fill()
      })
    }

    function animate(timestamp: number) {
      const elapsed = timestamp - startTime
      animationProgress = Math.min(elapsed / animationDuration, 1)

      drawBars(animationProgress)

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
