import { logger } from "../../../util/Logger/Logger";
import { FingerprintCreator } from "../util/Fingerprint";

class FingerprintService {
  /**
   * Create Fingerprint
   */
  async create(ip:any): Promise<string | any> {
    logger.watch("Creating new Fingerprint");

    try {
      return await FingerprintCreator.FingerprintGenerator(ip);
    } catch (e) {
      console.log(e);
    }
  }
}

export default new FingerprintService();
