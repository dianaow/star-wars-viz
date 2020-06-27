import React, { useContext } from "react"
import { initialTooltipState, TooltipContext } from "../tooltip/TooltipContext"

const Circles = ({ data, keyAccessor, xAccessor, yAccessor, radius }) => {

  const { setTooltip } = useContext(TooltipContext)

  const mouseOver = (d) => {

    const x = xAccessor(d)
    const y = yAccessor(d)

    setTooltip({
      show: true,
      x: x,
      y: y,
      content: d
    })
  }

  const mouseOut = () => {
    setTooltip(initialTooltipState)
  }

  return(
    <React.Fragment>
      {data.map((d, i) => (
        <circle
          className="Circles__circle"
          key={keyAccessor(d, i)}
          cx={xAccessor(d, i)}
          cy={yAccessor(d, i)}
          r={5}
          onMouseOver={() => mouseOver(d)}
          onMouseOut={() => mouseOut()}
        />
      ))}
    </React.Fragment>
  )
}

export default Circles