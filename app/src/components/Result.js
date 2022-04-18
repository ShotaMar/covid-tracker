const Result = ({countryData}) => {
    return (
        <div className="result-container">
            <p>日付：<span>{countryData.date.slice(0, 10)}</span></p>
            <p>新規感染者：<span>{countryData.newConfirmed.toLocaleString()}</span></p>
            <p>感染者総数：<span>{countryData.totalConfirmed.toLocaleString()}</span></p>
            <p>新規回復者：<span>{countryData.newRecovered.toLocaleString()}</span></p>
            <p>回復者総数：<span>{countryData.totalRecovered.toLocaleString()}</span></p>
        </div>
    )
}

export default Result