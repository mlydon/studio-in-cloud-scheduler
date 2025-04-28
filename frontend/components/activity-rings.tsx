"use client"

import { useEffect, useRef } from "react"

export function ActivityRings() {
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

    // Ring configuration
    const rings = [
      { color: "#FF9F9B", progress: 0.94, width: 20 }, // Move (red/coral)
      { color: "#4CD964", progress: 0.61, width: 20 }, // Exercise (green)
      { color: "#5AC8FA", progress: 0.67, width: 20 }, // Stand (blue)
    ]

    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const maxRadius = Math.min(centerX, centerY) - 10

    // Animation
    let animationProgress = 0
    const animationDuration = 1000 // ms
    const startTime = performance.now()

function drawRings(progress: number) {
  if (!ctx) return; // Add this null check
  ctx.clearRect(0, 0, rect.width, rect.height)
  // ...
}


      // Draw rings from outside to inside
      rings.forEach((ring, index) => {
        const radius = maxRadius - index * 30
        const ringWidth = ring.width

        // Background ring (lighter version of the color)
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
        ctx.strokeStyle = ring.color + "33" // Add transparency
        ctx.lineWidth = ringWidth
        ctx.stroke()

        // Progress ring with animation
   	function drawRings(progress: number) {
  if (!ctx) return;
  ctx.clearRect(0, 0, rect.width, rect.height)

  // Draw rings from outside to inside
  rings.forEach((ring, index) => {
    // ... existing code ...
    
    // Progress ring with animation
    const currentProgress = ring.progress * progress  // This is where the error is
    // ... rest of the code ...
  });
} 
        const startAngle = -Math.PI / 2 // Start from top
        const endAngle = startAngle + currentProgress * Math.PI * 2

        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, startAngle, endAngle)
        ctx.strokeStyle = ring.color
        ctx.lineWidth = ringWidth
        ctx.lineCap = "round"
        ctx.stroke()
      })
    }

    function animate(timestamp: number) {
      const elapsed = timestamp - startTime
      animationProgress = Math.min(elapsed / animationDuration, 1)

      drawRings(animationProgress)

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

  return <canvas ref={canvasRef} className="h-full w-full" style={{ touchAction: "none" }} />
}
