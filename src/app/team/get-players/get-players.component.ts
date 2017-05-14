import { Component, OnChanges, Input } from '@angular/core';
import { Http, Response, Request, RequestOptions, RequestOptionsArgs, Headers} from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Players } from '../players.model';

let headers = new Headers({ 'X-Auth-Token': '14ce13ee90a64ddb9b2529c3a86c8415' });
let options = new RequestOptions({ headers: headers });

@Component({
  selector: 'app-get-players',
  templateUrl: './get-players.component.html',
  styleUrls: ['./get-players.component.css']
})
export class GetPlayersComponent implements OnChanges {
  private teams = [];
  private players: Players[] = [];
  private _url: string = "http://api.football-data.org/v1/competitions/426/teams";
  private getTeamUrl: string = "";
  constructor(private _http: Http, private route: ActivatedRoute) { }

  ngOnChanges() {
    // this.lastGameResult(this.nameOfTeam);
    this.getPlayer("Chelsea FC");
  }

  @Input() nameOfTeam: string;

  getPlayer(teamName: string){
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
            "http://api.football-data.org/v1/teams/" + teamID + "/players";

            //a second API call: this time for team results
            this._http.get(this.getTeamUrl, options)
              .map((res: Response) => res.json())
              .subscribe((res) => {
                //console.log(res.players);
                for(var k = 0; k < res.players.length; k++){
                  this.players.push(new Players(
                    res.players[k].contractUntil,
                    res.players[k].dateOfBirth,
                    res.players[k].jerseyNumber,
                    res.players[k].name,
                    res.players[k].nationality,
                    res.players[k].position,
                  ))
                }
              });
          }
        }
      });
  }

}
