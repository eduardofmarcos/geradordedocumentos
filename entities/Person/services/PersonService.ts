import { logger } from "../../../util/Logger/Logger";
import { PersonCreator } from "../util/PersonCreator";

class PersonService {
  /**
   * Create Person
   */
  async create(isPointed: boolean, qtd: string): Promise<string | any> {
    logger.watch("Creating new Person");

    try {
      let PersonArrayPointed = [];
      let PersonArray = [];
      let index = Number(qtd) > 1000 ? 1000 : qtd;

      for (let i: number = 0; i < index; i++) {
        let person = await PersonCreator.PersonGenerator();

        // if (!isPointed) {
        //     PersonArray.push(Person.replace(/\D/g, ''))
        // }

        PersonArrayPointed.push(person);
      }
      return PersonArrayPointed;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new PersonService();
