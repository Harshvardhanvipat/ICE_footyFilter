import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})

export class TeamComponent implements OnInit {
  public teamName;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params)=>{
      let name = params['name'];
      this.teamName = name;
    })
  }
}
