import { logger } from "../../../util/Logger/Logger";
import { FingerprintCreator } from "../util/Fingerprint";

class FingerprintService {
  /**
   * Create Fingerprint
   */
  async create(): Promise<string | any> {
    logger.watch("Creating new Fingerprint");

    try {
      return await FingerprintCreator.FingerprintGenerator();
    } catch (e) {
      console.log(e);
    }
  }
}

export default new FingerprintService();
