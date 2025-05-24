"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-dark-400/30 bg-dark-300/50 px-3 py-2 text-sm ring-offset-dark-100 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-dark-400/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
