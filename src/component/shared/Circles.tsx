import React, { useContext, FC } from "react"
import { initialTooltipState, TooltipContext } from "../tooltip/TooltipContext"
import {Person} from '../../model/person';

interface CirclesProps {
  data: Person[];
  keyAccessor: any;
  xAccessor: any;
  yAccessor: any;
  radius: number;
}

const Circles: FC<CirclesProps>  = ({ data, keyAccessor, xAccessor, yAccessor, radius }) => {

  const { setTooltip } = useContext(TooltipContext)

  const mouseOver = (d: Person) => {

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
          r={radius}
          onMouseOver={() => mouseOver(d)}
          onMouseOut={() => mouseOut()}
        />
      ))}
    </React.Fragment>
  )
}

export default Circles