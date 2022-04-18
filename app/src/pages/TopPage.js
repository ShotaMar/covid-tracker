import Header from "../components/Header"
import Result from "../components/Result"
import Selector from "../components/Selector"

const TopPage = (props) => {
    const {countriesJson, setCountry, getCountryData, countryData} = props
    return (
        <div className="top-page-container">
            <Header/>
            <Selector countriesJson={countriesJson} setCountry={setCountry} getCountryData={getCountryData}/>
            <Result countryData={countryData}/>
        </div>
    )
}

export default TopPage