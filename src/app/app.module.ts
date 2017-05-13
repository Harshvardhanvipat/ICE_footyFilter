import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';

// import { jtt_footballdata } from '../../node_modules/angular-footballdata-api-factory';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DataComponent } from './data/data.component';
import { LeagueTableComponent } from './data/league-table/league-table.component';
import { TeamComponent } from './team/team.component';
import { LastGameComponent } from './team/lastgame/lastgame.component';
import { LastFiveGamesComponent } from './team/last-five-games/last-five-games.component';
import { AllGamesComponent } from './team/all-games/all-games.component';
import { HeadToHeadComponent } from './team/head-to-head/head-to-head.component';
import { OneTeamComponent } from './team/one-team/one-team.component';
import { UpcomingGamesComponent } from './team/upcoming-games/upcoming-games.component';

const appRoutes: Routes = [
  { path: '', component: LeagueTableComponent},
  { path: 'team/:name', component: TeamComponent}
]
//
// const appRoutes: Routes = [
//   { path: '', component: HeaderComponent,
//     children: [
//       { path: 'team/:name', component: TeamComponent},
//       { path: 'leaguetable', component: LeagueTableComponent}
//     ]}
// ]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataComponent,
    LeagueTableComponent,
    TeamComponent,
    LastGameComponent,
    LastFiveGamesComponent,
    AllGamesComponent,
    HeadToHeadComponent,
    OneTeamComponent,
    UpcomingGamesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SlimLoadingBarModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
