import React, { useState, useEffect } from "react"
import { getData, getSpeciesList } from "./component/utils/getData"
import ScatterPlot from "./component/scatterplot/ScatterPlot"
import useDropdown from "./component/dropdown/Dropdown"
import Tooltip from "./component/tooltip/Tooltip"
import { TooltipProvider } from "./component/tooltip/TooltipContext"

import "./App.css"

const massAccessor = d => d.mass
const heightAccessor = d => d.height

const App = () => {

  const [data, setData] = useState([])
  const [items, setItems] = useState([])
  const [value, DropDown] = useDropdown("Species", "https://swapi.dev/api/species/1/", items);

  useEffect(() => {

    getSpeciesList().then(response => {
      setItems(response.map((d) => ({ 
        label: d.name,
        value: d.url 
      })))
    });

  }, []);

  useEffect(() => {

    console.log(value)
    getData(value).then(response => {
      setData(response) 
    });

  }, [value, getData]);

  return (
    <TooltipProvider>
      <div className="App">
        <h1>
          Star Wars Universe
        </h1>
        <DropDown />
        <div className="App__charts">
          <ScatterPlot
            data={data}
            xAccessor={massAccessor}
            yAccessor={heightAccessor}
            xLabel="Mass"
            yLabel="Height"
          />
          <Tooltip />
        </div>
      </div>
    </TooltipProvider>
  )
}

export default App
