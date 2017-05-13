import { Component, OnInit, OnChanges } from '@angular/core';
import { Http, Response, Request, RequestOptions, RequestOptionsArgs, Headers} from '@angular/http';

declare var $: any;
let headers = new Headers({ 'X-Auth-Token': '14ce13ee90a64ddb9b2529c3a86c8415' });
let options = new RequestOptions({ headers: headers });

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.css']
})
export class LeagueTableComponent implements OnInit, OnChanges {
  leagueInfo = [];
  private _url: string = "http://api.football-data.org/v1/competitions/426/leagueTable";
  //437
  constructor(private _http: Http) { }
  leagueName = "";

  pushAll(arr, arr2){
      for(var i = 0; i < arr2.length; i++){
        arr[i] = arr2[i];
      }
  }

  changeLeague(){
    this._url = "http://api.football-data.org/v1/competitions/437/leagueTable";
    console.log("here");
  }

  leagueTable(){
    this._http.get(this._url, options)
            .map((res: Response) => res.json())
            .subscribe(res=> {
              this.pushAll(this.leagueInfo, res.standing);
              this.leagueName = res.leagueCaption;
            } );

  }

  ngOnInit() {
    this.leagueTable();
            // console.log(this.leagueInfo.length);
  }
  ngOnChanges() {
    if(this.changeLeague()){
      this.leagueTable();
    }
  }
}
