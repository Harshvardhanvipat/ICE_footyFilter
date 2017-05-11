import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-one-team',
  templateUrl: './one-team.component.html',
  styleUrls: ['./one-team.component.css']
})
export class OneTeamComponent implements OnInit {
  aTeam: {id: string, name: string};
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.aTeam = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
  }

}
