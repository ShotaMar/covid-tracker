import { useState, useEffect } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import countriesJson from './countries.json'
import TopPage from "./pages/TopPage";
import WorldPage from './pages/WorldPage';


const App = () => {
  const [country, setCountry] = useState('')
  const [countryData, setCountryData] = useState({
    date: '',
    newConfirmed: 0,
    totalConfirmed: 0,
    newRecovered: 0,
    totalRecovered: 0
  })
  const [allCountryData, setAllCountryData] = useState([])
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
  
  useEffect(() => {
    console.log('test')
    fetch('https://api.covid19api.com/summary')
        .then(res => res.json())
        .then(data => {
            setAllCountryData(data.Countries)
    })
  },[])
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TopPage countriesJson={countriesJson} setCountry={setCountry} getCountryData={getCountryData} countryData={countryData}/>}/>
        <Route path='/world' element={<WorldPage allCountryData={allCountryData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
