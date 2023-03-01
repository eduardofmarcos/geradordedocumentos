import { logger } from "../../../util/Logger/Logger";
import { FingerprintCreator } from "../util/Fingerprint";

class FingerprintService {
  /**
   * Create Fingerprint
   */
  async create(ip: any): Promise<string | any> {
    logger.watch("Creating new Fingerprint");

    try {
      return await FingerprintCreator.FingerprintGenerator(ip);
    } catch (e) {
      console.log(e);
    }
  }

  async validate(valueToCheck: string): Promise<any> {
    logger.watch("Creating new Fingerprint");
    try {
      const resultOfValidation = await FingerprintCreator.fingerprintValidator(
        valueToCheck
      );

      const finalArray:any=[]

      function iterate(obj:any, stack:any) {
        for (var property in obj) {
            if (obj.hasOwnProperty(property)) {
                if (typeof obj[property] == "object") {
                    iterate(obj[property], stack + '.' + property);
                } else {
                    finalArray.push({[property]: obj[property]})
                }
            }
        }
    }
    
    iterate(resultOfValidation, '')


      return finalArray;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new FingerprintService();
