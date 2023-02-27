import { IPerson } from "../types/interfaces/interfaces";
import { CpfCreator } from "../../Cpf/util/CpfCreator";
import { CertidaoCreator } from "../../Certidao/util/CertidaoCreator";
import { CCCreator } from "../../CreditCard/util/CCCreator";
import { CnpjCreator } from "../../Cnpj/util/CnpjCreator";
import { NifCreator } from "../../NifPortugal/util/NifCreator";

export class PersonCreator {
  constructor() {}

  public static PersonGenerator(): Promise<string> {
    const result: string | any = this.gerarPerson();

    return new Promise((resolve, reject): void => {
      resolve(result);
      reject("Something went wrong with Person creation!");
    });
  }

  private static async gerarPerson() {
    let random1 = Math.floor(this.getRandomArbitrary(0, 11));
    let random2 = Math.floor(this.getRandomArbitrary(0, 11));
    let random3 = Math.floor(this.getRandomArbitrary(0, 11));

    let cpf = await CpfCreator.cpfGenerator();
    let cpfDigit = Number(cpf[10]);

    let randomDate = this.randomDate(
      new Date(1950, 0, 1),
      new Date(2002, 0, 1)
    );
    let age = this.getAge(randomDate);

    let firstNames = [
      "Eduardo",
      "Gilberto",
      "Douglas",
      "Helen",
      "Sofia",
      "Joana",
      "Marcos",
      "Pedro",
      "Camila",
      "Mateus",
      "Isadora",
    ];
    let middleNames = [
      "Macan",
      "Berti",
      "Silva",
      "Souza",
      "Belenetti",
      "Benedet",
      "Casagrande",
      "Felippe",
      "De luca",
      "Machado",
      "Silvestre",
    ];
    let lastNames = [
      "Ramos",
      "Santos",
      "Oliveira",
      "Rodrigues",
      "Ferreira",
      "Alves",
      "Pereira",
      "Moura",
      "Monteiro",
      "Reis",
      "Rocha",
    ];
    let profession = [
      "Marcineiro(a)",
      "Mecânico(a)",
      "Programador(a)",
      "Eletrecista(a)",
      "Professor(a)",
      "Médico(a)",
      "Enfermeiro(a)",
      "Ajudante de Obra",
      "Gari",
      "Lixeiro(a)",
      "Dentista",
    ];
    // let finalCompany = ['LDTA', 'Eirielli', 'S.A']

    let stateObj: any = {
      stateGroups1: [
        "Distrito Federal",
        "Goiás",
        "Mato Grosso do Sul",
        "Tocantins",
      ],
      stateGroups2: [
        "Pará",
        "Amazonas",
        "Acre",
        "Amapá",
        "Rondônia",
        "Roraima",
      ],
      stateGroups3: ["Ceará", "Maranhão", "Piauí"],
      stateGroups4: ["Pernambuco", "Rio Grande do Norte", "Paraíba", "Alagoas"],
      stateGroups5: ["Bahia", "Sergipe"],
      stateGroups6: ["Minas Gerais"],
      stateGroups7: ["Rio De Janeiro", "Espírito Santo"],
      stateGroups8: ["São Paulo"],
      stateGroups9: ["Paraná", "Santa Catarina"],
      stateGroups0: ["Rio Grande do Sul"],
    };

    const person: IPerson = {
      name: `${firstNames[random1]} ${middleNames[random2]} ${lastNames[random3]}`,
      age: age.toString(),
      dob: randomDate.toLocaleDateString(),
      city: "CidadeTeste",
      state:
        stateObj["stateGroups" + cpfDigit][
          Math.floor(
            this.getRandomArbitrary(
              0,
              stateObj["stateGroups" + cpfDigit].length
            )
          )
        ],
      profession: profession[random2],
      cpf: cpf,
      cnpj: await CnpjCreator.CnpjGenerator(),
      nif: await NifCreator.NifGenerator(),
      certidao: await CertidaoCreator.CertidaoGenerator(),
      phone: "00 00000-0000",
      creditCard: await CCCreator.CCGenerator("VISA"),
    };

    return person;
  }

  private static getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  private static getAge(dateString: any) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  private static randomDate(start: any, end: any) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }
}
