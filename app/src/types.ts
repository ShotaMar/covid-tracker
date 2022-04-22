//type
export type CountryDataType = {
    date: string,
    newConfirmed: number,
    totalConfirmed: number,
    newRecovered: number,
    totalRecovered: number
}

type CountriesJsonType = {
    Country: string,
    Slug: string
}[]

export type TopPageType = {
    countriesJson: CountriesJsonType,
    setCountry: React.Dispatch<React.SetStateAction<string>>,
    countryData: CountryDataType,
    loading: boolean
}

export type SelectorType = {
    countriesJson: CountriesJsonType,
    setCountry: React.Dispatch<React.SetStateAction<string>>
}

export type ResultType = {
    countryData: CountryDataType,
    loading: boolean
}

//interface
interface SingleCountryDataType {
    Country: string,
    NewConfirmed: number,
    TotalConfirmed: number
}

export interface AllCountryDataType extends Array<SingleCountryDataType> {}

export interface WorldPageType {
    allCountryData: Array<SingleCountryDataType>
}

export interface CardType {
    allCountryData: Array<SingleCountryDataType>
}