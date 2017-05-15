import { Component, OnChanges, Input } from '@angular/core';
import { Http, Response, Request, RequestOptions, RequestOptionsArgs, Headers} from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';

let headers = new Headers({ 'X-Auth-Token': '14ce13ee90a64ddb9b2529c3a86c8415' });
let options = new RequestOptions({ headers: headers });

@Component({
  selector: 'app-last-game',
  templateUrl: './lastgame.component.html',
  styleUrls: ['./lastgame.component.css']
})


export class LastGameComponent implements OnChanges {
  private teams = [];

  myTeam =  "";
  rivalTeam = "";
  myTeamResult = ""; //to store result of last game of my team
  rivalResult = "";
  matchday = "";
  singleDate = "";
  date = "";
  id = "";
  myLogo = "";
  rivalLogo= "";

  private _url: string = "http://api.football-data.org/v1/competitions/426/teams";
  private getTeamUrl: string = "";

  constructor(private _http: Http, private route: ActivatedRoute) { }

  lastGameResult(teamName: string){
    this._http.get(this._url, options)
      .map((res: Response) => res.json())
      .subscribe((res) => {
        this.teams = res.teams; //async call
        for(var i = 0; i < this.teams.length; i++){
          if(this.teams[i].name == teamName){
            var link = this.teams[i]._links.self.href;
            var split = link.split('/');
            var teamID = split[split.length -1]; //get team ID;

            this.getTeamUrl =
            "http://api.football-data.org/v1/teams/" + teamID + "/fixtures";

            //a second API call: this time for team results
            this._http.get(this.getTeamUrl, options)
              .map((res: Response) => res.json())
              .subscribe((res) => {
                // console.log(res);
                for(var i = res.fixtures.length - 1; i >= 0; i--){
                  if(res.fixtures[i].status == "FINISHED"){
                    if(res.fixtures[i].awayTeamName == teamName){
                      this.myTeam = teamName;
                      this.rivalTeam = res.fixtures[i].homeTeamName;
                      this.myTeamResult = res.fixtures[i].result.goalsAwayTeam;
                      this.rivalResult = res.fixtures[i].result.goalsHomeTeam;
                      this.matchday = res.fixtures[i].matchday;
                      var fulldate = res.fixtures[i].date;
                      var justDate = fulldate.split('T');                                            
                      this.singleDate = justDate[0];
                    }
                    else if(res.fixtures[i].homeTeamName == teamName){
                      this.myTeam = teamName;
                      this.rivalTeam = res.fixtures[i].awayTeamName;
                      this.myTeamResult = res.fixtures[i].result.goalsHomeTeam;
                      this.rivalResult = res.fixtures[i].result.goalsAwayTeam;
                      this.matchday = res.fixtures[i].matchday;
                      var fulldate = res.fixtures[i].date;
                      var justDate = fulldate.split('T');
                      this.singleDate = justDate[0];
                    }
                    break;
                  }
                }
              });
          }
        }
      });
  }

  @Input() nameOfTeam: string;

  ngOnChanges() {
    this.lastGameResult(this.nameOfTeam);
  }

}
