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
          top: `${y - 70}px`,
        }}
    >
      <div className='tooltip_title'>{content.name}</div>
      <div className='tooltip_subtitle'>{content.gender}</div>
    </div>
  )
}

export default Tooltip