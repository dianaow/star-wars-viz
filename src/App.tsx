import React, { useState, useEffect } from "react"
import { getData, getSpeciesList } from "./component/utils/getData"
import ScatterPlot from "./component/scatterplot/ScatterPlot"
import useDropdown from "./component/dropdown/Dropdown"
import Tooltip from "./component/tooltip/Tooltip"
import { TooltipProvider } from "./component/tooltip/TooltipContext"
import {Items} from './model/species'
import {Person} from './model/person'

import logo from "./assets/Star_Wars_Logo.png"
import "./App.css"

const massAccessor = (d: any) => d.mass
const heightAccessor = (d: any) => d.height

const App = () => {

  const [data, setData] = useState<Person[]>([])
  const [items, setItems] = useState<Items[]>([])
  const [value, DropDown] = useDropdown({label: "Pick a species", defaultValue: "http://swapi.dev/api/species/1/", items});

  useEffect(() => {

    getSpeciesList().then(response => {
      setItems(response.map((d) => ({ 
        label: d.name,
        value: d.url 
      })))
    });

  }, []);

  useEffect(() => {

    getData(value).then((response: any) => {
      setData(response) 
    });

  }, [value]);

  return (
    <TooltipProvider>
      <div className="App">
        <img src={logo} width="200px"/>
        <DropDown />
        <div className="App__charts">
          <ScatterPlot
            data={data}
            xAccessor={massAccessor}
            yAccessor={heightAccessor}
            xLabel="Mass (kg)"
            yLabel="Height (cm)"
          />
          <Tooltip />
        </div>
      </div>
    </TooltipProvider>
  )
}

export default App
