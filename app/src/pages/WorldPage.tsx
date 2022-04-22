import Card from "../components/Card"
import Header from "../components/Header"
import { WorldPageType } from "../types"


const WorldPage = ({allCountryData}: WorldPageType) => {
    return (
        <div className="world-page-container">
            <Header />
            <Card allCountryData={allCountryData} />
        </div>
    )
}

export default WorldPage