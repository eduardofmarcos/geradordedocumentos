export interface IPasswordOptions {
  length?: number;
  numbers?: boolean;
  symbols?: boolean;
  lowercase?: boolean;
  uppercase?: boolean;
  excludeSimilarCharacters?: boolean;
  exclude?: string;
  strict?: boolean;
}
