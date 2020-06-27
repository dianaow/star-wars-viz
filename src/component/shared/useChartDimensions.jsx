export const combineChartDimensions = dimensions => {
  let parsedDimensions = {
    marginTop: 20,
    marginRight: 20,
    marginBottom: 80,
    marginLeft: 80,
    ...dimensions,
  }

  return {
    ...parsedDimensions,
    boundedHeight: Math.max(parsedDimensions.height - parsedDimensions.marginTop - parsedDimensions.marginBottom, 0),
    boundedWidth: Math.max(parsedDimensions.width - parsedDimensions.marginLeft - parsedDimensions.marginRight, 0),
  }
}
