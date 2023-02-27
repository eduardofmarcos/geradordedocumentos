export interface IGeoData{

    ip:string,
    continent_code: string,
    continent_name:string,
    country_code2: string,
    country_code3: string,
    country_name: string,
    country_capital: string,
    state_prov: string,
    district: string,
    city: string,
    zipcode: string,
    latitude: string,
    longitude: string,
    calling_code: string,
    country_flag: string,
    isp: string,
    currency: IGeoCurency
    time_zone:IGeoTimeZone
}

interface IGeoCurency{
    code: string,
    name: string,
    symbol: string
}

interface IGeoTimeZone{
    name: string,
    offset: number,
    current_time: string,
    current_time_unix: number,
}
