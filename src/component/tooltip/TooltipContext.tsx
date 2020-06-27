import React, { useState, createContext } from "react"
import {Person} from '../../model/person';

interface TT {
  show: boolean
  x: number
  y: number
  content: Person
}

export const initialTooltipState: TT = {
  show: false,
  x: 0,
  y: 0,
  content: {name: "", gender: "", mass: 0, height: 0}
}

export const TooltipContext = createContext<{
  tooltipState: TT
  setTooltip: React.Dispatch<TT>
}>({
  tooltipState: initialTooltipState,
  setTooltip: () => null,
})

export function TooltipProvider(props: any) {
  const [tooltipState, setTooltip] = useState(initialTooltipState)

  return (
    <TooltipContext.Provider value={{ tooltipState, setTooltip }}>
      {props.children}
    </TooltipContext.Provider>
  )
}
