import { useState } from 'react'
import countriesJson from './countries.json'
import TopPage from "./pages/TopPage";


const App = () => {
  const [country, setCountry] = useState('')
  const [countryData, setCountryData] = useState({
    date: '',
    newConfirmed: 0,
    totalConfirmed: 0,
    newRecovered: 0,
    totalRecovered: 0
  })
  const getCountryData = () => {
    fetch(`https://api.covid19api.com/country/${country}`)
    .then(res => res.json())
    .then(data => {
      let latest = data.length -1
      let prev = data.length -2
      let latestConf = data[latest].Confirmed
      let prevConf = data[prev].Confirmed
      let latestRec = data[latest].Recovered
      let prevRec = data[prev].Recovered
      setCountryData({
        date: data[latest].Date,
        newConfirmed: latestConf - prevConf < 0 ? 0 : latestConf - prevConf,
        totalConfirmed: latestConf,
        newRecovered: latestRec - prevRec < 0 ? 0 : latestRec - prevRec,
        totalRecovered: latestRec
      })
    })
  }
  return (
    <div className="App">
      <TopPage countriesJson={countriesJson} setCountry={setCountry} getCountryData={getCountryData} countryData={countryData}/>
    </div>
  );
}

export default App;
