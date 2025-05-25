//Interfaz
export interface Country {
  name: {
    common: string;
    official: string;
  };
  capital: string[];
  population: number;
  flags: {
    svg: string;
    png: string;
  };
}
