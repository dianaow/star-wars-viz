import React, { useContext } from "react"
import { TooltipContext } from "../tooltip/TooltipContext"
import "./Tooltip.css"

const Tooltip = () => {

  const { tooltipState } = useContext(TooltipContext)
  const { x, y, show, content } = tooltipState

  return (
    <div className="tooltip"
        style={{ 
          visibility: show ? 'visible' : 'hidden',
          left: `${x}px`,
          top: `${y}px`,
        }}
    >
      <h4>{content.name}</h4>
      <p>{content.gender}</p>
    </div>
  )
}

export default Tooltip