import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})

export class TeamComponent implements OnInit {
  public teamID;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // let id = this.route.snapshot.params['id'];
    // this.teamID = id;
    this.route.params.subscribe((params: Params)=>{
      let id = params['id'];
      this.teamID = id;
    })
  }

}
