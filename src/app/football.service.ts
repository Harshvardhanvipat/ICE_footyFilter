import { Injectable } from '@angular/core';
import { Http, Response, Request, RequestOptions, RequestOptionsArgs, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

let headers = new Headers({ 'X-Auth-Token': '14ce13ee90a64ddb9b2529c3a86c8415' });
let options = new RequestOptions({ headers: headers });

@Injectable()
export class FootballService {
  private _url: string = "http://api.football-data.org/v1/competitions/426/leagueTable";
  constructor(private _http: Http) { }

  getLeagueTable(){
    return this._http.get(this._url, options)
            .map((res: Response) => res.json());
  }
}
