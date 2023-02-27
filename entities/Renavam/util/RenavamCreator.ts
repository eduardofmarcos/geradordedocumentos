export class RenavamCreator {
  constructor() {}

  public static RenavamGenerator(): Promise<string> {
    const result: string = this.gerarRenavam(null);

    return new Promise((resolve, reject): void => {
      resolve(result);
      reject("Something went wrong with Renavam creation!");
    });
  }

  public static RenavamValidator(valueToCheck: string): Promise<boolean> {
    const result = this.validarRenavam(valueToCheck);

    return new Promise((resolve, reject): void => {
      resolve(result);
      reject("Something went wrong with Renavam validation!");
    });
  }

  private static gerarRenavam(arrayDefined: any) {
    let Renavam = [];

    Renavam = arrayDefined ? arrayDefined : [];

    const firstDv = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    let firstDvAcc = 0;

    function getRandomArbitrary(min: any, max: any) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    if (!arrayDefined) {
      for (let i = 0; i <= 9; i++) {
        Renavam.push(getRandomArbitrary(0, 10));
      }
    }

    Renavam.forEach((el: any, index: any) => {
      firstDvAcc = firstDvAcc + el * firstDv[index];
    });

    let firstDVNumber = firstDvAcc % 11;
    firstDVNumber = 11 - firstDVNumber;
    const firstDvNumberToPush = firstDVNumber > 9 ? 0 : firstDVNumber;

    Renavam.push(firstDvNumberToPush);

    return `${Renavam[0]}${Renavam[1]}${Renavam[2]}${Renavam[3]}${Renavam[4]}${Renavam[5]}${Renavam[6]}${Renavam[7]}${Renavam[8]}${Renavam[9]}${Renavam[10]}`;
  }

  private static validarRenavam(valueToCheck: any) {
    const cleanData = valueToCheck.replace(/\D/g, "");
    const cleanDataArr = cleanData.split("");

    if (cleanDataArr.length !== 11) return false;

    const dv1 = cleanDataArr[10];
    const Renavam = cleanDataArr.slice(0, 10);
    const RenavamResult = this.gerarRenavam(Renavam);
    const clearRenavamResult = RenavamResult.replace(/\D/g, "");
    const dvToCheck1 = clearRenavamResult[10];

    return dv1 === dvToCheck1;
  }
}
