export class Results{
  public teamName: string
  public rival: string;
  public myresult: string;
  public rivalresult: string;
  public matchday: string;
  public date: string;

  constructor(teamName: string, rival: string, myresult: string, rivalresult: string,
              matchday: string, date: string){
      this.teamName = teamName;
      this.rival = rival;
      this.myresult = myresult;
      this.rivalresult = rivalresult;
      this.matchday = matchday;
      this.date = date;
  }
}
