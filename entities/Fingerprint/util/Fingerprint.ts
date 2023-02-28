// import ip from "ip";
import axios from "axios";
import { IGeoData } from "../types/interfaces/interfaces";
import whoiser, { WhoisSearchResult } from "whoiser";

export class FingerprintCreator {
  constructor() {}

  public static FingerprintGenerator(ip: any): Promise<string> {
    const result: any = this.gerarFingerprint(ip);

    return new Promise((resolve, reject): void => {
      resolve(result);
      reject("Something went wrong with Fingerprint creation!");
    });
  }

  public static fingerprintValidator(
    valueToCheck: string
  ): Promise<WhoisSearchResult> {
    const result = this.validarFingerprint(valueToCheck);

    return new Promise((resolve, reject): void => {
      resolve(result);
      reject("Something went wrong with CPF validation!");
    });
  }

  private static async gerarFingerprint(ip: any): Promise<IGeoData> {
    // const ipNumber: any = ip.address();

    const result = await axios.get(
      `https://api.ipgeolocation.io/ipgeo?apiKey=12e3ba0c0de9465caed1091bedb4c249&ip=${ip}`
    );

    const geoData: IGeoData = {
      ip: result.data.ip,
      continent_code: result.data.continent_code,
      continent_name: result.data.continent_name,
      country_code2: result.data.country_code2,
      country_code3: result.data.country_code3,
      country_name: result.data.country_name,
      country_capital: result.data.country_capital,
      state_prov: result.data.state_prov,
      district: result.data.district,
      city: result.data.city,
      zipcode: result.data.zipcode,
      latitude: result.data.latitude,
      longitude: result.data.longitude,
      calling_code: result.data.calling_code,
      country_flag: result.data.country_flag,
      isp: result.data.isp,
      currency: {
        code: result.data.currency.code,
        name: result.data.currency.name,
        symbol: result.data.currency.symbol,
      },
      time_zone: {
        name: result.data.time_zone.name,
        offset: result.data.time_zone.offset,
        current_time: result.data.time_zone.current_time,
        current_time_unix: result.data.time_zone.current_time_unix,
      },
    };

    return geoData;
  }

  private static validarFingerprint(valueToCheck: string) {
    const whoisDomain = whoiser(valueToCheck);
    return whoisDomain;
  }
}
