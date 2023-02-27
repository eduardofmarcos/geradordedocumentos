export class CpfCreator {
  constructor() {}

  public static cpfGenerator(): Promise<string> {
    const result: string = this.gerarCPF(null);

    return new Promise((resolve, reject): void => {
      resolve(result);
      reject("Something went wrong with CPF creation!");
    });
  }

  public static cpfValidator(valueToCheck: string): Promise<boolean> {
    const result = this.validarCpf(valueToCheck);

    return new Promise((resolve, reject): void => {
      resolve(result);
      reject("Something went wrong with CPF validation!");
    });
  }

  private static gerarCPF(arrayDefined: any) {
    let CPF = [];

    CPF = arrayDefined ? arrayDefined : [];

    const firstDv = [10, 9, 8, 7, 6, 5, 4, 3, 2];
    const secondDv = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

    let firstDvAcc = 0;
    let secondDvAcc = 0;

    function getRandomArbitrary(min: any, max: any) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    if (!arrayDefined) {
      for (let i = 0; i < 9; i++) {
        CPF.push(getRandomArbitrary(0, 10));
      }
    }

    CPF.forEach((el: any, index: any) => {
      firstDvAcc = firstDvAcc + el * firstDv[index];
    });

    let firstDVNumber: any = firstDvAcc % 11;

    firstDVNumber = firstDVNumber < 2 ? 0 : 11 - firstDVNumber;

    CPF.push(firstDVNumber);

    CPF.forEach((el: any, index: any) => {
      secondDvAcc = secondDvAcc + el * secondDv[index];
    });

    let secondDVNumber: any = secondDvAcc % 11;

    secondDVNumber = secondDVNumber < 2 ? 0 : 11 - secondDVNumber;

    CPF.push(secondDVNumber);

    return `${CPF[0]}${CPF[1]}${CPF[2]}.${CPF[3]}${CPF[4]}${CPF[5]}.${CPF[6]}${CPF[7]}${CPF[8]}-${CPF[9]}${CPF[10]}`;
  }

  private static validarCpf(valueToCheck: any) {
    const cleanData = valueToCheck.replace(/\D/g, "");
    const cleanDataArr = cleanData.split("");

    if (cleanDataArr.length !== 11) return false;

    const dv1 = cleanDataArr[9];
    const dv2 = cleanDataArr[10];
    const Cpf = cleanDataArr.slice(0, 9);
    const CpfResult = this.gerarCPF(Cpf);
    const clearCpfResult = CpfResult.replace(/\D/g, "");
    const dvToCheck1 = clearCpfResult[9];
    const dvToCheck2 = clearCpfResult[10];

    return dv1 === dvToCheck1 && dv2 === dvToCheck2;
  }
}
