import { useEffect } from "react"
import { useState } from "react"

export default function App() {

  const [cityName, setCityName] = useState("Lomi")

  const [apiData, setApiData] = useState([])


  const API_KEY = "0d1e8f1cf9343d05617a780839262bc9"
  const apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`

  useEffect(() => {
    const callApi = async () => {
      try {
        const response = await fetch(apiEndpoint)
        const result = await response.json()
        setApiData(result)
      } catch (error) {
        setApiData({ name: "shio ox ox", main: { temp: 123 } })
      }
      return;
    }
    callApi()
  }, [])

  console.log(apiData)

  return (
    <>
      <div className="flex-col flex-center h-screen">
        <div className="w-[300px]">
          <div className="max-w-sm">
            <div className="card">
              <h1>WEATHER API <b>V3</b></h1>
            </div>
            <div className="card-red">
              <div>
                <span><b>City name:</b> {apiData.name}</span>
              </div>
              <div>
                <span><b>Temperature:</b> {(apiData.main?.temp - 273.15).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
