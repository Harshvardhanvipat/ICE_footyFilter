import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, RequestOptions, RequestOptionsArgs, Headers} from '@angular/http';
import { FootballService } from './../football.service';

declare var $: any;
let headers = new Headers({ 'X-Auth-Token': '14ce13ee90a64ddb9b2529c3a86c8415' });
let options = new RequestOptions({ headers: headers });

@Component({
  selector: 'app-api',
  // template: `<ul *ngFor="let team of teamName">
  //             <li>{{team.teamName}}</li>
  //           </ul>`,
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
  providers: [FootballService]
})
export class ApiComponent implements OnInit {
  leagueInfo = [];

  private _url: string = "http://api.football-data.org/v1/competitions/426/leagueTable";

  constructor(private _http: Http) { }

  pushAll(arr, arr2){
      for(var i = 0; i < arr2.length; i++){
        arr[i] = arr2[i];
      }
  }

  ngOnInit() {
    // this._footyService.getLeagueTable()
    //   .subscribe(res => console.log(res));
    this._http.get(this._url, options)
            .map((res: Response) => res.json())
            .subscribe(res=> this.pushAll(this.leagueInfo, res.standing));
    console.log(this.leagueInfo);
  }
}
