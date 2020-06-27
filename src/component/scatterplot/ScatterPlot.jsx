import React from "react"
import * as d3 from "d3"

import Circles from "../shared/Circles"
import Axis from "../shared/Axis"
import { combineChartDimensions } from "../shared/useChartDimensions";

const ScatterPlot = ({ data, xAccessor, yAccessor, xLabel, yLabel }) => {

  const dimensions = combineChartDimensions({width: 600, height: 600})

  const xScale = d3.scaleLinear()
    //.domain(d3.extent(data, xAccessor))
    .domain([0, 200])
    .range([0, dimensions.boundedWidth])
    .nice()

  const yScale = d3.scaleLinear()
    //.domain(d3.extent(data, yAccessor))
    .domain([0, 260])
    .range([dimensions.boundedHeight, 0])
    .nice()

  const xAccessorScaled = d => xScale(xAccessor(d))
  const yAccessorScaled = d => yScale(yAccessor(d))
  const keyAccessor = (d, i) => i
 
  return (
    <div className="ScatterPlot" >
      <svg width={dimensions.width} height={dimensions.height}>
        <g transform={`translate(${dimensions.marginLeft}, ${dimensions.marginTop})`}>
          <Axis
            dimensions={dimensions}
            dimension="x"
            scale={xScale}
            label={xLabel}
          />
          <Axis
            dimensions={dimensions}
            dimension="y"
            scale={yScale}
            label={yLabel}
          />
          <Circles
            data={data}
            keyAccessor={keyAccessor}
            xAccessor={xAccessorScaled}
            yAccessor={yAccessorScaled}
          />
        </g>
      </svg>
    </div>
  )
}

export default ScatterPlot