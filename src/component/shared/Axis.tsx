import React, { FC } from "react"
import * as d3 from 'd3'

interface AxisProps {
  dimensions: {boundedWidth: number, boundedHeight: number},
  dimension: string
  label: string
  formatTick?: any
  scale?: any
}

const axisComponentsByDimension: any = {
  x: AxisHorizontal,
  y: AxisVertical,
} 

const Axis: FC<AxisProps> = ({ dimensions, dimension, ...props }) => {
  const Component = axisComponentsByDimension[dimension]
  if (!Component) return null

  return (
    <Component
      dimensions={dimensions}
      {...props}
    />
  )
}

Axis.defaultProps = {
  dimension: "x",
  formatTick: d3.format(","),
}

export default Axis

function AxisHorizontal ({ dimensions, label, formatTick, scale, ...props }: AxisProps) {
  const numberOfTicks = dimensions.boundedWidth < 600
        ? dimensions.boundedWidth / 100
        : dimensions.boundedWidth / 250

  const ticks: number[] = scale.ticks(numberOfTicks)

  return (
    <g className="Axis AxisHorizontal" transform={`translate(0, ${dimensions.boundedHeight})`} {...props}>
      <line
        className="Axis__line"
        x2={dimensions.boundedWidth}
      />

      {ticks.map((tick, i) => (
        <text
          key={tick}
          className="Axis__tick"
          transform={`translate(${scale(tick)}, 30)`}
          textAnchor="middle"
        >
          { formatTick(tick) }
        </text>
      ))}

      {label && (
        <text
          className="Axis__label"
          transform={`translate(${dimensions.boundedWidth / 2}, 60)`}
        >
          { label }
        </text>
      )}
    </g>
  )
}

function AxisVertical ({ dimensions, label, formatTick, scale, ...props }: AxisProps) {
  const numberOfTicks = dimensions.boundedHeight / 70

  const ticks: number[] = scale.ticks(numberOfTicks)

  return (
    <g className="Axis AxisVertical" {...props}>
      <line
        className="Axis__line"
        y2={dimensions.boundedHeight}
      />

      {ticks.map((tick, i) => (
        <text
          key={tick}
          className="Axis__tick"
          transform={`translate(-30, ${scale(tick)})`}
          textAnchor="middle"
        >
          { formatTick(tick) }
        </text>
      ))}

      {label && (
        <text
          className="Axis__label"
          style={{
            transform: `translate(-60px, ${dimensions.boundedHeight / 2}px) rotate(-90deg)`
          }}
        >
          { label }
        </text>
      )}
    </g>
  )
}