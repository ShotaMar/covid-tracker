import Card from "../components/Card"
import Header from "../components/Header"

const WorldPage = ({allCountryData}) => {
    return (
        <div>
            <Header />
            <Card allCountryData={allCountryData} />
        </div>
    )
}

export default WorldPage