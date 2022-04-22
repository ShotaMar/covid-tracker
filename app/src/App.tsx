import { useState, useEffect } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import countriesJson from './countries.json'
import TopPage from "./pages/TopPage";
import WorldPage from './pages/WorldPage';
import './App.css'
import { CountryDataType, AllCountryDataType } from './types';

const App = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [country, setCountry] = useState<string>('japan')
  const [countryData, setCountryData] = useState<CountryDataType>({
    date: '',
    newConfirmed: 0,
    totalConfirmed: 0,
    newRecovered: 0,
    totalRecovered: 0
  })
  const [allCountryData, setAllCountryData] = useState<AllCountryDataType>([{
    Country: '',
    NewConfirmed: 0,
    TotalConfirmed: 0
  }])
  
  useEffect(() => {
    const getCountryData = () => {
      setLoading(true)
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
        setLoading(false)
      }).catch(err => alert('エラーが発生しました。ページをリロードしてください'))
    }
    getCountryData()
  },[country])
  
  useEffect(() => {
    fetch('https://api.covid19api.com/summary')
        .then(res => res.json())
        .then(data => {
            setAllCountryData(data.Countries)
    }).catch(err => alert('エラーが発生しました。ページをリロードしてください'))
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TopPage countriesJson={countriesJson} setCountry={setCountry} countryData={countryData} loading={loading}/>}/>
        <Route path='/world' element={<WorldPage allCountryData={allCountryData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
