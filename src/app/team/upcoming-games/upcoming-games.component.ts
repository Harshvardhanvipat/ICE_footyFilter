import { Component, OnChanges, Input } from '@angular/core';
import { UpcomingGames } from '../upcomingGames.model';
import { Http, Response, Request, RequestOptions, RequestOptionsArgs, Headers} from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import Chart from 'chart.js';

declare var $: any;
let headers = new Headers({ 'X-Auth-Token': '14ce13ee90a64ddb9b2529c3a86c8415' });
let options = new RequestOptions({ headers: headers });

@Component({
  selector: 'app-upcoming-games',
  templateUrl: './upcoming-games.component.html',
  styleUrls: ['./upcoming-games.component.css']
})

export class UpcomingGamesComponent implements OnChanges {
  private teams = [];
  date = "";
  upcomingGames: UpcomingGames[] = []; //model for storing data for all results

  private _url: string = "http://api.football-data.org/v1/competitions/426/teams";
  private getTeamUrl: string = "";

  constructor(private _http: Http, private route: ActivatedRoute) { }

  getAllGames(teamName: string){
    this.upcomingGames = [];
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
                    if(res.fixtures[i].status == "TIMED"){
                      if(res.fixtures[i].awayTeamName == teamName){

                        var fulldate = res.fixtures[i].date;
                        var justDate = fulldate.split('T');
                        this.date = justDate[0];

                        this.upcomingGames.push(new UpcomingGames(teamName,
                        res.fixtures[i].homeTeamName, res.fixtures[i].matchday, this.date));
                      }
                      else if(res.fixtures[i].homeTeamName == teamName){

                        var fulldate = res.fixtures[i].date;
                        var justDate = fulldate.split('T');
                        this.date = justDate[0];

                        this.upcomingGames.push(new UpcomingGames(teamName,
                        res.fixtures[i].awayTeamName, res.fixtures[i].matchday, this.date));
                      }
                    }
                }
                this.upcomingGames.reverse();
              });
          }
        }
      });
  }

  @Input() nameOfTeam: string;

  ngOnChanges() {
      this.getAllGames(this.nameOfTeam);
  }

  }
