import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, RequestOptions, RequestOptionsArgs, Headers} from '@angular/http';
import { TeamComponent } from '../team/team.component';

declare var $: any;
let headers = new Headers({ 'X-Auth-Token': '14ce13ee90a64ddb9b2529c3a86c8415' });
let options = new RequestOptions({ headers: headers });

declare var $: any;
declare var team: TeamComponent;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  leagueInfo = [];
  private _url: string = "http://api.football-data.org/v1/competitions/426/leagueTable";

  constructor(private _http: Http) { }

  pushAll(arr, arr2){
      for(var i = 0; i < arr2.length; i++){
        arr[i] = arr2[i];
      }
  }

  ngOnInit() {
    // this._http.get(this._url, options)
    //         .map((res: Response) => res.json())
    //         .subscribe(res=> this.pushAll(this.leagueInfo, res.standing));
    // console.log(this.leagueInfo);
  }
}
