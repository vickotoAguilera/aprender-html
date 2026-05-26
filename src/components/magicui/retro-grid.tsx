"use client"

import { cn } from "@/lib/utils"

interface RetroGridProps {
  className?: string
  angle?: number
  cellSize?: number
  opacity?: number
  lightLineColor?: string
  darkLineColor?: string
}

export function RetroGrid({
  className,
  angle = 65,
  cellSize = 60,
  opacity = 0.5,
  darkLineColor = "rgba(255,255,255,0.3)",
  lightLineColor = "rgba(0,0,0,0.15)",
}: RetroGridProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      style={{ opacity }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          perspective: "200px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "-50% 0 0 0",
            transformOrigin: "center bottom",
            transform: `rotateX(${angle}deg)`,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              width: "600%",
              height: "300%",
              marginLeft: "-200%",
              backgroundImage: `
                linear-gradient(to right, ${darkLineColor} 1px, transparent 0),
                linear-gradient(to bottom, ${darkLineColor} 1px, transparent 0)
              `,
              backgroundSize: `${cellSize}px ${cellSize}px`,
              animation: "retro-grid-scroll 12s linear infinite",
            }}
          />
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.1) 5%, transparent 80%)",
        }}
      />

      <style>{`
        @keyframes retro-grid-scroll {
          from { transform: translateY(-50%); }
          to { transform: translateY(0%); }
        }
      `}</style>
    </div>
  )
}