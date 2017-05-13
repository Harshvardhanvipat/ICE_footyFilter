export class UpcomingGames{
  public teamName: string
  public rival: string;
  public matchday: string;
  public date: string;

  constructor(teamName: string, rival: string, matchday: string, date: string){
      this.teamName = teamName;
      this.rival = rival;
      this.matchday = matchday;
      this.date = date;
  }

}
