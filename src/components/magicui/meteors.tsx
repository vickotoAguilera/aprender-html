"use client"

import React, { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface MeteorsProps {
  number?: number
  minDelay?: number
  maxDelay?: number
  minDuration?: number
  maxDuration?: number
  angle?: number
  className?: string
}

export const Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className,
}: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    []
  )

  useEffect(() => {
    const styles = [...new Array(number)].map(() => {
      const delay = Math.random() * (maxDelay - minDelay) + minDelay
      const duration = Math.floor(Math.random() * (maxDuration - minDuration) + minDuration)
      return {
        top: "-5%",
        left: `${Math.floor(Math.random() * 100)}%`,
        animationDelay: delay + "s",
        animationDuration: duration + "s",
      } as React.CSSProperties
    })
    setMeteorStyles(styles)
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle])

  return (
    <>
      <style>{`
        @keyframes meteor-fall {
          0% { transform: rotate(${-angle}deg) translateX(0); opacity: 1; }
          70% { opacity: 1; }
          100% { transform: rotate(${-angle}deg) translateX(-500px); opacity: 0; }
        }
      `}</style>
      {[...meteorStyles].map((style, idx) => (
        <span
          key={idx}
          style={{
            ...style,
            animation: `meteor-fall ${style.animationDuration || "5s"} linear ${style.animationDelay || "0s"} infinite`,
            position: "absolute",
          }}
          className={cn(
            "pointer-events-none h-0.5 w-0.5 rounded-full bg-zinc-500 shadow-[0_0_0_1px_#ffffff10]",
            className
          )}
        >
          {/* Meteor Tail */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-zinc-500 to-transparent" />
        </span>
      ))}
    </>
  )
}