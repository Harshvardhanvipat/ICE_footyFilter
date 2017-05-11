import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, RequestOptions, RequestOptionsArgs, Headers} from '@angular/http';
import { ActivatedRoute} from '@angular/router';
// import { SingleTeam } from './SingleTeam.model';

let headers = new Headers({ 'X-Auth-Token': '14ce13ee90a64ddb9b2529c3a86c8415' });
let options = new RequestOptions({ headers: headers });

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})

export class TeamComponent implements OnInit {
  public teamID;
  // oneTeam: SingleTeam[] = [];
  // private teams = [];
  // private id = [];
  // private _url: string = "http://api.football-data.org/v1/competitions/426/teams";
  // private getTeamUrl: string = "";

  constructor(private _http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.teamID = id;
      // this.getTeam();
  }

}
