import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, RequestOptions, RequestOptionsArgs, Headers} from '@angular/http';
import { UpcomingGames } from '/Users/Tauqir/Desktop/footy-filter/src/app/team/upcomingGames.model'
declare var $: any;
let headers = new Headers({ 'X-Auth-Token': '14ce13ee90a64ddb9b2529c3a86c8415' });
let options = new RequestOptions({ headers: headers });

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.css']
})
export class LeagueTableComponent implements OnInit{
  leagueInfo = [];
  allUpcomingGames: UpcomingGames[] = [];
  flag = false;
  visible: boolean;
  private _url: string = "http://api.football-data.org/v1/competitions/426/leagueTable";
  //437
  constructor(private _http: Http) { }
  leagueName = "";
  noGames = "";

  pushAll(arr, arr2){
      for(var i = 0; i < arr2.length; i++){
        arr[i] = arr2[i];
      }
  }

  leagueTable(){
    this._http.get(this._url, options)
            .map((res: Response) => res.json())
            .subscribe(res=> {
              this.pushAll(this.leagueInfo, res.standing);
              this.leagueName = res.leagueCaption;
            } );
    this.visible = true;
  }

  changeLeague(){
    let button = document.getElementById('btn').innerText;
    if(this.flag === false){
      button = document.getElementById('btn').innerHTML = "EPL LEAGUE TABLE"
      this._url = "http://api.football-data.org/v1/competitions/426/fixtures";
      this._http.get(this._url, options)
              .map((res: Response) => res.json())
              .subscribe(res=> {
                for(var i = 0; i< res.fixtures.length; i++){
                    if(res.fixtures[i].status == "TIMED"){
                      let fulldate = res.fixtures[i].date;
                      let justDate = fulldate.split('T');
                      let date = justDate[0];
                      this.allUpcomingGames.push(new UpcomingGames(
                        res.fixtures[i].homeTeamName,
                        res.fixtures[i].awayTeamName,
                        res.fixtures[i].matchday,
                        date
                      ));
                    }
                    else if(this.allUpcomingGames == null){
                      this.noGames = "No upcoming games available."
                    }
                }
              });
        this.flag = true;
        this.visible = false;
    }
    else{
      button = document.getElementById('btn').innerHTML = "UPCOMING GAMES"
      console.log(this.flag);
      this._url = "http://api.football-data.org/v1/competitions/426/leagueTable";
      this._http.get(this._url, options)
              .map((res: Response) => res.json())
              .subscribe(res=> {
                this.pushAll(this.leagueInfo, res.standing);
                this.leagueName = res.leagueCaption;
              });
      this.flag = false;
      this.leagueInfo = [];
      this.visible = true;
    }
  }

  ngOnInit() {
    this.leagueTable();
  }
}
