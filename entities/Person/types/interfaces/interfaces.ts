import { ICreditCard } from "../../../CreditCard/types/interfaces/interfaces";

export interface IPerson {
  name: string;
  age: string;
  dob: any;
  city: string;
  profession: string;
  cpf: string;
  cnpj: string;
  nif: string;
  certidao: string;
  phone: string;
  creditCard: ICreditCard;
  state: any;
}
