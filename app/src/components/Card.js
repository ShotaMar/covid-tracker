const Card = ({allCountryData}) => {
    return (
        <div className='card-container'>
            {allCountryData.map((singleData, index) => 
                <div key={index} className='card'>
                    <h2>{singleData.Country}</h2>
                    <p>新規感染者：<span>{singleData.NewConfirmed.toLocaleString()}</span></p>
                    <p>新規回復者：<span>{singleData.NewRecovered.toLocaleString()}</span></p>
                </div>
            )}
        </div>
    )
}

export default Card