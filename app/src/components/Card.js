const Card = ({allCountryData}) => {
    return (
        <div>
            {allCountryData.map((singleData, index) => 
                <div key={index}>
                    <h2>{singleData.Country}</h2>
                    <p>新規感染者：{singleData.NewConfirmed.toLocaleString()}</p>
                    <p>新規回復者：{singleData.NewRecovered.toLocaleString()}</p>
                </div>
            )}
        </div>
    )
}

export default Card