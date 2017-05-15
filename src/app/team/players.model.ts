export class Players{
  public contractUntil: string
  public age: number;
  public jerseyNumber: string;
  public name: string;
  public nationality: string;
  public position: string;

  constructor(contractUntil: string, age: number, jerseyNumber: string, name: string,
              nationality: string, position: string){
      this.contractUntil = contractUntil;
      this.age = age;
      this.jerseyNumber = jerseyNumber;
      this.name = name;
      this.nationality = nationality;
      this.position = position;
  }
}
