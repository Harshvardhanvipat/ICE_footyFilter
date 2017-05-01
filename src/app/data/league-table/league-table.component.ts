import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.css']
})
export class LeagueTableComponent implements OnInit {

  constructor(private _elRef: ElementRef) { }

  ngOnInit():any {
    $.ajax({
      headers: { 'X-Auth-Token': '14ce13ee90a64ddb9b2529c3a86c8415' },
      url: 'http://api.football-data.org/v1/competitions/426/leagueTable',
      dataType: 'json',
      type: 'GET',
      success: function (res) {
        $.each(res, function (i, val) {
          if(i == 'standing'){
            for(var j = 0; j < val.length; j++){

              var drawCount = 0;
              if(val[j].goalDifference === 0)
              {
                drawCount++;
              }
              //team name, played, won, loss,draw, goals FOR, goals AGAINST, gDifference, pts
              var trHTML = '';
              trHTML += '<tr><td>'
              + val[j].teamName + '</td><td>'
              + val[j].playedGames + '</td><td>' + val[j].wins + '</td><td>' + val[j].losses +
              '</td><td>' + drawCount + '</td><td>' + val[j].goals + '</td><td>' + val[j].goalsAgainst +
              '</td><td>' + val[j].goalDifference + '</td><td>' + val[j].points +
              '</td></tr>';

              $('#league').append(trHTML);
              //$('#league').css('text-align','center');
            }
          }
        });
      }
    });
  }
}
