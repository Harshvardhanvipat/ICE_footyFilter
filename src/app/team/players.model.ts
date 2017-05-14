export class Players{
  public contractUntil: string
  public dateOfBirth: string;
  public jerseyNumber: string;
  public name: string;
  public nationality: string;
  public position: string;

  constructor(contractUntil: string, dateOfBirth: string, jerseyNumber: string, name: string,
              nationality: string, position: string){
      this.contractUntil = contractUntil;
      this.dateOfBirth = dateOfBirth;
      this.jerseyNumber = jerseyNumber;
      this.name = name;
      this.nationality = nationality;
      this.position = position;
  }
}
