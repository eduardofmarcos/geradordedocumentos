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

  async validate(valueToCheck: string): Promise<string | any> {
    logger.watch("Creating new Fingerprint");
    try {
      const resultOfValidation = await FingerprintCreator.fingerprintValidator(
        valueToCheck
      );
      return resultOfValidation;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new FingerprintService();
