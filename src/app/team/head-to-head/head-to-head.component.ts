import { Component, OnChanges, Input, OnInit } from '@angular/core';
import { Results } from '../Results.model';
import { OtherTeams } from '../OtherTeams.model';
import { Http, Response, Request, RequestOptions, RequestOptionsArgs, Headers} from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';

declare var $: any;
let headers = new Headers({ 'X-Auth-Token': '14ce13ee90a64ddb9b2529c3a86c8415' });
let options = new RequestOptions({ headers: headers });

@Component({
  selector: 'app-head-to-head',
  templateUrl: './head-to-head.component.html',
  styleUrls: ['./head-to-head.component.css']
})
export class HeadToHeadComponent implements OnChanges {
  private teams = [];
  date = "";
  selectedResults: Results[] = []; //model for storing data for all results
  otherTeams: OtherTeams[] = [];
  rivalTeam = "";

  private _url: string = "http://api.football-data.org/v1/competitions/426/teams";
  private getTeamUrl: string = "";

  constructor(private _http: Http, private route: ActivatedRoute) { }

  getHeadToHead(teamName: string, rival: string){
    this.selectedResults = [];
    var count = 0;
    this._http.get(this._url, options)
      .map((res: Response) => res.json())
      .subscribe((res) => {
        this.teams = res.teams; //async call
        for(var i = 0; i < this.teams.length; i++){
          if(this.teams[i].name == teamName){
            var link = this.teams[i]._links.self.href;
            var split = link.split('/');
            var teamID = split[split.length -1]; //get team ID;

            //a second API call: this time for team results
            this.getTeamUrl =
            "http://api.football-data.org/v1/teams/" + teamID + "/fixtures";
            this._http.get(this.getTeamUrl, options)
              .map((res: Response) => res.json())
              .subscribe((res) => {
                for(var i = res.fixtures.length - 1; i >= 0; i--){
                    if(res.fixtures[i].status == "FINISHED"){
                      if(res.fixtures[i].awayTeamName == teamName
                        && res.fixtures[i].homeTeamName == rival){
                        var fulldate = res.fixtures[i].date;
                        var justDate = fulldate.split('T');
                        this.date = justDate[0];

                        this.selectedResults.push(new Results(teamName,
                        res.fixtures[i].homeTeamName, res.fixtures[i].result.goalsAwayTeam,
                        res.fixtures[i].result.goalsHomeTeam, res.fixtures[i].matchday, this.date));

                        count++;
                      }
                      else if(res.fixtures[i].homeTeamName == teamName && res.fixtures[i].awayTeamName == rival){

                        var fulldate = res.fixtures[i].date;
                        var justDate = fulldate.split('T');
                        this.date = justDate[0];

                        this.selectedResults.push(new Results(teamName,
                        res.fixtures[i].awayTeamName, res.fixtures[i].result.goalsHomeTeam,
                        res.fixtures[i].result.goalsAwayTeam, res.fixtures[i].matchday, this.date));

                        count++;
                      }
                    }
                }
              });
          }
        }
      });
  }

  getOtherTeams(teamName: string){
    this.selectedResults = [];
    this.otherTeams = [];
    var count = 0;
    this._http.get(this._url, options)
      .map((res: Response) => res.json())
      .subscribe((res) => {
        this.teams = res.teams; //async call
        for(var i = 0; i < this.teams.length; i++){
          if(this.teams[i].name != teamName){
              this.otherTeams.push(new OtherTeams(this.teams[i].crestUrl,
              this.teams[i].name));
          }
        }
        //console.log(this.otherTeams);
      });
  }

  getSelectedTeam(team: string){
      this.rivalTeam = team;
      this.getHeadToHead(this.nameOfTeam, this.rivalTeam);
  }

  @Input() nameOfTeam: string;

  ngOnChanges() {
      this.getOtherTeams(this.nameOfTeam);
      //console.log(this.rivalTeam);    
  }

  }
