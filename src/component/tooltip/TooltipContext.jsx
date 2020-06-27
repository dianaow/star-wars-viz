import * as React from "react"

export const initialTooltipState = {
  show: false,
  x: 0,
  y: 0,
  content: {name: "", gender: ""}
}

export const TooltipContext = React.createContext({
  tooltipState: initialTooltipState,
  setTooltip: () => null,
})

export function TooltipProvider(props) {
  const [tooltipState, setTooltip] = React.useState(initialTooltipState)

  return (
    <TooltipContext.Provider value={{ tooltipState, setTooltip }}>
      {props.children}
    </TooltipContext.Provider>
  )
}
