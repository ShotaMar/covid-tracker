import Header from "../components/Header"
import Result from "../components/Result"
import Selector from "../components/Selector"

const TopPage = ({countriesJson, setCountry, countryData, loading}) => {
    return (
        <div className="top-page-container">
            <div>
                <Header/>
                <Selector countriesJson={countriesJson} setCountry={setCountry} />
                <Result countryData={countryData} loading={loading}/>
            </div>
        </div>
    )
}

export default TopPage