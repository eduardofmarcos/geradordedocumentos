export class RgRJCreator {
  constructor() {}

  public static RgRJGenerator(): Promise<string> {
    const result: string = this.gerarRgRJ(null);

    return new Promise((resolve, reject): void => {
      resolve(result);
      reject("Something went wrong with RgRJ creation!");
    });
  }

  public static RgRJValidator(valueToCheck: string): Promise<boolean> {
    const result = this.validarRgRJ(valueToCheck);

    return new Promise((resolve, reject): void => {
      resolve(result);
      reject("Something went wrong with RgRJ validation!");
    });
  }

  private static gerarRgRJ(arrayDefined: any) {
    let RgRJ = [];

    RgRJ = arrayDefined ? arrayDefined : [];

    const firstDv = [2, 1, 2, 1, 2, 1, 2];

    let firstDvAcc = 0;

    function getRandomArbitrary(min: any, max: any) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    if (!arrayDefined) {
      for (let i = 0; i <= 6; i++) {
        RgRJ.push(getRandomArbitrary(0, 10));
      }
    }

    RgRJ.forEach((el: any, index: any) => {
      if (el * firstDv[index] > 9) {
        let sum = el * firstDv[index];
        let num1 = sum.toString()[0];
        let num2 = sum.toString()[1];
        sum = Number(num1) + Number(num2);

        firstDvAcc = firstDvAcc + sum;
      } else {
        firstDvAcc = firstDvAcc + el * firstDv[index];
      }
    });

    let firstNumToSum = Number(firstDvAcc.toString()[0]);

    let secNumToSumConcat = Number((firstNumToSum + 1).toString() + 0);

    let firstDVNumber: any = secNumToSumConcat - firstDvAcc;
    if (firstDVNumber === 10) firstDVNumber = 0;

    RgRJ.push(firstDVNumber);

    return `${RgRJ[0]}${RgRJ[1]}${RgRJ[2]}${RgRJ[3]}${RgRJ[4]}${RgRJ[5]}${RgRJ[6]}-${RgRJ[7]}`;
  }

  private static validarRgRJ(valueToCheck: any) {
    const cleanData = valueToCheck.replace(/\D/g, "");
    const cleanDataArr = cleanData.split("");

    if (cleanDataArr.length !== 8) return false;

    const dv1 = cleanDataArr[7];
    const RgRJ = cleanDataArr.slice(0, 7);
    const RgRJResult = this.gerarRgRJ(RgRJ);
    const clearRgRJResult = RgRJResult.replace(/\D/g, "");
    const dvToCheck1 = clearRgRJResult[7];

    return dv1 === dvToCheck1;
  }
}
