import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, RequestOptions, RequestOptionsArgs, Headers} from '@angular/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SingleTeam } from '../team/SingleTeam.model';

let headers = new Headers({ 'X-Auth-Token': '14ce13ee90a64ddb9b2529c3a86c8415' });
let options = new RequestOptions({ headers: headers });

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  oneTeam: SingleTeam[] = [];
  private teams = [];
  private id = [];
  private _url: string = "http://api.football-data.org/v1/competitions/426/teams";
  private getTeamUrl: string = "";

  constructor(private _http: Http, private router: Router) { }

  getTeam(){
    this._http.get(this._url, options)
      .map((res: Response) => res.json())
      .subscribe((res) => {
        this.teams = res.teams; //async call
        console.log(this.teams);
        for(var i = 0; i < this.teams.length; i++){
          var link = this.teams[i]._links.self.href;
          var split = link.split('/');
          this.oneTeam.push(new SingleTeam(split[split.length -1],
            this.teams[i].name, this.teams[i].crestUrl));
        }
      });
  }

  onSelectedTeam(team){
    this.router.navigate(['/team', team.id]);
  }

  ngOnInit() {
      this.getTeam();
  }

}
