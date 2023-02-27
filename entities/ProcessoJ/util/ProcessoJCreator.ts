export class ProcessoJCreator {
  constructor() {}

  public static ProcessoJGenerator(): Promise<string> {
    const result: string = this.gerarProcessoJ();

    return new Promise((resolve, reject): void => {
      resolve(result);
      reject("Something went wrong with ProcessoJ creation!");
    });
  }

  private static gerarProcessoJ() {
    let ProcessoJ = [];

    function getRandomArbitrary(min: any, max: any) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    for (let i = 0; i <= 6; i++) {
      ProcessoJ.push(getRandomArbitrary(0, 10));
    }

    const extra = [5, 1, 5, 0, 0, 4, 9];
    const finalArray = ProcessoJ.concat(extra).toString();

    const cleanData = finalArray.replace(/^0+/, "");

    const cleanDataArr = cleanData.split(",");

    const sum = cleanDataArr.join("");
    const result = ((Number(sum) * 100) % 97).toString();
    const finalResult = 98 - Number(result);
    let ddv = finalResult.toString().split("");

    if (ddv.length === 1) {
      ddv[1] = ddv[0];
      ddv[0] = "0";
    }

    return `${ProcessoJ[0]}${ProcessoJ[1]}${ProcessoJ[2]}${ProcessoJ[3]}${ProcessoJ[4]}${ProcessoJ[5]}${ProcessoJ[6]}-${ddv[0]}${ddv[1]}.2014.${extra[0]}.${extra[1]}${extra[2]}.${extra[3]}${extra[4]}${extra[5]}${extra[6]}`;
  }
}
